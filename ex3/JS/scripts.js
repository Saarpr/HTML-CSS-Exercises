/***********Global Vars***********/
var first_name = "Saar".length;
var last_name = "Pernik".length;

function initialize()
{
    var articles = "";
    for(i=0; i<(first_name*last_name);i++)
    {
        articles +="<article></article>";
    }
    var main = document.getElementsByTagName("main")[0];

    main.innerHTML = articles;
}

function onHover()
{
var first=document.getElementsByTagName("article")[0];
    first.onmouseover=function () {
        first.style.backgroundImage="url(../images/S.png)";
    }
    first.onmouseout=function () {
        first.style.backgroundImage="";
    }
}

function change(){
    for(i=0; i<(first_name);i++)
    {
        var art=document.getElementsByTagName("article")[i];
        art.style.backgroundColor= "#3f3f3f";
    }
}
function reset(){
    for(i=0; i<(first_name);i++)
    {
        var art=document.getElementsByTagName("article")[i];
        art.style.backgroundColor= "";
    }
}