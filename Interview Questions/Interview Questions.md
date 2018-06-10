# HTML / CSS

### What is CSS selector specificity and how does it work?

CSS selectors are used to target HTML Elements on our pages that we want to style.

* **Class**: `className ='index'` will match any element that has class of “index”
* **ID**: `#id` will match the element that has the ID of “id”
* **Type**: `div` will match any `<div>` element
* **Attribute**: `[type]` will match all elements that have `type` attribute set
* **Sibling**: `h2 + p` will match all `<p>` elements that directly follow an `<h2>`
* **Child**: `ul > li` will match all `<li>` elements that are nested directly inside a `<ul>`
* **Descendant**: `div span` will match all `<span>` elements that are inside of a `<div>`

### Describe the box model.

The box model is used to position HTML elements when laying out a documents, the browser represents each element as a rectangular box. Every box is composed of four areas, defined by their edges. *Content, Padding, Border, and Margin.*

* **Content**: This contains the content of the element such as text, image, or background
* **Padding**: Bounded by the padding edge, extends the content area to include the elements padding. 
* **Border**: Bounded by the border edge, extends the padding area to include the elements borders.
* **Margin**: Bounded by the margin edge, extends the border area to include an empty area used to separate the element from its neighbors. 

### Describe Pseudo selectors in CSS.

A Pseudo selector specifies a style based state of the selected element. 
Examples: *Hover, Active, Disabled, Nth-child, Visited, etc.*

* **Hover**: `:hover` is triggered when the user hovers over an element with a mouse
* **Active**: `:active` is triggered when the user clicks on an element, and ends with it is released
* **Disabled**: `:disabled` represents disabled elements that can't be activated (selected, clicked, typed into, etc) If enabled, the element can then be activated or accept focus
* **Nth-child**: `:nth-child()` is specified with a single arguement, which represents the pattern for matching elements
* **Visited**: `:visited:` represents linked that the user has already visited

### What are the different properties for position and how do they work?
The position property specifies the type of positioning method used for an element *Static, Relative, Absolute, Fixed, or Sticky*

* **Static**: `position: static;` Every element has a static position by default, `top`, `left`, `right`, and `bottom` will have no effect on that element
* **Relative**: `position: relative;` Elements original position remains in the flow of document, but now `top`, `left`, `right`, and `bottom` will work and position the element in that direction
* **Absolute**: `position: absolute;` Element is removed from the flow of the document and is positioned relative to the nearest positioned ancestor. It can then be positioned by `top`, `left`, `right`, and `bottom` 
* **Fixed**: `position: fixed;` Element is removed from flow, almost like absolute, but only fixed positioned elements remain relative to the document, allowing it to stay in place even if the page is scrolled. It can then be positioned by `top`, `left`, `right`, and `bottom` 
* **Sticky**: `position: sticky;` It’s like a relative and fixed element, until the scroll location reaches a specific threshold. It then takes on a fixed position where its told to stick in place.

### What is specificity?
### What is the transform property and how does it work?
### Describe Floats and how they work.
### What are the different ways to visually hide content?
### What's the difference between inline and inline-block?

# JAVASCRIPT

### What is a closure, and how/why would you use one?

Closures are formed when a inner function (nested function) is defined inside of outer function, allowing access to the outer functions variables. Closures retain state and scope. Returning the nested function allows you to maintain access to the inner, outer, and global variables and arguments.


```javascript
//outer function scope enclosing the inner function (nested function)
function outer() {
//num is a local variable created by outer
	var num = 1;
//inner() is the inner function, a closure
	function inner(){
//inner can access outer's local variables because of scope
//inner modifies num  and returns the new value   
		num++; 
		console.log('The current value of num: ', num);     
	}
//outer returns inner
	return inner;
}
//outer is inv oked and inner is returned
var closure1 = outer();
closure1();
```

### Describe context.

Context is always the value of *this* , which is a reference to the object that owns the code that is currently being executed.

```javascript
// obj with a property and a method
var obj = {
// num is property with a value of 1
	num: 1,
// add is a method that returns it's this
	add: function(){
// return the value of this
		return this.prop;
	},
};
// call add as a method of obj
console.log(obj.add())
// expected output: 1
```
### What is hoisting?

Conceptually, variable and function declarations are moved to the top of your code. In actuality, memory space for variable and function declarations are allocated during the creation phase, but stays in place where you typed it

```javascript
// invoke myName with "Michael" as an arguement
myName("Michael");

// during the creation phase, myName will setup up memory space for functions and variables
// function that takes in one arguement
function myName(name){
// expected output: My name is Michael
	console.log("My name is " + name);
};
```

### What’s the difference between a for loop and a for in loop?


* **For Loop**: `for loop` iterates through an array like object or repeats a block of code until a specified condition evaluates to false

```javascript
// declare arr initial value of [1,2,3,4,5]
var arr = [1,2,3,4,5]
// iterates over all items in arr
for (var i = 0; i < arr.length; i++){
// add 5 to each item in arr
  arr[i] += 5
}
// expected output: [ 6, 7, 8, 9, 10 ]
console.log(arr)
```

* **For In Loop**: `for...in` statement iterates through all of the enumerable properties of an object

```javascript
// declare obj initial value of {a:1, b:2, c:3}
var obj = {a:1, b:2, c:3}
// iterate over all obj enumerable properties
for(var prop in obj){
// add 5 to each property in obj
  obj[prop] += 5
}
// expect output: { a: 6, b: 7, c: 8 }
console.log(obj)
```

### Can you describe the main difference between a forEach loop and a .map() loop and why you would pick one versus the other?
### Describe square bracket notation and when you would use it.
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
### What is "use strict"? What are the advantages and disadvantages to using it?
### What is event loop?
### What is the difference between call stack and task queue?
### What advantage is there for using the arrow syntax for a method in a constructor?
### What is the definition of a higher-order function?
### Can you give an example for destructuring an object or an array?
### Can you give an example of a curry function and why this syntax offers an advantage?
### What are the benefits of using spread syntax and how is it different from rest syntax?
### Why you might want to create static class members?
### What are the pros and cons of using Promises instead of callbacks?

# REACT

### What is a component?
### What’s the difference between an element and a Component?
### What is setState and what does it do?
### What are the differences between a class component and a functional component?
### What are refs in react?
### What are keys in react and why should we use them with lists?
### What are React lifecycle events?
### Explain AJAX in as much detail as possible and what the advantages / disadvantages are?
### Where should you make AJAX requests?
### How is React different from vanilla JS, jQuery, and Angular?
### What is unidirectional data flow in React?
### How can you as a developer force a react component to require certain props to exist on this.props?