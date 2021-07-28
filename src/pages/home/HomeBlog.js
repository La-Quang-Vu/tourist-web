import HomeBlogCont from "./HomeBlogCont"


const HomeBlog = () => {

  const itemM = {
    header: "Lễ hội - Festival",
    image: "../../assets/images/blog/festival/Ngay-cua-Cha-la-ngay-nao-2.jpg",
    title: "Ngày của cha năm 2021 là ngày nào: Nguồn gốc ý nghĩa, gợi ý lời chúc và quà tặng cho cha",
    date: "18/06/2021",
    view: "153 view",
    desc: "Nội dung chínhNgày của Cha năm 2021 là ngày nào? Ngày của Cha ở Việt Nam và một số nước trên..."
  }

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

        <HomeBlogCont itemMain={itemM} itemList={itemCards}/>
        
      </div>
      
    </div>
  )
}

export default HomeBlog;