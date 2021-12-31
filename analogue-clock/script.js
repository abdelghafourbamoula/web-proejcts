const h = document.getElementById("hour");
const min = document.getElementById("minute");
const sec = document.getElementById("seconds");

function clockUpdate(){

    let D = new Date();
    let hour = D.getHours(), minute = D.getMinutes(), second = D.getSeconds() ;

    h.setAttribute("transform",`rotate(${(hour*360/12)+(minute*15/60)},50,50)`);
    min.setAttribute("transform",`rotate(${minute*360/60}, 50, 50)`);
    sec.setAttribute("transform",`rotate(${second*360/60}, 50, 50)`);
}

setInterval(clockUpdate, 1000)