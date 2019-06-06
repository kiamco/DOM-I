const siteContent = {
    "nav": {
        "nav-item-1": "Services",
        "nav-item-2": "Product",
        "nav-item-3": "Vision",
        "nav-item-4": "Features",
        "nav-item-5": "About",
        "nav-item-6": "Contact",
        "nav-item-7": "Videos",
        "nav-item-8": "Gallery",
        "img-src": "img/logo.png"
    },
    "cta": {
        "h1": "DOM Is Awesome",
        "button": "Get Started",
        "img-src": "img/header-img.png"
    },
    "main-content": {
        "features-h4": "Features",
        "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "about-h4": "About",
        "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "middle-img-src": "img/mid-page-accent.jpg",
        "services-h4": "Services",
        "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "product-h4": "Product",
        "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "vision-h4": "Vision",
        "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    },
    "contact": {
        "contact-h4": "Contact",
        "address": "123 Way 456 Street Somewhere, USA",
        "phone": "1 (888) 888-8888",
        "email": "sales@greatidea.io",
    },
    "footer": {
        "copyright": "Copyright Great Idea! 2018"
    },
};

//get nav value
const getNavValue = (obj) => {
    let keyArr = [];
    Object.values(obj).forEach(value => {
        keyArr.push(value);
    });
    keyArr.length = keyArr.length - 1;
    return keyArr;
}


// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);


// insert header data --------------------------------------------------------


let nav = document.querySelector('nav');
let addA = document.createElement('a');
addA.href = "#"
let addA2 = document.createElement('a')
addA2.href = "#";
nav.prepend(addA2);
nav.appendChild(addA);

let navA = document.querySelectorAll('nav a');
let navAText = siteContent.nav;

navA.forEach((el, i) => {
    el.textContent = getNavValue(navAText)[i];
});

navA.forEach(el => el.style.color = "green")

// update image path -------------------------------------
const bigImage = document.getElementById('cta-img');
bigImage.setAttribute('src', siteContent["cta"]["img-src"]);

// update middle-img -------------------------------------
const midImage = document.getElementById('middle-img');
midImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// add header text ----------------------------------------
const headerText = document.querySelector('.cta-text h1');
headerText.textContent = siteContent["cta"]["h1"];

// add button text
const btn = document.querySelector(".cta-text button");
btn.textContent = siteContent["cta"]["button"];


// get main content ----------------------------------------
const getMainCon = () => {
    mainCon.forEach((el, i) => {
        if ((i) % 2 == 0) {
            mainH4.push(el);
        } else {
            mainP.push(el);
        }
    });
}

// set main content ----------------------------------------
const setMainCon = () => {
    contentHeader.forEach((el, i) => {
        el.textContent = mainH4[i];
    });

    contentP.forEach((el, i) => {
        el.textContent = mainP[i];
    });

}

// fill main top content ----------------------------
const contentHeader = document.querySelectorAll('.text-content h4');
const contentP = document.querySelectorAll('.text-content p');
const mainCon = Object.values(siteContent['main-content']);
mainCon.splice(4, 1); //take out unecessary element 

let mainH4 = [];
let mainP = [];

getMainCon();
setMainCon();

// create contact -----------------------------------
const contactH4 = document.querySelector('.contact h4');
const contactP = document.querySelectorAll('.contact p');
const contactInfo = Object.values(siteContent['contact']);
contactInfo.splice(0, 1);
contactH4.textContent = siteContent['contact']['contact-h4'];
contactP.forEach((el, i) => {
    el.textContent = contactInfo[i];
})


// fill footer ---------------------------------------
const footer = document.querySelector('footer');
footer.textContent = siteContent['footer']['copyright'];