import React from 'react'
import Footer from '../global/footer'
import WhattsapButton from '../global/whattsapButton'
import Principal from './principal'

const background = () => {
    return (
        <main>
            <div className="h-screen lg:w-full w-screen 
            bg-gradient-to-t from-gray-350 via-gray-325 to-gray-350">
                <Principal/>
                <WhattsapButton />
                <Footer />
            </div>
        </main>
    )
}

export default background
