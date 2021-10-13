let en_US = {
    greetingTitle: "Hi! Erick here",
    whatiamTitle: "I'm a Front-end Developer",
    whatidoParagraph: "Javascript and PHP Web developer, out from Guatemala.",
    portfolioTitle: "Portfolio",
    aboutmeTitle: "About me",
    aboutmeParagraph: "I'm currently a computer science student at Universidad Mariano Galvez",
    certificatesTitle: "Certificates",
    certificatescontent:"",
    skills: "Skills",
    skillscontent: "HTML5, CSS, JavaScript, Vue, Vuex, Vuetify, Tailwind, Bootstrap, Git"
}

let es_ES = {
    greetingTitle: "Erick Oliva",
    whatiamTitle: "Front-end Developer",
    whatidoParagraph: "Dessarollo aplicaciones web con tecnologias de Javacript y PHP, resido en Guatemala.",
    portfolioTitle: "Portafolio",
    aboutmeTitle: "Acerca de mi",
    aboutmeParagraph: "Soy estudiante de 3er año en Ing. en Sistemas en la Universidad Mariano Galvez",
    certificatesTitle: "Certificados",
    certificatescontent:"",
    skills: "Habilidades",
    skillscontent: "HTML5, CSS, JavaScript, Vue, Vuex, Vuetify, Tailwind, Bootstrap, Git"
}

let lang = es_ES;

function changeLanguage(language) {
    lang = language;
    document.getElementById("portfolioTitle").innerHTML = `${lang.portfolioTitle}`;
    document.getElementById("whatidoParagraph").innerHTML = `${lang.whatidoParagraph}`;
    document.getElementById("whatiamTitle").innerHTML = `${lang.whatiamTitle}`;
    document.getElementById("greetingTitle").innerHTML = `${lang.greetingTitle}`;
    document.getElementById("aboutmeTitle").innerHTML = `${lang.aboutmeTitle}`;
    document.getElementById("aboutmeParagraph").innerHTML = `${lang.aboutmeParagraph}`;
    document.getElementById("certificatesTitle").innerHTML = `${lang.certificatesTitle}`;
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