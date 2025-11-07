// // // import React from "react";

// // // export default function ProductList() {
// // //     return (
// // //         <div className="w-full h-screen bg-[#fefbf5] p-10">
// // //             <h1 className="text-5xl font-bold text-[#EBCA61] border-b-4 border-[#EBCA61] inline-block mb-8">
// // //                 PRODUCTS
// // //             </h1>

// // //             {/* Search bar */}
// // //             <div className="w-full mb-6">
// // //                 <input
// // //                     type="text"
// // //                     placeholder="Search for a product"
// // //                     className="w-1/2 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#EBCA61]"
// // //                 />
// // //             </div>

// // //             {/* Table will come here */}
// // //             <div className="bg-white shadow-lg rounded-xl p-4">
// // //                 <table className="w-full text-left border-collapse">
// // //                     <thead>
// // //                         <tr className="border-b">
// // //                             <th className="p-2">S.No</th>
// // //                             <th className="p-2">Product</th>
// // //                             <th className="p-2">Actions</th>
// // //                             <th className="p-2">Category</th>
// // //                             <th className="p-2">Product Code</th>
// // //                             <th className="p-2">Price</th>
// // //                             <th className="p-2">Quantity</th>
// // //                         </tr>
// // //                     </thead>

// // //                     <tbody>
// // //                         <tr className="border-b">
// // //                             <td className="p-2">1</td>
// // //                             <td className="p-2">Sony Headphones</td>
// // //                             <td className="p-2 flex gap-2">
// // //                                 <button className="bg-[#EBCA61] text-white px-3 py-1 rounded-md">Update</button>
// // //                                 <button className="bg-red-500 text-white px-3 py-1 rounded-md">Delete</button>
// // //                             </td>
// // //                             <td className="p-2">Electronics</td>
// // //                             <td className="p-2">|||||</td>
// // //                             <td className="p-2">1100 PKR</td>
// // //                             <td className="p-2">
// // //                                 <div className="w-20 h-2 bg-gray-200 rounded-full">
// // //                                     <div className="h-2 bg-green-500 rounded-full" style={{ width: "80%" }}></div>
// // //                                 </div>
// // //                             </td>
// // //                         </tr>
// // //                     </tbody>
// // //                 </table>
// // //             </div>
// // //         </div>
// // //     );
// // // }
// // import React from "react";

// // export default function ProductList() {
// //     return (
// //         <div className="w-full min-h-screen bg-[#fefbf5] p-10 flex flex-col">
// //             {/* Heading */}
// //             <h1 className="text-5xl font-bold text-[#EBCA61] border-b-4 border-[#EBCA61] inline-block mb-8">
// //                 PRODUCTS
// //             </h1>

// //             {/* Search Bar */}
// //             <div className="w-full mb-6 flex items-center gap-2">
// //                 <span className="text-[#EBCA61] text-xl">🔍</span>
// //                 <input
// //                     type="text"
// //                     placeholder="Search for a product"
// //                     className="w-1/2 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#EBCA61]"
// //                 />
// //             </div>

// //             {/* Product Table */}
// //             <div className="bg-white shadow-lg rounded-xl p-4">
// //                 <table className="w-full text-left border-collapse">
// //                     <thead>
// //                         <tr className="border-b">
// //                             <th className="p-2">S.No</th>
// //                             <th className="p-2">Product</th>
// //                             <th className="p-2">Actions</th>
// //                             <th className="p-2">Category</th>
// //                             <th className="p-2">Product Code</th>
// //                             <th className="p-2">Price</th>
// //                             <th className="p-2">Quantity</th>
// //                         </tr>
// //                     </thead>

// //                     <tbody>
// //                         <tr className="border-b hover:bg-gray-50">
// //                             <td className="p-2">1</td>
// //                             <td className="p-2">Sony Headphones</td>
// //                             <td className="p-2 flex gap-2">
// //                                 <button className="bg-[#EBCA61] text-white px-3 py-1 rounded-md hover:bg-yellow-500">
// //                                     Update
// //                                 </button>
// //                                 <button className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600">
// //                                     Delete
// //                                 </button>
// //                             </td>
// //                             <td className="p-2">Electronics</td>
// //                             <td className="p-2 text-xl">|||||</td>
// //                             <td className="p-2">1100 PKR</td>
// //                             <td className="p-2">
// //                                 <div className="w-24 h-2 bg-gray-200 rounded-full">
// //                                     <div
// //                                         className="h-2 bg-green-500 rounded-full"
// //                                         style={{ width: "80%" }}
// //                                     ></div>
// //                                 </div>
// //                             </td>
// //                         </tr>
// //                     </tbody>
// //                 </table>
// //             </div>

