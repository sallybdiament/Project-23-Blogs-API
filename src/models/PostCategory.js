module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory', {
      postId: {
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      categoryId: {
        primaryKey: true,
        type: DataTypes.INTEGER,
      }
    }, {
      tableName: 'posts_categories',
      timestamps: false,
      underscored: true,
    });
  
        PostCategory.associate = (models) => {
        models.BlogPost.belongsToMany(models.Category, {
          as: 'categories',
          foreignKey: 'postId',
          otherKey: 'categoryId',
          through: PostCategory,
        });
  
      models.Category.belongsToMany(models.BlogPost, {
        as: 'blogPosts',
        foreignKey: 'categoryId',
        otherKey: 'postId',
        through: PostCategory,
      });
    }
  
    return PostCategory;
  }