'use strict';
const casual = require('casual'),
    { dbConfig } = require('../database/db_con'),
    authConf = require('../config/auth'),
    bcrypt = require('bcrypt')

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface, Sequelize) {
    await dbConfig.User.create(
      {
        name: casual._first_name(),
        email: casual._email(),
        password: bcrypt.hashSync('kaiserkey', parseInt(authConf.round)),
        posts: 
        [
          {
            title: casual._title(),
            body: casual._text()
          },
          {
            title: casual._title(),
            body: casual._text()
          },
          {
            title: casual._title(),
            body: casual._text(),
            
          }
        ]
      },
      {
        include: 'posts'
      }
    ),
    await dbConfig.User.create(
      {
        name: casual._first_name(),
        email: casual._email(),
        password: bcrypt.hashSync('kaiserkey', parseInt(authConf.round)),
        posts: 
        [
          {
            title: casual._title(),
            body: casual._text()
          },
          {
            title: casual._title(),
            body: casual._text()
          },
          {
            title: casual._title(),
            body: casual._text()
          }
        ]
      },
      {
        include: 'posts'
      }
    ),
    await dbConfig.User.create(
      {
        name: casual._first_name(),
        email: casual._email(),
        password: bcrypt.hashSync('kaiserkey', parseInt(authConf.round)),
        posts: 
        [
          {
            title: casual._title(),
            body: casual._text()
          },
          {
            title: casual._title(),
            body: casual._text()
          },
          {
            title: casual._title(),
            body: casual._text()
          }
        ]
      },
      {
        include: 'posts'
      }
    )
  },

  async down (queryInterface, Sequelize) {
      
    await queryInterface.bulkDelete('post', null, {});
    await queryInterface.bulkDelete('user', null, {});

  }

};
