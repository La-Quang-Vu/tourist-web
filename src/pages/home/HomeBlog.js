import HomeBlogCont from "./HomeBlogCont"
import HomeBlogSafe from "./HomeBlogSafe"


const HomeBlog = () => {

  const festivalItemMain = {
    header: "Lễ hội - Festival",
    image: "../../assets/images/blog/festival/Ngay-cua-Cha-la-ngay-nao-2.jpg",
    title: "Ngày của cha năm 2021 là ngày nào: Nguồn gốc ý nghĩa, gợi ý lời chúc và quà tặng cho cha",
    date: "18/06/2021",
    view: "153 view",
    desc: "Nội dung chínhNgày của Cha năm 2021 là ngày nào? Ngày của Cha ở Việt Nam và một số nước trên..."
  }

  const festivalItemCards = [
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

  const discoveryItemMain = {
    header: "Khám phá",
    image: "../../assets/images/blog/discovery/check-in-quan-cafe-ha-noi-sau-dich-5.jpeg",
    title: "Những quán cafe “lột xác” ấn tượng chờ đón khách sau dịch ở Hà Nội",
    date: "28/07/2021",
    view: "4 view",
    desc: "Thay vì đóng băng các hoạt động để phòng chống dịch Covid-19 thì một số quán Cafe tại Hà Nội..."
  }

  const discoveryItemCards = [
    {
      image: "../../assets/images/blog/discovery/4-diem-den-cho-chuyen-kham-pha-son-la1.jpeg",
      title: "4 điểm đến cho chuyến khám phá Sơn La",
      date: "27/07/2021"
    },
    {
      image: "../../assets/images/blog/discovery/nhung-cach-tuyet-voi-de-giai-chung-cuong-chan-cho-hoi-me-du-lich-dip-cach-ly6.jpeg",
      title: "Những cách tuyệt vời để giải chứng “cuồng chân” cho hội mê du lịch dịp cách ly",
      date: "27/07/2021"
    },
    {
      image: "../../assets/images/blog/discovery/cuc-phuong-1.jpg",
      title: "Vườn Quốc gia Cúc Phương – Điểm đến của thiên nhiên và động vật hoang dã",
      date: "27/07/2021"
    },
    {
      image: "../../assets/images/blog/discovery/anh2-1627122168.jpg",
      title: "Những điểm tiêm vaccine Covid-19 độc đáo trên thế giới",
      date: "26/07/2021"
    },
    {
      image: "../../assets/images/blog/discovery/nhung-farmstay-dep-7.jpg",
      title: "Những khu du lịch Farmstay đẹp khắp Việt Nam",
      date: "23/07/2021"
    },
    {
      image: "../../assets/images/blog/discovery/hangkia3-7382-1626867229.jpg",
      title: "Một mình cắm trại đêm, ngắm dải ngân hà tại Hang Kia",
      date: "23/07/2021"
    },
    {
      image: "../../assets/images/blog/discovery/nhung-dia-diem-du-lich-danh-cho-nguoi-thich-yen-tinh-21.jpg",
      title: "Những điểm du lịch dành cho người thích yên tĩnh",
      date: "21/07/2021"
    },
    {
      image: "../../assets/images/blog/discovery/2-4573-1626688205.jpg",
      title: "Google Maps bị chỉ trích vì dẫn khách theo đường nguy hiểm",
      date: "20/07/2021"
    }
  ]

  const tipsItemMain = {
    header: "Mẹo du lịch hay",
    image: "../../assets/images/blog/tips/san-voucher-vinpearl-da-nang-5.jpeg",
    title: "Bí kíp săn voucher Vinpearl Đà Nẵng siêu rẻ hè 2021",
    date: "13/05/2021",
    view: "362 view",
    desc: "Không chỉ nổi tiếng với những bãi biển xanh trải dài cát trắng, Đà Nẵng còn được biết đến là..."
  }

  const tipsItemCards = [
    {
      image: "../../assets/images/blog/tips/plane-seats-economy-class-WIND-8218-9016-1618255660.jpg",
      title: "Lý do không phải ghế máy bay nào cũng có cửa sổ",
      date: "14/04/2021"
    },
    {
      image: "../../assets/images/blog/tips/meo-chua-u-tai-khi-di-may-bay4.jpg",
      title: "Mẹo chữa ù tai khi đi máy bay trong tích tắc",
      date: "25/02/2021"
    },
    {
      image: "../../assets/images/blog/tips/checkinmb.jpg",
      title: "Cách check-in an toàn trong mùa dịch",
      date: "02/02/2021"
    },
    {
      image: "../../assets/images/blog/tips/san-ve-may-bay-tet-gia-re-voi-atadi6.png",
      title: "7 bước săn vé máy bay Tết giá rẻ, siêu rẻ với Atadi",
      date: "28/01/2021"
    },
    {
      image: "../../assets/images/blog/tips/cach-thanh-toan-ve-may-bay-tren-atadi3.png",
      title: "Cách thanh toán vé máy bay trên Atadi ",
      date: "28/01/2021"
    },
    {
      image: "../../assets/images/blog/tips/cong-cu-san-ve-may-bay-gia-re-atadi4.png",
      title: "Tìm hiểu công cụ săn vé máy bay giá rẻ Atadi",
      date: "28/01/2021"
    },
    {
      image: "../../assets/images/blog/tips/huong-dan-cach-mua-ve-may-bay-tren-atadi1.png",
      title: "Hướng dẫn cách mua vé máy bay trên Atadi nhanh chóng nhất",
      date: "28/01/2021"
    },
    {
      image: "../../assets/images/blog/tips/meo-san-ve-may-bay-gia-re-tet-nguyen-dan-tan-suu-20213.png",
      title: "Mẹo săn vé máy bay giá rẻ tết Nguyên Đán Tân Sửu 2021",
      date: "21/01/2021"
    }
  ]

  return (
    <div className="mt-[20px] md:mt-[50px]">
      <div className="container2">

        <HomeBlogCont itemMain={festivalItemMain} itemList={festivalItemCards}/>

        <HomeBlogCont itemMain={discoveryItemMain} itemList={discoveryItemCards}/>

        <HomeBlogSafe />

        <HomeBlogCont itemMain={tipsItemMain} itemList={tipsItemCards}/>
        
      </div>
      
    </div>
  )
}

export default HomeBlog;