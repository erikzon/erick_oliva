// TESTIMONIALS LOGIC
let carouselCount = 1;
let testimonialInterval;

async function getTestimonial(testimonial) {
    return await fetch("./assets/testimonials.json")
        .then(response => response.json())
        .then(data => {
            return data[testimonial]
        })
}

async function startCarousel() {
    let testimonial = await getTestimonial(carouselCount)
    document.getElementById("review-item").classList.add('fadeOut');
    setTimeout(() => {
        document.getElementById("user-profile-image").src = `${testimonial.userProfileImage}`
        document.getElementById("author").innerHTML = `${testimonial.author}`
        document.getElementById("country-flag").src = `${testimonial.countryFlag}`
        document.getElementById("country-name").innerHTML = `${testimonial.countryName}`
        document.getElementById("review-description").innerHTML = `${testimonial.reviewDescription}`
        document.getElementById("published").innerHTML = `${testimonial.published}`
        document.getElementById("review-item").classList.remove('fadeOut');
    }, 100);
}

const nextTestimonial = () => {
    clearInterval(testimonialInterval)
    carouselCount++
    carouselCount = carouselCount > 4 ? 0 : carouselCount
    startCarousel()
}

const previousTestimonial = () => {
    clearInterval(testimonialInterval)
    carouselCount--
    carouselCount = carouselCount < 0 ? 4 : carouselCount
    startCarousel()
}

document.getElementById("nextTestimonial").addEventListener("click", nextTestimonial)
document.getElementById("previousTestimonial").addEventListener("click", previousTestimonial)



// INTERSECTION LOGIC

const sectionHome = document.getElementById('home')
const sectionAboutMe = document.getElementById('aboutMe')
const sectionSkills = document.getElementById('skills')
const sectionMyPortfolio = document.getElementById('myPortfolio')

const homeNavItem = document.getElementById('homeNavItem')
const aboutMeNavItem = document.getElementById('aboutMeNavItem')
const skillsNavItem = document.getElementById('skillsNavItem')
const myportfolioNavItem = document.getElementById('myportfolioNavItem')

const mobileHomeNavItem = document.getElementById('mobileHomeNavItem')
const mobileAboutMeNavItem = document.getElementById('mobileAboutMeNavItem')
const mobileSkillsNavItem = document.getElementById('mobileSkillsNavItem')
const mobileMyportfolioNavItem = document.getElementById('mobileMyportfolioNavItem')

// SKILLS PROGRESS VAR
const progressJS = document.getElementById('progressJS')
const progressVue = document.getElementById('progressVue')
const progressReact = document.getElementById('progressReact')
const progressTailwind = document.getElementById('progressTailwind')
const progressHTML = document.getElementById('progressHTML')
const progressFirebase = document.getElementById('progressFirebase')
const progressVuetify = document.getElementById('progressVuetify')
const progressBootstrap = document.getElementById('progressBootstrap')
const progressCSS = document.getElementById('progressCSS')
const progressGit = document.getElementById('progressGit')

const styleHomeNavItem = (entry, observador) => {
    switch (entry[0].target.id) {
        case "home":
            if (entry[0].isIntersecting) {
                homeNavItem.classList.add('nav-item-active')
                mobileHomeNavItem.classList.add('nav-item-active')
            } else {
                homeNavItem.classList.remove('nav-item-active')
                mobileHomeNavItem.classList.remove('nav-item-active')
            }
            break;
        case "aboutMe":
            if (entry[0].isIntersecting) {
                aboutMeNavItem.classList.add('nav-item-active')
                mobileAboutMeNavItem.classList.add('nav-item-active')
            } else {
                aboutMeNavItem.classList.remove('nav-item-active')
                mobileAboutMeNavItem.classList.remove('nav-item-active')
            }
            break;
        case "skills":
            if (entry[0].isIntersecting) {
                testimonialInterval = setInterval(() => {
                    carouselCount++
                    carouselCount = carouselCount > 4 ? 0 : carouselCount
                    startCarousel()
                }, 4000);
                skillsNavItem.classList.add('nav-item-active')
                mobileSkillsNavItem.classList.add('nav-item-active')
                progressJS.value = 70
                progressVue.value = 70
                progressReact.value = 20
                progressTailwind.value = 80
                progressHTML.value = 80
                progressFirebase.value = 50
                progressVuetify.value = 70
                progressBootstrap.value = 80
                progressCSS.value = 70
                progressGit.value = 65
            } else {
                clearInterval(testimonialInterval)
                skillsNavItem.classList.remove('nav-item-active')
                mobileSkillsNavItem.classList.remove('nav-item-active')
                progressJS.value = 0
                progressVue.value = 0
                progressReact.value = 0
                progressTailwind.value = 0
                progressHTML.value = 0
                progressFirebase.value = 0
                progressVuetify.value = 0
                progressBootstrap.value = 0
                progressCSS.value = 0
                progressGit.value = 0
            }
            break;
        case "myPortfolio":
            if (entry[0].isIntersecting) {
                myportfolioNavItem.classList.add('nav-item-active')
                mobileMyportfolioNavItem.classList.add('nav-item-active')
            } else {
                myportfolioNavItem.classList.remove('nav-item-active')
                mobileMyportfolioNavItem.classList.remove('nav-item-active')
            }
            break
        default:
            break
    }
}

const observer = new IntersectionObserver(styleHomeNavItem, {
    root: null, rootMargin: '100px 0px 200px 0px', threshold: 0.45
})

observer.observe(sectionHome)
observer.observe(sectionAboutMe)
observer.observe(sectionSkills)
observer.observe(sectionMyPortfolio)
