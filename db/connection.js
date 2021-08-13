const { Sequelize } = require('sequelize');
require('dotenv').config()

const db = new Sequelize(
    
    'd724nofcki8lcv',
    'fmculgsrusqvew',
    '7e439b57858729ccdc4027c876a81943c36ebbb7eed72a4ef73ce0c826931ae2',
    {
        host : 'ec2-54-147-93-73.compute-1.amazonaws.com',
        dialect : 'postgres',
        dialectOptions: {
            ssl: {
              require: true, // This will help you. But you will see nwe error
              rejectUnauthorized: false // This line will fix new error
            }
          },
    });
module.exports = {db}
