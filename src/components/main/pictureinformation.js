import { StaticImage } from 'gatsby-plugin-image'
import React, { Fragment } from 'react'

const pictureinformation = () => {
    return (
        <Fragment>
            <div>

                <StaticImage 
                    className="object-contain h-1/2 w-1/2"
                    alt="Img Test"
                    src="../../images/icon.png"
                />
            </div>
           
            
        </Fragment>
    )
}

export default pictureinformation
