import React from 'react'

const CardPersonajes = ({personaje}) => {



    return (
        <>
            <div className="max-w-sm bg-green-600 rounded-lg border shadow-md flex flex-col justify-center items-center">
                {/* <a href="#"> */}
                <img className="rounded-t-lg w-full inset-0 object-cover object-center rounded-md" src={personaje.image} alt={personaje.name} />
                {/* </a> */}
                <div className="p-5 bg-green-600">
                    {/* <a href="#"> */}
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">{personaje.name}</h5>
                    {/* </a> */}
                    <p className="mb-3 font-normal text-gray-700 text-center">{personaje.species}</p>
                    <div className='flex justify-center'>
                    <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-black bg-white rounded-lg focus:ring-4 ">
                        Read more
                        <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </a>
                    </div>
                </div>
            </div>

        </>

    )
}

export default CardPersonajes