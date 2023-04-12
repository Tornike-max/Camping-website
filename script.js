const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnOpenModal = document.querySelector('.btn--show-modal');
const allSection = document.querySelectorAll('.section')
const section1 = document.querySelector('#section--1')
const header = document.querySelector('.header-background');
const slides = document.querySelectorAll('.slide')
const btnLeft = document.querySelector('.slider__btn--left')
const btnRight = document.querySelector('.slider__btn--right')
const dotsContainer = document.querySelector('.dots');

const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav__link')

const btnScrollTo = document.querySelector('.btn-scroleTo')

//tabs
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabContent = document.querySelectorAll('.operations__content')

let navbarLinks = document.getElementById('navBarLinks');
let toggleButton = document.getElementById('burgerBar');


toggleButton.addEventListener('click', function(){
    navbarLinks.classList.toggle('active');
})


const openModal = function(e){
    e.preventDefault();
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModal = function(e){
    e.preventDefault();
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

btnOpenModal.addEventListener('click',openModal);
btnCloseModal.addEventListener('click',closeModal);
overlay.addEventListener('click',closeModal);


nav.addEventListener('mouseover', function(e){
    if(e.target.classList.contains('nav__link')){
        const link = e.target;
        const siblings = link.closest('.nav').querySelectorAll('.nav__link');
        const logo = link.closest('.nav').querySelector('img')

        siblings.forEach(function(el){
            if(el !== link){
                el.style.opacity = 0.5;
                el.style.transition = '0.5s'
            }
        })
        logo.style.opacity = 0.5
        logo.style.transition = '0.5s'
    }
})

nav.addEventListener('mouseout', function(e){
    if(e.target.classList.contains('nav__link')){
        const link = e.target;
        const siblings = link.closest('.nav').querySelectorAll('.nav__link');
        const logo = link.closest('.nav').querySelector('img')

        siblings.forEach(function(el){
            if(el !== link){
                el.style.opacity = 1;
                el.style.transition = '0.5s'
            }
        })
        logo.style.opacity = 1;
        logo.style.transition = '0.5s'
    }
})



const navHeight = nav.getBoundingClientRect().height;
const fixedNav = function(entries){
    const [entry] = entries;
    console.log(entry);
    if(entry.isIntersecting === false){
        nav.classList.add('fixed');
        nav.style.transition = '0.5s';
    }else{
        nav.classList.remove('fixed');
        
    }
}

const observer = new IntersectionObserver(fixedNav,{
    root:null,
    threshold:0,
    rootMargin:`${navHeight}px`, 
})
observer.observe(header)





btnScrollTo.addEventListener('click',function(e){
    // ესეც შეიძლება
    // let cords = section1.getBoundingClientRect();
    // window.scrollTo({
    //     left: cords.left + window.pageXOffset,
    //     top: cords.top + window.pageYOffset,
    //     behavior:'smooth',
    // })
    // და ესეც
    section1.scrollIntoView({behavior: "smooth"})
})


//scroll nav
document.querySelector('.nav-tags').addEventListener('click',function(e){
    e.preventDefault()
    if(e.target.classList.contains('nav__link')){
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({behavior:'smooth'})
    }
})


// const tabs = document.querySelectorAll('.operations__tab');
// const tabsContainer = document.querySelector('.operations__tab-container');
// const tabContent = document.querySelector('.operations__content')

tabsContainer.addEventListener('click',function(e){
     const clicked = e.target.closest('.operations__tab');
     
     if(!clicked) return;
     tabs.forEach(tab=> tab.classList.remove('operations__tab--active'))
     tabContent.forEach(content=> content.classList.remove(`operations__content--active`))
     clicked.classList.add('operations__tab--active')

     document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active')
     
})


const sectionFunction = function(entries,observer){
    const[entry] = entries;
    if(!entry.isIntersecting) return;
    entry.target.classList.remove('section-hidden')
    observer.unobserve(entry.target)
}

const sectionObserver = new IntersectionObserver(
    sectionFunction,{
        root:null,
        threshold:0.15,
    }
)

allSection.forEach(s=>{
    sectionObserver.observe(s)
    s.classList.add('section-hidden')
})


const imgTargets = document.querySelectorAll('img[data-src]');
console.log(imgTargets)

let imgObsFunc = function(entries,observer){
    const[entry] = entries
    console.log('entries',entry)
    entry.target.src = entry.target.dataset.src
    entry.target.classList.remove('blur-image')
}

let imgObserver = new IntersectionObserver(imgObsFunc,{
    root:null,
    threshold:0,
    
});

imgTargets.forEach(img=> imgObserver.observe(img));



// slider
let currentSlide = 0
let maxSlide = slides.length;


let getSlides = function(slide){
    slides.forEach((img,i)=> {
        img.style.transform = `translateX(${100 * (i - slide)}%)`
    })
}
getSlides(0)


const createDots = function(){
    slides.forEach((_,i) => {
        dotsContainer.insertAdjacentHTML('beforeend', `<button class="dots_dot " data-slide="${i}"></button>`)
   })
 }
 createDots(slides)
 
 
 const activateDot = function(slide){
      document.querySelectorAll('.dots_dot').forEach((dot)=>{
         dot.classList.remove('dots-active');
      })

      document.querySelector(`.dots_dot[data-slide="${slide}"]
      `)
      .classList.add('dots-active');
 };


let nextSlide = function(){
    if(currentSlide === maxSlide -1){
        currentSlide = 0;
    }else{
        currentSlide++
    }
    getSlides(currentSlide)
    activateDot(currentSlide)
}
let prevSlide = function(){
    if(currentSlide === 0){
        currentSlide = maxSlide - 1
    }else{
        currentSlide--;
    }
    getSlides(currentSlide)
    activateDot(currentSlide)
}
btnRight.addEventListener('click', nextSlide)
btnLeft.addEventListener('click', prevSlide)

document.addEventListener('keydown',function(e){
    if(e.key === 'ArrowRight') return nextSlide();
    if(e.key === 'ArrowLeft') return prevSlide();
})


dotsContainer.addEventListener('click', function(e){
    if(e.target.classList.contains('dots_dot')){
        const {slide} = e.target.dataset;
        getSlides(slide)
        activateDot(slide)
    }
})













// const cords = section1.getBoundingClientRect();
// console.log(cords)

// console.log(window.scrollY)
// window.addEventListener('scroll', function(){
//     if(window.scrollY > cords.top){
//         nav.classList.add('fixed');
//         nav.style.transition = '0.3s';
//     } else{
//         nav.classList.remove('fixed');
//         nav.style.transition = '0.3s';
//     }
     
// })


// const h1 = document.querySelector('.middle-header');

// // ეს ამოწმებს ნებისმიერ ძმა ელემენტს რომელიც მის წინ არის.
// console.log(h1.previousElementSibling);
// // ეს ამოწმებს ნებისმიერ ძმა ელემენტს რომელიც მის შემდეგ არის.
// console.log(h1.nextElementSibling);

// console.log(h1.parentElement);

// [...h1.parentElement.children].forEach((el)=>{
//     if(h1 !== el) el.style.transform = `scale(0.5)`
// })











//  const randomInt = function(min,max){
//     return Math.floor(Math.random() * (max - min + 1) - min);
//  }

//  const randomColor = ()=> `rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`;
//  console.log(randomColor(0,255))
// //თუ მესამე პარამეტრად true-ს დავუწერთ მაშინ  პირველს currentTarget element-ის ნაცვლად გამოიტანს იმას რომელსაც true მივანიჭეთ.
//  document.querySelector('.nav').addEventListener('click', function(e){
//     e.preventDefault();
//     console.log('navigation',e.target === this)
//     this.style.backgroundColor = randomColor()
//  },true)

//  document.querySelector('.nav-tags').addEventListener('click', function(e){
//     e.preventDefault();
//     console.log('tags',e.target === this)
//     this.style.backgroundColor = randomColor()
//  })


//  document.querySelector('.nav__link').addEventListener('click', function(e){
//     e.preventDefault();
//     console.log('nav-link',e.target === this)
//     this.style.backgroundColor = randomColor()
//  })





// // ასე შეგვიძლია ავირჩიოთ მთ₾იანი body
// console.log(document.body)

// // ვირჩევთ ყველა სექციას რომელიც ამ კლასით გვაქვს არჩეული:ანრუნებს nodeList-ს; nodeList-ზე შეგვიძლია forEach-ის გამოყენება
// console.log(document.querySelectorAll('.section'))

// //აბრუნებს htmlColections-ს რომელშიც იქნება ყველა button-ი,მაგრამ მაგალითად თ რომელიმე ელემენტი წაიშლება htmlColections-ი განახლდება
// let allButtons = document.getElementsByTagName('button')
// console.log(allButtons)


// //append da prependis ერთად გამოყენება არ შეიძლება. თუ გვინდა რომ ორგან ჩანდეს ჩვენი ქუქი მესიჯი მაშინ უნდა გამოვიყენოთ 
// // header.prepend(message.cloneNode(true))
// let header = document.querySelector('.header-background')
// let message = document.createElement('div');
// message.classList.add('cookie');
// message.innerHTML = `
//    we use cookies to fuck everyone <button class='middle-btn btn-close-cookie'>got it</button>
// `;

// header.prepend(message)
// // header.prepend(message.cloneNode(true))

// //ასევე არის before და after-იც რომლებიც მოქმედებენ ასე:
// // აქ ვეუბნებით რომ message გამოიყენე header-მდე
// // header.before(message)

// //ხოლო აქ ვეუბნებით რომ გამოიყენე header-ის შემდეგ
// // header.after(message)

// let closeCookie = document.querySelector('.btn-close-cookie');
// closeCookie.addEventListener('click',function(e){
//     e.preventDefault()
//     message.remove()
// })


// //styles
// //ასე შეგვიძლია ელემენტიდან სტილების წაკითხვა
// console.log(getComputedStyle(message).color)
// console.log(getComputedStyle(message).height)

// // message- სიმაღლე = რადგან getComputedStyle(message).height აბრუებს სტრინგს ამიტომ ჩვენ სტრინგს ვერ მივუმატებთ რიცხვს. სწორედ ამიტომ Number.parseInt-ით 
// // გადავაქცევთ ნამბერად და შემდეგ ვუმატებთ.
// message.style.height = Number.parseInt(getComputedStyle(message).height + 40)+ 30 + 'px';

// //შეგვიძლია ლოგოდან ამოვიღოთ ატრიბუტები და ასევევ მიბანიჭოთ ატრიბუტები
// let logo = document.querySelector('.header-logo')
// logo.setAttribute('company','Ozbank')
// console.log(logo.getAttribute('company'))
// console.log(logo.src)

// //dataset
// console.log(logo.dataset.versionNumber)
