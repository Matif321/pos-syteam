import React from "react";
import { FaSearch } from "react-icons/fa";

export default function CardPage() {
    return (

        <div className="w-[150vh] h-[80vh] bg-cover bg-center"
            style={{ backgroundImage: "url('log/log.png')" }}>
            <div className='pt-14 pl-8'>
                <h1 className='text-4xl text-[#EBCA61] font-bold'>FINDING DUES</h1>
            </div>
            <div className='pt-8'>
                <div className="w-[420px] border border-blue-400 rounded-md flex items-center px-3 py-2 bg-white shadow-sm">
                    {/* Search Icon */}
                    <FaSearch className="text-yellow-500 text-lg mr-3" />

                    {/* Input Field */}
                    <input
                        type="text"
                        placeholder="Search for specific Due"
                        className="w-full outline-none text-gray-700 placeholder-gray-400" />
                </div>
                <div className="p-6 bg-white w-[1200px]">
                    <table>
                        <thead>
                            <tr>
                                <th className="border border-[#EBCA61] px-4 py-2">Customer id</th>
                                <th className="border  border-[#EBCA61] px-4 py-2">Costomer Name</th>
                                <th className="border  border-[#EBCA61] px-4 py-2">Cnic Number</th>
                                <th className="border  border-[#EBCA61] px-4 py-2">Dues pinding</th>
                                <th className="border  border-[#EBCA61] px-4 py-2">adress</th>
                                <th className="border  border-[#EBCA61] px-4 py-2">Cnic imag</th>
                                <th className="border  border-[#EBCA61] px-4 py-2">Details</th>
                                <th className="border  border-[#EBCA61] px-4 py-2">Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-[#EBCA61] px-4 py-2">001</td>
                                <td className="border border-[#EBCA61] px-4 py-2">Tariq Anwer</td>
                                <td className="border border-[#EBCA61] px-4 py-2">1730-9022-8432</td>
                                <td className="border border-[#EBCA61] px-4 py-2">1500PKR</td>
                                <td className="border border-[#EBCA61] px-4 py-2">House #3OL Unvirsity Road</td>
                                <td className="border border-[#EBCA61] px-4 py-2"><button>view page</button></td>
                                <td className="border border-[#EBCA61] px-4 py-2"><button>view page</button></td>
                                <td className="border border-[#EBCA61] px-4 py-2 flex space-x-4"><img src="log/Vector.png" className="h-[15px]" alt="" /><img src="log/Vectersecond.png" className="h-[15px]" alt="" /></td>
                            </tr>
                            <tr>
                                <td className="border border-[#EBCA61] px-4 py-2">002</td>
                                <td className="border border-[#EBCA61] px-4 py-2">Hamza khan</td>
                                <td className="border border-[#EBCA61] px-4 py-2">1730-1222-7659</td>
                                <td className="border border-[#EBCA61] px-4 py-2">2500PKR</td>
                                <td className="border border-[#EBCA61] px-4 py-2">House #3OL Unvirsity Road</td>
                                <td className="border border-[#EBCA61] px-4 py-2"><button>view page</button></td>
                                <td className="border border-[#EBCA61] px-4 py-2"><button>view page</button></td>
                                <td className="border border-[#EBCA61] px-4 py-2 flex space-x-4"><img src="log/Vector.png" className="h-[15px]" alt="" /><img src="log/Vectersecond.png" className="h-[15px]" alt="" /></td>
                            </tr>
                            <tr>
                                <td className="border border-[#EBCA61] px-4 py-2">003</td>
                                <td className="border border-[#EBCA61] px-4 py-2"> Ozairullah</td>
                                <td className="border border-[#EBCA61] px-4 py-2">1730-4020-1290</td>
                                <td className="border border-[#EBCA61] px-4 py-2">100PKR</td>
                                <td className="border border-[#EBCA61] px-4 py-2">House #3OL Unvirsity Road</td>
                                <td className="border border-[#EBCA61] px-4 py-2"><button>view page</button></td>
                                <td className="border border-[#EBCA61] px-4 py-2"><button>view page</button></td>
                                <td className="border border-[#EBCA61] px-4 py-2 flex space-x-4"><img src="log/Vector.png" className="h-[15px]" alt="" /><img src="log/Vectersecond.png" className="h-[15px]" alt="" /></td>
                            </tr>
                            <tr>
                                <td className="border border-[#EBCA61] px-4 py-2"><img src="log/Vectoethree.png" className="h-[1px]" alt="" /></td>
                                <td className="border border-[#EBCA61] px-4 py-2"><img src="log/Vectoethree.png" className="h-[1px]" alt="" /></td>
                                <td className="border border-[#EBCA61] px-4 py-2"><img src="log/Vectoethree.png" className="h-[1px]" alt="" /></td>
                                <td className="border border-[#EBCA61] px-4 py-2"><img src="log/Vectoethree.png" className="h-[1px]" alt="" /></td>
                                <td className="border border-[#EBCA61] px-4 py-2 flex justify-center"><img src="log/Vectoethree.png" className="h-[1px]" alt="" /></td>

                                <td className="border border-[#EBCA61] px-4 py-2"><img src="log/Vectoethree.png" className="h-[1px]" alt="" /></td>
                                <td className="border border-[#EBCA61] px-4 py-2"><img src="log/Vectoethree.png" className="h-[1px]" alt="" /></td>
                                <td className="border border-[#EBCA61] px-4 py-2"><img src="log/Vectoethree.png" className="h-[1px]" alt="" /></td>

                            </tr>
                            <tr>
                                <td className="border border-[#EBCA61] px-4 py-2"><img src="log/Vectoethree.png" className="h-[1px]" alt="" /></td>
                                <td className="border border-[#EBCA61] px-4 py-2"><img src="log/Vectoethree.png" className="h-[1px]" alt="" /></td>
                                <td className="border border-[#EBCA61] px-4 py-2"><img src="log/Vectoethree.png" className="h-[1px]" alt="" /></td>
                                <td className="border border-[#EBCA61] px-4 py-2"><img src="log/Vectoethree.png" className="h-[1px]" alt="" /></td>
                                <td className="border border-[#EBCA61] px-4 py-2 flex justify-center"><img src="log/Vectoethree.png" className="h-[1px]" alt="" /></td>

                                <td className="border border-[#EBCA61] px-4 py-2"><img src="log/Vectoethree.png" className="h-[1px]" alt="" /></td>
                                <td className="border border-[#EBCA61] px-4 py-2"><img src="log/Vectoethree.png" className="h-[1px]" alt="" /></td>
                                <td className="border border-[#EBCA61] px-4 py-2"><img src="log/Vectoethree.png" className="h-[1px]" alt="" /></td>
                            </tr>
                            <tr>




                            </tr>

                        </tbody>

                    </table>
                    <div className='pt-4'>
                        <button className=' bg-[#EBCA61] rounded-2xl' >Add  Custmer  Due<button></button></button>
                    </div>
                    <div className='pt-4 pl-5'>
                        <img src="log/NEXT PAGE.png" alt="" />
                    </div>


                </div>
            </div>





        </div>
    );
}















































































