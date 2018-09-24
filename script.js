document.querySelector("#a1").disabled=true;
document.querySelector("#a2").disabled=true;
document.querySelector("#a3").disabled=true;
document.querySelector("#a4").disabled=true;
document.querySelector("#a5").disabled=true;
document.querySelector("#a6").disabled=true;
document.querySelector("#a7").disabled=true;
document.querySelector("#a8").disabled=true;
document.querySelector("#a9").disabled=true;
var points=0;
var remaining = 20;
function randomGenColor()
{
    var colors = ["black","grey","yellow","white","green","red","blue","purple","pink"];
    var col = colors[Math.floor(Math.random() * colors.length)];
    var col1 = colors[Math.floor(Math.random() * colors.length)];
    var col2 = colors[Math.floor(Math.random() * colors.length)];
    var col3 = colors[Math.floor(Math.random() * colors.length)];
    var col4 = colors[Math.floor(Math.random() * colors.length)];
    var col5 = colors[Math.floor(Math.random() * colors.length)];
    var col6 = colors[Math.floor(Math.random() * colors.length)];
    var col7 = colors[Math.floor(Math.random() * colors.length)];
    var col8 = colors[Math.floor(Math.random() * colors.length)];
    var col9 = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById("yewala").innerHTML = col;
    var set  = [col1,col2,col3,col4,col5,col6,col7,col8,col9];
    var fixed = Math.floor(Math.random() * set.length);
    set[fixed] = col;
    document.getElementById("a1").innerHTML = set[0];
    document.getElementById("a2").innerHTML = set[1];
    document.getElementById("a3").innerHTML = set[2];
    document.getElementById("a4").innerHTML = set[3];
    document.getElementById("a5").innerHTML = set[4];
    document.getElementById("a6").innerHTML = set[5];
    document.getElementById("a7").innerHTML = set[6];
    document.getElementById("a8").innerHTML = set[7];
    document.getElementById("a9").innerHTML = set[8];
}
function comparison(cright)
{
    var cleft = document.getElementById("yewala").innerHTML;    
    if(cleft == cright )
    {
        ++points;
        document.getElementById("khaata").innerHTML=points;
    }
    randomGenColor();
}

function a1()
{
    var cright = document.getElementById("a1").innerHTML;
    comparison(cright);
}
function a2()
{
    var cright = document.getElementById("a2").innerHTML;
    comparison(cright);
}
function a3()
{
    var cright = document.getElementById("a3").innerHTML;
    comparison(cright);
}
function a4()
{
    var cright = document.getElementById("a4").innerHTML;
    comparison(cright);
}
function a5()
{
    var cright = document.getElementById("a5").innerHTML;
    comparison(cright);
}
function a6()
{
    var cright = document.getElementById("a6").innerHTML;
    comparison(cright);
}
function a7()
{
    var cright = document.getElementById("a7").innerHTML;
    comparison(cright);
}
function a8()
{
    var cright = document.getElementById("a8").innerHTML;
    comparison(cright);
}
function a9()
{
    var cright = document.getElementById("a9").innerHTML;
    comparison(cright);
}
function start()
{
    remaining=20;
    points=0;
    document.getElementById("shuru").disabled=true;
    document.getElementById("khaata").innerHTML=points;
    document.getElementById("waqt").innerHTML = remaining;
    document.querySelector("#a1").disabled=false;
    document.querySelector("#a2").disabled=false;
    document.querySelector("#a3").disabled=false;
    document.querySelector("#a4").disabled=false;
    document.querySelector("#a5").disabled=false;
    document.querySelector("#a6").disabled=false;
    document.querySelector("#a7").disabled=false;
    document.querySelector("#a8").disabled=false;
    document.querySelector("#a9").disabled=false;
    randomGenColor();
    document.getElementById("waqt").style.backgroundColor = "green";
    var Timer = setInterval(function(){
        remaining--;
        document.getElementById("waqt").innerHTML = remaining;
        if(remaining <= 0)
        {
            document.getElementById("waqt").style.backgroundColor = "red";
            clearInterval(Timer);
            document.getElementById("shuru").disabled=false;
            document.querySelector("#a1").disabled=true;
            document.querySelector("#a2").disabled=true;
            document.querySelector("#a3").disabled=true;
            document.querySelector("#a4").disabled=true;
            document.querySelector("#a5").disabled=true;
            document.querySelector("#a6").disabled=true;
            document.querySelector("#a7").disabled=true;
            document.querySelector("#a8").disabled=true;
            document.querySelector("#a9").disabled=true;
            points=0;
            
        }
    },1000);
}
