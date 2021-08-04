
const HomeBanner = () => {
  return (
    <div id="homeBanner" className="hidden md:block bg-homeBannerV2 bg-no-repeat bg-center bg-cover text-center h-[15px] md:h-auto md:pt-10 pb-[80px] md:pb-[210px]">
      <div className="h-[82px]">
        <p className=" text-3xl font-bold mb-[5px] text-white">
          Find cheap hotel and flight deals
        </p>
        <p className="text-lg text-white">
          A great journey starts with one click
        </p>
      </div>
    </div>
  )
}

export default HomeBanner;