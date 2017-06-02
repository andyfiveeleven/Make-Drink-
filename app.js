var userChoices = [];
var cocktails = [];
var displayList = [];
var almost = [];
var favorites = [];

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
var mint = document.getElementById('mint');
var cola = document.getElementById('cola');

var goBtn = document.getElementById('go');
var backBtn = document.getElementById('back');

var options = document.getElementById('options');
var canMake = document.getElementById('can-make');

function Cocktail(name, ingredients, recLink, recId, youTube) {
  this.name = name;
  this.ingredients = ingredients;
  this.recLink = recLink;
  this.recId = recId;
  this.youTube = youTube;
  cocktails.push(this);
}

new Cocktail('Manhattan', ['whiskey','sweetVermouth', 'bitters'], 'http://www.seriouseats.com/recipes/2008/01/cocktails-manhattan-recipe.html', 'manhattan', '<iframe width="560" height="315" src="https://www.youtube.com/embed/VG4Vr2C7Pog" frameborder="0" allowfullscreen></iframe>');

new Cocktail('Old Fashioned' , ['whiskey', 'sugar', 'bitters'], 'http://www.seriouseats.com/recipes/2008/06/traditional-old-fashioned-recipe.html', 'oldFashioned', '<iframe width="560" height="315" src="https://www.youtube.com/embed/joqDgv35w1Y" frameborder="0" allowfullscreen></iframe>');   //extra? orange

new Cocktail('Martinez', ['gin', 'sweetVermouth', 'bitters'], 'http://www.seriouseats.com/recipes/2011/09/martinez-cocktail-gin-cocktail-recipe.html', 'martinez', '<iframe width="560" height="315" src="https://www.youtube.com/embed/OuTm84F4b1A" frameborder="0" allowfullscreen></iframe>');

new Cocktail('Martini', ['dryVermouth', 'gin', 'bitters'], 'http://www.seriouseats.com/recipes/2010/06/the-martini-recipe.html', 'martini', '<iframe width="560" height="315" src="https://www.youtube.com/embed/_GsCI_x6vrE" frameborder="0" allowfullscreen></iframe>');

new Cocktail('Brooklyn', ['whiskey', 'dryVermouth', 'bitters'], 'http://www.seriouseats.com/recipes/2011/02/the-brooklyn-cocktail-rye-maraschino-vermouth.html', 'brooklyn', '<iframe width="560" height="315" src="https://www.youtube.com/embed/-kmoriY6rAM" frameborder="0" allowfullscreen></iframe>');

new Cocktail('Daiquiri', ['lightRum', 'limes', 'sugar'], 'http://www.seriouseats.com/recipes/2008/05/daiquiri-recipe.html', 'daiquiri', '<iframe width="560" height="315" src="https://www.youtube.com/embed/ofwTyfKo8Mg" frameborder="0" allowfullscreen></iframe>');

new Cocktail('Margarita', ['tequila', 'limes', 'orangeLiqueur'], 'http://www.seriouseats.com/recipes/2015/04/classic-margarita-recipe-tequila-cocktail.html', 'margarita', '<iframe width="560" height="315" src="https://www.youtube.com/embed/q-gYcvipozY" frameborder="0" allowfullscreen></iframe>');

new Cocktail('Side Car', ['brandy', 'lemons', 'orangeLiqueur'], 'http://www.seriouseats.com/recipes/2010/11/sidecar-drink-cocktail-recipe.html', 'sideCar', '<iframe width="560" height="315" src="https://www.youtube.com/embed/uvKKILoO-Nk" frameborder="0" allowfullscreen></iframe>');

new Cocktail('French 75', ['gin', 'champagne', 'lemons', 'sugar'], 'http://www.seriouseats.com/recipes/2011/03/french-75-cocktial-gin-champagne-lemon.html', 'french75', '<iframe width="560" height="315" src="https://www.youtube.com/embed/HfYbUHnfGcg" frameborder="0" allowfullscreen></iframe>');

