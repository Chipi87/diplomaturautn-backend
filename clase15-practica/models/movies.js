const {sequelize, DataTypes} = require(`sequelize`);
module.exports = function (connection) {
    const Movies = connection.define(`Movies`,{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true,
        },
        title:{
            type:DataTypes.STRING,
            allowNull:false,
            },
        awards:{
            type:DataTypes.INTEGER,
            allowNull:false,
            },
        release_date:{
                type:DataTypes.DATE,
                allowNull:false,
                },
        legth:{
                    type:DataTypes.INTEGER,
                    allowNull:false,
            },
        genre_id:{
                        type:DataTypes.DATE,
                        allowNull:false,
            },

    },
    {
        freezeTableName:`movies`,
        timestand: false,
        createdAT: `created_at`,
        updatedAT: `updated_at`
    }
    )

    return Movies;

}

