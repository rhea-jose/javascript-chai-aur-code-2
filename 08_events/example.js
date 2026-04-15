const box= document.querySelector('.box')
box.addEventListener('click',(e)=>{
    e.target.style.backgroundColor='green'
})
box.addEventListener('dblclick',(e)=>{
    e.target.style.backgroundColor='yellow'
    e.target.style.color='black'
})

const button =document.querySelector('.mouse')
button.addEventListener('mouseover',(e)=>{
    e.target.style.color='blue'
    e.target.style.backgroundColor='pink'
    e.target.textContent='Mouseover event'
})
button.addEventListener('mouseout',(e)=>{
    e.target.style.color='aliceblue'
    e.target.style.backgroundColor='grey'
    e.target.textContent='Mouseout event'
})
button.addEventListener('mouseup',(e)=>{
    e.target.style.color='cadetblue'
    e.target.style.backgroundColor='darkslategray'
    e.target.textContent='Mouseup event'
})
button.addEventListener('mousedown',(e)=>{
    e.target.style.color='bisque'
    e.target.style.backgroundColor='brown'
    e.target.textContent='Mousedown event'
})

const keybutton=document.querySelector('.keyboard')
// window.addEventListener('keyup',(e)=>{
//     keybutton.style.backgroundColor='dodgerblue'
//     console.log(e)
// }) //key press karke chodne ke baad hi activity perform hoga
// window.addEventListener('keydown',(e)=>{
//     keybutton.style.backgroundColor='dodgerblue'
//     console.log(e)
// }) //key press karte hi acitivity performed
document.addEventListener('keypress',(e)=>{
    keybutton.style.backgroundColor='dodgerblue'
    // console.log(e)
}) //same as keydown but works only for charcter keys
// key down for alt shift etc too

const wind=document.querySelector('.window')
window.addEventListener('load',(e)=>{
    wind.textContent='Page loaded'
})
window.addEventListener('resize',(e)=>{
    wind.textContent='Resized'
})
window.addEventListener('scroll',(e)=>{
    wind.style.color='red'
})

const form=document.querySelector('#myForm')
form.addEventListener('submit',(e)=>{
    // console.log(e)
    e.preventDefault(); //stops page from reloading
    // alert("Form submitted");
    console.log('FORM SUBMITTED')
})
form.addEventListener('input', (e) => {
    // console.log('Name input:', e.target.value);
});
const emailInput = document.getElementById('email');

emailInput.addEventListener('change', (e) => {
    console.log('Email changed:', e.target.value);
});
const nameInput = document.getElementById('name');
nameInput.addEventListener('focus', () => {
    console.log('Name focused');
});

// BLUR
nameInput.addEventListener('blur', () => {
    console.log('Name blurred');
});


// TIME STAMP
// let lastClick = 0;

// document.addEventListener('click', (e) => {
//     console.log('Time since last click:', e.timeStamp - lastClick);
//     lastClick = e.timeStamp;
// });
let last = 0;

document.addEventListener('click', (e) => {
    if (e.timeStamp - last < 300) {
        console.log('Double click detected');
    }
    last = e.timeStamp;
});