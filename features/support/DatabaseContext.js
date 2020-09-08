import * as dotenvConfig from 'dotenv/config'; // eslint-disable-line no-unused-vars

import Sequelize from 'sequelize';

const { DATABASE } = process.env;
const { DB_USERNAME } = process.env;
const { DB_PASSWORD } = process.env;
const { DB_HOSTNAME } = process.env;

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
      // eslint-disable-next-line no-console
      console.info(`Successfully connected and authenticated to ${DATABASE} at ${DB_HOSTNAME} as ${DB_USERNAME}.\n`);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Unable to connect to the database:', error);
    }
  }

  async closeDatabaseConnection() {
    if (this.sequelize) {
      try {
        await this.sequelize.close();
        // eslint-disable-next-line no-console
        console.info(`\n\nSuccessfully disconnected ${DATABASE} at ${DB_HOSTNAME}.`);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Unable to disconnect from the database:', error);
      }
    }
  }
}

export default new DatabaseContext();
