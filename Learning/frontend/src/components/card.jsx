import React from 'react'
import { CircleCheckBig } from 'lucide-react';

const Card = ({icon : Icon, heading, paragraph, color}) => {
    return (
        <section>
            <div>
                <div className='bg-[#FFFFFF] p-4 shadow-2xl rounded-2xl transition-all duration-300 hover:-translate-y-2 cursor-default hover:border border-blue-200 mx-4'>
                    <div className='py-3'>
                        < Icon
                            size={30}
                            strokeWidth={2}
                            className={color}
                        />
                    </div>
                    <div className='text-center'>
                        <h1 className='font-bold text-lg'>{heading}</h1>
                        <p className='text-gray-500'>{paragraph}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Card