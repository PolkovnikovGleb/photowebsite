/* eslint-disable comma-dangle */
/* eslint-disable object-curly-spacing */
// eslint-disable-next-line object-curly-spacing

const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Photo extends Model {
    static associate({Album, User}) {
      this.belongsTo(User, {foreignKey: 'userId'});
      this.belongsTo(Album, {foreignKey: 'albumId'});
    }
  }
  Photo.init(
    {
      title: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      img: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      description: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      albumId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Albums',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
    },
    {
      sequelize,
      modelName: 'Photo',
    }
  );
  return Photo;
};
