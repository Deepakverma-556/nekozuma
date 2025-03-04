import { FIRST_SLIDER_LIST, SECOND_SLIDER_LIST } from '@/utils/helper';
import Image from 'next/image';
import React from 'react'
import Marquee from "react-fast-marquee";
const MySlider = () => {
  return (
    <div id='overview'>
      <Marquee direction="left">
        {FIRST_SLIDER_LIST.map((obj, i) => (
          <Image className='pe-none size-base' key={i} height={320} width={320} src={obj.image} alt={obj.imgAlt} />
        ))}
      </Marquee>
      <Marquee direction="right">
        {SECOND_SLIDER_LIST.map((obj, i) => (
          <Image className='pe-none size-base' key={i} height={320} width={320} src={obj.image} alt={obj.imgAlt} />
        ))}
      </Marquee>
    </div>
  )
}

export default MySlider