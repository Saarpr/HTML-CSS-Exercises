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

function show_budget(budget) {
    var bud = budget * 25;
    document.getElementById("budget").append(bud + "$");
}


// Instantiate users in form

function initialize_select(usr) {
    var myDjangoList = ((usr.replace(/&(l|g|quo)t;/g, function (a, b) {
        return {
            l: '<',
            g: '>',
            quo: '"'
        }[b];
    })));

    myDjangoList = myDjangoList.replace(/u'/g, '\'')
    myDjangoList = myDjangoList.replace(/'/g, '\"')
    // console.log(myDjangoList);

    myData = JSON.parse(myDjangoList);
    var select_usr = "<option class=\"form-control\"value=\"By Myself\"selected>Myself</option>";
    for (i = 0; i < myData.length; i++) {
        if (!(myData[i].fields.is_superuser))
            select_usr += "<option class=\"form-control\"value=\"" + myData[i].fields.username + "\">" + myData[i].fields.username + "</option>"
    }
    var select = document.getElementById("select_users");

    select.innerHTML = select_usr;
}


// bubble above the range input in the form

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


