import { DataTypes } from "sequelize";

export default (sequelize) => {
    const User = sequelize.define( "User", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password : {
            type: DataTypes.STRING,
            allowNull: false
        },
        role: {
            type: DataTypes.JSON,
            defaultValue: ['USER']
        }
    })
    return User
}