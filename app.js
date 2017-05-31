var userChoices = [];
var cocktails = [];
var displayList = [];
var almost = [];

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
  } else if (counter === drink.ingredients.length - 1) {
    almost.push(drink);
    console.log('almost:', almost);
    return false;
  } else {
    return false;
  }
}

function results() {
  var newList = document.createElement('ul');
  var data = [];
  if (displayList.length === 0) {
    data.push('<li class="Sorry">Sorry, we have no recipes that exactly match your choices.</li>');
  } else {
    for (var i = 0; i < displayList.length; i++) {

      var localIngred = [];
      for(var j = 0; j <displayList[i].ingredients.length; j++){
        localIngred.push('<li>'+ displayList[i].ingredients[j] + '</li>');
      }
      var stringIngred = localIngred.join('');
      console.log(localIngred);
      data.push('<li>'+
      '<label for="' + displayList[i].recId + '">' + displayList[i].name + '</label><input id="'+ displayList[i].recId + '" type="checkbox">'+
      '<div class="expand">'+
      '<ul>'+
      stringIngred +
      '</ul>'+
      displayList[i].youTube +
      '</div>'+
      '</li>');
      console.log(data);

    }
  }

  data.push(almostResults());

  newList.innerHTML = data.join('');
  newList.setAttribute('id', 'rec-list');
  canMake.appendChild(newList);
  almostResults();
}

function almostResults() {
  // var newList = document.createElement('ul');
  var data = [];
  if (almost.length > 0) {
    for (var i = 0; i < almost.length; i++) {

      var localIngred = [];
      for(var j = 0; j <almost[i].ingredients.length; j++){
        localIngred.push('<li>'+ almost[i].ingredients[j] + '</li>');
      }
      var stringIngred = localIngred.join('');
      console.log(localIngred);
      data.push('<li>'+
      '<label for="' + almost[i].recId + '">Almost: ' + almost[i].name + '</label><input id="'+ almost[i].recId + '" type="checkbox">'+
      '<div class="expand">'+
      '<ul>'+
      stringIngred +
      '</ul>'+
      almost[i].youTube +
      '</div>'+
      '</li>');
    }
  }

  return data.join('');
  // newList.innerHTML = data.join('');
  // newList.setAttribute('id', 'almost-list');
  // canMake.appendChild(newList);
}

function backClick() {
  var list = document.getElementById('rec-list');
  // var almostList = document.getElementById('almost-list');
  canMake.removeChild(list);
  //canMake.removeChild(almostList);
  displayList = [];
  almost = [];

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
