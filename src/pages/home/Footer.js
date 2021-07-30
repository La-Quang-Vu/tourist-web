

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
        <div></div>
      </div>
    </div>
  )
}

export default Footer;