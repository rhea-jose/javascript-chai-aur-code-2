// we use 
// .getElementById('title') -> .id .className(not class dom me class sirf conflict karta hai so dom structure uses className internally) .getAttribute('id') will give title as o/p
// .getAttribute('class') wil give heading
// to get and set ATTRIBUTES
// .setAttribute('class','test') -> will overwrite 'heading'
// if you want both to be there then .setAttribute('class','test heading') 

// const title=document.getElementById('title')
// title.style.backgroundColor='green'

// TO GET CONTENT AND ADD CONTENT

// > title.textContent //SHOW TEXT THAT MAY BE HIDDEN DUE TO CSS TOO
// < "DOM learning on Chai aur code test text"
// > title.innerHTML //SHOW ALL HTML WITHIN CHOSEN ELEMENT
// < "DOM learning on Chai aur code <span style=\"display: none;\">test text</span>"
// > title.innerText //ONLY SHOW VISIBLE TEXT
// < "DOM learning on Chai aur code"

// Get first h1 on the page
// > document.querySelector('h1')
// < <h1 id="title" class="heading">
// "DOM learning on Chai aur code "
// <span style="display:none;">test text</span>
// </h1>

// querySelector('h1')
// querySelector('#title') //id
// querySelector('.heading') //class
// (input[type='password']) //input->element and type is its attribute

// document.querySelector('p:first-child') use like css selectors are used normally
// NODE LISTS AND HTML COLLECTIONS ARENT PURE ARRAYS
// CHECK THEIR PROTOPTYPE TO KNOW THAT FOR EACH CAN BE APPLIED BUT MAP, FILTER ETC CANT BE

const temp = document.querySelectorAll('li')
// since node list you cant do stuff like
// temp.style.borderRadius="20px"
// temp[0].style.borderRadius="20px" this is allowed

// for each nahi lagta hai html collection pe par node list pe lag jata hai -> check prototype
// toh pehle html collection ko convert karna padega
// use Array.from(htmlcollection)