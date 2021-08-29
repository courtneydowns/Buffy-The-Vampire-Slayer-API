"use strict";

const episodeArr = require("../episodeArr");
// console.log(episodeArr);

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("episodes", episodeArr, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("episodes", null, {});
  },
};
