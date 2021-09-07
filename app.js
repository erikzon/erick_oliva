let en_US = {
    greeting: "Hi! Erick here",
    whatiam: "I'm a Front-end Developer",
    whatido: "Javascript and PHP Web developer, out from Guatemala",
    recentworks: "Recent Work"
}

let es_ES = {
    greeting: "Erick Oliva",
    whatiam: "Front-end Developer",
    whatido: "Dessarollo aplicaciones web en Javacript y PHP, resido en Guatemala",
    recentworks: "Mis ultimos trabajos"
}

let lang = es_ES;

// set all the text at loadtime
function changeLanguage(language) {
    lang = language;
    document.getElementById("recentworks").innerHTML = `${lang.recentworks}`;
    document.getElementById("whatido").innerHTML = `${lang.whatido}`;
    document.getElementById("whatiam").innerHTML = `${lang.whatiam}`;
    document.getElementById("greeting").innerHTML = `${lang.greeting}`;
}

changeLanguage(es_ES);

//language selector nav logic
document.getElementById("english").addEventListener("click", function () {
    changeLanguage(en_US);
});

document.getElementById("spanish").addEventListener("click", function () {
    changeLanguage(es_ES);
});