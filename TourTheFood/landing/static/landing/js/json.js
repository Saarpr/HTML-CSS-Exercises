function random_trip_photo(trip) {

    $.getJSON("/static/landing/json/data.json", function (data) {
        trip = trip.toLowerCase();
        var phase1 = data.photos[trip];
        var rnd_num = Math.floor(Math.random() * 3) + 1;
        var str = "img" + rnd_num;
        if (phase1) {
            var img_path = phase1[str]
            document.getElementById("rand-img").src = img_path;
        } else {
            document.getElementById("rand-img").src = "/media/food_images/default.jpg";

        }
    })
}


function random_img(trip) {
    var myDjangoList = ((trip.replace(/&(l|g|quo)t;/g, function (a, b) {
        return {
            l: '<',
            g: '>',
            quo: '"'
        }[b];
    })));
    myDjangoList = myDjangoList.replace(/u'/g, '\'')
    myDjangoList = myDjangoList.replace(/'/g, '\"')
    myData = JSON.parse(myDjangoList);
    $.getJSON("/static/landing/json/data.json", function (data) {

        for (i = 0; i < myData.length; i++) {
            var tmp = myData[i].fields.where;
            tmp = tmp.toLowerCase();
            var trip_id = myData[i].pk;
            var rnd_num = Math.floor(Math.random() * 3) + 1;
            var str = "img" + rnd_num;
            var phase1 = data.photos[tmp];
            if (phase1) {
                var img_path = phase1[str]
                document.getElementById(trip_id).style.backgroundImage = "url('" + img_path + "')";
            } else {
                document.getElementById(trip_id).style.backgroundImage = "url(/media/food_images/default.jpg)";

            }
        }
    })
}


