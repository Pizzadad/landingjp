import React from 'react'

import Principal from './principal'

const background = () => {
    return (
        <main>
            <div className="h-screen lg:w-full w-screen 
            bg-gradient-to-t from-gray-350 via-gray-325 to-gray-350">
                <Principal/>               
            </div>
        </main>
    )
}

export default background
