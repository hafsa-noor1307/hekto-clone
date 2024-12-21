import Link from "next/link";

export default function Header() {
    return (
        <div>
            {/* Top Bar */}
            <div className="h-[44px] bg-[#7E33E0] flex flex-wrap items-center justify-between px-4 lg:px-20">
                <div className="flex flex-wrap items-center space-x-7">
                    <div className="flex items-center space-x-3">
                        <img src="/Images/e.png" alt="" className="h-[16px] mt-[5px]" />
                        <h5 className="text-white text-sm">mhhasanul@gmail.com</h5>
                    </div>
                    <div className="flex items-center space-x-3">
                        <img src="/Images/p.png" alt="" className="h-[16px] mt-[5px]" />
                        <h5 className="text-white text-sm">(12345)67890</h5>
                    </div>
                </div>
                <div className="flex flex-wrap items-center space-x-3 mt-2 lg:mt-0">
                    <select className="bg-[#7E33E0] text-white text-sm">
                        <option>English</option>
                        <option>Urdu</option>
                        <option>Arabic</option>
                    </select>
                    <select className="bg-[#7E33E0] text-white text-sm">
                        <option>USD</option>
                        <option>RS</option>
                        <option>Euro</option>
                    </select>
                    <div className="flex items-center space-x-2">
                        <h5 className="text-white text-sm">Login</h5>
                        <img src="/Images/u.png" alt="" className="h-[16px]" />
                    </div>
                    <div className="flex items-center space-x-2">
                        <h5 className="text-white text-sm">Wishlist</h5>
                        <img src="/Images/h.png" alt="" className="h-[16px]" />
                    </div>
                    <img src="/Images/c.png" alt="" className="h-[24px]" />
                </div>
            </div>

            {/* Navigation Bar */}
            <div className="flex flex-wrap items-center justify-between px-4 lg:px-20 py-3">
                <h1 className="text-[28px] lg:text-[34px] font-bold">Hekto</h1>
                <ul className="flex flex-wrap items-center justify-center space-x-4 lg:space-x-6 mt-4 lg:mt-0">
                    <div className="flex items-center space-x-1">
                        <Link href={"/"}>
                            <li className="text-[#FB2E86] text-sm lg:text-base">Home</li>
                        </Link>
                        <img src="/Images/d.png" alt="" className="h-3 w-3" />
                    </div>
                    <Link href={"/"}>
                        <li className="text-sm lg:text-base">Pages</li>
                    </Link>
                    <Link href={"products"}>
                        <li className="text-sm lg:text-base">Products</li>
                    </Link>
                    <Link href={"blog"}>
                        <li className="text-sm lg:text-base">Blog</li>
                    </Link>
                    <Link href={"shop"}>
                        <li className="text-sm lg:text-base">Shop</li>
                    </Link>
                    <Link href={"contact"}>
                        <li className="text-sm lg:text-base">Contact</li>
                    </Link>
                </ul>
                <div className="flex items-center mt-4 lg:mt-0">
                    <input
                        type="text"
                        className="h-6 w-full lg:w-52 border border-[#E7E6EF] px-2"
                        placeholder="Search"
                    />
                    <img
                        src="/Images/s.png"
                        alt=""
                        className="h-6 w-6 p-1 bg-[#FB2E86]"
                    />
                </div>
            </div>
        </div>
    );
}
