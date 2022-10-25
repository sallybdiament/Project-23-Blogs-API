module.exports = (sequelize, DataTypes) => {
    const BlogPosts = sequelize.define('BlogPosts', {
      id: { type: DataTypes.INTEGER,
      primaryKey: true},
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      published: DataTypes.DATE,
      updated: DataTypes.DATE,
    }, {
      underscored: true,
      tableName: 'blog_posts',
      createdAt: 'published',
      updatedAt: 'updated',
    });
  
    BlogPosts.associate = (models) => {
      BlogPosts.belongsTo(models.User, {
        foreignKey: 'id',
        as: 'users'
      })
    };

    return BlogPosts;
  };