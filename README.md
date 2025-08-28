## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
   Answer:
   ✔ getElementById selects the element with the spefic id and it returns a single element. if does not find result then it returns null.
   example is: const element = document.getElementById("btn-one");

   ✔ getElementsByClassName selects all element with the spefic classname and it returns An HTMLCollection. if you change any element with that class,
   it update automatically.
   example is: const elements = document.getElementsByClassName("call-btn");
   // try with a for loop 
    for (let btn of elements) {
    btn.style.color = "golden";
    }

   ✔ querySelector selects the first element that matches with a CSS selector.
   // will get first element with that class
   example is: const firstElement = document.querySelector(".card-item");

   ✔ querySelectorAll selects all elements that matches with a CSS selector. and return a NodeList.
   // will get aa element with that class
   example is: const allElement = document.querySelector("div h4");

   ## 2. How do you create and insert a new element into the DOM?
   Answer:
   at first I will create an elemnt by using 'document.createElement("tag")' and than will append with parent div
   by using 'document.parentDiv.appendChild(tag)'.
   example is:
   const p = document.createElement("p");
    p.textContent = "This is a paragraph!";
    document.parentDiv.appendChild(p);
    
  ## 3. What is Event Bubbling and how does it work?
   Answer:
    Event bubbling is the process where an event starts at the target element and then "bubbles up" to
    its parents elements and it can be until document.
    example is:    <div id="parent">
    <button id="child">Click</button>
    </div>
    <script>
    document.getElementById("parent").addEventListener("click", () => {
      console.log("Parent has clicked");
    });
    document.getElementById("child").addEventListener("click", () => {
      console.log("Child has clicked");
    });
    </script>
    // now clicking logs will be:
        Child clicked
        Parent clicked

  ## 4. What is Event Delegation in JavaScript? Why is it useful?
  Answer:
  Event Delegation attach one listener to a parent and handle all child events via bubbling.
  example is:  <ul id="nav-menu">
  <li>Home</li>
  <li>About</li>
  <li>Contact</li>
  </ul>

  <script>
  const navMenu = document.getElementById("nav-menu");
  navMenu.addEventListener("click", (event) => {
    if (event.target.tagName === "li") {
    console.log("You clicked:");
    }
    });
    </script>

  ## 5. What is the difference between preventDefault() and stopPropagation() methods?
  Answer:
  ✔ preventDefault() stops the default browser behavior of an event.
  example is:  // stops reloading the page
  document.querySelector("a").addEventListener("click", (e) => {
  e.preventDefault(); 
  console.log("clicked");
  });

  ✔ stopPropagation() stops the event from bubbling up.
  example is:  // stops event bubbling to parent
  document.getElementById("child").addEventListener("click", (e) => {
  e.stopPropagation(); 
  console.log("Child clicked only");
  });
