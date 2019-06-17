const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const nav = document.querySelector('nav')

const navLinks = document.querySelectorAll('nav a')
navLinks[0].textContent = siteContent['nav']['nav-item-1']
navLinks[1].textContent = siteContent['nav']['nav-item-2']
navLinks[2].textContent = siteContent['nav']['nav-item-3']
navLinks[3].textContent = siteContent['nav']['nav-item-4']
navLinks[4].textContent = siteContent['nav']['nav-item-5']
navLinks[5].textContent = siteContent['nav']['nav-item-6']

// Task 3: Utilize .appendChild() and .prepend() to add two new items to the navigation system. You can call them whatever you want.
const navAppendLink = document.createElement('a')
const navPrependLink = document.createElement('a')

nav.appendChild(navAppendLink)
navAppendLink.textContent = 'Reviews'
nav.prepend(navPrependLink)
navPrependLink.textContent = 'Home'

// Task 3: Change the color of the navigation text to be green.
const navLinksGreen = document.querySelectorAll('nav a')

navLinksGreen.forEach(item => {
  item.style.color = 'green'
})

// @@@@@@@@@@ CTA @@@@@@@@@@
const ctaImg = document.getElementById('cta-img')
ctaImg.setAttribute('src', siteContent['cta']['img-src'])

const ctaTag = document.querySelector('h1')
ctaTag.textContent = siteContent['cta']['h1']

const ctaButton = document.querySelector('button')
ctaButton.textContent = siteContent['cta']['button']

// @@@@@@@@@@ Middle Section @@@@@@@@@@
const midImg = document.getElementById('middle-img')
midImg.setAttribute('src',siteContent['main-content']['middle-img-src'])

const contentHeader = document.querySelectorAll('.main-content h4')
contentHeader[0].textContent = siteContent['main-content']['features-h4']
contentHeader[1].textContent = siteContent['main-content']['about-h4']
contentHeader[2].textContent = siteContent['main-content']['services-h4']
contentHeader[3].textContent = siteContent['main-content']['product-h4']
contentHeader[4].textContent = siteContent['main-content']['vision-h4']

const contentText = document.querySelectorAll('.main-content p')
contentText[0].textContent = siteContent['main-content']['features-content']
contentText[1].textContent = siteContent['main-content']['about-content']
contentText[2].textContent = siteContent['main-content']['services-content']
contentText[3].textContent = siteContent['main-content']['product-content']
contentText[4].textContent = siteContent['main-content']['vision-content']

//@@@@@@@@@@ Contact/Footer @@@@@@@@@@
const contactHeader = document.querySelector('.contact h4')
contactHeader.textContent = siteContent['contact']['contact-h4']

const contactInfo = document.querySelectorAll('.contact p')
contactInfo[0].textContent = siteContent['contact']['address']
contactInfo[1].textContent = siteContent['contact']['phone']
contactInfo[2].textContent = siteContent['contact']['email']

const footerCR = document.querySelector('footer')
footerCR.textContent = siteContent['footer']['copyright']