const getTestimonials = fetch("./assets/testimonials.json")
    .then(response => response.json())
    .then(data => {
        return data
    })

    let testimonialsLoaded;

const asignTestimonials = async () => {
    testimonialsLoaded = await getTestimonials;
    console.log(testimonialsLoaded);
}
asignTestimonials();
console.log(testimonialsLoaded);
/*
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