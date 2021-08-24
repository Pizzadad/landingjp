import { StaticImage } from 'gatsby-plugin-image'
import React, { Fragment } from 'react'

const pictureinformation = () => {
    return (
        <Fragment>
            <div className="flex justify-center">
                
                <StaticImage 
                    className="object-contain lg:h-screen lg:w-full w-screen"
                    alt="Img Test"
                    src="../../images/imageprincipal.png"
                />
            </div>
           
            
        </Fragment>
    )
}

export default pictureinformation
