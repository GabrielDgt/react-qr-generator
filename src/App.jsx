import { useRef, useState } from 'react'
import '../style.css'
import Image from './components/Image'

export function App () {
  const refAux = useRef(null)
  const [text, setText] = useState(null)

  const handleClick = () => {
    const { current } = refAux
    setText(current.value)
  }

  return (
    <main>
      <form>
        <label htmlFor='text'>Insert text to QR</label>
        <input type='text' id='text' placeholder='Write here...' ref={refAux} />
      </form>
      <button onClick={handleClick}>Generate QR</button>
      <Image text={text} />
    </main>
  )
}
