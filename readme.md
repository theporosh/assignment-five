
---
## Create Readme

You have to create a `Readme.md` file. and write down following questions. Dont Try to copy paste from AI Tools. Just write what you know about these. If you don't know , then search , learn , understand and then write.

### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?
---

### Answer to the Question number 1
 
 The difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll is below:

(i). **getElementById**

1. We can find a specific element from the HTML document using its ID
2. getElementById one element can return
3. HTMLElement type of object can return
4. It is return null if certain element do not exist
5. Example of use: const myName = document.getElementById("my-name")
In html file there is only one id that has name used like this : id =  "my-name"


(ii). **getElementsByClassName**

1. If we need some element from the HTML document that has certain class name then we can use getElementsByClassName.
2. We can get multiple element.
3. It is return HTML Collection array like object
4. If matching element not found then it is return and empty collection which length is 0. HTMLCollection []
5. Example of use: const className = document.getElementsByClassName("class-five")
  In html file there is some class that has name : class = "class-five" 

(iii) **querySelector**

1. It returns the first matching element according to the CSS selector.
2. Returns an HTMLElement, or null if not found.
3. With this we can use id, class, tag, or any CSS selector. 
4. Example of use : const firstItem =  document.querySelector("#dhaka p");
5. Example of use : const firstTitle =  document.querySelector(".main-title");


(iv) **querySelectorAll**

1. It returns a NodeList of all matching elements.
2. NodeList is like an array, in which we can loop (forEach or other).
3. We can use it to select like a CSS selector.
4. It return NodeList(3)[li.foreign, li.foreign, li.foreign] array like object
5. It is return an empty array like object NodeList [] if the element not found on document
6. Example one: Assuming we have a list item that parent class is food and there some list class item naming foreign then we can write:  document.querySelectorAll(".food . foreign")
7. Example two: Assuming we have parent element that has an id name dhaka that child element p we need then we can write: document.querySelectorAll("#dhaka p")


### Answer to the Question number 2

To create and insert a new element into the DOM the steps are below:

## Create the Element
I can use document.createElement() to create a new element (like div, li, p etc)

Example: const newElement = document.createElement("li")

## Set Attributes

We can add remove any style by using classList

Example: newElement.classList.add("bg-white")

We can also set value by using innerText

Example: foodElement.innerText = "Snakes Item"

## Insert into the DOM

We can use append() for insert new element into the DOM

For example: create and insert an new element into the DOM
<body>
  <div id="container"></div>
  <script>
    const newElement = document.createElement("div");
    newElement.innerText = "This is a new element!";
    newElement.classList.add("box");
    const container = document.getElementById("container");
    container.append(newElement);
  </script>
</body>

### Answer to the Question number 3

Event bubbling is a mechanism in the DOM where an event starts from the target element 
(where the event happened) and then bubbles up to its parent, grandparent, and so on — all the way up to the root html document. If we click on child element then that event also trigger on parent element.

How does it works explain with example below:

Suppose i have this html code:
<div id="parent">
  <button id="child">Click Me</button>
</div>

JavaScript Code:

document.getElementById("child").addEventListener("click", function () {
  console.log("Child clicked");
});

document.getElementById("parent").addEventListener("click", function () {
  console.log("Parent clicked");
});

Now if we click the child button, the output will be:

Child clicked
Parent clicked

Because the click event:

Happened on child
Then bubbled up to parent


### Answer to the Question number 4

Event Delegation is a technique where can attach a single event listener to a parent element, and then use that to handle events for its child elements — even if they’re added dynamically.

It is useful for below:
1. Use of event handler for parent element we can apply it for child element.
2. Instead of adding event listeners to every single child element (like each button or list item), add just one listener to the parent. That listener "catches" bubbled events and determines which child was actually clicked. This works because of Event Bubbling.
3. It is also help for memory optimization.
4. Event Delegation = Letting parent elements handle events for their children, using bubbling.


### Answer to the Question number 5

(i). **stopPropagation()**

1. If we want to stop the event bubbling then we can use event.stopPropagation() method.
This prevents the event from going up the DOM tree. So the event stops from bubbling up to parent elements.

(ii). **preventDefault()**

1. It stops the default action of an element from happening.
Specially When the browser to perform its default behavior (like submitting a form). Then we can stop the 
default mechanism by using preventDefault(e) it like this.






