# Table of Contents
### HTML / CSS
- [What is CSS selector specificity and how does it work?](#what-is-css-selector-specificity-and-how-does-it-work)
- [Describe the box model.](#describe-the-box-model)
- [Describe Pseudo selectors in CSS.](#describe-pseudo-selectors-in-css)
- [What are the different properties for position and how do they work?](#what-are-the-different-properties-for-position-and-how-do-they-work)
- [What is specificity?](#what-is-specificity)
- [What is the transform property and how does it work?](#what-is-the-transform-property-and-how-does-it-work)
- [Describe Floats and how they work.](#describe-floats-and-how-they-work)
- [What are the different ways to visually hide content?](#what-are-the-different-ways-to-visually-hide-content)
- [What's the difference between inline and inline-block?](#whats-the-difference-between-inline-and-inline-block)

### Javascript
- [What is a closure, and how/why would you use one?](#what-is-a-closure-and-howwhy-would-you-use-one)
- [Describe context.](#describe-context)
- [What is hoisting?](#what-is-hoisting)
- [What’s the difference between a for loop and a for in loop?](#whats-the-difference-between-a-for-loop-and-a-for-in-loop)
- [Can you describe the main difference between a forEach loop and a .map() loop and why you would pick one versus the other?](#can-you-describe-the-main-difference-between-a-foreach-loop-and-a-map-loop-and-why-you-would-pick-one-versus-the-other)
- [Describe square bracket notation and when you would use it.](#describe-square-bracket-notation-and-when-you-would-use-it)
- [Describe 3 ES6 features and how they differ from ES5.](#describe-3-es6-features-and-how-they-differ-from-es5)
- [What are the differences between ES6 class and ES5 function constructors?](#what-are-the-differences-between-es6-class-and-es5-function-constructors)
- [Describe how scoping works in JavaScript.](#describe-how-scoping-works-in-javascript)
- [Explain how to handle errors in JS.](#explain-how-to-handle-errors-in-js)
- [How does inheritance work in JavaScript?](#how-does-inheritance-work-in-javascript-)
- [What is a prototype in JavaScript?](#what-is-a-prototype-in-javascript)
- [What’s the difference between == and === in JavaScript?](#whats-the-difference-between--and--in-javascript)
- [What is event bubbling in the DOM?](#what-is-event-bubbling-in-the-dom)
- [Explain let vs var.](#explain-let-vs-var)
- [What's the difference between a variable that is: null, undefined or undeclared?](#whats-the-difference-between-a-variable-that-is-null-undefined-or-undeclared)
- [How would you go about checking for any of these states?](#how-would-you-go-about-checking-for-any-of-these-states)
- [What's a typical use case for anonymous functions?](#whats-a-typical-use-case-for-anonymous-functions)
- [What's the difference between host objects and native objects?](#whats-the-difference-between-host-objects-and-native-objects)
- [What's the difference between .call and .apply?](#whats-the-difference-between-call-and-apply)
- [What's the difference between an "attribute" and a "property"?](#whats-the-difference-between-an-attribute-and-a-property)
- [What is an example of an immutable object in JavaScript?](#what-is-an-example-of-an-immutable-object-in-javascript)
- [What are the pros and cons of immutability?](#what-are-the-pros-and-cons-of-immutability)
- [How can you achieve immutability in your own code?](#how-can-you-achieve-immutability-in-your-own-code)
- [Why is it called a Ternary operator, what does the word "Ternary" indicate?](#why-is-it-called-a-ternary-operator-what-does-the-word-ternary-indicate)
- [What is "use strict"? What are the advantages and disadvantages to using it?](#what-is-use-strict-what-are-the-advantages-and-disadvantages-to-using-it)
- [What is event loop?](#what-is-event-loop)
- [What is the difference between call stack and task queue?](#what-is-the-difference-between-call-stack-and-task-queue)
- [What advantage is there for using the arrow syntax for a method in a constructor?](#what-advantage-is-there-for-using-the-arrow-syntax-for-a-method-in-a-constructor)
- [What is the definition of a higher-order function?](#what-is-the-definition-of-a-higher-order-function)
- [Can you give an example for destructuring an object or an array?](#can-you-give-an-example-for-destructuring-an-object-or-an-array)
- [Can you give an example of a curry function and why this syntax offers an advantage?](#can-you-give-an-example-of-a-curry-function-and-why-this-syntax-offers-an-advantage)
- [What are the benefits of using spread syntax and how is it different from rest syntax?](#what-are-the-benefits-of-using-spread-syntax-and-how-is-it-different-from-rest-syntax)
- [Why you might want to create static class members?](#why-you-might-want-to-create-static-class-members)
- [What are the pros and cons of using Promises instead of callbacks?](#what-are-the-pros-and-cons-of-using-promises-instead-of-callbacks)

### React
- [What is a component?](#what-is-a-component)
- [What’s the difference between an element and a Component?](#whats-the-difference-between-an-element-and-a-component)
- [What is setState and what does it do?](#what-is-setstate-and-what-does-it-do)
- [What are the differences between a class component and a functional component?](#what-are-the-differences-between-a-class-component-and-a-functional-component)
- [What are refs in react?](#what-are-refs-in-react)
- [What are keys in react and why should we use them with lists?](#what-are-keys-in-react-and-why-should-we-use-them-with-lists)
- [What are React lifecycle events?](#what-are-react-lifecycle-events)
- [Explain AJAX in as much detail as possible and what the advantages / disadvantages are?](#explain-ajax-in-as-much-detail-as-possible-and-what-the-advantages--disadvantages-are)
- [Where should you make AJAX requests?](#where-should-you-make-ajax-requests)
- [How is React different from vanilla JS, jQuery, and Angular?](#how-is-react-different-from-vanilla-js-jquery-and-angular)
- [What is unidirectional data flow in React?](#what-is-unidirectional-data-flow-in-react)
- [How can you as a developer force a react component to require certain props to exist on this.props?](#how-can-you-as-a-developer-force-a-react-component-to-require-certain-props-to-exist-on-thisprops)

---

# HTML / CSS

## What is CSS selector specificity and how does it work?

CSS selectors are used to target HTML Elements on our pages that we want to style.

* **Class**: `className ='index'` will match any element that has class of “index”
* **ID**: `#id` will match the element that has the ID of “id”
* **Type**: `div` will match any `<div>` element
* **Attribute**: `[type]` will match all elements that have `type` attribute set
* **Sibling**: `h2 + p` will match all `<p>` elements that directly follow an `<h2>`
* **Child**: `ul > li` will match all `<li>` elements that are nested directly inside a `<ul>`
* **Descendant**: `div span` will match all `<span>` elements that are inside of a `<div>`

## Describe the box model.

The box model is used to position HTML elements when laying out a documents, the browser represents each element as a rectangular box. Every box is composed of four areas, defined by their edges. *Content, Padding, Border, and Margin.*

* **Content**: This contains the content of the element such as text, image, or background
* **Padding**: Bounded by the padding edge, extends the content area to include the elements padding. 
* **Border**: Bounded by the border edge, extends the padding area to include the elements borders.
* **Margin**: Bounded by the margin edge, extends the border area to include an empty area used to separate the element from its neighbors. 

## Describe Pseudo selectors in CSS.

A Pseudo selector specifies a style based state of the selected element. 
Examples: *Hover, Active, Disabled, Nth-child, Visited, etc.*

* **Hover**: `:hover` is triggered when the user hovers over an element with a mouse
* **Active**: `:active` is triggered when the user clicks on an element, and ends with it is released
* **Disabled**: `:disabled` represents disabled elements that can't be activated (selected, clicked, typed into, etc) If enabled, the element can then be activated or accept focus
* **Nth-child**: `:nth-child()` is specified with a single arguement, which represents the pattern for matching elements
* **Visited**: `:visited:` represents linked that the user has already visited

## What are the different properties for position and how do they work?
The position property specifies the type of positioning method used for an element *Static, Relative, Absolute, Fixed, or Sticky*

* **Static**: `position: static;` Every element has a static position by default, `top`, `left`, `right`, and `bottom` will have no effect on that element
* **Relative**: `position: relative;` Elements original position remains in the flow of document, but now `top`, `left`, `right`, and `bottom` will work and position the element in that direction
* **Absolute**: `position: absolute;` Element is removed from the flow of the document and is positioned relative to the nearest positioned ancestor. It can then be positioned by `top`, `left`, `right`, and `bottom` 
* **Fixed**: `position: fixed;` Element is removed from flow, almost like absolute, but only fixed positioned elements remain relative to the document, allowing it to stay in place even if the page is scrolled. It can then be positioned by `top`, `left`, `right`, and `bottom` 
* **Sticky**: `position: sticky;` It’s like a relative and fixed element, until the scroll location reaches a specific threshold. It then takes on a fixed position where its told to stick in place.

## What is specificity?

Every selector has values assigned to them to rank the precedence that they will have over each other. The browser will use this to decide which CSS properties are most relevant and apply those styles. There are four categories which define the specificity level of a selector: *Elements, Classes, IDs, and Inline Styles*

* **Elements/Pseudo-elements**: such as `h1`, `div`, `:before` `:after` are worth *1 point*
* **Classes/Pseudo-classes**: such as `:hover`, `:focus` are worth *10 points*
* **IDs**: such as `#navbar` are worth *100 points*
* **Inline Styles**: such as `<h1 style="color:#FFF">` are worth *1000 points*

## What is the transform property and how does it work?

Transform property applies 2D or 3D transformations to an element allowing you to change the elements shape, size, and position. This property allows you to *Rotate, Scale, Translate, Skew, etc.*, elements.

* **Rotate**: `rotate()` rotates an element around a fixed point on a 2D plane, without deforming it
* **Scale**: `scale()` resizes an element on a 2D plane. It can resize the horizontal and vertical dimensions
* **Translate**: `translate()` repositions an element in the horizonal / vertical directions
* **Skew**: `skew()` is specified with either one or two values, which represent the amount of skewing to be applied in each direction.

## Describe Floats and how they work.

The float property allows for an element to be place on the left or right side of its container, allowing text and inline elements to wrap around it.

* **Float**: `float` is taken out of the normal flow of the document, though still remaining part of it

## What are the different ways to visually hide content?

Hiding content visually can be done multiple ways in CSS. You can hide an element with one of these ways. *Visibility, Display, Opacity, and Position*

* **Visibility**: Setting `visibility` to `hidden` will hide the element. A `hidden` element will still affect the layout of the page, but will not capture any user interaction.
* **Display**: Setting `display` to `none` will make sure that the box-model is not generated at all, no empty space will be left behind.
* **Opacity**: Setting `opacity` to 0 will visually hide the content from the page. That means the element will still occupy its position and affect the layout of the page.
* **Position**: Giving an element `absolute` position can allow you to move the element outside of the viewport. This wont affect layout and will still be actionable.

## What's the difference between inline and inline-block?

The `display` property specifies how an element is displayed.

* **Inline**: element does not start on a new line and only takes up as much width as necessary.
* **Inline-Block**: allows to set the width and height on the element. Also, the toip and bottom margins / paddings are respected.


# JAVASCRIPT

## What is a closure, and how/why would you use one?

Closures are formed when a inner function (nested function) is defined inside of outer function, allowing access to the outer functions variables. Closures retain state and scope. Returning the nested function allows you to maintain access to the inner, outer, and global variables, and arguments.


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

## Describe context.

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
## What is hoisting?

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

## What’s the difference between a for loop and a for in loop?


**For Loop**: `for loop` iterates through an array like object or repeats a block of code until a specified condition evaluates to false

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

**For In Loop**: `for...in` statement iterates through all of the enumerable properties of an object

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

## Can you describe the main difference between a forEach loop and a .map() loop and why you would pick one versus the other?

`forEach()` could be used when you're not trying to change the data in your array, but just want to do something with it. `map()` might be preferable when changing or altering data. Not only is it faster, but it returns a new array.

**For Each**: `forEach()` executes a provided function once for each array element

```javascript
var arr = ['a', 'b', 'c'];

arr.forEach(letter => console.log(letter));

// expected output: "a"
// expected output: "b"
// expected output: "c"
```

**Map**: `map()` creates a new array with the results of calling a provided function on every element in the calling array

```javascript
var arr = [1, 2, 3, 4];

// pass a function to map
var map1 = arr.map(num => num * 2);

console.log(map1);
// expected output: [2, 4, 6, 8]
```

## Describe square bracket notation and when you would use it.

Bracket notation is used to access properties on an object and can look like this `arrayName[element]` and `objectName[property]`.

**Arrays**: you can specify the index in the brackets to access an element in the array

```javascript
let arr = ['a','b','c'];

let letter = arr[1];

console.log(letter);
// expected output: b
```

**Objects**: you can access properties on an object by specifying the property name in the brackets

```javascript
let obj = {
  chicken: 'cluck',
  cows: 'moo'
};

let sound = obj['cows'];

console.log(sound);
// expected output: moo
```

## Describe 3 ES6 features and how they differ from ES5.

**Arrow Functions**: have a shorter syntax compared to function expressions and lexically binds the this value. Arrow functions are always anonymous.

ES6:
```javascript
let nums = [1,2,3,4];

nums.forEach(x => console.log(x * 2))

// expected output: 2
// expected output: 4
// expected output: 6
// expected output: 8
```

ES5:
```javascript

let nums = [1,2,3,4];

nums.forEach(function(x){
  console.log(x * 2)
})

// expected output: 2
// expected output: 4
// expected output: 6
// expected output: 8
```

**Destructuring**: makes it possible to extract data from arrays or objects using a syntax that mirrors the construction of array and object literals.

ES6:
```javascript
// Arrays
var list = [ 1 ]
var [ x, y = 2 ] = list

console.log(x) // expected output: 1
console.log(y) // expected output: 2

// Objects
var obj = { a: 1 }
var { a, b = 2 } = obj

console.log(a) // expected output: 1
console.log(b) // expected output: 2
```

ES5:
```javascript
// Arrays
var list = [ 1 ];
var x = list[0];
var y = list[1] === undefined ? 2 : list[1];

console.log(x) // expected output: 1
console.log(y) // expected output: 2


// Objects
var obj = { a: 1 };
var a = obj.a;
var b = obj.b === undefined ? 2 : obj.b;

console.log(a) // expected output: 1
console.log(b) // expected output: 2
```

**Template Literals**: are strings that can include embedded expressions. This is sometimes referred to as string interpolation.

ES6:
```javascript
var person = { name: "Bob" };
var car = { make: "Honda", model: "Accord" };

var message = `Hello I'm ${person.name}, I drive a ${car.make} ${car.model}.`;

console.log(message)
// expected output: 'Hello I'm Bob, I drive a Honda Accord.'
```

ES5:
```javascript
var person = { name: "Bob" };
var car = { make: "Honda", model: "Accord" };

var message = "Hello I'm " + person.name + ", I drive a " + car.make + " " + car.model + ".";

console.log(message)
// expected output: 'Hello I'm Bob, I drive a Honda Accord.'
```

## What are the differences between ES6 class and ES5 function constructors?

ES6 classes make sure that an initialization function will be called and make it easier to maintain state. One of the benefits; convenient, self-contained syntax.

ES6:
```javascript
class Person{
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  email(){
    return this.name + this.age + "@gmail.com"
  } 
}

var Jim = new Person("Jim", 25);

console.log(Jim.email());
// expected output: Jim25@gmail.com
```

ES5:
```javascript
function Person(name,age){
  this.name = name;
  this.age = age;
  this.email = function(){
    return this.name + this.age + '@gmail.com'
  }
}

var Jim = new Person("Jim", 25);

console.log(Jim.email());
// expected output: Jim25@gmail.com
```

## Describe how scoping works in JavaScript.
## Explain how to handle errors in JS.
## How does inheritance work in JavaScript?
## What is a prototype in JavaScript?
## What’s the difference between == and === in JavaScript?
## What is event bubbling in the DOM?
## Explain let vs var.
## What's the difference between a variable that is: null, undefined or undeclared?
## How would you go about checking for any of these states?
## What's a typical use case for anonymous functions?
## What's the difference between host objects and native objects?
## What's the difference between .call and .apply?
## What's the difference between an "attribute" and a "property"?
## What is an example of an immutable object in JavaScript?
## What are the pros and cons of immutability?
## How can you achieve immutability in your own code?
## Why is it called a Ternary operator, what does the word "Ternary" indicate?
## What is "use strict"? What are the advantages and disadvantages to using it?
## What is event loop?
## What is the difference between call stack and task queue?
## What advantage is there for using the arrow syntax for a method in a constructor?
## What is the definition of a higher-order function?
## Can you give an example for destructuring an object or an array?
## Can you give an example of a curry function and why this syntax offers an advantage?
## What are the benefits of using spread syntax and how is it different from rest syntax?
## Why you might want to create static class members?
## What are the pros and cons of using Promises instead of callbacks?

# REACT

## What is a component?
## What’s the difference between an element and a Component?
## What is setState and what does it do?
## What are the differences between a class component and a functional component?
## What are refs in react?
## What are keys in react and why should we use them with lists?
## What are React lifecycle events?
## Explain AJAX in as much detail as possible and what the advantages / disadvantages are?
## Where should you make AJAX requests?
## How is React different from vanilla JS, jQuery, and Angular?
## What is unidirectional data flow in React?
## How can you as a developer force a react component to require certain props to exist on this.props?