let paragraphes = [
    "Data science is an interdisciplinary field that uses scientific methods, processes, algorithms and systems to extract knowledge and insights from structured and unstructured data, and apply knowledge and actionable insights from data across a broad range of application domains.",
    "Business intelligence (BI) combines business analytics, data mining, data visualization, data tools and infrastructure, and best practices to help organizations to make more data-driven decisions... It's important to note that this is a very modern definition of BI—and BI has had a strangled history as a buzzword.",
    "Artificial intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think like humans and mimic their actions. The term may also be applied to any machine that exhibits traits associated with a human mind such as learning and problem-solving.",
    "Machine learning is the concept that a computer program can learn and adapt to new data without human intervention. Machine learning is a field of artificial intelligence (AI) that keeps a computer's built-in algorithms current regardless of changes in the worldwide economy.",
    "Deep learning is an artificial intelligence (AI) function that imitates the workings of the human brain in processing data and creating patterns for use in decision making... Also known as deep neural learning or deep neural network."
];

let p = document.getElementById("paragraph");
let text = document.getElementById("text");
let Restart = document.getElementById("restart");
let voice = document.getElementById("audio");
let stop=true;

p.textContent = paragraphes[Math.floor(Math.random()*paragraphes.length)];

Restart.onclick =  function (){
    p.textContent = paragraphes[Math.floor(Math.random()*paragraphes.length)];
    text.value = "";
    stop = false ;
    ms=0, s=0, m=0;
    document.getElementById("timer").innerHTML = "00:00:00"
    audioPause();
}

text.onfocus = ()=>{
    setInterval(setTimer, 20);
    audioPlay(); 
}

text.oninput = ()=>{
    stop = true
    
    audioPlay(); 

    if (p.textContent.indexOf(text.value) === -1){
        text.style.border = "10px solid #fa2929";
        text.style.boxShadow = "0 0 10px #fc5d5d, 0 0 10px #fc5d5d";
    } 
    else if(p.textContent === text.value){
        text.style.border = "10px solid #3475d8";
        stop = false;
        audioPause();
    }
    else{
        text.style.border = "10px solid #19ee24";
        text.style.boxShadow = "0 0 10px #19ee24, 0 0 10px #19ee24";
    }

}

let ms=0, s=0, m=0;

function setTimer(){
    if (stop == false)return;
    ms++;
    if(ms===100){
        ms=0;
        s++;

        if(s===60){
            s=0;
            m++;
        }
    }   

    if (ms < 10) mms = "0"+ms ;
    else mms = ms;
    if (s < 10) ss = "0"+s ;
    else ss = s;
    if (m < 10) mm= "0"+m ;
    else mm = m;

    document.getElementById("timer").innerHTML = mm + ":" + ss + ":" + mms;
}

function audioPlay(){
    voice.play();
}

function audioPause(){
    voice.pause();
}