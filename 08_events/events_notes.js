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

(3) PREVENT DEFAULT
stop browser's default action for an event
🔹 What is a “default action”?
Browsers have built-in behaviors. For example:
Clicking a link → opens a new page
Submitting a form → reloads the page
Right-click → opens context menu
👉 preventDefault() stops these.

(4) TARGET
e.target tells you which exact element triggered the event.
🔹 Example
<ul id="list">  <li>Item 1</li>  <li>Item 2</li></ul>
document.getElementById('list').addEventListener('click', (e) => {    console.log(e.target);});
👉 If you click on Item 2, output will be:
<li>Item 2</li>

🔥 Even if listener is on parent
The event listener is on <ul>, but:
e.target = actual clicked element (li)
NOT the parent (ul)

🔹 target vs currentTarget
document.getElementById('list').addEventListener('click', (e) => {
    console.log('target:', e.target);
    console.log('currentTarget:', e.currentTarget);
});
👉 If you click <li>:
Property	Value
e.target	<li> (clicked element)
e.currentTarget	<ul> (listener attached here)

🔥 Real-world analogy
You complain to a manager (listener on parent)
The actual person responsible = target

(5) TAGNAME
tagName tells you the HTML tag of an element.
🔹 With events (very common 🔥)
document.addEventListener('click', (e) => {
    console.log(e.target.tagName);
});
👉 If you click:
button → BUTTON
div → DIV
li → LI
Works only on element nodes (not text nodes)
Great question — this is core DOM understanding and super useful for debugging weird JS behavior.

---

## 🔹 What are “nodes” in the DOM?

The browser represents your HTML as a **tree of nodes**.

👉 Everything is a **node**:

* Elements
* Text
* Comments
* etc.

---

## 🔹 1. Element Node

👉 Represents an **HTML tag**

### Example:

```html
<p>Hello</p>
```

* `<p>` → **element node**

```javascript
const p = document.querySelector('p');
console.log(p.nodeType); // 1
```

👉 `nodeType = 1` means **element node**

---

## 🔹 2. Text Node

👉 Represents the **text inside an element**

Same example:

```html
<p>Hello</p>
```

* `"Hello"` → **text node**

```javascript
const p = document.querySelector('p');
console.log(p.firstChild); 
```

👉 Output:

```text
"Hello"
```

```javascript
console.log(p.firstChild.nodeType); // 3
```

👉 `nodeType = 3` means **text node**

---

## 🔥 Visual Tree

```html
<p>Hello</p>
```

DOM looks like:

```text
<p>        ← element node (1)
  "Hello"  ← text node (3)
</p>
```

---

## 🔹 Key Differences

| Feature       | Element Node | Text Node    |
| ------------- | ------------ | ------------ |
| Represents    | HTML tag     | Text content |
| Example       | `<div>`      | `"Hi"`       |
| nodeType      | 1            | 3            |
| Has children? | Yes          | No           |

---

## 🔹 Common confusion 🔥

```html
<ul>
  <li>Item</li>
</ul>
```

```javascript
const ul = document.querySelector('ul');
console.log(ul.childNodes);
```

👉 You might see:

```text
[text, li, text]
```

Why?
👉 Because spaces/newlines are also **text nodes**

---

## 🔹 Fix: Use `children` instead

```javascript
ul.children
```

👉 Only gives **element nodes (li)**

---

## 🧠 Quick memory trick

* Element node → **tag**
* Text node → **content inside tag**

---

## 🔥 Real-world relevance

* `e.target` can sometimes be a **text node**
* That’s why people use:

```javascript
if (e.target.tagName === 'LI')
```

👉 to ensure it's an element

---

If you want, I can show a **bug caused by text nodes in event delegation** — very common and tricky 👀

(6) RELATED TARGET
🔥 Understanding relatedTarget
target → where event happened
relatedTarget → where it came from / going to

(7) CLIENTX AND CLIENT Y
These are properties of a mouse event that tell you where the mouse pointer is located inside the browser window (viewport).
e.clientX  // horizontal position (X-axis)
e.clientY  // vertical position (Y-axis)
-------------------------
| (0,0)                |
|                     |
|        (x,y) ← click|
|                     |
-------------------------
| Property    | Reference point             |
| ----------- | --------------------------- |
| `clientX/Y` | Viewport (visible area)     |
| `pageX/Y`   | Full page (includes scroll) |
| `screenX/Y` | Entire screen               |
🔹 Example difference
If you scroll down:
clientY → stays relative to visible screen
pageY → increases because page is longer
🔹 Practical uses
Drawing apps 🎨
Drag & drop
Custom tooltips
Games

(7) SCREENX SCREENY
These properties tell you the mouse position relative to your entire physical screen, not just the browser window.
🔹 When is it useful?
Multi-window positioning
Popups alignment
Desktop-like web apps
👉 Rare in normal web apps, but useful in advanced UI

(8) altkey,ctrlkey,shiftkey
e.altKey, e.ctrlKey, e.shiftKey
They tell you whether a specific key was being held down when the event happened.
🔹 Basic idea
e.altKey    // true if Alt key pressed
e.ctrlKey   // true if Ctrl key pressed
e.shiftKey  // true if Shift key pressed
🔹 Practical uses
Keyboard shortcuts (Ctrl + S, Ctrl + C, etc.)
Multi-select (Shift + click)
Advanced UI interactions

Quick memory trick
ctrlKey → control actions
shiftKey → selection / range
altKey → alternate behavior

(9) KEY AND CODE
1. e.key (BEST 🔥)
Gives the actual key value
document.addEventListener('keydown', (e) => {
    console.log(e.key);
});
👉 Output:
a
Enter
Shift
e.code
Gives the physical key on keyboard
document.addEventListener('keydown', (e) => {
    console.log(e.code);
});
👉 Output:
KeyA
Enter
ShiftLeft
*/