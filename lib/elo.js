// Generated by CoffeeScript 1.6.3
/* 
Elo.coffee

Elo ratings system in coffeescript
*/


(function() {
  var Elo;

  Elo = (function() {
    function Elo(options) {
      if (options == null) {
        options = {};
      }
      this.default_rating = options.default_rating ? options.default_rating : 1500;
      this.k_factor = options.k_factor ? options.k_factor : 32;
    }

    Elo.prototype.expectedScores = function(rating1, rating2) {
      var scores;
      return scores = {
        'player1': 1 / (1 + Math.pow(10, (rating1 - rating2) / 400)),
        'player2': 1 / (1 + Math.pow(10, (rating2 - rating1) / 400))
      };
    };

    Elo.prototype.updateRating = function(rating, score, expectedScore) {
      return Math.floor(rating + this.k_factor * (score - expectedScore));
    };

    Elo.prototype.newRating = function() {
      return this.default_rating;
    };

    Elo.prototype.calculateK = function(rating1, rating2) {
      return this.k_factor;
    };

    Elo.prototype.calculateRatings = function(rating1, rating2, score1, score2) {
      var results, scores;
      scores = this.expectedScores(rating1, rating2);
      return results = {
        'player1': this.updateRating(rating1, score1, scores['player1']),
        'player2': this.updateRating(rating2, score2, scores['player2'])
      };
    };

    return Elo;

  })();

  module.exports = Elo;

}).call(this);