

const AppBox = () => {

  return (
    <div className="pt-[15px] md:pt-[50px] bg-appBox bg-no-repeat bg-center bg-cover bg-fixed">
      <div className="container2 flex items-center flex-wrap md:flex-nowrap">
        <div className="md:pl-[30px] order-2 md:order-1 w-full text-center md:w-auto mt-[50px] md:mt-0">
          <img src="../../assets/images/appBox/appBox-iphone.png"
            className="w-[200px] md:w-[270px] align-middle text-center inline-block"
          />
        </div>
        <div className=" md:ml-[50px] lg-1200px:w-[490px] lg-1200px:ml-[125px] order-1 md:order-2">
          <h2 className=" text-xl_20 lg-1200px:text-4xl_40 mb-[15px] font-bold text-[rgba(0,0,0,.85)]">
          One stop travel shop / platform / app.
          </h2>
          <p className="mb-[5px] text-sm">
          The Vntrip app is your all-in-one travel companion. Save big on hotels, find the perfect flights, get the right bundle packages within seconds and receive the most updated information about flights in real time
          </p>
          <div className=" mt-[20px] lg-1200px:mt-[50px] flex justify-center md:justify-start">
            <a target="_blank" href="" className="outline-none">
              <img src="../../assets/images/appBox/appStore.png" alt="appStore" 
                className="w-[135px] lg-1200px:w-[180px]"
              />
            </a>
            <a target="_blank" href="" className="outline-none ml-[15px] md:ml-[30px]">
              <img src="../../assets/images/appBox/googlePlay.png" alt="googlePlay" 
                className="w-[135px] lg-1200px:w-[180px]"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppBox;