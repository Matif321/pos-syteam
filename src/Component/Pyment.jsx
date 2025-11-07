

import React from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function Pyment() {
    const navigate = useNavigate();



    return (
        <div
            className="w-[80%] h-[80%] bg-cover bg-center"
            style={{ backgroundImage: "url('log/log.png')" }}
        >
            <div className='pt-8 pl-15'>
                <p className="text-[#EBCA61]  text-4xl ">PAYMENTS</p>
            </div>

            {/* the card main */}

            <div className="relative flex flex-wrap items-start gap-16 w-[800px] h-[400px] bg-white mt-8 ml-15 p-4 border-[#EBCA61] border-[0.5px] ">
                {/* card 1 */}
                <Link to="/cardpage"><div className="flex mt-8 bg-[#EBCA61] w-[200px] h-[100px]  rounded-xl items-center justify-center">

                    <img src="log/Ellipse.png" className="h-[30px]" alt="" />
                    <p>DUES</p>


                </div></Link>

                {/* card 2 */}
                <Link to="/HistoryPage"><div className="flex mt-8 bg-[#EBCA61] w-[200px] h-[100px]   rounded-xl items-center justify-center">
                    <img src="log/Ellipsetwo.png" className="h-[30px]" alt="" />
                    <p>HISTREY</p>
                </div></Link>

                {/* card 3 */}
                <Link to="/expensesPage"><div className="flex mt-8 bg-[#EBCA61] w-[200px] h-[100px]   rounded-xl items-center justify-center">
                    <img src="log/Ellipsethree.png" className="h-[30px]" alt="" />
                    <p>EXPENCES</p>
                </div></Link>

                {/* card 4 */}
                <div className="flex  bg-[#EBCA61] w-[200px] h-[100px]  rounded-xl items-center justify-center"
                    onClick={() => navigate("/salepage")}>

                    <img src="log/Elippsefour.png" className="h-[30px]" alt="" />
                    <p>SALES</p>
                </div>
            </div>
        </div>
    );
}
