import React from "react";
import {Link} from "react-router-dom"
function Home() {
    return (
        <>
            <div className="md:mx-auto md:container px-4">
                <div className="pt-10 md:pt-40">
                    <div className="container mx-auto">
                        <div className="flex flex-wrap items-center pb-12">
                            <div className="md:w-1/2 lg:w-2/3 w-full xl:pr-20 md:pr-6">
                                <div className="py-2 text-color">
                                    <h1 className="text-2xl lg:text-6xl md:leading-snug tracking-tighter f-f-l font-black">Aprendiendo Redux con <br /> "Rick and Morty"</h1>
                                    <h2 className="text-lg lg:text-3xl lg:leading-7 md:leading-10 f-f-r py-4 md:py-8">Vamos a ver como funciona el store y como comparte la informacion Redux, tambien como usarlo en componentes funcionales</h2>
                                    <Link to="/personajes" className="flex items-center cursor-pointer pb-4 md:pb-0 ">
                                        <h3 className=" text-lg lg:text-2xl font-bold hover:text-sky-600">Personajes</h3>
                                        <div className="pl-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                <path d="M13.1719 12L8.22192 7.04999L9.63592 5.63599L15.9999 12L9.63592 18.364L8.22192 16.95L13.1719 12Z" fill="#D53F8C" />
                                            </svg>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center">
                                <img className="absolute w-full h-full inset-0 object-cover object-center rounded-md" src="https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-portal-shoes-white-clothing-zavvi-23.png" alt="foto" />
                                {/* < */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pb-32 pt-16">
                    <div className="mx-auto">
                        <div className="flex flex-wrap flex-row-reverse items-center">
                            <div className="md:w-1/2 lg:w-2/3 w-full lg:pl-20 md:pl-10 sm:pl-0 pl-0">
                                <div className="py-2 text-color">
                                    <h1 className="text-2xl lg:text-6xl tracking-tighter md:leading-snug f-f-l font-black">Asi que presten atencion!</h1>
                                    <h2 className="text-lg lg:text-3xl leading-7 md:leading-10 f-f-r py-8">Si no entienden algo pregunten :3</h2>
                                    <Link to="/capitulos" className="flex items-center cursor-pointer pb-4 md:pb-0">
                                        <h3 className="f-f-r text-lg lg:text-2xl font-bold hover:text-sky-600" >Capitulos</h3>
                                        <div className="pl-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                <path d="M13.1719 12L8.22192 7.04999L9.63592 5.63599L15.9999 12L9.63592 18.364L8.22192 16.95L13.1719 12Z" fill="#D53F8C" />
                                            </svg>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center">
                                <img className="absolute w-full h-full inset-0 object-cover object-center rounded-md" src="http://assets.stickpng.com/images/58f37731a4fa116215a92411.png" alt="foto" />
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
