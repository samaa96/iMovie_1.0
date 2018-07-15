const snacksPrice = 5;

// all the local storage memory

var cinema = new Array("Cinema City", "Yes Planet", "Lev Cinema", "lobus Max");

var movies = new Array(); // the set of all the movies in the site.

const numberOfSeats = 30; // the num of seats in the all cinema.

var users = new Array(); //  all the user of the system

var loginUser; // the current login user

// var moviesName = new Array["היפה החיה", "מלך האריות", "סידנרלה", "פינוקיו"];

var Manager = {

    name: "admin",

    Password: "admin"

};

users.push(Manager);

localStorage.users = JSON.stringify(users);

localStorage.cinema = JSON.stringify(cinema);

localStorage.movies = JSON.stringify(movies);

localStorage.users = JSON.stringify(users);



//______________logout_______________

function logOut() {

    loginUser = null;

    console.log("the manafer is out" + loginUser);

}



//_________________ LOGIN PAGE ________________

{
    $(document).on("pageinit", "#LoginPage", function (event) {
        EZ();
        wireEventsLoginPage();
    });



    function EZ() {
        $('#LPName').val('admino');
        $('#LPPassword').val('admin');
    }




    function wireEventsLoginPage() {

        if (typeof (Storage) !== "undefined") {
            $('#LoginBtn').on('tap', function () {
                users = JSON.parse(localStorage.users);
                var user = { name: $('#LPName').val(), Password: $('#LPPassword').val() };
                console.log(user.name + user.Password);
                if (user.name == "admin") {
                    console.log("in Admin!");
                    document.getElementById("managerHeader").innerHTML = "Hello " + user.name;
                    location.replace('#homeManager');
                }
                else {
                    for (var i = 0; i < users.length(); i++) {

                        if (users[i].name == user.name && users[i].Password == user.Password) {
                            {
                                console.log(user.name + user.Password);
                                loginUser = user;
                                localStorage.loginUser = loginUser;
                                console.log(loginUser.name + loginUser.Password);
                            }

                            location.replace('#home');

                        }

                        else {

                            alert('wrong Name or Password');
                        }

                    }

                }

            });
        }
    }
}


/*
//____________________manager - insertMovie Page___________________
{
    function insertMovie() {
        if (typeof (Storage) !== "undefined") {
            newMovie = {
                name: $('#MovieName').val(),
                summry: $('#MovieSummray').val(),
                actros: $('#MovieActors').val(),
                director: $('#MovieDirector').val(),
                length: $('#MovieLength').val(),
                genre: $('#MovieGenre').val(),
                premiereDate: $('#MoviePremiereDate').val(),
                rstirctedViewingAge: $('#MovieRestirctedViewingAge').val(),
                picture: $('#uploadpic').val(),
                trailer: $('#uploadvid').val()
            } // the new movie the manager has added now
            movies.push(newMovie); // add the new mpvie to the set
        }
        alert("the movie successfully added to the cinema.");
    }
}
*/

//_________________ Registration Page ________________

{
    $(document).on("pageinit", "#RegisterPage", function (event) {

        wireEventsRegisterPage();
    });



    function wireEventsRegisterPage() {
        $('#RegisterBtn').on('tap', function () {
            console.log("in register new user");
            if (typeof (Storage) !== "undefined") {

                var newUser = {
                    name: $('#RName').val(),
                    Password: $('#RPassword').val()
                }

                console.log(newUser["name"] + " " + newUser["Password"]);
                //   if ($('#RPassword').val()== $('CRPassword').val()) {
                users.push(newUser);
                localStorage.users = JSON.stringify(users);
            }
        });

    }
}
function wireEvents() {
    $('#i_feel_pretty').click(function () {
        $('#movie').text('i feel pretty');
        pic();
        location.replace('#buy');

    });
    $('#jurassic_world').click(function () {
        $('#movie').text('jurassic world ');
        pic();
        location.replace('#buy');
    });
    $('#truth_or_dare').click(function () {
        $('#movie').text('truth or dare');
        pic();
        location.replace('#buy');
    });
}

