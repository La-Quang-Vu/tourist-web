

const HotDeal = () => {

  return (
    <div className="bg-[#fafafa] pt-[50px] pb-[30px]">
      <div className="container2">
        <h2 className="mb-[25px] text-2xl font-bold text-center text-[rgba(0,0,0,.85)]">Hot deal</h2>
        <div className="md:mx-[-15px] md:flex">
          <div className="md:w-1/2 md:px-[15px] md:mb-[30px] lg-1200px:w-1/3 ">
            <a href="" className="group relative block overflow-hidden h-[400px] bg-white rounded shadow-md2 hover:shadow-md3 transition-all duration-[.4s]">
              <div className="h-[216px] w-full overflow-hidden">
                <img src="../../assets/images/hot-deal/20210715_225440_10.jpg"
                  className="w-full h-full object-cover transition-transform ease-out duration-300 group-hover:duration-[3s] transform scale-100 group-hover:scale-110"
                  alt="[APRICOT HOTEL HÀ NỘI] - GÓI STAYCATION PHÒNG NGHỈ + TRÀ CHIỀU"
                />
              </div>
              <div className="md:p-[15px]">
                <p className="h-12 mb-[10px] font-bold overflow-hidden overflow-ellipsis">
                [APRICOT HOTEL HÀ NỘI] - GÓI STAYCATION PHÒNG NGHỈ + TRÀ CHIỀU
                </p>
                <div className="mb-[5px] flex">
                  <span className="w-[70px] mr-[5px]">
                    Combo:
                  </span>
                  <span className="whitespace-nowrap overflow-hidden overflow-ellipsis text-[#ff8917]">
                    Hotel
                  </span>
                </div>
                <div className="flex">
                  <span className="w-[70px] mr-[5px]">
                    Include:
                  </span>
                  <span className="whitespace-nowrap overflow-hidden overflow-ellipsis text-[#389e0d]">
                    Breakfast
                  </span>
                </div>
                <div className="mt-[10px]">
                  <span className=" text-xl2 text-[#ff8917] font-bold">
                    $95.22
                  </span>
                </div>
              </div>
            </a>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default HotDeal;