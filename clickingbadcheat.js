(function() {
var sv = $.parseJSON(localStorage.sv);
pd.cash.amount = sv.cash;
pd.widgets.amount = sv.widgets;
pd.cash.amount = parseInt(prompt("How much money would you like?"));
pd.widgets.amount = parseInt(prompt("How many Batches would you like?"));

alert("You should now have " + pd.cash.amount + " money and " + pd.widgets.amount + " batches" +
"... Don't forget to save! (Options & Stats -> Save)");



})();
