// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

// const errorMessageStyles = {
//   color: 'red',
//   fontSize: '8pt',
//   position: 'absolute',
//   top: '100%',
//   left: '0',
// }

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input

  // const [error, setError] = React.useState('')
  const [username, setUsername] = React.useState('')
  // const [isValid, setIsValid] = React.useState(true)

  function handleChange(event) {
    const value = event.target.value
    setUsername(value.toLowerCase())
  }

  return (
    <form>
      <div style={{display: 'flex'}}>
        <label>Username:</label>
        <div style={{position: 'relative'}}>
          <input value={username} type="text" onChange={handleChange} />
          {/* {error.length > 0 ? (
            <span role="alert" style={errorMessageStyles}>
              {error}
            </span>
          ) : null} */}
        </div>
      </div>
      <button type="submit" style={{marginTop: '10px'}}>
        Submit.1
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
