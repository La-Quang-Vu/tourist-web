

const Footer = () => {

  const hotels = [
    { name: 'An Giang', fontBold: false, },
    { name: 'Bà Rịa - Vũng Tàu', fontBold: true, },
    { name: 'Bắc Giang', fontBold: false, },
    { name: 'Bến Tre', fontBold: false, },
    { name: 'Bình Định', fontBold: false, },
    { name: 'Bình Dương', fontBold: false, },
    { name: 'Bình Thuận', fontBold: true, },
    { name: 'Cần Thơ', fontBold: false, },
    { name: 'Đà Nẵng', fontBold: false, },
    { name: 'Đắk Lắk', fontBold: false, },
    { name: 'Điện Biên', fontBold: false, },
    { name: 'Đồng Nai', fontBold: false, },
    { name: 'Hà Nội', fontBold: true, },
    { name: 'Hà Tĩnh', fontBold: false, },
    { name: 'Hải Phòng', fontBold: false, },
    { name: 'Hòa Bình', fontBold: false, },
    { name: 'Khánh Hòa', fontBold: true, },
    { name: 'Lai Châu', fontBold: false, },
    { name: 'Lâm Đồng', fontBold: true, },
    { name: 'Lạng Sơn', fontBold: false, },
    { name: 'Lào Cai', fontBold: false, },
    { name: 'Nghệ An', fontBold: false, },
    { name: 'Ninh Bình', fontBold: false, },
    { name: 'Ninh Thuận', fontBold: false, },
    { name: 'Phú Yên', fontBold: false, },
    { name: 'Quảng Bình', fontBold: false, },
    { name: 'Quảng Nam', fontBold: true, },
    { name: 'Quảng Ngãi', fontBold: false, },
    { name: 'Quảng Ninh', fontBold: false, },
    { name: 'Quảng Trị', fontBold: false, },
    { name: 'Thái Nguyên', fontBold: false, },
    { name: 'Thanh Hóa', fontBold: false, },
    { name: 'Thừa Thiên Huế', fontBold: true, },
    { name: 'Tiền Giang', fontBold: false, },
    { name: 'TP Hồ Chí Minh', fontBold: true, },
    { name: 'Vĩnh Phúc', fontBold: false, },
  ]

  return (
    <div className="bg-white">
      <div className="container2">
        <div className="py-[15px] border-b border-[#d9d9d9]">
          <p className="font-semibold mb-[15px] border-b border-[#d9d9d9] block">
            <span className="pr-[15px] transform translate-y-1 bg-white inline-block">
            Hotels by city/province
            </span>
          </p>
          <ul className="md:flex md:flex-wrap mx-[-5px]">

            {hotels.map((item) => {
              return (
                <li className="w-1/6 px-[5px] py-[2.5px] list-item">
                  <a href="" className={`text-xs_12_18 hover:underline block ${item.fontBold?'font-semibold':''}`}>
                    Hotel {item.name}
                  </a>
                </li>
                )
            })}
            
          </ul>
        </div>
        <div className="py-[15px] md:flex">
          <div className="md:w-1/5">
            <a href="" className="mb-[5px] block text-sm hover:underline">About Vntrip</a>
            <a href="" className="mb-[5px] block text-sm hover:underline">Contact</a>
            <a href="" className="mb-[5px] block text-sm hover:underline">Terms of Use</a>
            <a href="" className="mb-[5px] block text-sm hover:underline">Operation Regulation</a>
            <a href="" className="mb-[5px] block text-sm hover:underline">Privacy Policy</a>
            <a href="" className="mb-[5px] block text-sm hover:underline">Tourism blog</a>
            <a href="" className="mb-[5px] block text-sm hover:underline">Recruitment</a>
            <a href="" className="mb-[5px] block text-sm hover:underline">Vntrip cashback</a>
            <a href="" className="mb-[5px] block text-sm hover:underline">Affiliate Cooperation</a>
          </div>
          <div className="md:w-1/5 md:px-[15px] md:py-[5px]">
            <a href="" className="md:mb-[10px] block">
              <img src="../../assets/images/footer/appStore.png" alt="appStore"
                className="w-[120px]"
              />
            </a>
            <a href="" className="md:mb-[10px] block">
              <img src="../../assets/images/footer/googlePlay.png" alt="appStore"
                className="w-[120px]"
              />
            </a>
          </div>
          <div className="md:w-[30%] md:pr-[15px]">
            <p className="mb-[5px] font-semibold text-sm">VNTRIP Co Ltd.,.</p>
            <p className="mb-[5px] font-semibold text-sm">Floor 2, Building 17T4 Hapulico Complex</p>
            <p className="mb-[5px] text-sm">1 Nguyen Huy Tuong Str., Thanh Xuan Dist., Hanoi</p>
            <p className="mb-[5px] text-sm">Account number: 0491000136688</p>
            <p className="mb-[5px] text-sm">Bank: Vietcombank</p>
            <p className="mb-[5px] text-sm">Branch: Thăng Long</p>
            <p className="mb-[5px] text-sm">Date of issue business permit: 9/5/2016</p>
            <p className="mb-[5px] text-sm">
              Email:&nbsp;
              <a href="mailto:cs@vntrip.vn" className="font-semibold text-[#1890ff] hover:underline">cs@vntrip.vn</a>
            </p>
            <p className="mb-[5px] text-sm">
              Hotline:&nbsp;
              <a href="tel:096 326 6688" className="font-semibold text-[#389e0d] hover:underline">096 326 6688</a>
            </p>
          </div>
          <div className="md:w-[30%]">
            <p className="mb-[15px] text-sm">
            Subscribe now to receive coupons, promotions &amp; secret deals:
            </p>
            <form className="mb-[15px] flex">
              <div className="flex-1">
                <div>
                  <input type="text" placeholder="Your Email" name="email"
                    className="w-full h-10 border rounded px-[15px] text-sm hover:border-[#48ABFD] focus:border-[#48ABFD] transition-all duration-300 outline-none focus:shadow-input1"
                  ></input>
                </div>
              </div>
              <button type="button" className="bg-[#ff8917] border border-[#ff8917] hover:bg-[#FF952F] hover:border-[#FF952F] transition-all duration-200 px-[15px] h-10 rounded">
                <span className="text-sm text-white font-semibold">Register</span>
              </button>
            </form>
            <div className="flex justify-center">
              <a target="_blank" href="http://online.gov.vn/Home/WebDetails/65609">
                <img alt="Logo bộ công thương" src="../../assets/images/footer/logo_bocongthuong_blue.png" 
                  className="w-[150px]"
                />
              </a>
              <a target="_blank" href="http://online.gov.vn/Home/WebDetails/24227">
                <img alt="Logo bộ công thương" src="../../assets/images/footer/logo_bocongthuong_red.png" 
                  className="w-[150px]"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;