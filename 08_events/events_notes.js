/*

EVENT PROPERTIES:
Refer to example.html and example.jss and style1.css
I have covered them there
(1) type
    button.addEventListener("mouseenter", (event) => {
        console.log(event.type); // "mouseenter"
    });
    event.type = string representing the event name
    
    Mouse Events
    click
    dblclick
    mousedown : when mouse is pressed (like start to drag)
    mouseup : when mouse is left after drag
    mouseover 
    mouseout

    Window / Document Events
    load
    resize
    scroll

    Form Events
    submit
    change
    input
    focus
    blur

    Keyboard Events
    keydown
    keyup
    keypress (less used now)

(2) TIMESTAMP
    In JavaScript events, the timestamp tells you when the event occurred.
    e.timeStamp
👉 It gives the time (in milliseconds) at which the event was created.
🔹 What does this number mean?
It’s milliseconds since the page started loading
Not actual clock time (like 10:30 AM)
*/