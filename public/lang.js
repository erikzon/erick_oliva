async function getLang(lang) {
    return await fetch(`./assets/${lang}.json`)
        .then(response => response.json())
        .then(data => {
            return data
        })
}

async function changeLang(lang) {
    let currentLang = await getLang(lang)
    //TODO: add blackdiv as transition to change the language 
    // document.getElementById("changeLanguageDiv").classList.add('fadeIn');
    document.getElementById("txtHello").innerHTML = `${currentLang.txtHello}`;
}

// set all the text at loadtime
changeLang("lang_ES");

//language selector nav logic
document.getElementById("english").addEventListener("click", function () {
    document.getElementById("english").classList.remove("disabled-button")
    document.getElementById("english").classList.add("active-button")
    document.getElementById("spanish").classList.remove("active-button")
    document.getElementById("spanish").classList.add("disabled-button")
    changeLang("lang_ENG");
});

document.getElementById("spanish").addEventListener("click", function () {
    document.getElementById("english").classList.remove("active-button")
    document.getElementById("english").classList.add("disabled-button")
    document.getElementById("spanish").classList.remove("disable-button")
    document.getElementById("spanish").classList.add("active-button")

    changeLang("lang_ES");
});