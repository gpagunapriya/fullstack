import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
      <button onClick={() => setCount((count) => count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}
function calculation(a, b) {
  return (
    <div>
      <h2>Calculation Results</h2>
      <p>Sum: {add(a, b)}</p>
      <p>Difference: {subtract(a, b)}</p>
      <p>Product: {multiply(a, b)}</p>
      <p>Quotient: {divide(a, b)}</p>
    </div>
 
);
}
}
export default App