// //             {/* Bottom Buttons */}
// //             <div className="flex justify-between items-center mt-6">
// //                 <button className="bg-[#EBCA61] text-white px-5 py-2 rounded-md font-semibold hover:bg-yellow-500">
// //                     Add New Product
// //                 </button>

// //                 <div className="flex items-center gap-3 text-[#EBCA61] font-semibold">
// //                     <button>⬅️</button>
// //                     <button className="px-3 py-1 rounded-md bg-[#EBCA61] text-white">1</button>
// //                     <button className="px-3 py-1 rounded-md hover:bg-[#EBCA61] hover:text-white">2</button>
// //                     <button className="px-3 py-1 rounded-md hover:bg-[#EBCA61] hover:text-white">3</button>
// //                     <button>➡️</button>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // }


import React from 'react'
import { FaSearch } from "react-icons/fa";


export default function Product() {
    return (
        <div className="w-full h-screen"
            style={{ backgroundImage: "url('log/log.png')" }}>
            <div className='pt-14 pl-8'>
                <h1 className='text-4xl text-[#EBCA61] font-bold'>PRODUCTS</h1>
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
                    <div className="p-6 bg-white w-[70%]">
                        <table className="min-w-full border border-gray-300">
                            <thead className="bg-white w-[80%]">
                                <tr>
                                    <th className="border border-white px-4 py-2">S.no</th>
                                    <th className="border border-white px-4 py-2">Product</th>
                                    <th className="border border-white px-4 py-2">Action</th>
                                    <th className="border border-white px-4 py-2">Category</th>
                                    <th className="border border-white px-4 py-2">Product Name</th>
                                    <th className="border border-white px-4 py-2">Price</th>
                                    <th className="border border-white px-4 py-2">Quality</th>



                                </tr>
                            </thead>
                            <tbody>
                                {/* Here we will add rows (data) later */}
                                <tr>
                                    <td className="border border-[#EBCA61] px-4 py-2">0</td>
                                    <td className="border border-[#EBCA61] px-4 py-2">Sony HeadPhone</td>
                                    <td className="border border-[#EBCA61] px-4 py-2 flex justify-center 
                                    align-center"><button className='bg-[#416141CC] rounded-2xl'>Update </button> <img className="h-[10%] pl-2 pt-1" src="log/Vector.png" alt="" /></td>
                                    <td className="border border-[#EBCA61] px-4 py-2">Electronics</td>
                                    <td className="border border-[#EBCA61] px-4 py-2"><img src="log/log3.png" alt="" /></td>
                                    <td className="border border-[#EBCA61] px-4 py-2">1100PKR</td>
                                    <td className="border border-[#EBCA61] px-4 py-2"><img src="log/percentage.png" alt="" /></td>
                                </tr>
                                <tr>
                                    <td className="border border-[#EBCA61] px-4 py-2">1</td>
                                    <td className="border border-[#EBCA61] px-4 py-2">Sony HeadPhone</td>
                                    <td className="border border-[#EBCA61] px-4 py-2 flex justify-center 
                                    align-center"><button className='bg-[#416141CC] rounded-2xl'>Update </button> <img className="h-[10%] pl-2 pt-1" src="log/Vector.png" alt="" /></td>
                                    <td className="border border-[#EBCA61] px-4 py-2">Electronics</td>
                                    <td className="border border-[#EBCA61] px-4 py-2"><img src="log/log3.png" alt="" /></td>
                                    <td className="border border-[#EBCA61] px-4 py-2">1100PKR</td>
                                    <td className="border border-[#EBCA61] px-4 py-2"><img src="log/log4.png" alt="" /></td>
                                </tr>
                                <tr>
                                    <td className="border border-[#EBCA61] px-4 py-2">2</td>
                                    <td className="border border-[#EBCA61] px-4 py-2">Sony HeadPhone</td>
                                    <td className="border border-[#EBCA61] px-4 py-2 flex justify-center 
                                    align-center"><button className='bg-[#416141CC] rounded-2xl'>Update </button> <img className="h-[10%] pl-2 pt-1" src="log/Vector.png" alt="" /></td>
                                    <td className="border border-[#EBCA61] px-4 py-2">Electronics</td>
                                    <td className="border border-[#EBCA61] px-4 py-2"><img src="log/log3.png" alt="" /></td>
                                    <td className="border border-[#EBCA61] px-4 py-2">1100PKR</td>
                                    <td className="border border-[#EBCA61] px-4 py-2"><img src="log/percentage3.png" alt="" /></td>
                                </tr>
                                <tr>
                                    <td className="border border-[#EBCA61] px-4 py-2">3</td>
                                    <td className="border border-[#EBCA61] px-4 py-2">Sony HeadPhone</td>
                                    <td className="border border-[#EBCA61] px-4 py-2 flex justify-center 
                                    align-center"><button className='bg-[#416141CC] rounded-2xl'>Update </button> <img className="h-[10%] pl-2 pt-1" src="log/Vector.png" alt="" /></td>
                                    <td className="border border-[#EBCA61] px-4 py-2">Electronics</td>
                                    <td className="border border-[#EBCA61] px-4 py-2"><img src="log/log3.png" alt="" /></td>
                                    <td className="border border-[#EBCA61] px-4 py-2">1100PKR</td>
                                    <td className="border border-[#EBCA61] px-4 py-2"><img src="log/percentage3.png" alt="" /></td>
                                </tr>
                                <tr>
                                    <td className="border border-[#EBCA61] px-4 py-2">4</td>
                                    <td className="border border-[#EBCA61] px-4 py-2">Sony HeadPhone</td>
                                    <td className="border border-[#EBCA61] px-4 py-2 flex justify-center 
                                    align-center"><button className='bg-[#416141CC] rounded-2xl'>Update </button> <img className="h-[10%] pl-2 pt-1" src="log/Vector.png" alt="" /></td>
                                    <td className="border border-[#EBCA61] px-4 py-2">Electronics</td>
                                    <td className="border border-[#EBCA61] px-4 py-2"><img src="log/log3.png" alt="" /></td>
                                    <td className="border border-[#EBCA61] px-4 py-2">1100PKR</td>
                                    <td className="border border-[#EBCA61] px-4 py-2"><img src="log/percentage.png" alt="" /></td>
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



























// import React, { useState, useMemo, useEffect } from "react";
// import { FaSearch } from "react-icons/fa";

// /**
//  * ProductList component
//  * - Static products array (you can replace with API call)
//  * - Search with debounce
//  * - Map products to rows
//  */

// export default function ProductList() {
//     // ------------------------------------------------------------------
//     // 1) Static data (replace with API later)
//     // ------------------------------------------------------------------
//     const initialProducts = [
//         {
//             id: 1,
//             name: "Sony HeadPhone",
//             category: "Electronics",
//             productImg: "log/log3.png",
//             price: "1100 PKR",
//             qualityImg: "log/percentage.png",
//         },
//         {
//             id: 2,
//             name: "Samsung Mobile",
//             category: "Electronics",
//             productImg: "log/log3.png",
//             price: "35000 PKR",
//             qualityImg: "log/percentage3.png",
//         },
//         {
//             id: 3,
//             name: "Dell Laptop",
//             category: "Computers",
//             productImg: "log/log3.png",
//             price: "95000 PKR",
//             qualityImg: "log/percentage3.png",
//         },
//         // add more items as needed
//     ];

//     // ------------------------------------------------------------------
//     // 2) React state
//     // ------------------------------------------------------------------
//     const [products, setProducts] = useState(initialProducts); // product list (dynamic)
//     const [query, setQuery] = useState("");                    // controlled input value
//     const [debouncedQuery, setDebouncedQuery] = useState("");  // debounced value

//     // ------------------------------------------------------------------
//     // 3) Debounce effect - waits 300ms after user stops typing
//     // ------------------------------------------------------------------
//     useEffect(() => {
//         const id = setTimeout(() => {
//             setDebouncedQuery(query.trim().toLowerCase());
//         }, 300); // 300ms debounce delay

//         return () => clearTimeout(id); // cleanup on next effect run
//     }, [query]);

//     // ------------------------------------------------------------------
//     // 4) Filtered list (useMemo for performance)
//     //    - Search by name OR category (case-insensitive)
//     // ------------------------------------------------------------------
//     const filtered = useMemo(() => {
//         if (!debouncedQuery) return products;
//         return products.filter((p) => {
//             return (
//                 p.name.toLowerCase().includes(debouncedQuery) ||
//                 p.category.toLowerCase().includes(debouncedQuery)
//             );
//         });
//     }, [products, debouncedQuery]);

//     // ------------------------------------------------------------------
//     // 5) Handlers for update / delete (placeholders)
//     // ------------------------------------------------------------------
//     function handleUpdate(id) {
//         // placeholder: open modal or navigate to update page
//         alert("Update clicked for id: " + id);
//     }

//     function handleDelete(id) {
//         // basic delete from local state (ask confirmation)
//         if (confirm("Are you sure you want to delete this product?")) {
//             setProducts((prev) => prev.filter((p) => p.id !== id));
//         }
//     }

//     // ------------------------------------------------------------------
//     // 6) Render
//     // ------------------------------------------------------------------
//     return (
//         <div
//             className="w-full min-h-screen bg-cover"
//             style={{ backgroundImage: "url('log/log.png')" }}
//         >
//             <div className="pt-14 pl-8 pr-8">
//                 <h1 className="text-4xl text-[#EBCA61] font-bold">PRODUCTS</h1>

//                 {/* Search bar */}
//                 <div className="pt-8 flex items-center gap-3">
//                     <div className="w-[420px] border border-blue-400 rounded-md flex items-center px-3 py-2 bg-white shadow-sm">
//                         <FaSearch className="text-yellow-500 text-lg mr-3" />
//                         <input
//                             value={query}
//                             onChange={(e) => setQuery(e.target.value)}
//                             type="text"
//                             placeholder="Search by name or category..."
//                             className="w-full outline-none text-gray-700 placeholder-gray-400"
//                         />
//                     </div>

//                     {/* Show count */}
//                     <div className="text-sm text-gray-600">
//                         Showing <span className="font-semibold">{filtered.length}</span> result(s)
//                     </div>
//                 </div>

//                 {/* Table container */}
//                 <div className="p-6 bg-white mt-6 rounded-xl shadow-lg overflow-auto">
//                     <table className="min-w-full border border-gray-300">
//                         <thead className="bg-white">
//                             <tr>
//                                 <th className="border px-4 py-2 text-left">S.no</th>
//                                 <th className="border px-4 py-2 text-left">Product</th>
//                                 <th className="border px-4 py-2 text-left">Action</th>
//                                 <th className="border px-4 py-2 text-left">Category</th>
//                                 <th className="border px-4 py-2 text-left">Image</th>
//                                 <th className="border px-4 py-2 text-left">Price</th>
//                                 <th className="border px-4 py-2 text-left">Quality</th>
//                             </tr>
//                         </thead>

//                         <tbody>
//                             {filtered.length === 0 ? (
//                                 <tr>
//                                     <td colSpan={7} className="text-center py-6 text-gray-500">
//                                         No products found.
//                                     </td>
//                                 </tr>
//                             ) : (
//                                 filtered.map((product, index) => (
//                                     <tr key={product.id} className="hover:bg-gray-50">
//                                         <td className="border px-4 py-2">{index + 1}</td>

//                                         <td className="border px-4 py-2">{product.name}</td>

//                                         <td className="border px-4 py-2 flex items-center gap-2">
//                                             <button
//                                                 onClick={() => handleUpdate(product.id)}
//                                                 className="bg-[#416141CC] text-white px-3 py-1 rounded-2xl text-sm"
//                                             >
//                                                 Update
//                                             </button>

//                                             <button
//                                                 onClick={() => handleDelete(product.id)}
//                                                 className="bg-red-500 text-white px-3 py-1 rounded-2xl text-sm"
//                                             >
//                                                 Delete
//                                             </button>
//                                         </td>

//                                         <td className="border px-4 py-2">{product.category}</td>

//                                         <td className="border px-4 py-2">
//                                             <img src={product.productImg} alt={product.name} className="h-10" />
//                                         </td>

//                                         <td className="border px-4 py-2">{product.price}</td>

//                                         <td className="border px-4 py-2">
//                                             <img src={product.qualityImg} alt="quality" className="h-6" />
//                                         </td>
//                                     </tr>
//                                 ))
//                             )}
//                         </tbody>
//                     </table>

//                     {/* Add product button */}
//                     <div className="pt-4 flex justify-between items-center">
//                         <button
//                             onClick={() => alert("Open add product modal (implement later)")}
//                             className="bg-[#EBCA61] rounded-2xl px-5 py-2 text-white font-semibold"
//                         >
//                             Add New Product
//                         </button>

//                         {/* simple pagination placeholders */}
//                         <div className="flex items-center gap-2 text-[#EBCA61] font-semibold">
//                             <button>⬅️</button>
//                             <button className="px-3 py-1 rounded-md bg-[#EBCA61] text-white">1</button>
//                             <button className="px-3 py-1 rounded-md hover:bg-[#EBCA61] hover:text-white">2</button>
//                             <button className="px-3 py-1 rounded-md hover:bg-[#EBCA61] hover:text-white">3</button>
//                             <button>➡️</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }


// // the above my own ok





