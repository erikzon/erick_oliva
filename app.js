let en_US = {
    greeting: "Hi! Erick here",
    whatiam: "I'm a Front-end Developer",
    whatido: "Javascript and PHP Web developer, out from Guatemala.",
    recentworks: "Recent Work",
    aboutme: "About me",
    myexperience: "I'm currently a computer science student at Universidad Mariano Galvez",
    certificates: "Certificates",
    certificatescontent:"",
    skills: "Skills",
    skillscontent: "HTML5, CSS, JavaScript, Vue, Vuex, Vuetify, Tailwind, Bootstrap, Git"
}

let es_ES = {
    greeting: "Erick Oliva",
    whatiam: "Front-end Developer",
    whatido: "Dessarollo aplicaciones web con tecnologias de Javacript y PHP, resido en Guatemala.",
    recentworks: "Mis ultimos trabajos",
    aboutme: "Acerca de mi",
    myexperience: "Soy estudiante de 3er año en Ing. en Sistemas en la Universidad Mariano Galvez",
    certificates: "Certificados",
    certificatescontent:"",
    skills: "Habilidades",
    skillscontent: "HTML5, CSS, JavaScript, Vue, Vuex, Vuetify, Tailwind, Bootstrap, Git"
}

let lang = es_ES;

function changeLanguage(language) {
    lang = language;
    document.getElementById("recentworks").innerHTML = `${lang.recentworks}`;
    document.getElementById("whatido").innerHTML = `${lang.whatido}`;
    document.getElementById("whatiam").innerHTML = `${lang.whatiam}`;
    document.getElementById("greeting").innerHTML = `${lang.greeting}`;
    document.getElementById("aboutme").innerHTML = `${lang.aboutme}`;
    document.getElementById("myexperience").innerHTML = `${lang.myexperience}`;
    document.getElementById("certificates").innerHTML = `${lang.certificates}`;
    //document.getElementById("certificatescontent").innerHTML = `${lang.certificatescontent}`;
    document.getElementById("skills").innerHTML = `${lang.skills}`;
    document.getElementById("skillscontent").innerHTML = `${lang.skillscontent}`;
}

// set all the text at loadtime
changeLanguage(es_ES);

//language selector nav logic
document.getElementById("english").addEventListener("click", function () {
    changeLanguage(en_US);
});

document.getElementById("spanish").addEventListener("click", function () {
    changeLanguage(es_ES);
});