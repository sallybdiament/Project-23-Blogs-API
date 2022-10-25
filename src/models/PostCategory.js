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
        models.BlogPosts.belongsToMany(models.Category, {
          as: 'categories',
          foreignKey: 'post_id',
          otherKey: 'category_id',
          through: PostCategory,
        });
  
      models.Category.belongsToMany(models.BlogPosts, {
        as: 'blog_posts',
        foreignKey: 'category_id',
        otherKey: 'post_id',
        through: PostCategory,
      });
    }
  
    return PostCategory;
  }