import React from 'react'

export default function Welcome() {
    return (
        <div className="w-full h-screen flex items-center justify-center "
            style={{ backgroundImage: "url('log/log.png')" }} >
            <div className='flex-col'>
                <div>

                    <p className='text-4xl font-bold'>Welcome To</p>
                </div>

                <div className='pt-7'>
                    <p className='text-5xl font-bold text-[#EBCA61]'>POS SYSTEM</p>
                </div>

                <div className='pt-3 '>
                    <p className='[letter-spacing:0.7em]'>innovative Architeacture <br /> your business</p>


                </div>
            </div>



        </div>
    )
}
