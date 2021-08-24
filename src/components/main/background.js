import React from 'react'
import Principal from './principal'

const background = () => {
    return (
        <main>
            <div className="h-screen w-full 
            bg-gradient-to-t from-blue-300 via-blue-500 to-blue-600">
                <Principal/>
            </div>
        </main>
    )
}

export default background
