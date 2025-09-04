import './button.css'
import { useState } from 'react'

function MyButton(prop) {
  const [isTrue, seIsTrue] = useState(true)
  return (
    <div>
      {
      isTrue ? (
      <button className="btn">
        {prop.name}
      </button>
      ):
      (
      <button className="btn">
        Potato
      </button>
      )
    }
    </div>
  )
}

export default MyButton
