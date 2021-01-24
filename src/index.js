const showMenu = document.querySelector('.showMenu');
const menuItem = document.querySelector('.menuId');
const orderMenu = document.querySelector('.orderMenu');
const showMinMenu = document.querySelector('.showMinMenu');
const raiseMenu = document.querySelector('.raiseMenu');
const priseMenu = document.querySelector('.priseMenu');
const fazerMenu = document.querySelector('.fazerMenu');

import FazerMenu from "./fazer-week-example.json";// importataan paikallisessa hakemistossa oleva json tiedosto

const menuList = [
  { name: 'Lingonberry jam', price: 4.00 },
  { name: 'Mushroom and bean casserole', price: 5.50 },
  { name: 'Chili-flavoured wheat', price: 3.00 },
  { name: 'Vegetarian soup', price: 4.80 },
  { name: 'Pureed root vegetable soup with smoked cheese', price: 8.00 }
];

//Näytä menun sisältö kokonaan tai per ID
function showMenuId() {
  var id = Number(menuItem.value) - 1;

  if (id >= menuList.length || id <= -1) {


    //document.getElementById("box").innerHTML = menuList.map(menuList => menuList);
    document.getElementById("box").innerHTML = menuList.map(select);

    function select(value) {
      return value.name;
    }


  } else {
    var meal = menuList[id].name;
    document.getElementById("box").innerHTML = meal;

    const regexpPattern = /^[A-ZÖÄÅ]{1}[a-zöäå0-9.!-/_ ]{4,64}$/;
    const status = regexpPattern.test(meal);

    window.alert(status);

  }
}
showMenu.addEventListener('click', showMenuId);

// Järjestä hinnan mukaan (tässä on vain hinnat = pitäisi saada myös sisällöt mukaan)
function sortByPrise() {

  var menuListPrise = menuList.map(select);
  document.getElementById("box").innerHTML = menuListPrise.sort();

  function select(value, index, array) {
    return value.price;
  }
}
orderMenu.addEventListener('click', sortByPrise);

//Laskee summan
function sumMenu() {

  var menuListPrise = menuList.map(select);
  document.getElementById("priseTotal").innerHTML = menuListPrise.reduce(getSum, 1);

  function select(value, index, array) {
    return value.price;
  }

  function getSum(total, num) {
    return total + Math.round(num);
  }

}
priseMenu.addEventListener('click', sumMenu);


function fazer() {
//window.alert(FazerMenu.LunchMenus[0].DayOfWeek);

  var fazerMenuListLength = FazerMenu.LunchMenus[0].SetMenus.length; //json importattu jo alussa
  document.getElementById("box").innerHTML = "";

  //    var x;
  //   for (x in fazerMenuList){
  //   document.getElementById("box").innerHTML += fazerMenuList[x] + "<br>";
  //   }
  // }


  for (var i = 0; i < fazerMenuListLength; i++) {

    var fazerMenuList = FazerMenu.LunchMenus[0].SetMenus[i].Meals.map(select);
    document.getElementById("box").innerHTML += fazerMenuList + "<br>";

    function select(item) {

      var dish = item.Name;
      return dish;
    }
  }

}
fazerMenu.addEventListener('click', fazer);

// Nosta hintoja 15%
function risePrice() {

  var menuListPrise = menuList.map(select);
  document.getElementById("box").innerHTML = menuListPrise;

  function select(value) {
    return Math.round(value.price * 115)/100;
  }
}
raiseMenu.addEventListener('click', risePrice);

// Näytä menu alle 5€
function showMinPrice() {

  var menuListPrise = menuList.find(select);
  document.getElementById("box").innerHTML = menuListPrise;

  function select(value) {

    return value.price < 5.0;
  }
}
showMinMenu.addEventListener('click', showMinPrice);
