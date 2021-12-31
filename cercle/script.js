document.onmousemove = function (e){
    const bodyWidth = document.body.clientWidth, bodyHeight = document.body.clientHeight;
    var divH = cercle.clientHeight/2, divW = cercle.clientWidth/2;

    cercle.style.top = bodyHeight - (e.clientY + divH) + "px"
    cercle.style.left = bodyWidth - (e.clientX + divW) + "px"

    //console.log(bodyWidth,bodyHeight,divW,divH, e.clientX, e.clientY)
}


cercle.onmouseenter = function (e) {
    const cercle = document.getElementById("cercle");
    cercle.classList.toggle("hover");
}

