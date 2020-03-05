module.exports = (sequelize, DataTypes) => {
    let User = sequelize.define("User", {
        userName: {
            type: DataTypes.STRING,
            allowNull: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true
        },
        favoriteMovies: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });

    return User
}