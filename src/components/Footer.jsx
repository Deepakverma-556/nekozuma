import { SOCIAL_ICON_LIST } from '@/utils/helper'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='light-sky py-5 position-relative'>
      <a href="/" className='text-white text-center franklin title d-flex mx-auto max-w-max'>NEKOZUMA</a>
      <div className='d-flex gap-4 pt-md-4 pt-2 justify-content-center'>
        {SOCIAL_ICON_LIST.map((obj, i) => (
          <a className='icon' target='blank' key={i} href={obj.link}>{obj.icon}</a>
        ))}
      </div>
      <Image src={'/assets/images/png/left-lighting.png'} alt='left-lighting' width={411} height={100} className='position-absolute lightning pe-none bottom-0 left-0' />
      <Image src={'/assets/images/png/right-lightning.png'} alt='left-lightning' width={411} height={100} className='position-absolute lightning pe-none end-0 bottom-0' />
    </div>
  )
}

export default Footer