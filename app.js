var userChoices = [];
var cocktails = [];
var displayList = [];
var whiskey = document.getElementById('whiskey');
var vodka = document.getElementById('vodka');
var gin = document.getElementById('gin');
var lightRum = document.getElementById('light-rum');
var darkRum = document.getElementById('dark-rum');
var tequila = document.getElementById('tequila');
var champagne = document.getElementById('champagne');
var darkBeer = document.getElementById('dark-beer');
var lightBeer = document.getElementById('light-beer');
var sweetVermouth = document.getElementById('sweet-vermouth');
var bitters = document.getElementById('bitters');
var dryVermouth = document.getElementById('dry-vermouth');
var brandy = document.getElementById('brandy');
var orangeLiquer = document.getElementById('orange-liqueur');
var campari = document.getElementById('campari');
var sugar = document.getElementById('sugar');
var limes = document.getElementById('limes');
var lemons = document.getElementById('lemons');
var oranges = document.getElementById('oranges');
var grenadine = document.getElementById('grenadine');
var cranberry = document.getElementById('cranberry');
var clubSoda = document.getElementById('club-soda');

var goBtn = document.getElementById('go');
var backBtn = document.getElementById('back');

var options = document.getElementById('options');
var canMake = document.getElementById('can-make');

function Cocktail(name, ingredients, recLink) {
  this.name = name;
  this.ingredients = ingredients;
  this.recLink = recLink;
  cocktails.push(this);
}

new Cocktail('Manhattan', ['whiskey','sweet-vermouth', 'bitters'], 'http://www.seriouseats.com/recipes/2008/01/cocktails-manhattan-recipe.html');

new Cocktail('Old Fashioned' , ['whiskey', 'sugar', 'bitters'], 'http://www.seriouseats.com/recipes/2008/06/traditional-old-fashioned-recipe.html');   //extra? orange

new Cocktail('Martinez', ['gin', 'sweet-vermouth', 'bitters'], 'http://www.seriouseats.com/recipes/2011/09/martinez-cocktail-gin-cocktail-recipe.html');

new Cocktail('martini', ['dry-vermouth', 'gin', 'orange-bitters'], 'http://www.seriouseats.com/recipes/2010/06/the-martini-recipe.html');

new Cocktail('brooklyn', ['whiskey', 'dry-vermouth', 'bitters'], 'http://www.seriouseats.com/recipes/2011/02/the-brooklyn-cocktail-rye-maraschino-vermouth.html');

new Cocktail('daiquiri', ['light-rum', 'lime', 'sugar'], 'http://www.seriouseats.com/recipes/2008/05/daiquiri-recipe.html');

new Cocktail('margarita', ['tequila', 'lime', 'orange-liqueur'], 'http://www.seriouseats.com/recipes/2015/04/classic-margarita-recipe-tequila-cocktail.html');

new Cocktail('side car', ['brandy', 'lemon', 'orange-liqueur'], 'http://www.seriouseats.com/recipes/2010/11/sidecar-drink-cocktail-recipe.html');

new Cocktail('french 75', ['gin', 'champagne', 'lemon', 'sugar'], 'http://www.seriouseats.com/recipes/2011/03/french-75-cocktial-gin-champagne-lemon.html');

new Cocktail('negroni', ['gin', 'sweet-vermouth', 'campari'], 'http://www.seriouseats.com/recipes/2010/04/negroni-cocktail-recipe-gin-campari-vermouth.html');

new Cocktail('boulevardier', ['whiskey', 'campari', 'sweet-vermouth'], 'http://www.seriouseats.com/recipes/2008/09/boulevardier-recipe.html');

new Cocktail('vieux carre', ['bitters', 'whiskey', 'brandy', 'sweet-vermouth'], 'http://www.seriouseats.com/recipes/2008/07/vieux-carre-recipe.html');

new Cocktail('whiskey sour', ['whiskey', 'lemon', 'sugar'], 'http://www.seriouseats.com/recipes/2007/10/cocktails-whiskey-sour.html');

new Cocktail('planters punch', ['dark rum', 'sugar', 'lime', 'bitters'], 'http://www.seriouseats.com/recipes/2010/07/planters-punch-cocktail-recipe.html');

new Cocktail('cosmopolitan', ['vodka', 'orange liqueur', 'cranberry', 'lime'], 'http://www.seriouseats.com/recipes/2011/10/how-to-make-a-cosmopolitan-cocktail-best-recipe.html');

new Cocktail('vodka cranberry', ['vodka', 'cranberry', 'club soda', 'lime'], 'https://www.tablespoon.com/recipes/fresh-cranberry-vodka-cocktail/f8de4d8e-d91a-4dbb-b701-9f927428f0a7');

new Cocktail('tom collins', ['gin', 'lemon', 'sugar', 'club soda'], 'http://www.seriouseats.com/recipes/2008/08/tom-collins-recipe.html');

function imgClick(e) {
  var clickedImg = e.target.getAttribute('id');
  var index = userChoices.indexOf(clickedImg);
  if (index !== -1) {
    userChoices.splice(index, 1);
  } else {
    userChoices.push(clickedImg);
  }
  console.log(userChoices);
}

function goClick() {
  checker();
  options.style.display = 'none';
  canMake.style.display = '';
  results();
}

function checker() {
  cocktails.forEach(function(drink) {
    if (containsAll(drink)) {
      displayList.push(drink);
    }
  });
}

function containsAll(drink) {
  var counter = 0;
  for (var i = 0; i < drink.ingredients.length; i++) {
    if (userChoices.includes(drink.ingredients[i])) {
      counter++;
    }
  }
  if (counter === drink.ingredients.length) {
    return true;
  } else {
    return false;
  }
}

function results() {
  var newList = document.createElement('ul');
  var data = [];
  for (var i = 0; i < displayList.length; i++) {
    data.push('<li><a href="' + displayList[i].recLink + '">' + displayList[i].name + '</a></li>');
  }
  newList.innerHTML = data.join('');
  newList.setAttribute('id', 'rec-list');
  canMake.appendChild(newList);
}

function backClick() {
  var list = document.getElementById('rec-list');
  canMake.removeChild(list);
  displayList = [];

  canMake.style.display = 'none';
  options.style.display = '';
}

canMake.style.display = 'none';

whiskey.addEventListener('click', imgClick);
vodka.addEventListener('click', imgClick);
gin.addEventListener('click', imgClick);
lightRum.addEventListener('click', imgClick);
darkRum.addEventListener('click', imgClick);
tequila.addEventListener('click', imgClick);
champagne.addEventListener('click', imgClick);
darkBeer.addEventListener('click', imgClick);
lightBeer.addEventListener('click', imgClick);
sweetVermouth.addEventListener('click', imgClick);
bitters.addEventListener('click', imgClick);
dryVermouth.addEventListener('click', imgClick);
brandy.addEventListener('click', imgClick);
orangeLiquer.addEventListener('click', imgClick);
campari.addEventListener('click', imgClick);
sugar.addEventListener('click', imgClick);
limes.addEventListener('click', imgClick);
lemons.addEventListener('click', imgClick);
oranges.addEventListener('click', imgClick);
grenadine.addEventListener('click', imgClick);
cranberry.addEventListener('click', imgClick);
clubSoda.addEventListener('click', imgClick);

goBtn.addEventListener('click', goClick);
backBtn.addEventListener('click', backClick);
