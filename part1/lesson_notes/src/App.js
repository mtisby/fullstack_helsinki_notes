import React from 'react'
const Hello = (props) => {
  const bornYear = () => {
    const yearNow = new Date().getFullYear()
    return yearNow - props.age
  }

  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const App = () => {
  const data = {
    name: "Jungkook",
    age: 24
  }

  return (
    <div>
      <Hello name={data.name} age={data.age}/>
    </div>
  )
}

export default App