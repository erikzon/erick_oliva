async function getLang(e){return await fetch(`./assets/${e}.json`).then(e=>e.json()).then(e=>e)}async function changeLang(e){let t=await getLang(e);document.getElementById("homeNavItem").innerHTML=`${t.homeNavItem}`,document.getElementById("aboutMeNavItem").innerHTML=`${t.aboutMeNavItem}`,document.getElementById("skillsNavItem").innerHTML=`${t.skillsNavItem}`,document.getElementById("myportfolioNavItem").innerHTML=`${t.myportfolioNavItem}`,document.getElementById("txtHello").innerHTML=`${t.txtHello}`,document.getElementById("txtMyName").innerHTML=`${t.txtMyName}`,document.getElementById("txtWhatIAm").innerHTML=`${t.txtWhatIAm}`,document.getElementById("txtHomeP1").innerHTML=`${t.txtHomeP1}`,document.getElementById("txtHomeP2").innerHTML=`${t.txtHomeP2}`,document.getElementById("txtHomeP3").innerHTML=`${t.txtHomeP3}`,document.getElementById("txtHomeP4").innerHTML=`${t.txtHomeP4}`,document.getElementById("txtAboutMeTittle").innerHTML=`${t.txtAboutMeTittle}`,document.getElementById("txtAboutMeP1").innerHTML=`${t.txtAboutMeP1}`,document.getElementById("txtAboutMeP2").innerHTML=`${t.txtAboutMeP2}`,document.getElementById("txtAboutMeP3").innerHTML=`${t.txtAboutMeP3}`,document.getElementById("txtExperienceTittle").innerHTML=`${t.txtExperienceTittle}`,document.getElementById("txtExperience1P1").innerHTML=`${t.txtExperience1P1}`,document.getElementById("txtExperience1P2").innerHTML=`${t.txtExperience1P2}`,document.getElementById("txtExperience1P3").innerHTML=`${t.txtExperience1P3}`,document.getElementById("txtExperience2P1").innerHTML=`${t.txtExperience2P1}`,document.getElementById("txtExperience2P2").innerHTML=`${t.txtExperience2P2}`,document.getElementById("txtExperience2P3").innerHTML=`${t.txtExperience2P3}`,document.getElementById("txtExperience3P1").innerHTML=`${t.txtExperience3P1}`,document.getElementById("txtExperience3P2").innerHTML=`${t.txtExperience3P2}`,document.getElementById("txtExperience3P3").innerHTML=`${t.txtExperience3P3}`,document.getElementById("txtCertificatesTittle").innerHTML=`${t.txtCertificatesTittle}`,document.getElementById("txtTestimonialsTittle").innerHTML=`${t.txtTestimonialsTittle}`,document.getElementById("txtTestimonialDisclaimer").innerHTML=`${t.txtTestimonialDisclaimer}`,document.getElementById("txtTestimonialsDisclaimerP").innerHTML=`${t.txtTestimonialsDisclaimerP}`,document.getElementById("txtSkillsTittle").innerHTML=`${t.txtSkillsTittle}`,document.getElementById("txtPortfolioTittle").innerHTML=`${t.txtPortfolioTittle}`,document.getElementById("txtPortfolioP1").innerHTML=`${t.txtPortfolioP1}`,document.getElementById("txtPortfolioP2").innerHTML=`${t.txtPortfolioP2}`,document.getElementById("txtPortfolioP3").innerHTML=`${t.txtPortfolioP3}`,document.getElementById("txtPortfolioP4").innerHTML=`${t.txtPortfolioP4}`,document.getElementById("txtPortfolioP5").innerHTML=`${t.txtPortfolioP5}`}document.getElementById("english").classList.remove("active-button"),document.getElementById("english").classList.add("disabled-button"),document.getElementById("spanish").classList.remove("disable-button"),document.getElementById("spanish").classList.add("active-button"),document.getElementById("english-mobile").classList.remove("active-button"),document.getElementById("english-mobile").classList.add("disabled-button"),document.getElementById("spanish-mobile").classList.remove("disable-button"),document.getElementById("spanish-mobile").classList.add("active-button"),changeLang("lang_ES"),document.getElementById("english").addEventListener("click",function(){document.getElementById("english").classList.remove("disabled-button"),document.getElementById("english").classList.add("active-button"),document.getElementById("spanish").classList.remove("active-button"),document.getElementById("spanish").classList.add("disabled-button"),changeLang("lang_ENG")}),document.getElementById("spanish").addEventListener("click",function(){document.getElementById("english").classList.remove("active-button"),document.getElementById("english").classList.add("disabled-button"),document.getElementById("spanish").classList.remove("disabled-button"),document.getElementById("spanish").classList.add("active-button"),changeLang("lang_ES")}),document.getElementById("english-mobile").addEventListener("click",function(){document.getElementById("english-mobile").classList.remove("disabled-button"),document.getElementById("english-mobile").classList.add("active-button"),document.getElementById("spanish-mobile").classList.remove("active-button"),document.getElementById("spanish-mobile").classList.add("disabled-button"),changeLang("lang_ENG")}),document.getElementById("spanish-mobile").addEventListener("click",function(){document.getElementById("english-mobile").classList.remove("active-button"),document.getElementById("english-mobile").classList.add("disabled-button"),document.getElementById("spanish-mobile").classList.remove("disabled-button"),document.getElementById("spanish-mobile").classList.add("active-button"),changeLang("lang_ES")});