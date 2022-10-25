module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
      name: DataTypes.STRING,
    }, {
      tableName: 'categories',
      underscored: true,
      timestamps: false,
    });
  
    return Category;
  };