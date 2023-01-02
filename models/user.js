const User = (connexion, DataTypes) => {
  return connexion.define(
    'user',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING(180),
        allowNull: false,
        unique: 'UNIQ_8D93D649E7927C74',
      },
      password: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      status: {
        type: DataTypes.SMALLINT,
        allowNull: false,
      },
      civility: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      lastname: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      firstname: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      lastConnect: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      lastIp: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      isVerified: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      connexion,
      tableName: 'user',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id' }],
        },
        {
          name: 'UNIQ_8D93D649E7927C74',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'email' }],
        },
      ],
    }
  );
};

module.exports = User;
