

const HomeBlog = () => {

  const itemCards = [
    {
      image: "../../assets/images/blog/festival/ngay-gia-dinh-2.jpeg",
      title: "Ngày Gia Đình Việt Nam năm 2021 là ngày nào? Nên làm gì cho ý nghĩa?",
      date: "16/06/2021"
    },
    {
      image: "../../assets/images/blog/festival/ruou-nep.jpg",
      title: "Rượu nếp – linh hồn trong mâm cỗ Tết Đoan Ngọ",
      date: "14/06/2021"
    },
    {
      image: "../../assets/images/blog/festival/tet-doan-ngo-1.jpg",
      title: "Nguồn gốc và ý nghĩa của ngày Tết Đoan Ngọ",
      date: "14/06/2021"
    },
    {
      image: "../../assets/images/blog/festival/tet-doan-ngo-2-16235798707051593461800.jpg",
      title: "Tết Đoan Ngọ: Sao phải đeo bùa, ăn rượu nếp, đi hái lá…",
      date: "14/06/2021"
    },
    {
      image: "../../assets/images/blog/festival/tet-doan-ngo.jpg",
      title: "Tết Đoan Ngọ 2021 là ngày nào?",
      date: "13/06/2021"
    },
    {
      image: "../../assets/images/blog/festival/vu-cong-quy3.jpg",
      title: "“Vũ công Quỷ” mong cầu đại dịch kết thúc tại lễ hội ở Venezuela",
      date: "09/06/2021"
    },
    {
      image: "../../assets/images/blog/festival/unnamed-4034-1622831649.png",
      title: "Lễ hội ‘Cánh buồm đỏ thắm’ giữa đêm trắng xứ bạch dương",
      date: "07/06/2021"
    },
    {
      image: "../../assets/images/blog/festival/to-chuc-1-6-an-toan-cho-be3.png",
      title: "Kế hoạch tổ chức ngày lễ  Quốc Tế Thiếu Nhi 1/6 an toàn cho bé",
      date: "27/05/2021"
    }
  ]

  return (
    <div className="mt-[50px]">
      <div className="container2">
        <div className="mt-[50px] mx-[-15px] flex flex-wrap">
          <div className="lg-1200px:w-1/3 md:w-full px-[15px]">
            <div>
              <h2 className="mb-[15px] text-xl_22 font-semibold text-[rgba(0,0,0,.85)]">
              Lễ hội - Festival
              </h2>
              <div className="overflow-hidden rounded mb-2 h-[232px]">
                <a target="_blank" href="">
                  <img src="../../assets/images/blog/festival/Ngay-cua-Cha-la-ngay-nao-2.jpg" 
                    className="w-full h-full object-cover transition-transform ease-out duration-300 hover:duration-[3s] transform scale-100 hover:scale-110"
                  />
                </a>
              </div>
              <div className="mb-[5px]">
                <a target="_blank" href=""
                  className="text-xl font-semibold no-underline text-[#262626]"
                >
                Ngày của cha năm 2021 là ngày nào: Nguồn gốc ý nghĩa, gợi ý lời chúc và quà tặng cho cha
                </a>
              </div>
              <div className="mb-[5px] flex items-center">
                <div className="flex mr-[15px]">
                  <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-[5px]"><path d="M10.9375 2.5C11.293 2.5 11.5938 2.63672 11.8672 2.88281C12.1133 3.15625 12.25 3.45703 12.25 3.8125V13.4375C12.25 13.8203 12.1133 14.1211 11.8672 14.3672C11.5938 14.6406 11.293 14.75 10.9375 14.75H1.3125C0.929688 14.75 0.628906 14.6406 0.382812 14.3672C0.109375 14.1211 0 13.8203 0 13.4375V3.8125C0 3.45703 0.109375 3.15625 0.382812 2.88281C0.628906 2.63672 0.929688 2.5 1.3125 2.5H2.625V1.07812C2.625 0.996094 2.65234 0.914062 2.70703 0.859375C2.76172 0.804688 2.84375 0.75 2.95312 0.75H3.17188C3.25391 0.75 3.33594 0.804688 3.39062 0.859375C3.44531 0.914062 3.5 0.996094 3.5 1.07812V2.5H8.75V1.07812C8.75 0.996094 8.77734 0.914062 8.83203 0.859375C8.88672 0.804688 8.96875 0.75 9.07812 0.75H9.29688C9.37891 0.75 9.46094 0.804688 9.51562 0.859375C9.57031 0.914062 9.625 0.996094 9.625 1.07812V2.5H10.9375ZM1.3125 3.375C1.17578 3.375 1.06641 3.42969 0.984375 3.51172C0.902344 3.59375 0.875 3.70312 0.875 3.8125V5.125H11.375V3.8125C11.375 3.70312 11.3203 3.59375 11.2383 3.51172C11.1562 3.42969 11.0469 3.375 10.9375 3.375H1.3125ZM10.9375 13.875C11.0469 13.875 11.1562 13.8477 11.2383 13.7656C11.3203 13.6836 11.375 13.5742 11.375 13.4375V6H0.875V13.4375C0.875 13.5742 0.902344 13.6836 0.984375 13.7656C1.06641 13.8477 1.17578 13.875 1.3125 13.875H10.9375ZM4.04688 9.5C4.12891 9.5 4.21094 9.47266 4.26562 9.41797C4.32031 9.36328 4.375 9.28125 4.375 9.17188V8.07812C4.375 7.99609 4.32031 7.91406 4.26562 7.85938C4.21094 7.80469 4.12891 7.75 4.04688 7.75H2.95312C2.84375 7.75 2.76172 7.80469 2.70703 7.85938C2.65234 7.91406 2.625 7.99609 2.625 8.07812V9.17188C2.625 9.28125 2.65234 9.36328 2.70703 9.41797C2.76172 9.47266 2.84375 9.5 2.95312 9.5H4.04688ZM6.67188 9.5C6.75391 9.5 6.83594 9.47266 6.89062 9.41797C6.94531 9.36328 7 9.28125 7 9.17188V8.07812C7 7.99609 6.94531 7.91406 6.89062 7.85938C6.83594 7.80469 6.75391 7.75 6.67188 7.75H5.57812C5.46875 7.75 5.38672 7.80469 5.33203 7.85938C5.27734 7.91406 5.25 7.99609 5.25 8.07812V9.17188C5.25 9.28125 5.27734 9.36328 5.33203 9.41797C5.38672 9.47266 5.46875 9.5 5.57812 9.5H6.67188ZM9.29688 9.5C9.37891 9.5 9.46094 9.47266 9.51562 9.41797C9.57031 9.36328 9.625 9.28125 9.625 9.17188V8.07812C9.625 7.99609 9.57031 7.91406 9.51562 7.85938C9.46094 7.80469 9.37891 7.75 9.29688 7.75H8.20312C8.09375 7.75 8.01172 7.80469 7.95703 7.85938C7.90234 7.91406 7.875 7.99609 7.875 8.07812V9.17188C7.875 9.28125 7.90234 9.36328 7.95703 9.41797C8.01172 9.47266 8.09375 9.5 8.20312 9.5H9.29688ZM6.67188 12.125C6.75391 12.125 6.83594 12.0977 6.89062 12.043C6.94531 11.9883 7 11.9062 7 11.7969V10.7031C7 10.6211 6.94531 10.5391 6.89062 10.4844C6.83594 10.4297 6.75391 10.375 6.67188 10.375H5.57812C5.46875 10.375 5.38672 10.4297 5.33203 10.4844C5.27734 10.5391 5.25 10.6211 5.25 10.7031V11.7969C5.25 11.9062 5.27734 11.9883 5.33203 12.043C5.38672 12.0977 5.46875 12.125 5.57812 12.125H6.67188ZM4.04688 12.125C4.12891 12.125 4.21094 12.0977 4.26562 12.043C4.32031 11.9883 4.375 11.9062 4.375 11.7969V10.7031C4.375 10.6211 4.32031 10.5391 4.26562 10.4844C4.21094 10.4297 4.12891 10.375 4.04688 10.375H2.95312C2.84375 10.375 2.76172 10.4297 2.70703 10.4844C2.65234 10.5391 2.625 10.6211 2.625 10.7031V11.7969C2.625 11.9062 2.65234 11.9883 2.70703 12.043C2.76172 12.0977 2.84375 12.125 2.95312 12.125H4.04688ZM9.29688 12.125C9.37891 12.125 9.46094 12.0977 9.51562 12.043C9.57031 11.9883 9.625 11.9062 9.625 11.7969V10.7031C9.625 10.6211 9.57031 10.5391 9.51562 10.4844C9.46094 10.4297 9.37891 10.375 9.29688 10.375H8.20312C8.09375 10.375 8.01172 10.4297 7.95703 10.4844C7.90234 10.5391 7.875 10.6211 7.875 10.7031V11.7969C7.875 11.9062 7.90234 11.9883 7.95703 12.043C8.01172 12.0977 8.09375 12.125 8.20312 12.125H9.29688Z" fill="#595959"></path></svg>
                  <span className="text-xs">
                  18/06/2021
                  </span>
                </div>
                <div className="flex items-center">
                  <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-[5px]"><path d="M7.99984 0C4.6665 0 1.81984 2.07333 0.666504 5C1.81984 7.92667 4.6665 10 7.99984 10C11.3332 10 14.1798 7.92667 15.3332 5C14.1798 2.07333 11.3332 0 7.99984 0ZM7.99984 8.33333C6.15984 8.33333 4.6665 6.84 4.6665 5C4.6665 3.16 6.15984 1.66667 7.99984 1.66667C9.83984 1.66667 11.3332 3.16 11.3332 5C11.3332 6.84 9.83984 8.33333 7.99984 8.33333ZM7.99984 3C6.89317 3 5.99984 3.89333 5.99984 5C5.99984 6.10667 6.89317 7 7.99984 7C9.1065 7 9.99984 6.10667 9.99984 5C9.99984 3.89333 9.1065 3 7.99984 3Z" fill="#8C8C8C"></path></svg>
                  <span className="text-xs">
                  153 view
                  </span>
                </div>
              </div>
              <p className="mt-[10px] mb-[5px] text-sm">
              Nội dung chínhNgày của Cha năm 2021 là ngày nào? Ngày của Cha ở Việt Nam và một số nước trên...
              </p>
            </div>
          </div>
          <div className="lg-1200px:w-2/3 md:w-full px-[15px]">
            <div className="pt-12 relative">
              <div className="flex flex-wrap">
                {itemCards.map((item) => {
                  return (
                    <div className="pr-[15px] pb-4 w-1/2 flex">
                      <div className="w-[135px] h-[85px] rounded overflow-hidden">
                        <a target="_blank" href="" className="inline-block w-full h-full">
                          <img src={item.image}
                            className="w-full h-full"
                          />
                        </a>
                      </div>
                      <div className="pl-2 w-100per-143px">
                        <div className="mb-2">
                          <a target="_blank" href="" className="text-[#262626] text-sm font-semibold leading-5 block no-underline">
                          {item.title}
                          </a>
                        </div>
                        <div className="flex">
                          <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-[5px]"><path d="M10.9375 2.5C11.293 2.5 11.5938 2.63672 11.8672 2.88281C12.1133 3.15625 12.25 3.45703 12.25 3.8125V13.4375C12.25 13.8203 12.1133 14.1211 11.8672 14.3672C11.5938 14.6406 11.293 14.75 10.9375 14.75H1.3125C0.929688 14.75 0.628906 14.6406 0.382812 14.3672C0.109375 14.1211 0 13.8203 0 13.4375V3.8125C0 3.45703 0.109375 3.15625 0.382812 2.88281C0.628906 2.63672 0.929688 2.5 1.3125 2.5H2.625V1.07812C2.625 0.996094 2.65234 0.914062 2.70703 0.859375C2.76172 0.804688 2.84375 0.75 2.95312 0.75H3.17188C3.25391 0.75 3.33594 0.804688 3.39062 0.859375C3.44531 0.914062 3.5 0.996094 3.5 1.07812V2.5H8.75V1.07812C8.75 0.996094 8.77734 0.914062 8.83203 0.859375C8.88672 0.804688 8.96875 0.75 9.07812 0.75H9.29688C9.37891 0.75 9.46094 0.804688 9.51562 0.859375C9.57031 0.914062 9.625 0.996094 9.625 1.07812V2.5H10.9375ZM1.3125 3.375C1.17578 3.375 1.06641 3.42969 0.984375 3.51172C0.902344 3.59375 0.875 3.70312 0.875 3.8125V5.125H11.375V3.8125C11.375 3.70312 11.3203 3.59375 11.2383 3.51172C11.1562 3.42969 11.0469 3.375 10.9375 3.375H1.3125ZM10.9375 13.875C11.0469 13.875 11.1562 13.8477 11.2383 13.7656C11.3203 13.6836 11.375 13.5742 11.375 13.4375V6H0.875V13.4375C0.875 13.5742 0.902344 13.6836 0.984375 13.7656C1.06641 13.8477 1.17578 13.875 1.3125 13.875H10.9375ZM4.04688 9.5C4.12891 9.5 4.21094 9.47266 4.26562 9.41797C4.32031 9.36328 4.375 9.28125 4.375 9.17188V8.07812C4.375 7.99609 4.32031 7.91406 4.26562 7.85938C4.21094 7.80469 4.12891 7.75 4.04688 7.75H2.95312C2.84375 7.75 2.76172 7.80469 2.70703 7.85938C2.65234 7.91406 2.625 7.99609 2.625 8.07812V9.17188C2.625 9.28125 2.65234 9.36328 2.70703 9.41797C2.76172 9.47266 2.84375 9.5 2.95312 9.5H4.04688ZM6.67188 9.5C6.75391 9.5 6.83594 9.47266 6.89062 9.41797C6.94531 9.36328 7 9.28125 7 9.17188V8.07812C7 7.99609 6.94531 7.91406 6.89062 7.85938C6.83594 7.80469 6.75391 7.75 6.67188 7.75H5.57812C5.46875 7.75 5.38672 7.80469 5.33203 7.85938C5.27734 7.91406 5.25 7.99609 5.25 8.07812V9.17188C5.25 9.28125 5.27734 9.36328 5.33203 9.41797C5.38672 9.47266 5.46875 9.5 5.57812 9.5H6.67188ZM9.29688 9.5C9.37891 9.5 9.46094 9.47266 9.51562 9.41797C9.57031 9.36328 9.625 9.28125 9.625 9.17188V8.07812C9.625 7.99609 9.57031 7.91406 9.51562 7.85938C9.46094 7.80469 9.37891 7.75 9.29688 7.75H8.20312C8.09375 7.75 8.01172 7.80469 7.95703 7.85938C7.90234 7.91406 7.875 7.99609 7.875 8.07812V9.17188C7.875 9.28125 7.90234 9.36328 7.95703 9.41797C8.01172 9.47266 8.09375 9.5 8.20312 9.5H9.29688ZM6.67188 12.125C6.75391 12.125 6.83594 12.0977 6.89062 12.043C6.94531 11.9883 7 11.9062 7 11.7969V10.7031C7 10.6211 6.94531 10.5391 6.89062 10.4844C6.83594 10.4297 6.75391 10.375 6.67188 10.375H5.57812C5.46875 10.375 5.38672 10.4297 5.33203 10.4844C5.27734 10.5391 5.25 10.6211 5.25 10.7031V11.7969C5.25 11.9062 5.27734 11.9883 5.33203 12.043C5.38672 12.0977 5.46875 12.125 5.57812 12.125H6.67188ZM4.04688 12.125C4.12891 12.125 4.21094 12.0977 4.26562 12.043C4.32031 11.9883 4.375 11.9062 4.375 11.7969V10.7031C4.375 10.6211 4.32031 10.5391 4.26562 10.4844C4.21094 10.4297 4.12891 10.375 4.04688 10.375H2.95312C2.84375 10.375 2.76172 10.4297 2.70703 10.4844C2.65234 10.5391 2.625 10.6211 2.625 10.7031V11.7969C2.625 11.9062 2.65234 11.9883 2.70703 12.043C2.76172 12.0977 2.84375 12.125 2.95312 12.125H4.04688ZM9.29688 12.125C9.37891 12.125 9.46094 12.0977 9.51562 12.043C9.57031 11.9883 9.625 11.9062 9.625 11.7969V10.7031C9.625 10.6211 9.57031 10.5391 9.51562 10.4844C9.46094 10.4297 9.37891 10.375 9.29688 10.375H8.20312C8.09375 10.375 8.01172 10.4297 7.95703 10.4844C7.90234 10.5391 7.875 10.6211 7.875 10.7031V11.7969C7.875 11.9062 7.90234 11.9883 7.95703 12.043C8.01172 12.0977 8.09375 12.125 8.20312 12.125H9.29688Z" fill="#595959"></path></svg>
                          <span className="text-xs text-[#8c8c8c]">{item.date}</span>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
              <a target="_blank" href="" className="absolute top-[.5vw] right-0 flex items-center justify-center text-[#1890ff] text-sm">
                View all
                <svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-[5px]"><path d="M0.957031 0.734375V0.761719C0.875 0.707031 0.792969 0.652344 0.710938 0.652344C0.601562 0.652344 0.546875 0.679688 0.492188 0.734375L0.300781 0.953125C0.21875 1.00781 0.191406 1.08984 0.191406 1.17188C0.191406 1.28125 0.21875 1.33594 0.300781 1.39062L5.63281 6.75L0.273438 12.082C0.21875 12.1641 0.191406 12.2461 0.191406 12.3281C0.191406 12.4375 0.21875 12.4922 0.273438 12.5469L0.492188 12.7656C0.546875 12.8203 0.601562 12.8477 0.710938 12.8477C0.792969 12.8477 0.875 12.8203 0.957031 12.7383L6.72656 6.99609C6.78125 6.94141 6.80859 6.85938 6.80859 6.75C6.80859 6.66797 6.78125 6.58594 6.72656 6.50391L0.957031 0.734375ZM3.99219 0.734375L3.96484 0.761719C4.01953 0.707031 4.10156 0.652344 4.21094 0.652344C4.29297 0.652344 4.375 0.707031 4.45703 0.761719L10.2266 6.53125C10.2812 6.58594 10.3086 6.66797 10.3086 6.75C10.3086 6.85938 10.2812 6.94141 10.2266 6.99609L4.45703 12.7656C4.375 12.8203 4.29297 12.8477 4.21094 12.8477C4.10156 12.8477 4.04688 12.8203 3.99219 12.7656L3.80078 12.5742C3.71875 12.5195 3.69141 12.4375 3.69141 12.3281C3.69141 12.2461 3.71875 12.1641 3.80078 12.082L9.13281 6.75L3.77344 1.41797C3.71875 1.36328 3.69141 1.28125 3.69141 1.17188C3.69141 1.08984 3.71875 1.00781 3.77344 0.953125L3.99219 0.734375Z" fill="#1890FF"></path></svg>
              </a>
            </div>
          </div>
        </div>
        
      </div>
      
    </div>
  )
}

export default HomeBlog;