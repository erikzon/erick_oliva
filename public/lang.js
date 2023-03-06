async function getLang(lang) {
  return await fetch(`./assets/${lang}.json`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}

async function changeLang(lang) {
  let currentLang = await getLang(lang);
  document.getElementById(
    "homeNavItem"
  ).innerHTML = `${currentLang.homeNavItem}`;
  document.getElementById(
    "aboutMeNavItem"
  ).innerHTML = `${currentLang.aboutMeNavItem}`;
  document.getElementById(
    "skillsNavItem"
  ).innerHTML = `${currentLang.skillsNavItem}`;
  document.getElementById(
    "myportfolioNavItem"
  ).innerHTML = `${currentLang.myportfolioNavItem}`;
  document.getElementById("txtHello").innerHTML = `${currentLang.txtHello}`;
  document.getElementById("txtMyName").innerHTML = `${currentLang.txtMyName}`;
  document.getElementById("txtWhatIAm").innerHTML = `${currentLang.txtWhatIAm}`;
  document.getElementById("txtHomeP1").innerHTML = `${currentLang.txtHomeP1}`;
  document.getElementById("txtHomeP2").innerHTML = `${currentLang.txtHomeP2}`;
  document.getElementById("txtHomeP3").innerHTML = `${currentLang.txtHomeP3}`;
  document.getElementById("txtHomeP4").innerHTML = `${currentLang.txtHomeP4}`;
  document.getElementById(
    "txtAboutMeTittle"
  ).innerHTML = `${currentLang.txtAboutMeTittle}`;
  document.getElementById(
    "txtAboutMeP1"
  ).innerHTML = `${currentLang.txtAboutMeP1}`;
  document.getElementById(
    "txtAboutMeP2"
  ).innerHTML = `${currentLang.txtAboutMeP2}`;
  document.getElementById(
    "txtAboutMeP3"
  ).innerHTML = `${currentLang.txtAboutMeP3}`;
  document.getElementById(
    "txtExperienceTittle"
  ).innerHTML = `${currentLang.txtExperienceTittle}`;
  document.getElementById(
    "txtExperience1P1"
  ).innerHTML = `${currentLang.txtExperience1P1}`;
  document.getElementById(
    "txtExperience1P2"
  ).innerHTML = `${currentLang.txtExperience1P2}`;
  document.getElementById(
    "txtExperience1P3"
  ).innerHTML = `${currentLang.txtExperience1P3}`;
  document.getElementById(
    "txtExperience2P1"
  ).innerHTML = `${currentLang.txtExperience2P1}`;
  document.getElementById(
    "txtExperience2P2"
  ).innerHTML = `${currentLang.txtExperience2P2}`;
  document.getElementById(
    "txtExperience2P3"
  ).innerHTML = `${currentLang.txtExperience2P3}`;
  document.getElementById(
    "txtExperience3P1"
  ).innerHTML = `${currentLang.txtExperience3P1}`;
  document.getElementById(
    "txtExperience3P2"
  ).innerHTML = `${currentLang.txtExperience3P2}`;
  document.getElementById(
    "txtExperience3P3"
  ).innerHTML = `${currentLang.txtExperience3P3}`;
  document.getElementById(
    "txtCertificatesTittle"
  ).innerHTML = `${currentLang.txtCertificatesTittle}`;
  document.getElementById(
    "txtTestimonialsTittle"
  ).innerHTML = `${currentLang.txtTestimonialsTittle}`;
  document.getElementById(
    "txtTestimonialDisclaimer"
  ).innerHTML = `${currentLang.txtTestimonialDisclaimer}`;
  document.getElementById(
    "txtTestimonialsDisclaimerP"
  ).innerHTML = `${currentLang.txtTestimonialsDisclaimerP}`;
  document.getElementById(
    "txtSkillsTittle"
  ).innerHTML = `${currentLang.txtSkillsTittle}`;
  document.getElementById(
    "txtPortfolioTittle"
  ).innerHTML = `${currentLang.txtPortfolioTittle}`;
  document.getElementById(
    "txtPortfolioP1"
  ).innerHTML = `${currentLang.txtPortfolioP1}`;
  document.getElementById(
    "txtPortfolioP2"
  ).innerHTML = `${currentLang.txtPortfolioP2}`;
  document.getElementById(
    "txtPortfolioP3"
  ).innerHTML = `${currentLang.txtPortfolioP3}`;
  document.getElementById(
    "txtPortfolioP4"
  ).innerHTML = `${currentLang.txtPortfolioP4}`;
  document.getElementById(
    "txtPortfolioP5"
  ).innerHTML = `${currentLang.txtPortfolioP5}`;
  document.getElementById(
    "txtPortfolioP6"
  ).innerHTML = `${currentLang.txtPortfolioP6}`;
}

// set all the text at loadtime
document.getElementById("spanish").classList.remove("active-button");
document.getElementById("spanish").classList.add("disabled-button");
document.getElementById("english").classList.remove("disable-button");
document.getElementById("english").classList.add("active-button");
document.getElementById("spanish-mobile").classList.remove("active-button");
document.getElementById("spanish-mobile").classList.add("disabled-button");
document.getElementById("english-mobile").classList.remove("disable-button");
document.getElementById("english-mobile").classList.add("active-button");
changeLang("lang_ENG");

//language selector nav logic
document.getElementById("english").addEventListener("click", function () {
  document.getElementById("english").classList.remove("disabled-button");
  document.getElementById("english").classList.add("active-button");
  document.getElementById("spanish").classList.remove("active-button");
  document.getElementById("spanish").classList.add("disabled-button");
  changeLang("lang_ENG");
});

document.getElementById("spanish").addEventListener("click", function () {
  document.getElementById("english").classList.remove("active-button");
  document.getElementById("english").classList.add("disabled-button");
  document.getElementById("spanish").classList.remove("disabled-button");
  document.getElementById("spanish").classList.add("active-button");
  changeLang("lang_ES");
});

document
  .getElementById("english-mobile")
  .addEventListener("click", function () {
    document
      .getElementById("english-mobile")
      .classList.remove("disabled-button");
    document.getElementById("english-mobile").classList.add("active-button");
    document.getElementById("spanish-mobile").classList.remove("active-button");
    document.getElementById("spanish-mobile").classList.add("disabled-button");
    changeLang("lang_ENG");
  });

document
  .getElementById("spanish-mobile")
  .addEventListener("click", function () {
    document.getElementById("english-mobile").classList.remove("active-button");
    document.getElementById("english-mobile").classList.add("disabled-button");
    document
      .getElementById("spanish-mobile")
      .classList.remove("disabled-button");
    document.getElementById("spanish-mobile").classList.add("active-button");
    changeLang("lang_ES");
  });
