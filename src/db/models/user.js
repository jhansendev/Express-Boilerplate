module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    userId: {
      type: DataTypes.UUID,
      field: 'user_id',
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      autoIncrement: false
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isAlphanumeric: {
          args: true,
          msg: 'Username can only contain letters and numbers'
        },
        notEmpty: true
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: {
          args: true,
          msg: 'Invalid email address'
        },
        notEmpty: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        min: {
          args: 8,
          msg: 'Password must be atleast 8 characters long'
        },
        notEmpty: true
      }
    }
  });

  return User;
};
