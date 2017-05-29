var userChoices = [];
var cocktails = [];
var displayList = [];
var whiskey = document.getElementById('whiskey');
var vodka = document.getElementById('vodka');
var gin = document.getElementById('gin');
var lightRum = document.getElementById('lightRum');
var darkRum = document.getElementById('darkRum');
var tequila = document.getElementById('tequila');
var champagne = document.getElementById('champagne');
var darkBeer = document.getElementById('darkBeer');
var lightBeer = document.getElementById('lightBeer');
var sweetVermouth = document.getElementById('sweetVermouth');
var bitters = document.getElementById('bitters');
var dryVermouth = document.getElementById('dryVermouth');
var brandy = document.getElementById('brandy');
var orangeLiquer = document.getElementById('orangeLiqueur');
var campari = document.getElementById('campari');
var sugar = document.getElementById('sugar');
var limes = document.getElementById('limes');
var lemons = document.getElementById('lemons');
var oranges = document.getElementById('oranges');
var grenadine = document.getElementById('grenadine');
var cranberry = document.getElementById('cranberry');
var clubSoda = document.getElementById('clubSoda');

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

new Cocktail('Manhattan', ['whiskey','sweetVermouth', 'bitters'], 'http://www.seriouseats.com/recipes/2008/01/cocktails-manhattan-recipe.html');

new Cocktail('Old Fashioned' , ['whiskey', 'sugar', 'bitters'], 'http://www.seriouseats.com/recipes/2008/06/traditional-old-fashioned-recipe.html');   //extra? orange

new Cocktail('Martinez', ['gin', 'sweetVermouth', 'bitters'], 'http://www.seriouseats.com/recipes/2011/09/martinez-cocktail-gin-cocktail-recipe.html');

new Cocktail('martini', ['dryVermouth', 'gin', 'bitters'], 'http://www.seriouseats.com/recipes/2010/06/the-martini-recipe.html');

new Cocktail('brooklyn', ['whiskey', 'dryVermouth', 'bitters'], 'http://www.seriouseats.com/recipes/2011/02/the-brooklyn-cocktail-rye-maraschino-vermouth.html');

new Cocktail('daiquiri', ['lightRum', 'limes', 'sugar'], 'http://www.seriouseats.com/recipes/2008/05/daiquiri-recipe.html');

new Cocktail('margarita', ['tequila', 'limes', 'orangeLiqueur'], 'http://www.seriouseats.com/recipes/2015/04/classic-margarita-recipe-tequila-cocktail.html');

new Cocktail('side car', ['brandy', 'lemons', 'orangeLiqueur'], 'http://www.seriouseats.com/recipes/2010/11/sidecar-drink-cocktail-recipe.html');

new Cocktail('french 75', ['gin', 'champagne', 'lemons', 'sugar'], 'http://www.seriouseats.com/recipes/2011/03/french-75-cocktial-gin-champagne-lemon.html');

new Cocktail('negroni', ['gin', 'sweetVermouth', 'campari'], 'http://www.seriouseats.com/recipes/2010/04/negroni-cocktail-recipe-gin-campari-vermouth.html');

new Cocktail('boulevardier', ['whiskey', 'campari', 'sweetVermouth'], 'http://www.seriouseats.com/recipes/2008/09/boulevardier-recipe.html');

new Cocktail('vieux carre', ['bitters', 'whiskey', 'brandy', 'sweetVermouth'], 'http://www.seriouseats.com/recipes/2008/07/vieux-carre-recipe.html');

new Cocktail('whiskey sour', ['whiskey', 'lemons', 'sugar'], 'http://www.seriouseats.com/recipes/2007/10/cocktails-whiskey-sour.html');

new Cocktail('planters punch', ['darkRum', 'sugar', 'limes', 'bitters'], 'http://www.seriouseats.com/recipes/2010/07/planters-punch-cocktail-recipe.html');

new Cocktail('cosmopolitan', ['vodka', 'orangeLiqueur', 'cranberry', 'limes'], 'http://www.seriouseats.com/recipes/2011/10/how-to-make-a-cosmopolitan-cocktail-best-recipe.html');

new Cocktail('vodka cranberry', ['vodka', 'cranberry', 'clubSoda', 'limes'], 'https://www.tablespoon.com/recipes/fresh-cranberry-vodka-cocktail/f8de4d8e-d91a-4dbb-b701-9f927428f0a7');

new Cocktail('tom collins', ['gin', 'lemons', 'sugar', 'clubSoda'], 'http://www.seriouseats.com/recipes/2008/08/tom-collins-recipe.html');

function imgClick(e) {
  var clickedImg = e.target.getAttribute('id');
  var index = userChoices.indexOf(clickedImg);
  console.log(clickedImg);
  if (index !== -1) {
    userChoices.splice(index, 1);
    e.target.removeAttribute('class');
  } else {
    userChoices.push(clickedImg);
    e.target.setAttribute('class', 'selected');
  }
  console.log(userChoices);
}

function goClick() {
  checker();
  options.style.display = 'none';
  canMake.style.display = '';
  results();
  // console.log('userChoices:', userChoices);
}

function checker() {
  cocktails.forEach(function(drink) {
    if (containsAll(drink)) {
      displayList.push(drink);
      console.log('displayList:',displayList);
      console.log('drink:', drink);
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
