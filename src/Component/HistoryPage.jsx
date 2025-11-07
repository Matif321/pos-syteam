import React from "react";

export default function HistoryPage() {
    return (
        <div className="w-[150vh] h-[80vh] bg-cover bg-center"
            style={{ backgroundImage: "url('log/log.png')" }}>
            <div className='pt-14 pl-8  '></div>
            <div className="p-6 bg-white w-[50%] border border-[#EBCA61] h-[300px] w-[800px]">

                <div className="ml-2 mt-1" >
                    <p className="text-[#EBCA61] text-2xl font-bold">HISTORY</p>
                </div>
                <div className="flex space-x-5 justify-center mt-8">
                    <div>
                        <div className="relative flex space-x-5 bg-[#EBCA61] rounded-xl w-[95%]">
                            <img src="log/Ellipsehistery.png" className="h-[90px]" alt="" />
                            <p className="mt-5">Transtion Histrey</p>

                        </div>
                    </div>
                    <div>
                        <div className="relative flex  bg-[#EBCA61] rounded-xl w-[95%]">
                            <img src="log/Ellipseehistreyy.png" className="h-[90px]" alt="" />
                            <p className="mt-5">Purchase Histery</p>

                        </div>
                    </div>
                </div>














            </div>









        </div>


    );
}
