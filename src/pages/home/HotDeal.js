

const HotDeal = () => {

  const dealItems = [
    {
      image: "../../assets/images/hot-deal/20210715_225440_10.jpg",
      title: "[APRICOT HOTEL HÀ NỘI] - GÓI STAYCATION PHÒNG NGHỈ + TRÀ CHIỀU",
      combo: "Hotel",
      include: "Breakfast",
      price: "$95.22"
    },
    {
      image: "../../assets/images/hot-deal/20210630_122420_Sapa1.jpg",
      title: "[HOTEL DE LA COUPOLE - MGALLERY] – CHECK IN SANG CHẢNH MÙA HÈ NÀY",
      combo: "Hotel",
      include: "Breakfast",
      price: "$140.66"
    },
    {
      image: "../../assets/images/hot-deal/20210622_474940_2.jpg",
      title: "[PAO'S SAPA] - HOT DEAL THÁNG 7",
      combo: "Hotel",
      include: "Breakfast",
      price: "$58.65"
    },
    {
      image: "../../assets/images/hot-deal/20210622_415230_vinpearlresortspalongbeachnhatrang5.jpg",
      title: "[VINPEARL RESORT & SPA LONG BEACH NHA TRANG 6N5Đ] + TEST COVID + ƯU ĐÃI GIẢM GIÁ ĐẶC BIỆT TỪ VNTRIP",
      combo: "Hotel",
      include: "",
      price: "$858.04"
    },
    {
      image: "../../assets/images/hot-deal/20210622_061360_1.jpg",
      title: "[HẠ LONG PLAZA HOTEL] - TRỌN GÓI NGHỈ DƯỠNG KHÁCH SẠN 4*",
      combo: "Hotel",
      include: "Breakfast",
      price: "$30.95"
    },
    {
      image: "../../assets/images/hot-deal/20210622_059360_2.jpg",
      title: "[SERENA KIM BÔI HÒA BÌNH] - Điểm đến AN TOÀN TRONG  MÙA DỊCH",
      combo: "Hotel",
      include: "Breakfast",
      price: "$68.6"
    }
  ]

  return (
    <div className="bg-[#fafafa] pt-[50px] pb-[30px]">
      <div className="container2">
        <h2 className="mb-[25px] text-2xl font-bold text-center text-[rgba(0,0,0,.85)]">Hot deal</h2>
        <div className="md:mx-[-15px] md:flex md:flex-wrap">
          {dealItems.map((item) => {
            return (
              <div className="md:w-1/2 lg-1200px:w-1/3 md:px-[15px] md:mb-[30px]">
                <a href="" className="group relative block overflow-hidden h-[400px] bg-white rounded shadow-md2 hover:shadow-md3 transition-all duration-[.4s]">
                  <div className="h-[216px] w-full overflow-hidden">
                    <img src={item.image}
                      className="w-full h-full object-cover transition-transform ease-out duration-300 group-hover:duration-[3s] transform scale-100 group-hover:scale-110"
                      alt={item.title}
                    />
                  </div>
                  <div className="md:p-[15px]">
                    <p className="h-12 mb-[10px] font-bold overflow-hidden overflow-ellipsis">
                      {item.title}
                    </p>
                    <div className="mb-[5px] flex">
                      <span className="w-[70px] mr-[5px]">
                        Combo:
                      </span>
                      <span className="whitespace-nowrap overflow-hidden overflow-ellipsis text-[#ff8917]">
                        {item.combo}
                      </span>
                    </div>
                    {(item.include !== "")&&(<div className="flex">
                      <span className="w-[70px] mr-[5px]">
                        Include:
                      </span>
                      <span className="whitespace-nowrap overflow-hidden overflow-ellipsis text-[#389e0d]">
                        {item.include}
                      </span>
                    </div>)}
                    <div className="mt-[10px]">
                      <span className=" text-xl2 text-[#ff8917] font-bold">
                        {item.price}
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default HotDeal;