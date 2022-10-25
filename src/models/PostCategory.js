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
      tableName: 'post_categories',
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
        as: 'blog_posts',
        foreignKey: 'categoryId',
        otherKey: 'postId',
        through: PostCategory,
      });
    }
  
    return PostCategory;
  }