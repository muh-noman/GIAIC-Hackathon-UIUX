import React from 'react'


const Homee = () => {
  return (
    <div>

      {/* banner */}

      {/* backgroun image */}
      <div className="bg-[url('/assets/home-bannerbg.png')] bg-cover h-[716px] w-auto relative">
        {/* box */}
        <div className="w-[643px] h-[443px] bg-bannerbg absolute right-2 bottom-28 flex justify-center items-center">
          <div className="w-[561px] h-[343px]  ">
            <p className="text-[24px]">New Arrival</p>
            <h1 className="font-bold text-[52px] mt-0 leading-none text-font01">
              Discover Our <br />
              New Collection
            </h1>
            <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br />
              elit tellus, luctus nec ullamcorper mattis</p>
            <button className="w-[222px] h-[74px] bg-font01 text-white mt-10">Buy Now</button>
          </div>
        </div>
      </div>

      {/* Browse the Range */}

      <div className="w-[1183px] h-[685px] flex justify-self-center m-3">
        <div className="grid grid-cols-3 space-x-2">
          {/* text div */}
          <div className=" col-span-3 w-[559px] h-[77px] ml-72">
            <h1 className="font-bold text-[32px] flex justify-center">Browse The Range</h1>
            <p className="text-[20px] flex justify-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          {/* picture */}
          <div className="bg-[url('/assets/rangepic01.png')] bg-cover h-[480px] w-[381px] "></div>
          <div className="bg-[url('/assets/rangepic02.png')] bg-cover h-[480px] w-[381px] "></div>
          <div className="bg-[url('/assets/rangepic03.png')] bg-cover h-[480px] w-[381px] "></div>
          <div><p className="flex justify-center font-bold">Dining</p></div>
          <div><p className="flex justify-center font-bold">Living</p></div>
          <div><p className="flex justify-center font-bold">Bedroom</p></div>
        </div>
      </div>

      {/* OUR PRODUCTs */}

      <div className="w-[1236px] h-[1084px] flex justify-self-center">
        <div className='grid grid-cols-4 space-x-4'>
          {/* heading */}
          <div className='w-auto h-[40px] col-span-4'>
            <div>
              <h1 className="font-bold text-[40px] flex justify-center">Our Products</h1>
            </div>
          </div>
          {/* images01 */}
          <div className="w-[285px] h-[446px] bg-font04">
            <div className="pic">
              <div className="pic relative"><img src="/assets/homeproduct-1.png" alt="logo" width={285} height={301} />
                <div className="tag absolute top-2 right-2 bg-red-500 h-[48px] w-[48px] rounded-full text-white text-[16px] flex justify-center items-center">-30%</div>
              </div>
            </div>
            {/* images discription */}
            <p className="productname mt-2 ml-3 font-semibold text-[24px]">Syltherine </p>
            <p className='ml-3 mt-2 font-medium text-font02 text[16px]'> Stylish cafe chair</p>
            <div className="price flex ml-3 ">
              <p className="Dprice mt-2 font-semibold text-[20px]">Rp 2.500.000</p>
              <p className="price mt-2 ml-9 line-through text-font03 font[16px]">Rp 3.500.000</p>
            </div>
          </div>
          {/* image2 */}
          <div className="w-[285px] h-[446px] bg-font04">
            <div className="pic relative"><img src="/assets/homeproduct-2.png" alt="logo" width={285} height={301} />
            </div>
            {/* images discription */}
            <p className="productname mt-2 ml-3 font-semibold text-[24px]">Leviosa</p>
            <p className='ml-3 mt-2 font-medium text-font02 text[16px]'> Stylish cafe chair</p>
            <div className="price flex ml-3 ">
              <p className="Dprice mt-2 font-semibold text-[20px]">Rp 2.500.00</p>
            </div>
          </div>
          {/* image3 */}
          <div className="w-[285px] h-[446px] bg-font04">
            <div className="pic">
              <div className="pic relative"><img src="/assets/homeproduct-3.png" alt="logo" width={285} height={301} />
                <div className="tag absolute top-2 right-2 bg-red-500 h-[48px] w-[48px] rounded-full text-white text-[16px] flex justify-center items-center">-50%</div>
              </div>
            </div>
            {/* images discription */}
            <p className="productname mt-2 ml-3 font-semibold text-[24px]">Lolito</p>
            <p className='ml-3 mt-2 font-medium text-font02 text[16px]'>Luxury big sofa</p>
            <div className="price flex ml-3 ">
              <p className="Dprice mt-2 font-semibold text-[20px]">Rp 7.000.000</p>
              <p className="price mt-2 ml-9 line-through text-font03 font[16px]">Rp 14.000.000</p>
            </div>
          </div>
          {/* image4 */}
          <div className="w-[285px] h-[446px] bg-font04">
            <div className="pic">
              <div className="pic relative"><img src="/assets/homeproduct-4.png" alt="logo" width={285} height={301} />
                <div className="tag absolute top-2 right-2 bg-green-500 h-[48px] w-[48px] rounded-full text-white text-[16px] flex justify-center items-center">New</div>
              </div>
            </div>
            {/* images discription */}
            <p className="productname mt-2 ml-3 font-semibold text-[24px]">Respira</p>
            <p className='ml-3 mt-2 font-medium text-font02 text[16px]'>Outdoor bar table and stool</p>
            <div className="price flex ml-3 ">
              <p className="Dprice mt-2 font-semibold text-[20px]">Rp 500.000</p>
            </div>
          </div>
          {/* image5 */}
          <div className="w-[285px] h-[446px] bg-font04">
            <div className="pic"><img src="/assets/homeproduct-5.png" alt="logo" width={285} height={301} />
            </div>
            {/* images discription */}
            <p className="productname mt-2 ml-3 font-semibold text-[24px]">Grifo</p>
            <p className='ml-3 mt-2 font-medium text-font02 text[16px]'>Night lamp</p>
            <div className="price flex ml-3 ">
              <p className="Dprice mt-2 font-semibold text-[20px]">Rp 1.500.000</p>
            </div>
          </div>
          {/* image6 */}
          <div className="w-[285px] h-[446px] bg-font04">
            <div className="pic">
              <div className="pic relative"><img src="/assets/homeproduct-6.png" alt="logo" width={285} height={301} />
                <div className="tag absolute top-2 right-2 bg-green-500 h-[48px] w-[48px] rounded-full text-white text-[16px] flex justify-center items-center">New</div>
              </div>
            </div>
            {/* images discription */}
            <p className="productname mt-2 ml-3 font-semibold text-[24px]">Muggo </p>
            <p className='ml-3 mt-2 font-medium text-font02 text[16px]'>Small mug</p>
            <div className="price flex ml-3 ">
              <p className="Dprice mt-2 font-semibold text-[20px]">Rp 150.000</p>
            </div>
          </div>
          {/* image7 */}
          <div className="w-[285px] h-[446px] bg-font04">
            <div className="pic">
              <div className="pic relative"><img src="/assets/homeproduct-7.png" alt="logo" width={285} height={301} />
                <div className="tag absolute top-2 right-2 bg-red-500 h-[48px] w-[48px] rounded-full text-white text-[16px] flex justify-center items-center">-50%</div>
              </div>
            </div>
            {/* images discription */}
            <p className="productname mt-2 ml-3 font-semibold text-[24px]">Pingky</p>
            <p className='ml-3 mt-2 font-medium text-font02 text[16px]'> Cute bed set</p>
            <div className="price flex ml-3 ">
              <p className="Dprice mt-2 font-semibold text-[20px]">Rp 7.000.000</p>
              <p className="price mt-2 ml-9 line-through text-font03 font[16px]">Rp 14.000.000</p>
            </div>
          </div>
          {/* image8 */}
          <div className="w-[285px] h-[446px] bg-font04">
            <div className="pic">
              <div className="pic relative"><img src="/assets/homeproduct-8.png" alt="logo" width={285} height={301} />
                <div className="tag absolute top-2 right-2 bg-green-500 h-[48px] w-[48px] rounded-full text-white text-[16px] flex justify-center items-center">New</div>
              </div>
            </div>
            {/* images discription */}
            <p className="productname mt-2 ml-3 font-semibold text-[24px]">Potty</p>
            <p className='ml-3 mt-2 font-medium text-font02 text[16px]'>Minimalist flower potr</p>
            <div className="price flex ml-3 ">
              <p className="Dprice mt-2 font-semibold text-[20px]">Rp 500.000</p>
            </div>
          </div>
          {/* show more button */}
          <div className='w-auto h-[48px] col-span-4 flex justify-center'>
            <button className=' font-semibold text-[16px] text-font01 w-[245px] h-[48px] bg-white border border-font01'>Show More</button>
          </div>
        </div>
      </div>

      {/* inspiration */}

      <div className="inspirationv w-[1760px] h-[670px] bg-font06 flex items-center justify-evenly">
        {/* tile and button */}
        <div className=' w-[422px] h-[151px]'>
          <p className="title font-bold text-[40px] leading-tight">50+ Beautiful rooms inspiration</p>
          <p className="stitle font-medium text-[16px] text-font05">Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
          <button className="w-[176px] h-[48px] bg-font01 text-white font-semibold mt-8">Explore More</button>
        </div>
        {/* Range image1 */}
        <div className="image relative">
          <img src="/assets/inspirationpic-1.png" alt="Bed Room" width={404} height={582}></img>
          {/* content */}
          <div className="content">
            <div className="pic absolute flex flex-col justify-center  bottom-28  left-7  w-[217px] h-[130px] bg-white opacity-60">
              <p className='ml-5 font-medium text-font05 text-[16px]'>01 ------- Bed Room</p>
              <p className='ml-5 font-semibold text-[28px]'>Inner Peace</p>
            </div>
            <div className='absolute left-64 bottom-28 bg-font01  w-[48px] h-[48px] flex justify-center items-center text-white text-2xl '>&#8594;</div>
          </div>
        </div>
        {/* Range image2 */}
        <div className='relative'>
          <img src="/assets/inspirationpic-2.png" alt="Bed Room" width={372} height={486}></img>
          <div className='absolute bottom-56 right-[-23px]  bg-slate-100  w-[48px] h-[48px] rounded-full text-font01 flex items-center justify-center'>&gt;</div>
        </div>
        {/* Range image3 */}
        <div>
          <img className='cover  bg-auto' src="/assets/inspirationpic-2.png" alt="Bed Room" width={372} height={86}></img>
        </div>
      </div>

      {/* share */}

      <div className=' h-[780px] w-aut mb-12'>
        {/* heading */}
        <div className='mt-10 w-auto h-[90px] flex justify-center'>
          <div className='h-[86px] w-[356px]'>
            <p className='font-semibold text-[20px] text-font05'>Share your setup with</p>
            <h3 className='font-bold text-[40px] text-font07'>#FuniroFurniture</h3>
          </div>
        </div>
        {/* pictures */}
        <div className='grid grid-cols-5'>
          <div className=' h-[px] w-[px] bg-contain'><img src="/assets/sharepic01.png"  alt="pic" /></div>
          <div className='w-[312px] h-[451px] -translate-x-[165px] translate-y-[167px]'><img src="/assets/sharepic02.png"height={451} alt="pic" /></div>
          <div className='w-[295px] h-[392px] -translate-x-[97px] translate-y-[218px]'><img src="/assets/sharepic03.png" alt="pic" /></div>
          <div className='w-[290px] h-[348px] -translate-x-[42px] translate-y-[190px]'><img src="/assets/sharepic04.png" alt="pic" /></div>
          <div className='w-[425px] h-[433px] translate-x-[4px]'><img src="/assets/sharepic05.png" alt="pic" /></div>
          <div className='w-[380px] h-[270px] -translate-y-[65px]'><img src="/assets/sharepic06.png" alt="pic" /></div>
          <div className='w-[230px] h-[200px] -translate-x-[70px] -translate-y-[65px]'><img src="/assets/sharepic07.png" alt="pic" /></div>
          <div className='w-[178px] h-[242px]'><img src="/assets/sharepic8.png" alt="pic" /></div>
          <div className='w-[px] h-[px]'><img src="/assets/sharepic0.png" alt="pic" /></div>
        </div>
      </div>
    </div>
  )
}

export default Homee
