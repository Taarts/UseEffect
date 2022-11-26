import React, { useState, useEffect } from 'react'

export function App() {
  const [count, setCount] = useState(0)

  // const listOfDataToWatchForChanges = [count]
  //
  //        function to call
  //          |
  //          |                array of variables to watch for changes
  //          |                 |
  //          V                 V
  useEffect(
    function () {
      console.log(`Wow, the count changed and is now ${count}`)
    },
    [count]
  )

  function handleClickButton() {
    setCount(count + 1)
  }

  return (
    <div>
      <p>
        Count: {count} <button onClick={handleClickButton}>Click Me</button>
      </p>
      <p>
        <button
          onClick={function () {
            setCount(count + 2)
          }}
        >
          Up by two
        </button>
      </p>{' '}
      <p>
        <button
          onClick={function () {
            setCount(2 * count)
          }}
        >
          Doubled!
        </button>
      </p>
    </div>
  )
}
