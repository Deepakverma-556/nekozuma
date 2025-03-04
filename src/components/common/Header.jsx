import { HEADER_LIST, SOCIAL_ICON_LIST } from '@/utils/helper'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <div className='max-w-extra-large mx-auto position-relative'>
            <div className='container px-4 max-w-extra mx-auto d-flex justify-content-end pt-md'>
                <Link href="/" className='position-absolute top-0 start-0'>
                    <Image width={424} height={83} src={"/assets/images/png/logo.png"} alt='logo' className='pe-none size-xl object-fit-cover' />
                </Link>
                <div className='d-flex align-items-center gap-md'>
                    <ul className='d-flex gap-md'>
                        {HEADER_LIST.map((obj, i) => (
                            <li key={i}><a href={obj.link} className='text-white fs-sm-6 text-xs lh-sm fw-normal link'>{obj.title}</a>
                            </li>
                        ))}
                    </ul>
                    <div className='d-flex gap-sm'>
                        {SOCIAL_ICON_LIST.map((obj, i) => (
                            <Link className='icon' target='blank' key={i} href={obj.link}>{obj.icon}</Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header