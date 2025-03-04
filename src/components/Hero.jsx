import React from 'react'
import Header from './common/Header'
import Description from './common/Description'
import Image from 'next/image'

const Hero = () => {
    return (
        <div className='dark-gray'>
            <div className='max-w-extra-large mx-auto position-relative'>
                <Header />
                <div className='container px-4 max-w-extra pt-xxxl pb-xxxl mx-auto'>
                    <div className='border-custom-blue'></div>
                    <h1 className='custom-blue sm-text-white franklin text-lg-5xl text-3xl'>NEKOZUMA</h1>
                    <Description myClass={'max-w-large pt-lg-xs pb-lg-xxl'} text={"The collection  of 5555 NFTs on the Solana blockchain. The collection serves to be a rising force against the anime meta of collections with undoxxed teams and is therefore backed by the team at Nubbies NFT & Karmic Labs."} />
                    <button className='light-sky border-0 py-2 px-4 my-button rounded-2'><Description text={"Connect Wallet"} myClass={"text-white"} /></button>
                </div>
                <Image src={'/assets/images/webp/hero.webp'} alt='hero' width={557} height={557} className='position-absolute bottom-0 end-0 pe-none size-lg-xxl d-custom-none'/>
                <Image src={'/assets/images/png/lightning.png'} alt='lightning' width={211} height={400} className='position-absolute bottom-0 size-lg start-0 pe-none d-custom-none'/>
          </div>
        </div>
    )
}

export default Hero