'use strict'


const login = document.querySelector('.main-login')

const register = document.querySelector('.main-register')

const buttons = document.querySelectorAll('.load-form')

const buttonsHeader = document.querySelector('div#sign-buttons')

const menuButton = document.querySelector('div#menu')

const ul = document.querySelector('ul')

const nav = document.querySelector('nav')

// buttons.addEventListener('click', () =>{
//     login.classList.add('form-selected')
//     register.classList.add('form-selected')
// })

// buttons.addEventListener('onclick', () =>{

//     login.classList.add('form-selected')
//     register.classList.add('form-selected')
// })

// buttons.onclick = () =>{
//     login.classList.add('form-selected')

//     register.classList.add('form-selected')
// }


addEventListener('DOMContentLoaded', loadForm())

function loadForm(){
    
    buttons.forEach((button) =>{
        button.addEventListener('click', (clicked) =>{

            // if (clicked.target.closest('div')) {
            //     buttons.forEach((button) =>{
            //         button.classList.remove('button-header-selected')
            //     })
            //     clicked.target.classList.add('button-header-selected')
            // }

            if (clicked.target.textContent === 'Sign Up') {

                login.classList.add('sign-up-selected')
                login.style.opacity = 0

                register.classList.add('sign-up-selected')
                register.style.opacity = 1

                
                 buttonsHeader.firstElementChild.classList.remove('button-header-selected')
                 buttonsHeader.lastElementChild.classList.add('button-header-selected')

   

            } else if(login.classList.contains('sign-up-selected')){
                register.classList.remove('sign-up-selected') 
                register.style.opacity = 0

                login.classList.remove('sign-up-selected')
                login.style.opacity = 1
                
                 

                buttonsHeader.firstElementChild.classList.add('button-header-selected')
                 buttonsHeader.lastElementChild.classList.remove('button-header-selected')

                // login.classList.add('sign-in-selected')
                // register.classList.add('sign-in-selected')

            }

           
        })
    } )
}


menuButton.addEventListener('click', () =>{
    // if ( nav.style.visibility === 'hidden') {
    //     nav.style.visibility = 'visible'
    // }else{
    //     nav.style.visibility = 'hidden'
    // }
    
    if (nav.classList.contains('clicked')){
        nav.classList.remove('clicked')
    }else{
        nav.classList.add('clicked')
    }
    
    
})