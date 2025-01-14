import React from 'react'

const Footer = () => {
    return (
        <div className="h-[505px] border-t border-black-200">
            <div className="w-[1240px] h-[419px] absolute inset-x-12 mt-10">
                <div className='w-[1133px] h-[312px]  mx-16 mt-8'>
                    <div className='flex'>
                        <div className=' h-[px] w-[285px] ml-16 '>
                            <h1 className='text-[24px] font-bold mt-8'>Funiro.</h1>
                            <p className='text-[16px] font-normal mt-8'>400 University Drive Suite 200 Coral Gables,<br />FL 33134 USA</p>
                        </div>
                        <div className='h-[312px] w-[68px] ml-14'>
                            <ul className='flex flex-col'> 
                                <li className='mt-8 text-listfont text-[16px]'>Links</li>
                                <li className='mt-8 text-[16px]'>Home</li>
                                <li className='mt-8 text-[16px]'>Shop</li>
                                <li className='mt-8 text-[16px]'>About</li>
                                <li className='mt-8 text-[16px]'>Contact</li>
                            </ul>
                        </div>
                        <div className='h-[242px] w-[140px] ml-20'>
                        <ul className='flex flex-col'> 
                                <li className='mt-8 text-listfont text-[16px]'>Help</li>
                                <li className='mt-8 text-[16px]'>Payment options</li>
                                <li className='mt-8 text-[16px]'>Returns</li>
                                <li className='mt-8 text-[16px]'>Privacy policy</li>
                            </ul>
                        </div>
                        <div className=' h-[101px] w-[286px] ml-10'>
                            <p className='mt-8 text-listfont text-[16px]' >Newsletter</p>
                            <input type="text" placeholder='Enter your e-mail adress 'className="bg-transparent border-b border-black mt-8"/>
                            <button className="bg-transparent border-b border-black ml-3">Subscribe</button>
                        </div>
                    </div>
                </div>
                <hr className='m-5 border-black' />
                <div>
                    <p className='text-[16px] font-normal mx-16'>2023 furino. All rights reverved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
