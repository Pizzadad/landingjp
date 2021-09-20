import { StaticImage } from 'gatsby-plugin-image'
import React, { Fragment } from 'react'

const pictureinformation = () => {
    

    return (
        <Fragment>
           
                
                <StaticImage 
                    //className = "h-full"
                    imgClassName="lg:h-full lg:w-full w-screen"
                    alt="Img Raiz asesorias academicas"
                    src="../../images/imageprincipal-min.png"
                    objectPosition
                    loading="eager"
                    imgStyle={{ height: "100%" }}
                />
          
           
            
        </Fragment>
    )
}

export default pictureinformation
