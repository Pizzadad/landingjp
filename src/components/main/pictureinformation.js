import { StaticImage } from 'gatsby-plugin-image'
import React, { Fragment } from 'react'

const pictureinformation = () => {
    return (
        <Fragment>
           
                
                <StaticImage 
                    className = "flex justify-center"
                    imgClassName="object-contain lg:h-full lg:w-full w-screen"
                    alt="Img Raiz asesorias academicas"
                    src="../../images/imageprincipal-min.png"
                    objectPosition
                    loading="eager"
                />
          
           
            
        </Fragment>
    )
}

export default pictureinformation
