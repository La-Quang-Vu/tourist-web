

const VinpearlCombo = () => {

  return (
    <div>
      <p className="mb-4 font-semibold">
      Where would you travel to?
      </p>
      <div className="-mx-4 flex items-center">
        <div className="relative w-1/3 mx-4 cursor-pointer">
          <div className="h-[100px] rounded-lg overflow-hidden">
            <img src="../../assets/images/vinpearl-combo/Phu-Quoc.png" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute z-[2] top-0 left-[30px] text-5xl text-white translate-y-1/2 font-SVN_Bulgary"
          >Phú Quốc</div>
          <div className="absolute z-[1] top-0 left-0 right-0 rounded-lg h-full bg-gradient-to-r from-[#002540]"></div>
        </div>
        <div className="relative w-1/3 mx-4 cursor-pointer">
          <div className="h-[100px] rounded-lg overflow-hidden">
            <img src="../../assets/images/vinpearl-combo/Da-Nang.png" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute z-[2] top-0 left-[30px] text-5xl text-white translate-y-1/2 font-SVN_Bulgary"
          >Đà Nẵng</div>
          <div className="absolute z-[1] top-0 left-0 right-0 rounded-lg h-full bg-gradient-to-r from-[#002540]"></div>
        </div>
        <div className="relative w-1/3 mx-4 cursor-pointer">
          <div className="h-[100px] rounded-lg overflow-hidden">
            <img src="../../assets/images/vinpearl-combo/Nha-Trang.png"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute z-[2] top-0 left-[30px] text-5xl text-white translate-y-1/2 font-SVN_Bulgary"
          >Nha Trang</div>
          <div className="absolute z-[1] top-0 left-0 right-0 rounded-lg h-full bg-gradient-to-r from-[#002540]"></div>
        </div>
      </div>
    </div>
  )
}

export default VinpearlCombo;