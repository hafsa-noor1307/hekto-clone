export default function Contact() {
    return (
        <div>
            <div className="bg-[#F6F5FF] h-[286px]">
                <h2 className="text-[#1A0B5B] text-[38px] pt-20 pl-6 md:pl-48 font-bold text-center md:text-left">
                    Contact Us
                </h2>
                <div className="flex flex-col md:flex-row md:space-x-1 pl-6 md:pl-48 text-center md:text-left">
                    <h3>Home. Pages</h3>
                    <h3 className="text-[#FB2E86]">. Contact Us</h3>
                </div>
            </div>

            <div className="mt-20 md:mt-40">
                <div className="flex flex-col md:flex-row justify-center items-center md:items-start space-y-10 md:space-y-0">
                    <div>
                        <h3 className="font-bold text-[#151875] text-[36px] text-center md:text-left">
                            Information About Us
                        </h3>
                        <p className="font-semibold text-[#8A8FB9] mt-6 text-center md:text-left">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque
                            ultrices <br className="hidden md:block" /> mattis aliquam, malesuada
                            diam est. Malesuada sem tristique amet erat vitae <br className="hidden md:block" /> eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
                        </p>
                        <div className="flex justify-center md:justify-start space-x-2 mt-8">
                            <div className="bg-[#5625DF] h-[25px] w-[25px] rounded-full"></div>
                            <div className="bg-[#FF27B7] h-[25px] w-[25px] rounded-full"></div>
                            <div className="bg-[#37DAF3] h-[25px] w-[25px] rounded-full"></div>
                        </div>
                    </div>
                    <div className="ml-0 md:ml-16">
                        <h3 className="font-bold text-[#151875] text-[36px] text-center md:text-left">
                            Contact Way
                        </h3>
                        <div className="mt-8 space-y-10">
                            <div className="flex flex-col md:flex-row md:space-x-7 space-y-6 md:space-y-0">
                                <div className="flex space-x-3">
                                    <div className="bg-[#5726DF] h-11 w-11 rounded-full"></div>
                                    <div className="font-semibold text-[#8A8FB9]">
                                        <h5>Tel: 877-67-88-99</h5>
                                        <h5>E-Mail: shop@store.com</h5>
                                    </div>
                                </div>
                                <div className="flex space-x-3">
                                    <div className="bg-[#FB2E86] h-11 w-11 rounded-full"></div>
                                    <div className="font-semibold text-[#8A8FB9]">
                                        <h5>
                                            Support Forum <br /> For over 24hr
                                        </h5>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row md:space-x-7 space-y-6 md:space-y-0">
                                <div className="flex space-x-3">
                                    <div className="bg-[#FFB265] h-11 w-11 rounded-full"></div>
                                    <div className="font-semibold text-[#8A8FB9]">
                                        <h5>
                                            20 Margaret st, London <br /> Great britain, 3NM98-LK
                                        </h5>
                                    </div>
                                </div>
                                <div className="flex space-x-3">
                                    <div className="bg-[#1BE982] h-11 w-11 rounded-full"></div>
                                    <div className="font-semibold text-[#8A8FB9]">
                                        <h5>
                                            Free standard shipping <br /> on all orders.
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-center mt-20 md:mt-32 pb-20 md:pb-40 space-y-10 md:space-y-0">
                    <div className="ml-0 md:ml-20">
                        <h3 className="font-bold text-[#151875] text-[36px] text-center md:text-left">
                            Get In Touch
                        </h3>
                        <p className="text-[#8A8FB9] mt-2 text-center md:text-left">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque
                            ultrices <br className="hidden md:block" /> tristique amet erat vitae
                            eget dolor los vitae lobortis quis bibendum quam.
                        </p>
                        <form className="mt-14 space-y-6">
                            <div className="flex flex-col md:flex-row md:space-x-5 space-y-6 md:space-y-0">
                                <input
                                    type="text"
                                    placeholder="Your Name*"
                                    className="h-[45px] w-full md:w-[255px] border border-[#A4B6C8] text-[#8A8FB9] pl-2 rounded-[3px]"
                                />
                                <input
                                    type="email"
                                    placeholder="Your E-mail"
                                    className="h-[45px] w-full md:w-[255px] border border-[#A4B6C8] text-[#8A8FB9] pl-2 rounded-[3px]"
                                />
                            </div>

                            <input
                                type="text"
                                placeholder="Subject*"
                                className="h-[45px] w-full md:w-[534px] border border-[#A4B6C8] text-[#8A8FB9] pl-2 rounded-[3px]"
                            />

                            <textarea
                                placeholder="Type Your Message*"
                                className="h-[166px] w-full md:w-[534px] border border-[#A4B6C8] text-[#8A8FB9] pl-2 pt-2 rounded-[3px]"
                            ></textarea>

                            <button className="text-center text-[#FFFFFF] h-11 w-full md:w-[157px] bg-[#FB2E86] mt-3 rounded-[3px]">
                                Send Mail
                            </button>
                        </form>
                    </div>

                    <img
                        src="/Images/contact.png"
                        alt=""
                        className="h-auto w-full md:w-auto md:h-[650px]"
                    />
                </div>
            </div>
        </div>
    );
}
