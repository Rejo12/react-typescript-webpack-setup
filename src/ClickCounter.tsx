import { useState } from 'react'

export const ClickCounter = () => {
  const [count, setCount] = useState(0)
  return (
    <button onClick={(e) => setCount((prevCount) => prevCount + 1)}>
      Count {count}
    </button>
  )
}
