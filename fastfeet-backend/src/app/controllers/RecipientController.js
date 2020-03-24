import * as Yup from 'yup';
import Recipient from '../models/recipient';

class RecipientController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      rua: Yup.string().required(),
      número: Yup.string().required(),
      complemento: Yup.string(),
      estado: Yup.string().required(),
      cidade: Yup.string().required(),
      cep: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res
        .status(400)
        .json({ error: 'Algum campo não foi devidamente preenchido' });
    }
    const recipient = await Recipient.create(req.body);
    return res.json(recipient);
  }

  async index(req, res) {
    const recipients = await Recipient.findAll();
    if (!recipients) {
      return res.status(204).send();
    }
    return res.json(recipients);
  }
}

export default new RecipientController();
