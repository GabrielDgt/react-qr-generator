import React from 'react'

const URL_QR_GENERATOR = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='

const Image = ({ text }) => {
  if (text === null) return null
  return (
    <div id='qr-image'>
      <span className='error' />
      <img src={text && `${URL_QR_GENERATOR}${text}`} id='img' />
    </div>
  )
}

export default Image
