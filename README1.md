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
2. When the react dom start to render effect, the element will be regard as a props
Props
```
const element = <Welcome name="Sara" />;
```
React Dom starts to generat the effect Welcome componeent first, that is <h1>Hello, {props.name}</h1>, then generate the name="sara", final you will get the final effect <h1>Hello, Sara</h1>. And apply it to the Dom node "root".
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


[Function and Class Components](https://reactjs.org/docs/components-and-props.html)
## Context

Pass the data Through the tree

[Context](https://reactjs.org/docs/context.html)  