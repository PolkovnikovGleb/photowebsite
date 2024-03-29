/* eslint-disable object-curly-spacing */
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Album extends Model {
    static associate({User, Photo}) {
      this.belongsTo(User, {foreignKey: 'userId'});
      this.hasMany(Photo, {foreignKey: 'albumId'});
    }
  }
  Album.init(
    {
      title: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      description: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      url: {
        allowNull: false,
        type: DataTypes.TEXT,
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
      modelName: 'Album',
    },
  );
  return Album;
};
