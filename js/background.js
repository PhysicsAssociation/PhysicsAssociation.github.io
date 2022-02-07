
document.getElementById("hello").innerHTML = "STARTED";
while (true){
    if(screen.width < 500){
        document.getElementById("hello").innerHTML = "less than 500";
        document.getElementById("6").style = "width = 100%";
    }
    else{
        document.getElementById("hello").innerHTML = "more than 700";
    }
}