const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnOpenModal = document.querySelector('.btn--show-modal');
const allSection = document.querySelectorAll('.section')
const section1 = document.querySelector('#section--1')

const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav__link')

const btnScrollTo = document.querySelector('.btn-scroleTo')


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