function pic() {

    if ($('#movie').text() === 'i feel pretty')
        $('#poster').prop('src', 'i_feel_pretty.jpg');
    else if ($('#movie').text() === 'Fight Club')
        $('#poster').prop('src', "fightclub.jpg");
    else
        $('#poster').prop('src', "truth_or_dare.jpg");
}
function update() {
    var str = "";
    var i = 0;

    $('#num').text($('#numOftic').val());
    $('#movNam').text($('#movie').text());
    $('#dDate').text($('#date').val() + ",  " + $('#hour').val());
    if ($('#pop').is(':checked')) {
        str += 'Popcorn ';
        i++;
    }
    if ($('#cola').is(':checked')) {
        str += 'Coca-Cola ';
        i++;
    }
    if ($('#snacks').is(':checked')) {
        str += 'Snickers ';
        i++;
    }
    i = i * 5 + ($('#numOftic').val()) * 10;
    $('#ex').text(str);
    $('#price').text(i + '$');
    location.replace('#order');
}
/*

//____________________manager - insertMovie Page___________________
{
    function insertMovie() {
        if (typeof (Storage) !== "undefined") {
            newMovie = {
                name: $('#MovieName').val(),
                summry: $('#MovieSummray').val(),
                actros: $('#MovieActors').val(),
                director: $('#MovieDirector').val(),
                length: $('#MovieLength').val(),
                genre: $('#MovieGenre').val(),
                premiereDate: $('#MoviePremiereDate').val(),
                rstirctedViewingAge: $('#MovieRestirctedViewingAge').val(),
                picture: $('#uploadpic').val(),
                trailer: $('#uploadvid').val(),
                screens: new Array()
            } // the new movie the manager has added now
            var movs = (JSON.parse(cinema)).push(newMovie); // add the new mpvie to the set
        }
        alert("the movie successfully added to the cinema.");
    }
}
//__________________manager - insertScreening page _________________
{
    // insert into the select list the movies name.
    //$(document).on("pageinit", "#Maneger_insertScreening", function (event) {
    //    alert("ho yes !");
    //    // SelectMovieName();
    //});
    function SelectMovieName() {
        var slct = $('#slctMovieName');// document.getElementById("movieName");// 
        var str = "";
        //var movs = JSON.parse(movies);
        for (i = 0; i < moviesName.length(); i++) // go and bring all movies names
        {
            //var newOption = document.createElement("option");
            //newOption.value = movies[i].name;
            //newOption.innerHTML = movies[i].name;
            //slct.options.add(newOption);
            str += "<option value=" + moviesName[i].name + ">" + moviesName[i].name + "</option>";
        }
        str += "</select>";
        slct.append(str);
    }

    function insertScreen() {
        if (typeof (Storage) !== "undefined") {
            var movName = $('#movieName').val();
            var movs = JSON.parse(movies);
            var myMov, i;

            for (i = 0; i < movs.length(); i++) {
                if (movs[i].name == movName)
                    myMov = movs[i];
            }
            if (myMov != null) {
                var myscreens = myMov.screens;
                newScreen = {
                    date: $('#screenDate').val(),
                    time: $('#screenTime').val(),
                    numberOfSeats: 30,
                    Cinema: $('#screenCinema').val(),
                    type: $('#screenType').val()
                }
                myscreens.push(newScreen); // add the new mpvie to the set
            }
            else
                alert("the movie name doesn't exist!.");
        }
        alert("the screen successfully added to the movie.");
    }
}
//   __________________________________ view orders client_________________________
{
    $(document).on("pageinit", "#viewClientOrder", function (event) {
        GetOrdersDetails();
    });
    function GetOrdersDetails() {
        if (typeof (Storage) !== "undefined") {
            if (localStorage.loginUser != null) // אם הוא מחובר
            {
                str = "<tr><td>movie</td><td>date</td><td>time</td><td>cost</td></tr>";
                var count = 0;
                var temp = JSON.parse(localStorage.orders);
                var i;
                for (i = 0; i < temp.length(); i++) {
                    count++;
                    str += "<tr><td>" + temp[i].nameOfMovie + "</td><td>" + temp[i].date + "</td><td>" + temp[i].time + "</td><td>" + temp[i].sost + " ";
                }
                $('#number').html(count);
                $('#ordersDetails').html(str);
            }
            else {
                alert("please login before!.");
            }
        }
    }
}
// --------------------- make order --------------------
{

    $(document).ready(function () {
        wireEvents();
        pic();
    });

    function wireEvents() {
        $('#theMatrix').click(function () {
            $('#movie').text('The Matrix');
            pic();
            location.replace('#buy');

        });
        $('#shawshankRed').click(function () {
            $('#movie').text('The Shawshank Redemption');
            pic();
            location.replace('#buy');
        });
        $('#fightClub').click(function () {
            $('#movie').text('Fight Club');
            pic();
            location.replace('#buy');
        });
    }

    function pic() {

        if ($('#movie').text() === 'The Matrix')
            $('#poster').prop('src', 'matrix.png');
        else if ($('#movie').text() === 'Fight Club')
            $('#poster').prop('src', "fightclub.jpg");
        else
            $('#poster').prop('src', "shawshank.jpg");
    }

    function update() {
        var str = "";
        var i = 0;

        $('#num').text($('#numOftic').val());
        $('#movNam').text($('#movie').text());
        $('#dDate').text($('#date').val() + ",  " + $('#hour').val());
        if ($('#pop').is(':checked')) {
            str += 'Popcorn ';
            i++;
        }
        if ($('#cola').is(':checked')) {
            str += 'Coca-Cola ';
            i++;
        }
        if ($('#snacks').is(':checked')) {
            str += 'Snickers ';
            i++;
        }
        i = i * snacksPrice + ($('#numOftic').val()) * 10;
        $('#ex').text(str);
        $('#price').text(i + '$');
        location.replace('#order');
    }
}
*/