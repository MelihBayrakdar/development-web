import React, { useState } from 'react';
import ReactDOM from 'react-dom'
// import { createRoot } from 'react-dom/client'

export const main = () => {
  let rootElement = document.querySelector('#root')
  if (!rootElement) { alert('nooooooo'); return }
  // const root = createRoot(rootElement)

  ReactDOM.render(
      <>
        <h1>Welcome to the exam template!</h1>
        <p>Extend this template in order to make the assignments indicated in the accompanying markdown file.</p>
        <p><em>Do not submit the template, but only the code you wrote yourself.</em></p>
        <p>Take a deep breath, you can do this, and good luck!!! 💪❤️</p>
      </>,
    rootElement
  )
}


// write a stateful Counter class component that accepts the initial value and the increment of the counter via `props`: (2/10 points)

type CounterProps = { initialValue:number, increment:number }
type CounterState = { value:number }

class Counter extends React.Component<CounterProps, CounterState> {
  constructor(props:CounterProps) {
    super(props)
    this.state = { value: props.initialValue }
  }
  render() {
    return <div>{this.state.value}</div>
  }
}



