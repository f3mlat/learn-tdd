const COINS = [200, 100, 50, 20, 10, 5, 2, 1];
      function getChange (totalPayable, cashPaid) {
        var change = [];
        var difference = cashPaid - totalPayable;
        COINS.forEach(function(coin) {
          // keep adding the current coin until it's more than difference
          while (difference >= coin) {
            change.push(coin);
            difference -= coin;
          }
        });

        return change;
      };

/* The code block below ONLY Applies to Node.js - This Demonstrates
re-useability of JS code in both Back-end and Front-end! #isomorphic */
/* istanbul ignore next */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = getChange;  // allows CommonJS/Node.js require()
}