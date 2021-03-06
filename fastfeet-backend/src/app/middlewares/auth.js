import jwt from 'jsonwebtoken';

import { promisify } from 'util';
import authConfig from '../../configs/auth';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Token não encontrado!' });
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);
    res.userId = decoded.id;
    return next();
  } catch (err) {
    return res.status(401).json({ erro: 'Token inválido!' });
  }
};
