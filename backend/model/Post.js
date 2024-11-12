const { DataTypes } = require('sequelize');
const sequelize = require('../database/bd');

const Post = sequelize.define('Post', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: {
                args: [1, 100], 
                msg: "The title must be between 1 and 100 characters"
            }
        }
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            len: {
                args: [1, 5000], 
                msg: "The content must be between 1 and 5000 characters"
            }
        }
    },
    imageUrl: {
        type: DataTypes.STRING, 
        allowNull: true
    }
});

module.exports = Post;
