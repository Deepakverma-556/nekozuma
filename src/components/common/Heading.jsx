import React from 'react'

const Heading = ({ text, myClass }) => {
    return (
        <h2 className={`${myClass} franklin text-3xl custom-blue text-center`}>{text}</h2>
    )
}

export default Heading