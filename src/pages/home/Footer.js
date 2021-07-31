

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
          <p className=" hidden md:block font-semibold mb-[15px] border-b border-[#d9d9d9]">
            <span className="pr-[15px] transform translate-y-1 bg-white inline-block">
            Hotels by city/province
            </span>
          </p>
          <ul className="hidden md:flex md:flex-wrap mx-[-5px]">

            {hotels.map((item) => {
              return (
                <li className=" md:w-1/4 lg-1200px:w-1/6 px-[5px] py-[2.5px] list-item">
                  <a href="" className={`text-xs_12_18 hover:underline block ${item.fontBold?'font-semibold':''}`}>
                    Hotel {item.name}
                  </a>
                </li>
                )
            })}
            
          </ul>
          <div className="md:hidden">
            <select className="px-[15px] input-1 cursor-pointer">
              <option>Hotels by city/province</option>

              {hotels.map((item) => {
                return (
                  <option value="">{item.name}</option>
                )
              })}
              
            </select>
          </div>
        </div>
        <div className="py-[15px] md:flex">
          <div className="hidden md:block md:w-1/5">
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
          <div className="md:hidden">
            <select className="px-[15px] input-1 cursor-pointer">
              <option value="">About Vntrip</option>
              <option value="">About Vntrip</option>
              <option value="">Contact</option>
              <option value="">Terms of Use</option>
              <option value="">Operation Regulation</option>
              <option value="">Privacy Policy</option>
              <option value="">Tourism blog</option>
              <option value="">Recruitment</option>
              <option value="">Vntrip cashback</option>
              <option value="">Affiliate Cooperation</option>
            </select>
          </div>
          <div className="pt-[15px] md:pt-0 flex justify-between md:block md:w-1/5 md:px-[15px] md:py-[5px]">
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
          <div className="py-[15px] md:py-0 border-b border-[#d9d9d9] md:border-none md:w-[30%] md:pr-[15px]">
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
          <div className="pt-[15px] md:pt-0 md:w-[30%]">
            <p className="mb-[15px] text-sm">
            Subscribe now to receive coupons, promotions &amp; secret deals:
            </p>
            <form className="mb-[15px] flex">
              <div className="flex-1">
                <div>
                  <input type="text" placeholder="Your Email" name="email"
                    className="px-[15px] text-sm input-1"
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
      <div className="bg-[#ff8917] py-[15px]">
        <div className="container2 block md:flex md:justify-between md:items-center ml-auto mr-auto">
          <p className=" text-center text-xs text-white mb-[15px] md:mb-0">
          Copyright © 2021 Vntrip.vn
          </p>
          <div className="flex items-center justify-center">
            <a href="" target="_blank" className="text-white items-center flex text-xs hover:underline">
              <svg width="18" height="18" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="mr-[5px] fill-[#fff]"><path d="m437 0h-362c-41.351562 0-75 33.648438-75 75v362c0 41.351562 33.648438 75 75 75h151v-181h-60v-90h60v-61c0-49.628906 40.371094-90 90-90h91v90h-91v61h91l-15 90h-76v181h121c41.351562 0 75-33.648438 75-75v-362c0-41.351562-33.648438-75-75-75zm0 0"></path></svg>
              <span>Facebook</span>
            </a>
            <a href="" target="_blank" className="text-white items-center flex text-xs ml-[15px] hover:underline">
              <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="mr-[5px] fill-[#fff]"><path d="m12.004 5.838c-3.403 0-6.158 2.758-6.158 6.158 0 3.403 2.758 6.158 6.158 6.158 3.403 0 6.158-2.758 6.158-6.158 0-3.403-2.758-6.158-6.158-6.158zm0 10.155c-2.209 0-3.997-1.789-3.997-3.997s1.789-3.997 3.997-3.997 3.997 1.789 3.997 3.997c.001 2.208-1.788 3.997-3.997 3.997z"></path><path d="m16.948.076c-2.208-.103-7.677-.098-9.887 0-1.942.091-3.655.56-5.036 1.941-2.308 2.308-2.013 5.418-2.013 9.979 0 4.668-.26 7.706 2.013 9.979 2.317 2.316 5.472 2.013 9.979 2.013 4.624 0 6.22.003 7.855-.63 2.223-.863 3.901-2.85 4.065-6.419.104-2.209.098-7.677 0-9.887-.198-4.213-2.459-6.768-6.976-6.976zm3.495 20.372c-1.513 1.513-3.612 1.378-8.468 1.378-5 0-7.005.074-8.468-1.393-1.685-1.677-1.38-4.37-1.38-8.453 0-5.525-.567-9.504 4.978-9.788 1.274-.045 1.649-.06 4.856-.06l.045.03c5.329 0 9.51-.558 9.761 4.986.057 1.265.07 1.645.07 4.847-.001 4.942.093 6.959-1.394 8.453z"></path><circle cx="18.406" cy="5.595" r="1.439"></circle></svg>
              <span>Instagram</span>
            </a>
            <a href="" target="_blank" className="text-white items-center flex text-xs ml-[15px] hover:underline">
              <svg width="18" height="18" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="mr-[5px] fill-[#fff]"><path d="m162.457 434.408c-23.427 23.444-61.433 23.444-84.861 0-23.075-23.059-23.443-60.249-1.088-83.757l126.465-126.465c-39.112-10.458-82.481-.832-113.748 28.904l-56.231 56.231c-44.711 47.015-43.975 121.395 2.176 167.514 46.855 46.887 122.867 46.887 169.722 0l51.846-51.846c31.425-31.404 41.785-75.905 31.086-115.947z"></path><path d="m476.835 35.17c-46.119-46.151-120.499-46.887-167.514-2.176l-56.231 56.231c-29.735 31.268-39.361 74.637-28.904 113.748l126.465-126.465c23.508-22.355 60.697-21.987 83.757 1.088 23.444 23.428 23.443 61.433 0 84.861l-125.367 125.367c40.042 10.699 84.543.34 115.947-31.086l51.846-51.846c46.888-46.855 46.888-122.867.001-169.722z"></path><path d="m164.774 347.228c11.714 11.722 30.717 11.722 42.43 0l140.023-140.023c11.722-11.714 11.722-30.717 0-42.43-11.53-11.538-30.125-11.722-41.878-.544l-141.12 141.12c-11.177 11.752-10.993 30.347.545 41.877z"></path></svg>
              <span>Tourism blog</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;