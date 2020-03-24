import Sequelize from 'sequelize';

import dbConfig from '../configs/db';

import User from '../app/models/User';
import Recipient from '../app/models/recipient';

const models = [User, Recipient];

class Db {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(dbConfig);

    models.map(model => model.init(this.connection));
  }
}

export default new Db();
