import React from 'react'
import Heading from './common/Heading'
import { TEAM_LIST } from '@/utils/helper'
import Image from 'next/image'
import Description from './common/Description'
import { Twitter } from '@/utils/icons'

const Team = () => {
  return (
    <div id='team' className='dark-gray pt-5 pb-5'>
      <div className='container mx-auto max-w-extra px-3 mt-3 pb-3'>
        <div className='border-custom-blue mx-auto'></div>
        <Heading text={'Team'} myClass={'pt-xl-5 mt-xl-2 pt-4'} />
        <div className='d-flex flex-wrap -mx-3 justify-content-center'>
          {TEAM_LIST.map((obj, i) => (
            <div key={i} className='col-md-3 col-sm-4 px-sm pt-sm-4 pt-2 mt-3'>
              <div>
                <Image src={obj.image} alt={obj.imgAlt} width={202} height={202} className='size-custom mx-auto pe-none d-flex object-fit-cover' />
                <p className='fs-md-4 fs-5 custom-blue text-center franklin pt-2 pt-lg-4 pb-lg-2'>{obj.title}</p>
                <Description text={obj.fullName} myClass={"text-center text-custom-xs lh-sm"} />
                <Description text={obj.description} myClass={"text-center text-custom-xs lh-sm py-2"} />
                <a href={obj.link} className='mx-auto max-w-max d-flex icon pt-2'><Twitter myClass={'size-sm'} /></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Team