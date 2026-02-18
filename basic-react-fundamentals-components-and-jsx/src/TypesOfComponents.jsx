import React from 'react'
/*
Components are reusable piece of UI

Components name always starts with Capital letter
*/


//Function component
function TypesOfComponents() {
  return (
    <div>TypesOfComponents</div>
  )
}

//Arrow function component
export const Greeting = () => {
  return (
    <div>TypesOfComponents</div>
  )
}

//Class component 
export class Hello extends React.Component {
  render() {
    return <h1>Hello</h1>;
  }
}



export default TypesOfComponents;