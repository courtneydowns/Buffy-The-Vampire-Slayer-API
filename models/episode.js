module.exports = (sequelize, DataTypes) => {
  const Episode = sequelize.define("episode", {
    season: {
      type: DataTypes.INTEGER,
    },
    episode_number: {
      type: DataTypes.INTEGER,
    },
    title: {
      type: DataTypes.STRING,
    },
    air_date: {
      type: DataTypes.STRING,
    },
    director: {
      type: DataTypes.STRING,
    },
    writers: {
      type: DataTypes.STRING,
    },
    plot: {
      type: DataTypes.STRING,
    },
    quote: {
      type: DataTypes.STRING,
    },
    trivia: {
      type: DataTypes.STRING,
    },
    imdb_url: {
      type: DataTypes.STRING,
    },
  });
  return Episode;
};
