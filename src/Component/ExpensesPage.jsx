


import React from 'react'
import { FaSearch } from "react-icons/fa";


export default function Product() {
    return (
        <div className="w-full h-screen"
            style={{ backgroundImage: "url('log/log.png')" }}>
            <div className='pt-14 pl-8'>
                <h1 className='text-4xl text-[#EBCA61] font-bold'>Transtion Histrey</h1>
                <div className='pt-8'>
                    <div className="w-[420px] border border-blue-400 rounded-md flex items-center px-3 py-2 bg-white shadow-sm">
                        {/* Search Icon */}
                        <FaSearch className="text-yellow-500 text-lg mr-3" />

                        {/* Input Field */}
                        <input
                            type="text"
                            placeholder="Search for a product"
                            className="w-full outline-none text-gray-700 placeholder-gray-400" />
                    </div>
                    <div className="p-6 bg-white w-[90%]">
                        <table className="min-w-full border border-gray-300">
                            <thead className="bg-white w-[80%]">
                                <tr>
                                    <th className="border border-white px-4 py-2">Custamer Name</th>
                                    <th className="border border-white px-4 py-2">Custamer Cnic</th>
                                    <th className="border border-white px-4 py-2">Total Iteams</th>
                                    <th className="border border-white px-4 py-2">Total Payment</th>
                                    <th className="border border-white px-4 py-2">Cash Payment</th>
                                    <th className="border border-white px-4 py-2">Remaining Payment</th>
                                    <th className="border border-white px-4 py-2">REcipte Date</th>
                                    <th className="border border-white px-4 py-2">Action</th>



                                </tr>
                            </thead>
                            <tbody>
                                {/* Here we will add rows (data) later */}
                                <tr>
                                    <td className="border border-[#EBCA61] px-4 py-2">Hares Khan</td>
                                    <td className="border border-[#EBCA61] px-4 py-2">17301-2299148-3</td>
                                    <td className="border border-[#EBCA61] px-4 py-2">24</td>
                                    <td className="border border-[#EBCA61] px-4 py-2">3500PKR</td>
                                    <td className="border border-[#EBCA61] px-4 py-2">2000PKR</td>
                                    <td className="border border-[#EBCA61] px-4 py-2">1500PKR</td>
                                    <td className="border border-[#EBCA61] px-4 py-2">09/30/202</td>
                                    <td className="px-4 py-2 flex space-x-2 mt-5"><button className='bg-cyan-950 text-white rounded-2xl w-[60px] '>total</button> <button className='bg-[#EBCA61] text-white w-[60px] rounded-2xl'>Print</button></td>
                                </tr>
                                <tr>
                                    <td className="border border-[#EBCA61] px-4 py-2">Yasir</td>
                                    <td className="border border-[#EBCA61] px-4 py-2">17301-2299148-3</td>
                                    <td className="border border-[#EBCA61] px-4 py-2">45</td>
                                    <td className="border border-[#EBCA61] px-4 py-2">1500PKR</td>
                                    <td className="border border-[#EBCA61] px-4 py-2">1500PKR</td>
                                    <td className="border border-[#EBCA61] px-4 py-2">0</td>
                                    <td className="border border-[#EBCA61] px-4 py-2">09/30/202</td>
                                    <td className="px-4 py-2 flex space-x-2 mt-5"><button className='bg-cyan-950 text-white rounded-2xl w-[60px] '>total</button> <button className='bg-[#EBCA61] text-white w-[60px] rounded-2xl'>Print</button></td>
                                </tr>
                                <tr>
                                    <td className="border border-[#EBCA61] px-4 py-2">Fawad</td>
                                    <td className="border border-[#EBCA61] px-4 py-2">17301-2299148-3</td>
                                    <td className="border border-[#EBCA61] px-4 py-2">10</td>
                                    <td className="border border-[#EBCA61] px-4 py-2">6000PKR</td>
                                    <td className="border border-[#EBCA61] px-4 py-2">8000PKR</td>
                                    <td className="border border-[#EBCA61] px-4 py-2">2000</td>
                                    <td className="border border-[#EBCA61] px-4 py-2">09/30/202</td>
                                    <td className="px-4 py-2 flex space-x-2 mt-5"><button className='bg-cyan-950 text-white rounded-2xl w-[60px] '>total</button> <button className='bg-[#EBCA61] text-white w-[60px] rounded-2xl'>Print</button></td>
                                </tr>
                                <tr>
                                    <td className="border border-[#EBCA61] px-4 py-2">Abdullah</td>
                                    <td className="border border-[#EBCA61] px-4 py-2">17301-2299148-3</td>
                                    <td className="border border-[#EBCA61] px-4 py-2">12</td>
                                    <td className="border border-[#EBCA61] px-4 py-2">6000PKR</td>
                                    <td className="border border-[#EBCA61] px-4 py-2">8000PKR</td>
                                    <td className="border border-[#EBCA61] px-4 py-2">0</td>
                                    <td className="border border-[#EBCA61] px-4 py-2">09/30/202</td>
                                    <td className="px-4 py-2 flex space-x-2 mt-5"><button className='bg-cyan-950 text-white rounded-2xl w-[60px] '>total</button> <button className='bg-[#EBCA61] text-white w-[60px] rounded-2xl'>Print</button></td>
                                </tr>














                            </tbody>
                        </table>
                        <div className='pt-4'>
                            <button className=' bg-[#EBCA61] rounded-2xl' >Add New Product<button></button></button>
                        </div>
                        <div className='pt-4 pl-5'>
                            <img src="log/NEXT PAGE.png" alt="" />
                        </div>

                    </div>























                </div>









            </div>



        </div>
    )

}























