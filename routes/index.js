var express = require("express");
var router = express.Router();

const options = {
  method: "GET",
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${process.env.AUTHENTIFICATION_KEY}`,
  },
};

const urlRecommendations = "https://api.themoviedb.org/3/discover/movie";

router.get("/movies", (req, res) => {
  fetch(urlRecommendations, options)
    .then((response) => response.json())
    .then((data) => res.json({ movies: data.results }))
    .catch((err) => console.error(err));
});

module.exports = router;
