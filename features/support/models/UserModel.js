import { DataTypes } from 'sequelize';

const initUserModel = (sequelize) => {
  const modelAttributes = {
    id: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'first_name',
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'last_name',
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'username',
    },
    authToken: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'auth_token',
    },
    createdAt: {
      type: DataTypes.TIME,
      allowNull: false,
      field: 'created_at',
    },
    updatedAt: {
      type: DataTypes.TIME,
      allowNull: false,
      field: 'updated_at',
    },
  };

  const options = {
    tableName: 'users',
  };
  return sequelize.define('User', modelAttributes, options);
};

export default initUserModel;
