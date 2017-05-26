var userChoices = [the choices a user selects];
var cocktails = [Array of Cocktail objects]

function Cocktail(name, ingredients, recLink){
  this.name = name;
  this.ingredients = ingredients;
  this.recLink = recLink;
  cocktails.push(this)
}

var pic1 = document.getElementById('pic1'); //naming convention for all of the box pic items
//eg var vodka = document.getElementById('vodka');

var canMake = document.getElementById('can-make'); // this is the recipes page
var options = document.getElementById('options'); //this is the box pick page
