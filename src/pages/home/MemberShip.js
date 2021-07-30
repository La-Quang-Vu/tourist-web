

const MemberShip = () => {

  return (
    <div className="pt-[15px] pb-5 md:py-[50px]">
      <div className="container2">
        <div className="py-[25px] bg-[#fafafa] mx-[-15px] flex flex-wrap items-center">
          <div className="hidden md:block md:w-1/2 px-[15px]">
            <div className="flex justify-end py-[15px] pr-[70px]">
              <img src="../../assets/images/membershipBox-img.png"
                className="w-[290px]"
              />
            </div>
          </div>
          <div className="md:w-1/2 px-[15px] w-full">
            <div className="text-center md:text-left">
              <h2 className="mb-[15px] text-2xl font-bold text-[rgba(0,0,0,.85)]">
                Exclusive offers for Vntrip's members
              </h2>
              <p className="font-semibold text-sm">
              Extra minimum 10% OFF for Vntrip's members - Best price guarantee.
              </p>
              <p className="text-sm">Exclusive offers applied for (bookings) at 4-5 star hotels on Vntrip</p>
              <div className="md:flex md:items-center mt-[15px]">
                <button className="bg-[#ff8917] hover:bg-[#FE952E] border-[#ff8917] hover:border-[#FE952E] border border-transparent shadow-btn1 transition-all duration-200 min-h-[40px] px-[15px] rounded text-white font-semibold">
                  <span className="text-sm">Sign up</span>
                </button>
                <div className="ml-[15px] flex md:block justify-center items-center mt-[10px] md:mt-0">
                  <p className="text-[#8c8c8c] font-semibold text-sm">
                  Are you already a member?
                  </p>
                  <button className="ml-[5px] md:ml-0">
                    <span className="text-[#ff8917] font-semibold text-sm">Login</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MemberShip;