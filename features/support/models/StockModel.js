import { DataTypes } from 'sequelize';

const initStockModel = function (sequelize) {
  const modelAttributes = {
    id: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    symbol: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    currentPrice: {
      type: DataTypes.DECIMAL,
    },
    openPrice: {
      type: DataTypes.DECIMAL,
    },
    highPrice: {
      type: DataTypes.DECIMAL,
    },
    lowPrice: {
      type: DataTypes.DECIMAL,
    },
  };

  const options = {
    tableName: 'stocks',
  };
  return sequelize.define('Stock', modelAttributes, options);
};

export default initStockModel;
