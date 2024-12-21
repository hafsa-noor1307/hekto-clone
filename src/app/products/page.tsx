import Footer2 from "../components/footer2";

export default function Products() {
  return (
    <div>
      <div className="bg-[#F6F5FF] h-[286px]">
        <h2 className="text-[#1A0B5B] text-[38px] pt-20 pl-12 md:pl-48 font-bold text-center md:text-left">
          Product Default
        </h2>
        <div className="flex space-x-1 justify-center md:justify-start pl-12 md:pl-48">
          <h3>Home. Pages</h3>
          <h3 className="text-[#FB2E86]">.Product Default</h3>
        </div>
      </div>

      <div className="h-auto w-full md:w-[1170px] bg-[#FFFFFF] mt-10 md:mt-40 drop-shadow-lg mx-4 sm:mx-16 rounded-[2px] flex flex-col md:flex-row">
        <div className="flex justify-center md:pl-3 pt-2 space-y-3 md:space-y-0">
          <div className="space-y-3 mb-2">
            <img src="/Images/bo1.png" alt="" className="h-[155px] w-[151px] rounded-[2px]" />
            <img src="/Images/bo2.png" alt="" className="h-[155px] w-[151px] rounded-[2px]" />
            <img src="/Images/bo3.png" alt="" className="h-[155px] w-[151px] rounded-[2px]" />
          </div>
        </div>
        <div className="flex justify-center pb-2">
          <img src="/Images/bo4.png" alt="" className="pt-2 pl-5 rounded-[2px] max-w-full" />
        </div>
        <div className="pl-6 pt-8 space-y-3">
          <h2 className="text-[#0D134E] pt-4 text-[36px] font-semibold text-center md:text-left">
            Playwood arm chair
          </h2>
          <div className="flex justify-center md:justify-start space-x-1">
            <img src="/Images/5s.png" alt="" className="h-3 mt-[6px]" />
            <h6 className="text-[14px] text-[#151875]">(22)</h6>
          </div>
          <div className="flex justify-center md:justify-start space-x-3 font-medium">
            <h6 className="text-[#151875]">$32.00</h6>
            <h6 className="text-[#FB2E86]">$32.00</h6>
          </div>
          <h5 className="text-[#0D134E] font-medium text-center md:text-left">Color</h5>
          <p className="text-[#A9ACC6] text-center md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet itaque corrupti <br /> molestias illo doloremque.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="text-[#151875] font-medium">Add to Cart</button>
          </div>
          <div className="space-y-6 pt-4">
            <h5 className="text-[#151875] font-medium">Categories:</h5>
            <h5 className="text-[#151875] font-medium">Tags</h5>
            <div className="flex space-x-5">
              <h5 className="text-[#151875] font-medium">Share</h5>
              <img src="/Images/sh1.png" alt="" className="h-3 mt-2" />
            </div>
          </div>
        </div>
      </div>

      <div className="h-auto bg-[#F9F8FE] mt-10 md:mt-36 px-4 md:pl-40">
        <div>
          <ul className="text-[#151875] text-[24px] font-semibold pt-20 flex flex-wrap justify-center md:justify-start space-x-4 md:space-x-10">
            <li>Description</li>
            <li>Additional Info</li>
            <li>Reviews</li>
            <li>Video</li>
          </ul>
        </div>
        <div>
          <h4 className="text-[#151875] font-semibold mt-16 text-[18px] text-center md:text-left">
            Varius tempor
          </h4>
          <p className="mt-2 text-[#A9ACC6] text-center md:text-left">
            Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. <br /> Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus <br /> cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .
          </p>
        </div>
        <div>
          <h4 className="text-[#151875] font-semibold mt-16 text-[18px]">More Details</h4>
          <ul className="text-[#A9ACC6]">
            <div className="flex space-x-2">
              <img src="/Images/arr.png" alt="" className="h-6 mt-[9px]" />
              <li className="mt-2 mb-2">Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</li>
            </div>

            <div className="flex space-x-2">
              <img src="/Images/arr.png" alt="" className="h-6 mt-[9px]" />
              <li className="mt-2 mb-2">Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</li>
            </div>

            <div className="flex space-x-2">
              <img src="/Images/arr.png" alt="" className="h-6 mt-[9px]" />
              <li className="mt-2 mb-2">Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</li>
            </div>

            <div className="flex space-x-2">
              <img src="/Images/arr.png" alt="" className="h-6 mt-[9px]" />
              <li className="mt-2 mb-6">Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</li>
            </div>
            
          </ul>
        </div>
      </div>

      <div className="mt-10 md:mt-32">
        <h3 className="text-[36px] font-bold text-[#101750] text-center md:text-left ml-4 md:ml-40">
          Related Products
        </h3>
        <div className="mt-10 md:mt-20 flex flex-wrap justify-center gap-6">
          <div>
            <img src="/Images/men.png" alt="" className="h-[340px] w-[270px]" />
            <div className="text-[#101750] mt-3 font-medium flex justify-between">
              <div>
                <h5>Men's Fashion Wear</h5>
                <h5 className="text-[13px]">$43.00</h5>
              </div>
              <div className="flex mt-2">
                <img src="/Images/gs.png" className=" h-3 "/>
                <img src="/Images/gs.png" className=" h-3 "/>
                <img src="/Images/gs.png" className=" h-3 "/>
                <img src="/Images/gs.png" className=" h-3 "/>
                <img src="/Images/ss.png" className=" h-3 "/>
              </div>
            </div>
          </div>
          <div>
            <img src="/Images/women.png" alt="" className="h-[340px] w-[270px]" />
            <div className="text-[#101750] mt-3 font-medium flex justify-between">
              <div>
                <h5>Women's Fashion</h5>
                <h5 className="text-[13px]">$67.00</h5>
              </div>
              <div className="flex mt-2">
                <img src="/Images/gs.png" className=" h-3 "/>
                <img src="/Images/gs.png" className=" h-3 "/>
                <img src="/Images/gs.png" className=" h-3 "/>
                <img src="/Images/gs.png" className=" h-3 "/>
                <img src="/Images/gs.png" className=" h-3 "/>
              </div>
            </div>
          </div>
          <div>
            <img src="/Images/dummy.png" alt="" className="h-[340px] w-[270px]" />
            <div className="text-[#101750] mt-3 font-medium flex justify-between">
              <div>
                <h5>Wolx Dummy Fashion</h5>
                <h5 className="text-[13px]">$67.00</h5>
              </div>
              <div className="flex mt-2">
                <img src="/Images/gs.png" className=" h-3 "/>
                <img src="/Images/gs.png" className=" h-3 "/>
                <img src="/Images/gs.png" className=" h-3 "/>
                <img src="/Images/gs.png" className=" h-3 "/>
                <img src="/Images/ss.png" className=" h-3 "/>
              </div>
            </div>
          </div>
          <div>
            <img src="/Images/wall.png" alt="" className="h-[340px] w-[270px]" />
            <div className="text-[#101750] mt-3 font-medium flex justify-between">
              <div>
                <h5>Top Wall Digital Clock</h5>
                <h5 className="text-[13px]">$51.00</h5>
              </div>
              <div className="flex mt-2">
                <img src="/Images/gs.png" className=" h-3 "/>
                <img src="/Images/gs.png" className=" h-3 "/>
                <img src="/Images/gs.png" className=" h-3 "/>
                <img src="/Images/ss.png" className=" h-3 "/>
                <img src="/Images/ss.png" className=" h-3 "/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Footer2 />
      </div>
    </div>
  );
}
