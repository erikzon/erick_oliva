let en_US = {
    greeting: "Hi! I'm",
    whatiam: "I'm a Front-end Developer",
    whatido: "Web developer on Javascript and PHP",
    recentworks: "Recent Work"
}

let es_ES = {
    greeting: "¡Hola! Soy",
    whatiam: "Soy Front-end Developer",
    whatido: "Dessarollo aplicaciones web en Javacript y PHP",
    recentworks: "Mis ultimos trabajos"
}

let lang = es_ES;

// set all the text at loadtime


function changeLanguage(language) {
    lang = language;
    document.getElementById("recentworks").innerHTML = `${lang.recentworks}`;
    document.getElementById("whatido").innerHTML = `${lang.whatido}`;
    document.getElementById("whatiam").innerHTML = `${lang.whatiam}`;
    document.getElementById("greeting").innerHTML = `${lang.greeting} Erick`;
}

changeLanguage(es_ES);

//language selector nav logic
document.getElementById("english").addEventListener("click", function () {
    changeLanguage(en_US);
});

document.getElementById("spanish").addEventListener("click", function () {
    changeLanguage(es_ES);
});