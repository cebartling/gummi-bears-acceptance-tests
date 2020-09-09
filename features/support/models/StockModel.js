import Model, { DataTypes } from 'sequelize';

class StockModel extends Model {}

export const initStockModel = (sequelize) => {
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
  const modelOptions = { sequelize, modelName: 'Stock' };
  StockModel.init(modelAttributes, modelOptions);
};

export default StockModel;
