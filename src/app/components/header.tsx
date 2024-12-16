export default function Header(){
    return(
        <div>
            <div>
                <div className=" h-[44px] bg-[#7E33E0] justify-between flex">
                    <div className="flex space-x-7 mt-2 ml-52">
                    <div className="flex space-x-3">
                        <img src="/Images/e.png" alt="" className=" h-[16px] mt-[5px] "/>
                        <h5 className="text-white">mhhasanul@gmail.com</h5>
                    </div>
                    <div className="flex space-x-3">
                        <img src="/Images/p.png" alt="" className=" h-[16px] mt-[5px] "/>
                        <h5 className="text-white">(12345)67890</h5>
                    </div>
                    </div>
                    <div className=" space-x-3 flex mr-32">
                        <select className=" bg-[#7E33E0] text-white ">
                            <option>English</option>
                            <option>Urdu</option>
                            <option>Arabic</option>
                        </select>
                        <select className=" bg-[#7E33E0] text-white ">
                            <option>USD</option>
                            <option>RS</option>
                            <option>Euro</option>
                        </select>
                        <div className="flex mt-3">
                        <h5 className="text-white">Login</h5>
                        <img src="/Images/u.png" alt="" className=" h-[16px] mt-[5px] "/>
                    </div>
                    <div className="flex mt-3">
                        <h5 className="text-white">Whishlist</h5>
                        <img src="/Images/h.png" alt="" className=" h-[16px] mt-[5px] "/>
                    </div>
                    <img src="/Images/c.png" alt="" className="h-[24px] mt-3" />
                    </div>
                </div>


                <div className="flex justify-center p-3">
                    <h1 className="text-[34px] mr-20 font-bold">Hekto</h1>
                    <ul className="flex space-x-6 mt-4">
                        <div className="flex space-x-1">
                        <li className="text-[#FB2E86] ">Home</li>
                        <img src="/Images/d.png" alt="" className="h-3 w-3 mt-2" />
                        </div>
                        <li>Pages</li>
                        <li>Products</li>
                        <li>Blog</li>
                        <li>Shop</li>
                        <li>Contact</li>
                    </ul>
                    <div className="flex ml-28 mt-1">
                        <input type="text" className="h-6 w-52 border border-[#E7E6EF] mt-4"/>
                        <img src="/Images/s.png" alt="" className=" h-6 w-6 p-1 bg-[#FB2E86] mt-4" />
                    </div>
                </div>


                <div className="h-[564px] bg-[#F2F0FF]">
                    <div className="flex">
                    <img src="/Images/l.png" alt="" className=" h-[387px] w-[387px] "/>
                    <div className=" font-bold mt-36 pr-40">
                        <h3 className="text-[#FB2E86] leading-3">Best Furniture For Your Castle....</h3>
                        <h2 className=" text-[32px] ">New Furniture Collection <br /> Trends in 2020</h2>
                        <p className="text-[#8A8FB9]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing <br />
                        in phasellus non in justo.</p>
                        <button className=" text-center h-[50px] w-[163px] bg-[#FB2E86] text-white mt-5 rounded-[2px] ">Shop Now</button>
                    </div>
                    <img src="/Images/sph.png" alt="" className="h-[370px] mt-20" />
                    </div>
                    <img src="/Images/n.png" alt="" className="mt-10 ml-[700px]" />
                </div>
            </div>
        </div>
    );
};