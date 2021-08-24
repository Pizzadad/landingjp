
import React, { Fragment } from 'react'

const textinformation = () => {
    return (
        <Fragment>
            <div className="text-gray-800 items-center md:items-start text-center md:text-left ">
                <p className="text-gray-800 font-semibold md:font-medium text-base md:text-2xl pb-4">
                    Lo mejor de comprar comida <br/> es cuando la comes en casa
                </p>
                <button className="bg-transparent hover:bg-black text-gray-800 font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded uppercase">
                    Ver promociones
                </button>       
            </div>
        </Fragment>
    )
}

export default textinformation
