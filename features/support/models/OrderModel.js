import { DataTypes } from 'sequelize';

const initOrderModel = (sequelize) => {
  const modelAttributes = {
    id: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    userStockId: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      field: 'user_stock_id',
    },
    transactionType: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      field: 'transaction_type',
    },
    priceInCents: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'price_in_cents',
    },
    sharesCount: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      field: 'shares_count',
    },
    totalAmountInCents: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'total_amount_in_cents',
    },
    orderTimestamp: {
      type: DataTypes.TIME,
      allowNull: false,
      field: 'order_timestamp',
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
    tableName: 'orders',
  };
  return sequelize.define('Order', modelAttributes, options);
};

export default initOrderModel;
