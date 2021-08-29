let express = require("express");
let router = express.Router();
// const Episode = require("../models").sequelize.module("episode");
const Episode = require("../db").import("../models/episode");

/***********************
 ***GET ALL EPISODES***
 **********************/

router.get("/", (req, res) => {
  Episode.findAll()
    .then((episode) => res.status(200).json(episode))
    .catch((err) => res.status(500).json({ error: err }));
});

/*************************
 ***GET BY SEASON***
 ************************/

router.get("/season/:id", (req, res) => {
  let season = req.params.id;
  Episode.findAll({
    where: { season: season },
  })
    .then((episode) => res.status(200).json(episode))
    .catch((err) => res.status(500).json({ error: err }));
});

/**********************************************
 ***GET BY EPISODE INFO BY SINGLE EPISODE ID***
 *********************************************/

router.get("/:episodeid/season/:seasonid", function (req, res) {
  let episode_number = req.params.episodeid;
  let season_number = req.params.seasonid;

  Episode.findAll({
    where: { episode_number: episode_number, season: season_number },
  })
    .then((episode) => res.status(200).json(episode))
    .catch((err) => res.status(500).json({ error: err }));
});

/******************************
 ***GET BY TITLE OF EPISODE***
 *****************************/

router.get("/:title", (req, res) => {
  let title = req.params.title;
  Episode.findAll({
    where: { title: title },
  })
    .then((episode) => res.status(200).json(episode))
    .catch((err) => res.status(500).json({ error: err }));
});

/********************************
 ***GET ALL EPISODES BY DIRECTOR**
 *******************************/

router.get("/:director", (req, res) => {
  let director = req.params.director;

  Episode.findAll({
    where: { director: director },
  })
    .then((episode) => res.status(200).json(episode))
    .catch((err) => res.status(500).json({ error: err }));
});

/********************************
 ***GET All EPISODES BY WRITER***
 *******************************/

router.get("/:writers", (req, res) => {
  let writers = req.params.writers;

  Episode.findAll({
    where: { writers: writers },
  })
    .then((episode) => res.status(200).json(episode))
    .catch((err) => res.status(500).json({ error: err }));
});

module.exports = router;
