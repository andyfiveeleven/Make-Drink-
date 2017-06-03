'use strict';
var favorites = [];
var canMake = document.getElementById('can-make');

if (localStorage.favoritesList) {
  favorites = JSON.parse(localStorage.favoritesList);
}

function renderFav() {
  var newList = document.createElement('ul');
  var data = [];
  if (favorites.length === 0) {
    data.push('<li class="sorry">You have no favorites yet!</li>');
  } else {
    for (var i = 0; i < favorites.length; i++) {

      var localIngred = [];
      for(var j = 0; j <favorites[i].ingredients.length; j++){
        localIngred.push('<li>'+ favorites[i].ingredients[j] + '</li>');
      }
      var stringIngred = localIngred.join('');
      data.push('<li id="'+ favorites[i].recId + 'Li">'+
      '<input id="'+ favorites[i].recId + '" type="checkbox">' +
      '<label for="' + favorites[i].recId + '">' + favorites[i].name + '</label>'+
      '<div class="expand">'+
      '<button id="' + favorites[i].recId + 'Rmv">Remove</button>' +
      '<ul>'+
      stringIngred +
      '</ul>'+
      favorites[i].youTube +
      '</div>'+
      '</li>');

    }
  }

  newList.innerHTML = data.join('');
  newList.setAttribute('id', 'rec-list');
  canMake.appendChild(newList);

  var recIdArr = [];
  favorites.forEach(function(drink) {
    recIdArr.push(drink.recId);
  });

  favorites.forEach(function(drink) {
    document.getElementById(drink.recId + 'Rmv').addEventListener('click', remove);
  });
}


function remove(e) {
  var drinkName = e.target.getAttribute('id');
  drinkName = drinkName.replace('Rmv', '');
  var drinkFav;

  favorites.forEach(function(drink) {
    if (drink.recId === drinkName) {
      drinkFav = drink.recId;
    }
  });

  for (var i = 0; i < favorites.length; i++) {
    if (favorites[i].recId === drinkFav) {
      favorites.splice(i, 1);
      hideDrink(drinkFav);
    }
  }
  localStorage.favoritesList = JSON.stringify(favorites);

  if (favorites.length === 0) {
    var list = document.getElementById('rec-list');
    list.innerHTML = '<li class="sorry">You have no favorites yet!</li>';
  }
}

function hideDrink(id) {
  document.getElementById(id + 'Li').style.display = 'none';
}

renderFav();
