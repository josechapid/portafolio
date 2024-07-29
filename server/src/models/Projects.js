const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "projects",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      technologies: {
        type: DataTypes.JSON,
        allowNull: true,
      },
    },
    { timestamps: false }
  );
};
