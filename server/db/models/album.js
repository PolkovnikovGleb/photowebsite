/* eslint-disable comma-dangle */
/* eslint-disable object-curly-spacing */
// eslint-disable-next-line object-curly-spacing

const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Album extends Model {
    static associate({User, Photo}) {
      this.belongsTo(User, {foreignKey: 'userId'});
      this.hasMany(Photo, {foreignKey: 'photoId'});
      this.
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
    }
  );
  return Album;
};
