import { Sequelize } from 'sequelize';
let sequelize;
if (process.env.DB_URL) {
    sequelize = new Sequelize(process.env.DB_URL);
}
else {
    sequelize = new Sequelize(process.env.DB_NAME || 'default_db_name', process.env.DB_USER || 'default_db_user', process.env.DB_PASSWORD || 'default_db_password', {
        host: 'localhost',
        dialect: 'postgres',
    });
}
