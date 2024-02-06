import { DataTypes } from "sequelize";

export default (sequelize) => {
    const Student = sequelize.define( "Student", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        classe: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return Student
}