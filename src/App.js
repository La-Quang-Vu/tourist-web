import logo from './logo.svg';
import './App.css';
import './assets/css/dist/tailwind.css';
import React, {useState} from 'react';

function App() {

  const [money,setMoney] = useState("USD")
  const [moneyMenu,setMoneyMenu] = useState(false)
  const [moneyArea,setMoneyArea] = useState(false)


  return (
    <div className="">
      <header>
        <div className="border-b ">
          <div className="lg-1200px:w-[1170px] md-992px:w-[970px] md:w-[750px] h-[50px] flex justify-between mx-auto px-[15px]">
            <h1 className="flex items-center">
              <a href="">
                <svg width="100px" height="47px" viewBox="0 0 120 47" version="1.1"
                  className="md:w-[90px]"
                >
                  <path id="XMLID_20_" d="M46.2,28.6 L46.2,19.6 L52.4,19.6 C52.4,17.4 50.6,15.9 48.5,15.9 L46.3,15.9 C46.3,11.4 42.3,11.5 42.3,11.5 L42.3,28.6 C42.3,33.5 45.7,36 52.4,36 L52.4,32 C49.9,32 48.2,31.7 47.3,31 C46.5,30.5 46.2,29.7 46.2,28.6" fill="#36353E"></path>
                  <path id="XMLID_19_" d="M64.5,19.6 C62,19.6 60.3,19.9 59.4,20.6 C58.7,21.1 58.4,21.9 58.4,23 L58.4,35.9 L54.4,35.9 L54.4,23 C54.4,18.1 57.8,15.8 64.5,15.8 L64.5,19.6 Z" fill="#36353E"></path>
                  <path id="XMLID_18_" d="M66.3,15.7 L66.3,15.7 C68.5,17.5 70.3,15.7 70.3,15.7 L70.3,36 L66.3,36 L66.3,15.7 Z" fill="#36353E"></path>
                  <path id="XMLID_40_" d="M91.7,25.7 C91.7,32.4 88.5,35.9 82.2,35.9 L76.7,35.9 L76.7,42.6 C76.7,46.4 72.7,46.2 72.7,46.2 L72.7,25.7 C72.7,18.9 75.8,15.5 82.1,15.5 C88.6,15.5 91.7,18.9 91.7,25.7 M87.7,25.7 C87.7,23.6 87.4,22.1 86.7,21.2 C85.8,20 84.3,19.5 82.2,19.5 C80.1,19.5 78.6,20.1 77.8,21.2 C77.1,22.1 76.8,23.6 76.8,25.7 L76.8,32 L82.3,32 C84.4,32 85.9,31.4 86.8,30.3 C87.4,29.4 87.7,27.7 87.7,25.7" fill="#36353E"></path>
                  <path id="XMLID_15_" d="M65.5,10.9 C64.9,11.8 56.6,6.9 53.2,4.5 C52.7,4.2 52.3,3.8 52.1,3.4 L52.1,3.4 C51.8,2.9 51.7,2.3 51.9,1.8 C51.9,1.7 52,1.6 52.1,1.5 L52.1,1.5 C52.2,1.4 52.3,1.3 52.4,1.2 C52.9,0.8 53.5,0.7 54,0.8 C54,0.8 54,0.8 54,0.8 C54.5,0.9 54.9,1.1 55.4,1.5 C58.7,3.9 66.1,10 65.5,10.9 L65.5,10.9 Z" fill="#FAB516"></path>
                  <path id="XMLID_14_" d="M65.5,12.9 C65.2,14.2 53.3,12 48.3,10.7 C47.6,10.5 47,10.2 46.5,9.9 C46.5,9.9 46.5,9.9 46.5,9.9 C45.9,9.5 45.5,8.8 45.5,8.1 C45.5,7.9 45.5,7.8 45.6,7.6 L45.6,7.5 C45.6,7.4 45.7,7.2 45.8,7.1 C46.2,6.4 46.8,6.1 47.5,6 L47.5,6 C48.1,5.9 48.8,6 49.5,6.2 C54.5,7.6 65.9,11.6 65.5,12.9 L65.5,12.9 Z" fill="#FAB516"></path>
                  <path id="XMLID_13_" d="M39.1,35.9 L35.1,35.9 L35.1,25.7 C35.1,23.6 34.8,22.1 34.1,21.2 C33.3,20.1 31.8,19.5 29.7,19.5 C27.6,19.5 26.1,20.1 25.2,21.2 C24.5,22.1 24.2,23.6 24.2,25.7 L24.2,36 L20.2,36 L20.2,25.7 C20.2,18.9 23.4,15.5 29.7,15.5 C36,15.5 39.1,18.9 39.1,25.7 L39.1,35.9 Z" fill="#FAB516"></path>
                  <path id="XMLID_12_" d="M19.9,15.9 C16.4,15.9 14.9,17.8 14.3,19.2 C13.7,20.7 9.9,30.1 9.9,30.1 L4.3,15.9 L0,15.9 L8,36 L11.9,36 L17.6,21.6 C19.6,16.4 23.1,15.8 23.1,15.8 L19.9,15.8 L19.9,15.9 Z" fill="#FAB516"></path>
                  <path id="XMLID_11_" d="M91.9,34.3 C91.9,35.3 92.7,36 93.6,36 C94.6,36 95.3,35.2 95.3,34.3 C95.3,33.4 94.5,32.6 93.6,32.6 C92.7,32.6 91.9,33.4 91.9,34.3" fill="#FAB516"></path>
                  <path id="XMLID_10_" d="M117.4,35.9 L115,35.9 L115,29.5 C115,28.2 114.8,27.3 114.4,26.8 C113.9,26.1 113,25.8 111.7,25.8 C110.4,25.8 109.5,26.1 109,26.8 C108.6,27.4 108.4,28.3 108.4,29.5 L108.4,35.9 L106,35.9 L106,29.5 C106,25.4 107.9,23.3 111.8,23.3 C115.6,23.3 117.5,25.4 117.5,29.5 L117.5,35.9 L117.4,35.9 Z" fill="#FAB516"></path>
                  <path id="XMLID_9_" d="M105.7,23.5 C103.6,23.5 102.6,24.6 102.3,25.5 C102,26.4 99.6,32.2 99.6,32.2 L96.2,23.5 L93.6,23.5 L98.5,36 L100.8,36 L104.3,27 C105.5,23.8 107.6,23.5 107.6,23.5 L105.7,23.5 Z" fill="#FAB516"></path>
                  <path id="XMLID_8_" d="M66.1,12.7 C66.1,13.9 67.1,14.9 68.3,14.9 C69.5,14.9 70.5,13.9 70.5,12.7 C70.5,11.5 69.5,10.5 68.3,10.5 C67.1,10.5 66.1,11.5 66.1,12.7" fill="#FAB516"></path>
                  <path id="XMLID_7_" d="M66.6,8 C66.6,9 67.4,9.7 68.3,9.7 C69.3,9.7 70,8.9 70,8 C70,7 69.2,6.3 68.3,6.3 C67.4,6.3 66.6,7 66.6,8" fill="#FAB516"></path>
                  <path id="XMLID_6_" d="M71.1,10.9 C71.7,11.8 80,6.9 83.4,4.5 C83.9,4.2 84.3,3.8 84.5,3.4 C84.5,3.4 84.5,3.4 84.5,3.4 C84.9,3 85,2.4 84.8,1.8 C84.8,1.7 84.7,1.6 84.6,1.5 L84.6,1.5 C84.5,1.4 84.4,1.3 84.3,1.2 C83.8,0.8 83.2,0.7 82.7,0.8 C82.7,0.8 82.7,0.8 82.7,0.8 C82.2,0.9 81.8,1.1 81.3,1.5 C78,3.9 70.5,10 71.1,10.9 L71.1,10.9 Z" fill="#FAB516"></path>
                  <path id="XMLID_5_" d="M71.1,12.9 C71.4,14.2 83.3,12 88.3,10.7 C89,10.5 89.6,10.2 90.1,9.9 C90.1,9.9 90.1,9.9 90.1,9.9 C90.7,9.5 91.1,8.8 91.1,8.1 C91.1,7.9 91.1,7.8 91,7.6 L91,7.5 C91,7.4 90.9,7.2 90.8,7.1 C90.4,6.4 89.8,6.1 89.1,6 L89.1,6 C88.5,5.9 87.8,6 87.1,6.2 C82.1,7.6 70.8,11.6 71.1,12.9 L71.1,12.9 Z" fill="#FAB516"></path>
                  <path id="XMLID_26_" d="M118.5,25.8 C118.2,25.8 117.9,25.7 117.7,25.5 C117.5,25.3 117.4,25 117.4,24.7 C117.4,24.4 117.5,24.1 117.7,23.9 C117.9,23.7 118.2,23.6 118.5,23.6 C118.8,23.6 119.1,23.7 119.3,23.9 C119.5,24.1 119.6,24.4 119.6,24.7 C119.6,25 119.5,25.3 119.3,25.5 C119.1,25.7 118.9,25.8 118.5,25.8 M117.5,24.6 C117.5,24.9 117.6,25.1 117.8,25.3 C118,25.5 118.2,25.6 118.5,25.6 C118.8,25.6 119,25.5 119.2,25.3 C119.4,25.1 119.5,24.9 119.5,24.6 C119.5,24.3 119.4,24.1 119.2,23.9 C119,23.7 118.8,23.6 118.5,23.6 C118.2,23.6 118,23.7 117.8,23.9 C117.6,24.1 117.5,24.4 117.5,24.6" fill="#FAB516"></path>
                  <path id="XMLID_23_" d="M118,24 L118.6,24 C118.7,24 118.8,24 118.8,24 C118.9,24.1 119,24.2 119,24.3 C119,24.4 119,24.4 119,24.5 C119,24.5 118.9,24.6 118.9,24.6 C118.9,24.6 119,24.6 119,24.7 C119,24.7 119,24.8 119,24.9 L119,25.1 C119,25.1 119,25.2 119,25.2 C119,25.2 119,25.3 119.1,25.3 L119.1,25.3 L118.9,25.3 C118.9,25.3 118.9,25.3 118.9,25.3 C118.9,25.3 118.9,25.2 118.9,25.2 L118.9,25 C118.9,24.9 118.9,24.9 118.8,24.8 C118.8,24.8 118.7,24.8 118.7,24.8 L118.3,24.8 L118.3,25.3 L118,25.3 L118,24 Z M118.6,24.6 C118.7,24.6 118.7,24.6 118.8,24.6 C118.8,24.6 118.9,24.5 118.9,24.4 C118.9,24.3 118.9,24.3 118.8,24.2 C118.8,24.2 118.7,24.2 118.7,24.2 L118.3,24.2 L118.3,24.6 L118.6,24.6 Z" fill="#FAB516"></path>
                </svg>
              </a>
            </h1>
            <ul className="flex items-center">
              <li className="px-2.5">
                <a href="" className="flex items-center hover:underline">
                  <svg width="10" height="10" version="1.1" x="0px" y="0px" viewBox="0 0 511.999 511.999">
                    <path d="M508.874,478.708L360.142,329.976c28.21-34.827,45.191-79.103,45.191-127.309c0-111.75-90.917-202.667-202.667-202.667
                            S0,90.917,0,202.667s90.917,202.667,202.667,202.667c48.206,0,92.482-16.982,127.309-45.191l148.732,148.732
                            c4.167,4.165,10.919,4.165,15.086,0l15.081-15.082C513.04,489.627,513.04,482.873,508.874,478.708z M202.667,362.667
                            c-88.229,0-160-71.771-160-160s71.771-160,160-160s160,71.771,160,160S290.896,362.667,202.667,362.667z">
                    </path>
                  </svg>
                  &nbsp;
                  Manage your order
                </a>
              </li>
              <li className="px-2.5">
                <a href="" className="flex items-center">
                  <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.62639 9.37493C5.0992 7.84775 4.75437 6.32056 4.67657 5.70869C4.65483 5.53951 4.71305 5.36984 4.83409 5.24965L6.06997 4.01433C6.25176 3.83264 6.28403 3.54949 6.14776 3.33156L4.18002 0.27608C4.02926 0.0347663 3.71972 -0.0523261 3.46525 0.0749739L0.306319 1.56271C0.10054 1.66404 -0.0204963 1.88268 0.00286762 2.11086C0.168387 3.68329 0.853911 7.54871 4.65257 11.3476C8.45123 15.1466 12.3161 15.8318 13.8894 15.9973C14.1175 16.0207 14.3362 15.8997 14.4375 15.6939L15.9252 12.535C16.0521 12.281 15.9655 11.9723 15.7252 11.8213L12.6698 9.85411C12.452 9.7177 12.1688 9.74973 11.987 9.93135L10.7517 11.1672C10.6315 11.2883 10.4618 11.3465 10.2926 11.3247C9.68076 11.247 8.15357 10.9021 6.62639 9.37493Z" fill="#FF8917"></path>
                    <path d="M12.6907 8.55195C12.3859 8.55195 12.1389 8.30493 12.1389 8.00022C12.1363 5.71595 10.2852 3.86483 8.00095 3.86225C7.69624 3.86225 7.44922 3.61523 7.44922 3.31052C7.44922 3.00581 7.69624 2.75879 8.00095 2.75879C10.8944 2.76198 13.2392 5.10678 13.2424 8.00022C13.2424 8.30493 12.9954 8.55195 12.6907 8.55195Z" fill="#FF8917"></path>
                    <path d="M15.4493 8.55181C15.1446 8.55181 14.8976 8.3048 14.8976 8.00008C14.8933 4.19295 11.8081 1.10772 8.00095 1.10346C7.69624 1.10346 7.44922 0.856442 7.44922 0.55173C7.44922 0.247018 7.69624 0 8.00095 0C12.4173 0.00486512 15.9962 3.58378 16.001 8.00008C16.001 8.14641 15.9429 8.28675 15.8394 8.39021C15.736 8.49368 15.5956 8.55181 15.4493 8.55181Z" fill="#FF8917"></path>
                  </svg>
                  <span className="ml-2 text-[#ff8917] font-semibold">096 326 6688</span>
                </a>
              </li>
              <li className="px-2.5">
                <div className="relative"
                  onMouseEnter={()=>setMoneyArea(true)}
                  onMouseLeave={()=>setMoneyArea(false)}
                >
                  <button className="flex items-center hover:text-[#FF8962]"
                    onClick={()=>setMoneyMenu(!moneyMenu)}
                    onBlur={()=>{if (!moneyArea) setMoneyMenu(false)}}
                  >
                    <span className="font-semibold">{money}</span>
                    <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg"
                      className="ml-1"
                    >
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M8.48532 0.242641L4.24268 4.12306L3.51667e-05 0.242641L8.48532 0.242641Z" fill="#878787"></path>
                    </svg>
                  </button>
                  <div className="absolute top-0 left-0 w-full">
                    <div className="absolute top-7 rounded-md">
                      <div className={`transition-all duration-150 origin-top ${moneyMenu?" visible scale-y-100 opacity-100":"invisible scale-y-0 opacity-0"}`}>
                        <ul className="w-full whitespace-nowrap bg-white rounded-md shadow-md2">
                          <li className={`transition duration-300 rounded-t-md ${money==='USD'?'hover:bg-[#f5f5f5]' : 'bg-[#fff7e6]'}`}>
                            <button className=" px-4 py-2 mr-2"
                              onClick={()=>{setMoney("VND");setMoneyMenu(false)}}
                            >
                              <span className="mr-4 text-[#389e0d] font-semibold">VND</span>
                              <span className={`${money==='VND'?'text-[#ff8917]':''}`}>Việt Nam đồng</span>
                            </button>
                          </li>
                          <li className={`transition duration-300 rounded-b-md ${money==='VND'?'hover:bg-[#f5f5f5]' : 'bg-[#fff7e6]'}`}>
                            <button className="px-4 py-2 mr-2"
                              onClick={()=>{setMoney("USD");setMoneyMenu(false)}}
                            >
                              <span className="mr-4 text-[#389e0d] font-semibold">USD</span>
                              <span className={`${money==='USD'?'text-[#ff8917]':''}`}>US Dollar</span>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </li>
              <li className="px-2.5">
                Tiếng Việt
              </li>
            </ul>
          </div>
        </div>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </header>

      <button className="btn hover:bg-blue-500">tourist project</button>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