new Cocktail('Negroni', ['gin', 'sweetVermouth', 'campari'], 'http://www.seriouseats.com/recipes/2010/04/negroni-cocktail-recipe-gin-campari-vermouth.html', 'negroni', '<iframe width="560" height="315" src="https://www.youtube.com/embed/vtMkHLmeEkc" frameborder="0" allowfullscreen></iframe>');

new Cocktail('Boulevardier', ['whiskey', 'campari', 'sweetVermouth'], 'http://www.seriouseats.com/recipes/2008/09/boulevardier-recipe.html', 'boulevarier', '<iframe width="560" height="315" src="https://www.youtube.com/embed/J-AvY-Gs64c" frameborder="0" allowfullscreen></iframe>');

new Cocktail('Vieux Carre', ['bitters', 'whiskey', 'brandy', 'sweetVermouth'], 'http://www.seriouseats.com/recipes/2008/07/vieux-carre-recipe.html', 'vieuxCarre', '<iframe width="560" height="315" src="https://www.youtube.com/embed/dA-6myTf4GQ" frameborder="0" allowfullscreen></iframe>');

new Cocktail('Whiskey Sour', ['whiskey', 'lemons', 'sugar'], 'http://www.seriouseats.com/recipes/2007/10/cocktails-whiskey-sour.html', 'whiskeySour', '<iframe width="560" height="315" src="https://www.youtube.com/embed/3l04mRURJ6Q" frameborder="0" allowfullscreen></iframe>');

new Cocktail('Planters Punch', ['darkRum', 'sugar', 'limes', 'bitters'], 'http://www.seriouseats.com/recipes/2010/07/planters-punch-cocktail-recipe.html', 'plantarsPunch', '<iframe width="560" height="315" src="https://www.youtube.com/embed/hCtgBO7KESI" frameborder="0" allowfullscreen></iframe>');

new Cocktail('Cosmopolitan', ['vodka', 'orangeLiqueur', 'cranberry', 'limes'], 'http://www.seriouseats.com/recipes/2011/10/how-to-make-a-cosmopolitan-cocktail-best-recipe.html', 'cosmopolitan', '<iframe width="560" height="315" src="https://www.youtube.com/embed/iGYLa8EyCLU" frameborder="0" allowfullscreen></iframe>');

new Cocktail('Vodka Cranberry', ['vodka', 'cranberry', 'clubSoda', 'limes'], 'https://www.tablespoon.com/recipes/fresh-cranberry-vodka-cocktail/f8de4d8e-d91a-4dbb-b701-9f927428f0a7', 'vodkaCranberry', '<iframe width="560" height="315" src="https://www.youtube.com/embed/MKrbFTHF-Go" frameborder="0" allowfullscreen></iframe>');

new Cocktail('Tom Collins', ['gin', 'lemons', 'sugar', 'clubSoda'], 'http://www.seriouseats.com/recipes/2008/08/tom-collins-recipe.html', 'tomCollins', '<iframe width="560" height="315" src="https://www.youtube.com/embed/NGLnQxIj-P4" frameborder="0" allowfullscreen></iframe>');

new Cocktail('Mojito', ['sugar', 'lightRum', 'limes', 'clubSoda', 'mint'], 'http://www.seriouseats.com/recipes/2011/10/mojito-rum-mint-cocktail-recipe.html', 'mojito', '<iframe width="560" height="315" src="https://www.youtube.com/embed/xrJsVHr7YV4?list=PLLALQuK1NDrg2D1BpRhd2N1Etf_ytM-Qq" frameborder="0" allowfullscreen></iframe>');

if (localStorage.favoritesList) {
  favorites = JSON.parse(localStorage.favoritesList);
}


function imgClick(e) {
  var clickedImg = e.target.getAttribute('id');
  var index = userChoices.indexOf(clickedImg);
  if (index !== -1) {
    userChoices.splice(index, 1);
    e.target.removeAttribute('class');
  } else {
    userChoices.push(clickedImg);
    e.target.setAttribute('class', 'selected');
  }
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
  } else if (counter === drink.ingredients.length - 1) {
    almost.push(drink);
    return false;
  } else {
    return false;
  }
}

