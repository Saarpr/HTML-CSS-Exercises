// Instantiate the Bootstrap carousel
$('.multi-item-carousel').carousel({
  interval: false
});

// for every slide in carousel, copy the next slide's item in the slide.
// Do the same for the next, next item.
$('.multi-item-carousel .item').each(function () {
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));

  if (next.next().length > 0) {
    next.next().children(':first-child').clone().appendTo($(this));
  } else {
    $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
  }
});

// List for users
var users = ["Saar P", "David T", "Ruti K", "Noy D", "Or P", "Tehila L"];
function initialize_select() {
  var select_usr = "";
  for (i = 0; i < users.length; i++) {
    select_usr += "<option class=\"form-control\"value=\"" + users[i] + "\">" + users[i] + "</option>"
  }
  var select = document.getElementById("select_users");

  select.innerHTML = select_usr;
}

function bubble() {
  const
    range = document.getElementById('range'),
    rangeV = document.getElementById('rangeV'),
    setValue = () => {
      const
        newValue = Number((range.value - range.min) * 100 / (range.max - range.min)),
        newPosition = 10 - (newValue * 0.2);
      rangeV.innerHTML = `<span>${range.value * 25} $</span>`;
      rangeV.style.left = `calc(${newValue}% + (${newPosition}px))`;
    };
  document.addEventListener("DOMContentLoaded", setValue);
  range.addEventListener('input', setValue);
}

var MyTrips = [
  { place: 'Rome', days: 8, date: '2017-03-25', image: 'images/Rome-Roscioli_Carbonara.jpgs' },
  { place: 'Virginia', days: 10, date: '2018-03-25', image: 'images/virginia.jpg' },
  { place: 'Tel Aviv', days: 3, date: '2019-03-25', image: 'images/telaviv.jpg' },
  { place: 'Budapest', days: 5, date: '2020-03-25', image: 'images/budapest.jpg' },
  { place: 'Berlin', days: 5, date: '2021-03-25', image: 'images/berlin.png' },
  { place: 'Tel Aviv', days: 3, date: '2019-03-25', image: 'images/telaviv.jpg' },
  { place: 'Budapest', days: 5, date: '2020-03-25', image: 'images/budapest.jpg' },
  { place: 'Berlin', days: 5, date: '2021-03-25', image: 'images/berlin.png' },
];

var Break_Rest = [
  { name: 'Caffe SOHO', type: 'Breakfast', price_range: '20$-50$', phone: '03-1111111', image: 'images/pasta.png' },
  { name: 'Caffe Saar', type: 'Breakfast', price_range: '30$-60$', phone: '03-2222222', image: 'images/baguette.png' },
];
var Lunch_Rest = [
  { name: 'SteakHouse', type: 'Argentinian', price_range: '60$-100$', phone: '03-5555555', image: 'images/burger.png' },
  { name: 'BurgerHouse', type: 'American', price_range: '30$-50$', phone: '03-4444444', image: 'images/steak.png' },
];
var Dinner_Rest = [
  { name: 'Beauty Jaffa', type: 'Fine Dining', price_range: '30$-50$', phone: '03-6666666', image: 'images/pasta.png' },
  { name: 'Viny Italy', type: 'Italian', price_range: '30$-50$', phone: '03-3333333', image: 'images/spicy.png' },
];

function initialize_trip() {
  var random_breakfast = Break_Rest[Math.floor(Math.random() * Break_Rest.length)];
  var random_lunch = Lunch_Rest[Math.floor(Math.random() * Lunch_Rest.length)];
  var random_dinner = Dinner_Rest[Math.floor(Math.random() * Dinner_Rest.length)];

  var New_trip = "";
  New_trip += "<div class=\"Restaurants-Card\"> <img src= '" + random_breakfast.image +"' > <div class = \"Att-Control\"> <p> Name: " + random_breakfast.name + 
  "</p> <p> Type : " + random_breakfast.type + "</p> <p> Price-Range: " + random_breakfast.price_range + "</p> <p> Phone: " + random_breakfast.phone + 
  "</p> </div> </div>  <div class=\"Restaurants-Card\"> <img src= '" + random_lunch.image +"' > <div class = \"Att-Control\"> <p> Name: " + random_lunch.name + 
  "</p> <p> Type : " + random_lunch.type + "</p> <p> Price-Range: " + random_lunch.price_range + "</p> <p> Phone: " + random_lunch.phone + 
  "</p> </div> </div> <div class=\"Restaurants-Card\"> <img src= '" + random_dinner.image +"' > <div class = \"Att-Control\"> <p> Name: " + random_dinner.name + 
  "</p> <p> Type : " + random_dinner.type + "</p> <p> Price-Range: " + random_dinner.price_range + "</p> <p> Phone: " + random_dinner.phone + 
  "</p> </div> </div>"

  var breakFast = document.getElementById("Cards_Control");
  breakFast.innerHTML = New_trip;
}

function initialize_feed() {
  var feed_artic = "";
  for (i = 1; i < MyTrips.length; i++) {
    feed_artic += "<article class=\"feed_art\" style=\"background-image: url('" + MyTrips[i].image + "');\"><span class=\"share\"></span><span class=\"description\">" + MyTrips[i].place + "<br>" + MyTrips[i].days + " days</span></article>"
  }
  var select = document.getElementById("feed_section");

  select.innerHTML = feed_artic;
}