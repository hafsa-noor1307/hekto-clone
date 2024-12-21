export default function Footer() {
    return (
        <div>
            <div className="h-auto bg-[#EEEFFB] mt-20 flex flex-wrap justify-center lg:justify-between space-y-10 lg:space-y-0 lg:space-x-20 px-4 lg:px-0 py-10">
                <div className="w-full lg:w-auto text-center pl-10 lg:text-left">
                    <h3 className="text-[38px] font-bold">Hekto</h3>
                    <div className="flex flex-wrap justify-center lg:justify-start mt-5 gap-1">
                        <input
                            type="email"
                            placeholder="Enter Email Address"
                            className="bg-[#FFFFFF] rounded-[3px] w-[242px] h-[44px] pl-4"
                        />
                        <button className="w-[135px] h-[44px] text-white text-center bg-[#FB2E86] rounded-[2px]">
                            Sign Up
                        </button>
                    </div>
                    <div className="text-[#8A8FB9] mt-4">
                        <p>Contact Info</p>
                        <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
                    </div>
                </div>

                <div className="w-full lg:w-auto text-center lg:text-left">
                    <h4 className="text-[22px] font-bold">Categories</h4>
                    <div className="mt-7 text-[#8A8FB9] space-y-4">
                        <h6>Laptops & Computers</h6>
                        <h6>Cameras & Photography</h6>
                        <h6>Smart Phones & Tablets</h6>
                        <h6>Video Games & Consoles</h6>
                        <h6>Waterproof Headphones</h6>
                    </div>
                </div>

                <div className="w-full lg:w-auto text-center lg:text-left">
                    <h4 className="text-[22px] font-bold">Customer Care</h4>
                    <div className="mt-7 text-[#8A8FB9] space-y-4">
                        <h6>My Account</h6>
                        <h6>Discount</h6>
                        <h6>Returns</h6>
                        <h6>Order History</h6>
                        <h6>Order Tracking</h6>
                    </div>
                </div>

                <div className="w-full lg:w-auto text-center lg:text-left pr-10">
                    <h4 className="text-[22px] font-bold">Pages</h4>
                    <div className="mt-7 text-[#8A8FB9] space-y-4">
                        <h6>Blog</h6>
                        <h6>Browse the Shop</h6>
                        <h6>Category</h6>
                        <h6>Pre-Built Pages</h6>
                        <h6>Visual Composer Elements</h6>
                        <h6>WooCommerce Pages</h6>
                    </div>
                </div>
            </div>
            <div className="bg-[#E7E4F8] h-auto text-[#9DA0AE] text-center flex flex-wrap justify-center lg:justify-between items-center px-4 lg:px-40 py-4">
                <h6 className="w-full lg:w-auto">©Webecy - All Rights Reserved</h6>
                <div className="flex space-x-2 mt-2 lg:mt-0">
                    <img src="/Images/fb.png" alt="" className="h-[19.42px]" />
                    <img src="/Images/ins.png" alt="" className="h-[19.42px]" />
                    <img src="/Images/twt.png" alt="" className="h-[19.42px]" />
                </div>
            </div>
        </div>
    );
}
