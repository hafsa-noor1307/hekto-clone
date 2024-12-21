import Footer2 from "../components/footer2";

export default function Shop() {
    return (
        <div>
            <div className="bg-[#F6F5FF] h-[286px]">
                <h2 className="text-[#1A0B5B] text-[38px] pt-20 px-4 lg:pl-48 font-bold text-center lg:text-left">Shop Grid Default</h2>
                <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-1 px-4 lg:pl-48 text-center lg:text-left">
                    <h3>Home. Pages</h3>
                    <h3 className="text-[#FB2E86]">.Shop Grid Default</h3>
                </div>
            </div>

            <div className="mt-10 px-4 lg:mt-20 lg:pl-48 flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0">
                <div>
                    <h3 className="text-[22px] text-[#151875] font-bold text-center lg:text-left">Ecommerce Accessories and Fashion item</h3>
                    <h5 className="text-[12px] text-[#8A8FB9] text-center lg:text-left">About 9,620 results (0.62 seconds)</h5>
                </div>
                <div className="text-[#3F509E] space-x-5 flex flex-wrap lg:flex-nowrap mt-2 lg:ml-10 justify-center lg:justify-start">
                    <div className="flex space-x-1 items-center">
                        <p>Per Page:</p>
                        <input type="text" className="w-[55px] h-[25px] border border-[#E7E6EF]" />
                    </div>
                    <div className="flex space-x-1 items-center">
                        <p>Sort By:</p>
                        <select className="w-[98px] h-[25px] border border-[#E7E6EF] text-[12px] pl-1">
                            <option>Best Match</option>
                            <option>ETC.</option>
                        </select>
                    </div>
                    <div className="flex space-x-4 items-center">
                        <div className="flex space-x-1 items-center">
                            <p>View:</p>
                            <img src="/Images/v4.png" alt="" className="h-3" />
                            <img src="/Images/v3.png" alt="" className="h-3" />
                        </div>
                        <input type="text" className="w-[162px] h-[25px] border border-[#E7E6EF]" />
                    </div>
                </div>
            </div>

            <div className="space-y-20 mt-20 px-4 lg:px-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
                    {Array.from({ length: 12 }).map((_, index) => (
                        <div key={index} className="h-[363px] w-full max-w-[270px] mx-auto">
                            <div className="bg-[#F6F7FB] h-[280px] flex justify-center items-center">
                                <img src={`/Images/p${(index %  11) + 1}.png`} alt="Product" className="h-full max-h-[80%]" />
                            </div>
                            <div>
                                <h5 className="text-[18px] text-[#151875] text-center mt-2 font-bold">Product Title</h5>
                                <img src="/Images/cc.png" alt="" className="mx-auto mt-1" />
                                <div className="text-[14px] space-x-2 flex justify-center mt-2">
                                    <h6 className="text-[#151875]">$26.00</h6>
                                    <h6 className="text-[#FB2E86]">*$42.00</h6>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <Footer2 />
            </div>
        </div>
    );
}
