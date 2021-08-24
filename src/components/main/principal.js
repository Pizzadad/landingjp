import React, { Fragment } from 'react'
import Pictureinformation from './pictureinformation'
import Textinformation from './textinformation'

const principal = () => {
    return (
        <Fragment>
            <div className="container mx-auto flex flex-col lg:flex-row h-screen w-full py-16">
                <div className="flex flex-col self-end justify-between w-full lg:w-1/2">
                    <Textinformation />
                </div>
                <div className="grid place-items-center w-full lg:w-1/2">
                    <Pictureinformation />
                </div>
            </div>
        </Fragment>
    )
}

export default principal
