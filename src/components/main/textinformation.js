
import React, { Fragment } from 'react'
import Logo from './logo'

const textinformation = () => {
    
    const handleClick = (e) => {
        e.preventDefault()
        const target = e.target.getAttribute('href')
        const location = document.querySelector(target).offsetTop
        
        window.scrollTo({
          left: 0,
          top: location,
        })
      }
    
    return (
        <Fragment>
                <Logo />
                <span className="text-left  text-gray-800 font-medium text-xl lg:text-5xl pb-4 uppercase italic">
                    Que no sea un
                    <p className="text-white bg-black transform -skew-x-12">
                         impedimento las matematicas
                    </p>
                    para el desarrollo
                    <div className="flex flex-row">
                        <p className="text-white bg-black transform -skew-x-12 w-1/2">
                            de tu talento 
                        </p>
                        <p className="not-italic w-1/2 ">🤯</p>
                    </div>
                </span>                
                <div className="mt-4">
                    <a
                     onClick={handleClick}
                     href="#priccesDiv"
                     className="
                    bg-transparent py-2 px-4 border font-semibold uppercase border-black text-gray-800
                    lg:rounded-tr-lg lg:rounded-none rounded-full
                    hover:bg-black   hover:text-white   hover:border-transparent">
                        Conoce nuestras asesorias
                    </a>
                    
                </div>
            
        </Fragment>
    )
}

export default textinformation
