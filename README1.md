# React Quick Learning:  

## Rendering Elements

React Dom will render the eleemtn to the root dom node.
Like You will use the React Dom to link the effect(element) and where you want the effect happend(root).  

1.element:
```
const element = <h1>Hello, world</h1>;
```
2.Dom node: 
```
<div id="root"></div>
```
3.React DOM
```
ReactDOM.render(element, document.getElementById('root'));
```
4. Update the effect content(element), you need to create a new effect(element) to render it, React element is immutable.

[Rendering Elements](https://reactjs.org/docs/rendering-elements.html)   

## Function and Class Components

1.Two ways to define a componet: 
First is the function:  
```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

Second way is the ES6 class:
```
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```
### 2.Rendering a Component
in this sitution, the effect just changed from the element to the User deined compennt: 
Props is the attribute and children of the comppnent.
1.User deined compennt: 
```
const element = <Welcome name="Sara" />;
```
2. the object has JSX attributes and children, when the React DOM render, in side of the <Welcome name="Sara" />;, Welcome is componet already been declared, name="Sara" is a JSX
Welcome componet: 
```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

## React Props
Props is kind of the Parmater, Like the Parmaer in the Javascript Function, it will be passed into the componet, then make effect on the DOM node, then update the change in the web.  

To use this Props, you need to use this.props + attratube name to get the content:
```
this.props.brand
```

So the overall, 1.you need to creat a const, which is value you want to add to the componet, 
```
const myelement = <Car brand="Ford" />;
```

then use the props in the component to access it.
```
 return <h2>I am a {this.props.brand}!</h2>;
```
Full code:  
```
class Car extends React.Component {
  render() {
    return <h2>I am a {this.props.brand}!</h2>;
  }
}
```

[React Props](https://www.w3schools.com/react/react_props.asp)   
### 2. When the react dom start to render effect, the element will be regard as a props
Props
```
const element = <Welcome name="Sara" />;
```
React Dom starts to generat the effect Welcome componeent first, that is "<h1>Hello, {props.name}</h1>", then generate the name="sara", final you will get the final effect"<h1>Hello, Sara</h1>". And apply it to the Dom node "root".
```
ReactDOM.render(
  element,
  document.getElementById('root')
);
```
Complete Code: 
```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);
```

## Composing Components

You will put a componet (function or class) into other componet, and use the React Dom to render it.

1.Base componet Welcome:
```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```
2.Parent Componet App which has the Child Componet:  
```
function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}
```
3.React DOM render it
```
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```

## React Element defines:
There are three ways to define the effect in the React Dom
1.element way
```
const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));
```
2. element way (Has the componet)
```
const element = <Welcome name="Sara" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);
```
3.Simply put the Compent
```
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```
## Extracting Components
Split the Componet into two or multiple parts. You could Divide the big componet into the many small component, so you could reuse the components

[Components and Props](https://reactjs.org/docs/components-and-props.html)

[Function and Class Components](https://reactjs.org/docs/components-and-props.html)

## State and Lifecycle
in order to write the state, you need to have a class componet, then define a state to the class component.
### have a class componet,
1.Create an ES6 class, with the same name, that extends React.Component.
```
class Clock extends React.Component {}
```
2.Add a single empty method to it called render().
```
class Clock extends React.Component {
	render() {

	}
}
```
3.Move the body of the function into the render() method.
```
class Clock extends React.Component {
	render() {
<div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
	}
}
```
4.Replace props with this.props in the render() body.
```
class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```
5.Delete the remaining empty function declaration.
[State Via the Class Converting a Function to a Class](https://reactjs.org/docs/state-and-lifecycle.html)

### then define a state to the class component.
1.Replace this.props.date with this.state.date in the render() method:
```
<h2>It is {this.state.date.toLocaleTimeString()}.</h2>
```
2.Add a class constructor that assigns the initial this.state:
```
constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
```
3.React Dom Render the component
```
ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
```
[Adding Local State to a Class](https://reactjs.org/docs/state-and-lifecycle.html)  

## Adding Lifecycle Methods to a Class
Begin the render is the “mounting” in React.  
Clear the render is the “unmounting” in React.  

A timer exmple explained, timer start the time running, timer stop, the time does not run

componentDidMount() utilize to set up a timer, when the componenet render:
```
 componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
```

componentWillUnmount() clear the timer:
```
componentWillUnmount() {
    clearInterval(this.timerID);
  }
```
this.setState() schedule a UI call
[Adding Lifecycle Methods to a Class](https://reactjs.org/docs/state-and-lifecycle.html)  

## Context

The data need to be used by many components at different nesting levels.  
Sometimes, you could consider the Component Composition  

To utilize the Context, you need to creat a Context project first: 
```
const MyContext = React.createContext(defaultValue);
```
Build Context.Provider   
```
<MyContext.Provider value={/* some value */}>
```
Create a Class.contextType
```
static contextType = MyContext;
```
Full code:
```
class MyClass extends React.Component {
  static contextType = MyContext;
  render() {
    let value = this.context;
    /* render something based on the value */
  }
}
```
Context.Consumer  
```
<MyContext.Consumer>
  {value => /* render something based on the context value */}
</MyContext.Consumer>
```

Main Reference:  
[Context API](https://reactjs.org/docs/context.html)  

[Context](https://reactjs.org/docs/context.html)  




