import * as dotenvConfig from 'dotenv/config'; // eslint-disable-line no-unused-vars

import Sequelize from 'sequelize';
import initStockModel from './models/StockModel';
import initUserModel from './models/UserModel';
import initOrderModel from './models/OrderModel';

const {
  DATABASE,
  DB_USERNAME,
  DB_PASSWORD,
  DB_HOSTNAME,
} = process.env;

class DatabaseContext {
  async openDatabaseConnection() {
    this.sequelize = new Sequelize(`postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOSTNAME}:5432/${DATABASE}`, {
      dialect: 'postgres',
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      },
      logging: false,
    });
    try {
      await this.sequelize.authenticate();
      initStockModel(this.sequelize);
      initUserModel(this.sequelize);
      initOrderModel(this.sequelize);
      console.info(`Successfully connected and authenticated to ${DATABASE} at ${DB_HOSTNAME} as ${DB_USERNAME}.\n`);
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }

  async closeDatabaseConnection() {
    if (this.sequelize) {
      try {
        await this.sequelize.close();
        console.info(`\n\nSuccessfully disconnected ${DATABASE} at ${DB_HOSTNAME}.`);
      } catch (error) {
        console.error('Unable to disconnect from the database:', error);
      }
    }
  }

  get stockModel() {
    return this.sequelize.models.Stock;
  }

  get userModel() {
    return this.sequelize.models.User;
  }

  get orderModel() {
    return this.sequelize.models.Order;
  }
}

export default new DatabaseContext();