function results() {
  var newList = document.createElement('ul');
  var data = [];
  if (displayList.length === 0) {
    data.push('<li class="sorry">Sorry, we have no recipes that exactly match your choices.</li>');
  } else {
    for (var i = 0; i < displayList.length; i++) {

      var localIngred = [];
      for(var j = 0; j <displayList[i].ingredients.length; j++){
        localIngred.push('<li>'+ displayList[i].ingredients[j] + '</li>');
      }
      var stringIngred = localIngred.join('');
      data.push('<li>'+
      '<input id="'+ displayList[i].recId + '" type="checkbox">' +
      '<label for="' + displayList[i].recId + '">' + displayList[i].name + '</label>' +
      '<div class="expand">'+
      '<button id="' + displayList[i].recId + 'Star">&#9829;</button>' +
      '<ul>'+
      stringIngred +
      '</ul>'+
      displayList[i].youTube +
      '</div>'+
      '</li>');

    }
  }

  data.push(almostResults());

  newList.innerHTML = data.join('');
  newList.setAttribute('id', 'rec-list');
  canMake.appendChild(newList);

  var recIdArr = [];
  favorites.forEach(function(drink) {
    recIdArr.push(drink.recId);
  });

  displayList.forEach(function(drink) {
    if (recIdArr.includes(drink.recId)) {
      document.getElementById(drink.recId + 'Star').setAttribute('class', 'clicked');
    }
    document.getElementById(drink.recId + 'Star').addEventListener('click', favoritesClick);
  });

  almost.forEach(function(drink) {
    if (recIdArr.includes(drink.recId)) {
      document.getElementById(drink.recId + 'Star').setAttribute('class', 'clicked');
    }
    document.getElementById(drink.recId + 'Star').addEventListener('click', favoritesClick);
  });
}

function almostResults() {
  var data = [];
  if (almost.length > 0) {
    for (var i = 0; i < almost.length; i++) {

      var localIngred = [];
      for(var j = 0; j <almost[i].ingredients.length; j++){
        localIngred.push('<li>'+ almost[i].ingredients[j] + '</li>');
      }
      var stringIngred = localIngred.join('');
      data.push('<li>'+
      '<input id="'+ almost[i].recId + '" type="checkbox">' +
      '<label for="' + almost[i].recId + '">Almost There: ' + almost[i].name + '</label>'+
      '<div class="expand">'+
      '<button id="' + almost[i].recId + 'Star">&#9829;</button>' +
      '<ul>'+
      stringIngred +
      '</ul>'+
      almost[i].youTube +
      '</div>'+
      '</li>');
    }
  }

  return data.join('');
}

function backClick() {
  var list = document.getElementById('rec-list');
  canMake.removeChild(list);
  displayList = [];
  almost = [];

  canMake.style.display = 'none';
  options.style.display = '';
}

function favoritesClick(e) {
  var drinkName = e.target.getAttribute('id');
  drinkName = drinkName.replace('Star', '');
  var drinkFav;
  var addDrink;
  cocktails.forEach(function(drink) {
    if (drink.recId === drinkName) {
      drinkFav = drink.recId;
      addDrink = drink;
    }
  });

  var count = 0;
  for (var i = 0; i < favorites.length; i++) {
    if (favorites[i].recId === drinkFav) {
      favorites.splice(i, 1);
      e.target.removeAttribute('class');
      count++;
    }
  }
  if (count === 0) {
    favorites.push(addDrink);
    e.target.setAttribute('class', 'clicked');
  }
  
  localStorage.favoritesList = JSON.stringify(favorites);
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
mint.addEventListener('click', imgClick);
cola.addEventListener('click', imgClick);
goBtn.addEventListener('click', goClick);
backBtn.addEventListener('click', backClick);
