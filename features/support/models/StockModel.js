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
      field: 'created_at',
    },
    updatedAt: {
      type: DataTypes.TIME,
      allowNull: false,
      field: 'updated_at',
    },
    currentPrice: {
      type: DataTypes.DECIMAL,
      field: 'current_price',
    },
    openPrice: {
      type: DataTypes.DECIMAL,
      field: 'open_price',
    },
    highPrice: {
      type: DataTypes.DECIMAL,
      field: 'high_price',
    },
    lowPrice: {
      type: DataTypes.DECIMAL,
      field: 'low_price',
    },
  };

  const options = {
    tableName: 'stocks',
  };
  return sequelize.define('Stock', modelAttributes, options);
};

export default initStockModel;
