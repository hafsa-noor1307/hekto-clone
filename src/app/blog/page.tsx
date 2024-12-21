import Footer2 from "../components/footer2";

export default function Blog() {
    return (
        <div>
            <div className="bg-[#F6F5FF] h-[286px] flex flex-col items-center sm:items-start sm:pl-48">
                <h2 className="text-[#1A0B5B] text-[38px] pt-20 font-bold text-center sm:text-left">Blog Page</h2>
                <div className="flex space-x-1 text-center sm:text-left">
                    <h3>Home. Pages</h3>
                    <h3 className="text-[#FB2E86]">.Blog Page</h3>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-center mt-32">
                <div className="space-y-8 px-4 lg:px-0">
                    {[1, 2, 3].map((item, index) => (
                        <div key={index} className="space-y-4">
                            <img src={`/Images/bl${item}.png`} alt="" className="h-[453px] w-full lg:w-auto rounded-[6px]" />
                            <div className="pt-4 flex flex-wrap gap-4">
                                <div className="flex space-x-1 items-center">
                                    <img src="/Images/pen.png" alt="" className="h-3 mt-1" />
                                    <div className="h-[23px] w-[160px] bg-[#FFE7F9] text-center text-[14px] text-[#151875]">
                                        Surf Auxion
                                    </div>
                                </div>
                                <div className="flex space-x-1 items-center">
                                    <img src="/Images/ca.png" alt="" className="h-3 mt-1" />
                                    <div className="h-[23px] w-[127px] bg-[#FFECE2] text-center text-[14px] text-[#151875]">
                                        Aug 09 2020
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-[30px] font-bold text-[#151875]">Mauris at orci non vulputate diam tincidunt nec.</h3>
                            <p className="text-[#8A8FB9]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum <br /> eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>
                            <div className="flex items-center space-x-1">
                                <button className="text-center text-[#151875] font-semibold mt-3">Read More</button>
                                <div className="h-1 w-1 rounded-full bg-[#FB2E86] mt-6"></div>
                            </div>
                        </div>
                    ))}

                    <div className="flex space-x-4 justify-center">
                        {[1, 2, 3, 4].map((page) => (
                            <button
                                key={page}
                                className="text-center h-6 w-8 hover:bg-[#FB2CA8] hover:text-[#FFFFFF] font-semibold border border-[#E0D3F5] text-[#E0D3F5] rounded-[2px]"
                            >
                                {page}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="ml-6 space-y-8 w-full lg:w-[350px]">
                    <div>
                        <h4 className="text-[#151875] text-[22px] font-semibold">Search</h4>
                        <input
                            type="text"
                            placeholder="Search For Posts"
                            className="text-[#BDBDD8] h-[40px] w-full rounded-[4px] pl-2 border border-[#BDBDD8]"
                        />
                    </div>

                    <div>
                        <h4 className="text-[#151875] text-[22px] font-semibold">Categories</h4>
                        <div className="flex flex-wrap gap-3 mt-3">
                            {["Hobbies (14)", "Women (21)", "Fashion (18)", "Men (12)", "Kids (7)"].map((category, index) => (
                                <button
                                    key={index}
                                    className="text-center w-[122px] h-[30px] hover:bg-[#FB2CA8] hover:text-[#FFFFFF] font-semibold text-[#151875] rounded-[2px]"
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-[#151875] text-[22px] font-semibold">Recent Posts</h4>
                        <div className="mt-6 space-y-6">
                            {[1, 2, 3, 4].map((post) => (
                                <div key={post} className="flex space-x-3">
                                    <img
                                        src={`/Images/rp${post}.png`}
                                        alt=""
                                        className="h-[51px] w-[70px] rounded-[2px]"
                                    />
                                    <div className="font-semibold mt-2">
                                        <h6 className="text-[#3F509E] text-[14px]">It is a long established fact</h6>
                                        <h6 className="text-[#8A8FB9] text-[11px]">Aug 09 2020</h6>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-[#151875] text-[22px] font-semibold">Sale Products</h4>
                        <div className="mt-6 space-y-6">
                            {[1, 2, 3].map((post) => (
                                <div key={post} className="flex space-x-3">
                                    <img
                                        src={`/Images/sp${post}.png`}
                                        alt=""
                                        className="h-[51px] w-[70px] rounded-[2px]"
                                    />
                                    <div className="font-semibold mt-2">
                                        <h6 className="text-[#3F509E] text-[14px]">Elit ornare in enim mauris.</h6>
                                        <h6 className="text-[#8A8FB9] text-[11px]">Aug 09 2020</h6>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>


                    <div>

  {/* Offer Products Section */}
  <div className="mt-10">
    <h4 className="text-[#151875] text-[22px] font-semibold">Offer Products</h4>
    <div className="mt-6 space-x-6 flex">
      {[1, 2].map((post) => (
        <div key={post} className="space-x-3">
          <img
            src={`/Images/op${post}.png`}
            alt=""
            className="h-[80px] w-[126px] rounded-[2px]"
          />
          <div className="font-semibold mt-2 text-center">
            <h6 className="text-[#3F509E] text-[14px]">Duis lectus est.</h6>
            <h6 className="text-[#8A8FB9] text-[11px]">$12.00 - $15.00</h6>
          </div>
        </div>
      ))}
    </div>
    <div className="mt-6 space-x-6 flex">
      {[3, 4].map((post) => (
        <div key={post} className="space-x-3">
          <img
            src={`/Images/op${post}.png`}
            alt=""
            className="h-[80px] w-[126px] rounded-[2px]"
          />
          <div className="font-semibold mt-2 text-center">
            <h6 className="text-[#3F509E] text-[14px]">Netus proin.</h6>
            <h6 className="text-[#8A8FB9] text-[11px]">$12.00 - $15.00</h6>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Follow Section */}
  <div className="mt-10">
    <h4 className="text-[#151875] text-[22px] font-semibold">Follow</h4>
    <div className="flex space-x-4 mt-6">
      <img src="/Images/fi.png" alt="" />
    </div>
  </div>

  {/* Tags Section */}
  <div className="mt-10">
    <h4 className="text-[#151875] text-[22px] font-semibold">Tags</h4>
    <div className="flex flex-wrap gap-3 mt-6">
      {["General", "Atsanil", "Insas", "Bibsaas", "Nulla"].map((tag, index) => (
        <a
          key={index}
          href="#"
          className="bg-[#F3F4F6] text-[#3F509E] px-4 py-2 rounded-[5px] text-[14px] font-medium hover:bg-[#3F509E] hover:text-white transition"
        >
          {tag}
        </a>
      ))}
    </div>
  </div>
</div>

                    {/* Other sections like Sale Product, Offer Product, etc., remain similar */}
                </div>
            </div>

            <Footer2 />
        </div>
    );
}
