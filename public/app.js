const sectionHome = document.getElementById('home');
const sectionAboutMe = document.getElementById('aboutMe');
const sectionSkills = document.getElementById('skills');
const sectionMyPortfolio = document.getElementById('myPortfolio');

const homeNavItem = document.getElementById('homeNavItem');
const aboutMeNavItem = document.getElementById('aboutMeNavItem');
const skillsNavItem = document.getElementById('skillsNavItem');
const myportfolioNavItem = document.getElementById('myportfolioNavItem');

const mobileHomeNavItem = document.getElementById('mobileHomeNavItem');
const mobileAboutMeNavItem = document.getElementById('mobileAboutMeNavItem');
const mobileSkillsNavItem = document.getElementById('mobileSkillsNavItem');
const mobileMyportfolioNavItem = document.getElementById('mobileMyportfolioNavItem');

const styleHomeNavItem = (entry, observador) => {
    if (entry[0].isIntersecting) {
        homeNavItem.classList.add('nav-item-active');
        mobileHomeNavItem.classList.add('nav-item-active');
    } else {
        homeNavItem.classList.remove('nav-item-active');
        mobileHomeNavItem.classList.remove('nav-item-active');
    }
}

const styleAboutMeNavItem = (entry, observador) => {
    if (entry[0].isIntersecting) {
        aboutMeNavItem.classList.add('nav-item-active');
        mobileAboutMeNavItem.classList.add('nav-item-active');
    } else {
        aboutMeNavItem.classList.remove('nav-item-active');
        mobileAboutMeNavItem.classList.remove('nav-item-active');
    }
}

const styleSkillsNavItem = (entry, observador) => {
    if (entry[0].isIntersecting) {
        skillsNavItem.classList.add('nav-item-active');
        mobileSkillsNavItem.classList.add('nav-item-active');
    } else {
        skillsNavItem.classList.remove('nav-item-active');
        mobileSkillsNavItem.classList.remove('nav-item-active');
    }
}

const styleMyPortfolioNavItem = (entry, observador) => {
    if (entry[0].isIntersecting) {
        myportfolioNavItem.classList.add('nav-item-active');
        mobileMyportfolioNavItem.classList.add('nav-item-active');
    } else {
        myportfolioNavItem.classList.remove('nav-item-active');
        mobileMyportfolioNavItem.classList.remove('nav-item-active');
    }
}

const observerHome = new IntersectionObserver(styleHomeNavItem, {
    root: null,    rootMargin: '0px 0px 0px 0px',    threshold: 0.5
});

const observerAboutMe = new IntersectionObserver(styleAboutMeNavItem, {
    root: null,    rootMargin: '0px 0px 0px 0px',    threshold: 0.5
});

const observerSkills = new IntersectionObserver(styleSkillsNavItem, {
    root: null,    rootMargin: '0px 0px 0px 0px',    threshold: 0.5
});

const observerMyPortfolio = new IntersectionObserver(styleMyPortfolioNavItem, {
    root: null,    rootMargin: '0px 0px 0px 0px',    threshold: 0.45
});

observerHome.observe(sectionHome);
observerAboutMe.observe(sectionAboutMe);
observerSkills.observe(sectionSkills);
observerMyPortfolio.observe(sectionMyPortfolio);

/*
let en_US = {
    greetingTitle: "Hi! Erick here",
    whatiamTitle: "I'm a Front-end Developer",
    whatidoParagraph: "I build awesome websites, I'm from Guatemala.",
    portfolioTitle: "Portfolio",
    aboutmeTitle: "About me",
    aboutmeParagraph: "I'm currently a computer science student at Universidad Mariano Galvez",
    certificatesTitle: "Certificates",
    certificatescontent:"",
    skills: "Skills",
    skillscontent: "HTML5, CSS, JavaScript, Vue, Vuex, Vuetify, Firebase, Tailwind, Bootstrap, Git"
}

let es_ES = {
    greetingTitle: "Erick Oliva",
    whatiamTitle: "Front-end Developer",
    whatidoParagraph: "Dessarollo sitios web, resido en Guatemala.",
    portfolioTitle: "Portafolio",
    aboutmeTitle: "Acerca de mi",
    aboutmeParagraph: "Soy estudiante de 3er año en Ing. en Sistemas en la Universidad Mariano Galvez",
    certificatesTitle: "Certificados",
    certificatescontent:"",
    skills: "Habilidades",
    skillscontent: "HTML5, CSS, JavaScript, Vue, Vuex, Vuetify, Firebase, Tailwind, Bootstrap, Git"
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
*/