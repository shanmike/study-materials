## HTML / CSS

### What is CSS selector specificity and how does it work?

CSS selectors are used to target HTML Elements on our pages that we want to style.

-**Class**:   	  className =”index” will match any element that has class of “index”
-**ID**:          #id will match the element that has the ID of “id”
-**Type**:     	  div will match any `<div>` element
-**Attribute**:   [type] will match all elements that have type attribute set
-**Sibling**:     h2 + p will match all `<p>` elements that directly follow and `<h2>`
-**Child**:       ul > li will match all `<li>` elements that are nested directly inside a `<ul>`
-**Descendant**:  div span will match all `<span>` elements that are inside of a `<div>`

### Describe the box model.

The box model is used to position HTML elements when laying out a documents, the browser represents each element as a rectangular box. Every box is composed of four areas, defined by their edges. *Content, Padding, Border, and Margin.*

-**Content**: This contains the content of the element such as text, image, or background
-**Padding**: Bounded by the padding edge, extends the content area to include the elements padding. 
-**Border**: Bounded by the border edge, extends the padding area to include the elements borders.
-**Margin**: Bounded by the margin edge, extends the border area to include an empty area used to separate the element from its neighbors. 

### Describe Pseudo selectors in CSS.
### What are the different properties for position and how do they work?
### What's the difference between a relative, fixed, absolute and statically positioned element?
### What is the transform property and how does it work?
### Describe Floats and how they work.
### What are the different ways to visually hide content (and make it available only for screen readers)?
### What's the difference between inline and inline-block?

## JAVASCRIPT

### What is a closure, and how/why would you use one?

Closures are formed when a inner function (nested function) is defined inside of outer function, allowing access to the outer functions variables. Closures retain state and scope. Returning the nested function allows you to maintain access to the inner, outer, and global variables and arguments.


*outer function scope enclosing the inner function (function within a function)*
function outer() { 
*num is a local variable created by outer*              
	     var num = 1; 
*inner() is the inner function, a closure*
	     function inner(){
*inner can access outer's local variables because of scope*
*inner modifies num  and returns the new value*           
		num++; 
console.log(‘The current value of num: ‘, num’);     
     
*outer returns inner*
     return inner;
}
*outer is invoked and inner is returned*
var closure1 = outer();
*Since closure1  is a function, we can invoke it.*
closure1();

### Describe context.

Context is always the value of this, which is a reference to the object that owns the code that is currently being executed.

### What is hoisting?
### What’s the difference between a for loop and a for in loop?
### Can you describe the main difference between a forEach loop and a .map() loop and why you would pick one versus the other?
### Describe square bracket notation and when you would use it (hint arrays and objects).
### Describe 3 ES6 features and how they differ from ES5.
### What are the differences between ES6 class and ES5 function constructors?
### Describe how scoping works in JavaScript.
### Explain how to handle errors in JS.
### How does inheritance work in JavaScript ?
### What is a prototype in JavaScript?
### What’s the difference between == and === in JavaScript?
### What is event bubbling in the DOM?
### Explain let vs var.
### What's the difference between a variable that is: null, undefined or undeclared?
### How would you go about checking for any of these states?
### What's a typical use case for anonymous functions?
### What's the difference between host objects and native objects?
### What's the difference between .call and .apply?
### What's the difference between an "attribute" and a "property"?
### What is an example of an immutable object in JavaScript?
### What are the pros and cons of immutability?
### How can you achieve immutability in your own code?
### Why is it called a Ternary operator, what does the word "Ternary" indicate?
### What is "use strict";? what are the advantages and disadvantages to using it?
### What is event loop?
### What is the difference between call stack and task queue?
### What advantage is there for using the arrow syntax for a method in a constructor?
### What is the definition of a higher-order function?
### Can you give an example for destructuring an object or an array?
### Can you give an example of a curry function and why this syntax offers an advantage?
### What are the benefits of using spread syntax and how is it different from rest syntax?
### Why you might want to create static class members?
### What are the pros and cons of using Promises instead of callbacks?

## REACT

### What is a component?
### What’s the difference between an element and a Component?
### What is setState and what does it do?
### What are the differences between a class component and a functional component?
### What are refs in react?
### What are keys in react and why should we use them with lists?
### What are React lifecycle events?
### Explain Ajax in as much detail as possible and what the advantages / disadvantages are?
### Where should you make AJAX requests?
### How is React different from vanilla JS, jQuery, and Angular?
### What is unidirectional data flow in React?
### How can you as a developer force a react component to require certain props to exist on this.props?