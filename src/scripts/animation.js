var i = 0;
var txt = "I'm Bradly, a passionate web developer\ncrafting engaging, user-friendly experiences.";
var speed = 50;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();