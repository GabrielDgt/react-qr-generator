import { useState } from 'react'
import '../style.css'
import Image from './components/Image'

export function App () {
  const [text, setText] = useState(null)

  const handleChange = (event) => {
    const newText = event.target.value
    if (newText.startsWith(' ')) return
    setText(newText)
  }

  const handleClick = () => {
    setText(null)
    document.getElementById('text').value = ''
  }

  return (
    <div className='page'>
      <form>
        <label htmlFor='text'>Insert text to QR</label>
        <input type='text' id='text' placeholder='Write here...' onChange={handleChange} />
      </form>
      <Image text={text} />
      {text && <button onClick={handleClick}>Clear</button>}
    </div>
  )
}
