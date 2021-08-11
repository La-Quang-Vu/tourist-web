import React, {useState, useEffect} from 'react';
import { removeAccents } from '../../services/convert';

const SamePriceCombo = () => {

  const [suggestDefault,setSuggestDefault] = useState(false)
  const [suggestDefaultR,setSuggestDefaultR] = useState(false)
  const [passengerBox,setPassengerBox] = useState(false)

  const [needCorrectPlace,setNeedCorrectPlace] = useState(false)
  const [needCorrectPlaceR,setNeedCorrectPlaceR] = useState(false)

  const [adult,setAdult] = useState(2)
  const [children,setChildren] = useState(0)
  const [infant,setInfant] = useState(0)

  function checkClickEvent () {
    const concernedElement = document.querySelector(".click-departure");
    const concernedElementR = document.querySelector(".click-return");
    const passengerBoxElement = document.querySelector(".click-passenger");

    document.addEventListener("mousedown", (event) => {
      if (concernedElement.contains(event.target)) {
        // console.log("Clicked Inside");
      } else {
        // console.log("Clicked Outside / Elsewhere");
        setSuggestDefault(false);
      }
      
      if (!(concernedElementR.contains(event.target))) {
        setSuggestDefaultR(false);
      }
      if (!(passengerBoxElement.contains(event.target))) {
        setPassengerBox(false);
      }
    });
  }

  useEffect(()=>{
    checkClickEvent();
  },[])

  useEffect(()=>{
    if (!suggestDefault && needCorrectPlace) {
      correctPlace("departure")
    }
    if (suggestDefault) {
      setNeedCorrectPlace(true)
    }
  },[suggestDefault])
  
  useEffect(()=>{
    if (!suggestDefaultR && needCorrectPlaceR) {
      correctPlace("destination")
    }
    if (suggestDefaultR) {
      setNeedCorrectPlaceR(true)
    }
  },[suggestDefaultR])

  const setDepartureValue = (str) => {
    const element = document.getElementById("departure");
    element.value = str;
  }

  const setDestinationValue = (str) => {
    const element = document.getElementById("destination");
    element.value = str;
  }

  const selectPlaces = (value) => {
    value = removeAccents(value).toUpperCase();
    const items = placeList.filter((item) => {
      item = removeAccents(item).toUpperCase();
      return item.indexOf(value) > -1
    })

    if (items.length > 0) return items;
    else return placeList;
  }

  const correctPlace = (elementId) => {
    const element = document.getElementById(elementId);
    let value = element.value;

    let place = "";
    value = value.replace(/\s+/g, ' ')
                 .trim();
    if (value !== "") {
      let id = filterPlaces.indexOf(value);
      if (id == -1) place = filterPlaces[0];
      else place = filterPlaces[id];
    }

    element.value = place;
  }

  const placeList = [
    "Hà Nội",
    "Hải Phòng",
    "Nha Trang",
    "Đà Lạt",
    "Đà Nẵng",
    "Quảng Bình",
    "Quy Nhơn",
    "TP Hồ Chí Minh",
    "Phú Quốc"
  ]

  const [filterPlaces,setFilterPlaces] = useState(placeList)

  return (
    <div>
      <div className="mb-4  md-992px:-mx-3 lg-1200px:-mx-4 flex items-center">
        <div className="md-992px:mx-3 lg-1200px:mx-4 w-1/3">
          <p className="mb-[5px] font-semibold">
          Select your departure?
          </p>
          <div className="relative" class="click-departure">
            <div className="relative">
              <input id="departure" className="pl-[15px] pr-[35px] input-1"
                placeholder="Departure"
                onFocus={()=>{setSuggestDefault(true); setFilterPlaces(placeList)}}
                onChange={(evt) => { setFilterPlaces(selectPlaces(evt.target.value))}}
                autoComplete="off"
              >
              </input>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"
                className="absolute right-[15px] top-1/2 z-[1]" style={{transform:'translateY(-50%)'}}
              ><path d="M13.2125 12.3516L9.15469 8.29375C9.78438 7.47969 10.125 6.48438 10.125 5.4375C10.125 4.18438 9.63594 3.00937 8.75156 2.12344C7.86719 1.2375 6.68906 0.75 5.4375 0.75C4.18594 0.75 3.00781 1.23906 2.12344 2.12344C1.2375 3.00781 0.75 4.18438 0.75 5.4375C0.75 6.68906 1.23906 7.86719 2.12344 8.75156C3.00781 9.6375 4.18438 10.125 5.4375 10.125C6.48438 10.125 7.47813 9.78438 8.29219 9.15625L12.35 13.2125C12.3619 13.2244 12.376 13.2338 12.3916 13.2403C12.4071 13.2467 12.4238 13.2501 12.4406 13.2501C12.4575 13.2501 12.4741 13.2467 12.4897 13.2403C12.5052 13.2338 12.5194 13.2244 12.5312 13.2125L13.2125 12.5328C13.2244 12.5209 13.2338 12.5068 13.2403 12.4912C13.2467 12.4757 13.2501 12.459 13.2501 12.4422C13.2501 12.4254 13.2467 12.4087 13.2403 12.3931C13.2338 12.3776 13.2244 12.3635 13.2125 12.3516ZM7.9125 7.9125C7.25 8.57344 6.37187 8.9375 5.4375 8.9375C4.50312 8.9375 3.625 8.57344 2.9625 7.9125C2.30156 7.25 1.9375 6.37187 1.9375 5.4375C1.9375 4.50312 2.30156 3.62344 2.9625 2.9625C3.625 2.30156 4.50312 1.9375 5.4375 1.9375C6.37187 1.9375 7.25156 2.3 7.9125 2.9625C8.57344 3.625 8.9375 4.50312 8.9375 5.4375C8.9375 6.37187 8.57344 7.25156 7.9125 7.9125Z" fill="#8C8C8C"></path>
              </svg>
            </div>
            <div className={`absolute md:w-[400px] bg-white shadow-md2 rounded animate-opacityShow ${suggestDefault?'block':'hidden'}`}>
              <div className="md:max-h-[418px] overflow-y-auto">
                <div className="md:w-full">
                  <div className="md:max-h-[249px]">
                    <ul className="flex py-[5px] flex-wrap">
                      {filterPlaces.map((item) => {
                        return (
                          <li className="w-1/2">
                            <button className="px-[15px] py-[10px] w-full text-left hover:text-[#ff8917] transition-all duration-200"
                              onClick = {()=>{setDepartureValue(item);setSuggestDefault(false);setNeedCorrectPlace(false)}}
                            >{item}</button>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md-992px:mx-3 lg-1200px:mx-4 w-1/3">
          <p className="mb-[5px] font-semibold">
          Return?
          </p>
          <div class="click-return">
            <div className="relative">
              <input id="destination" className="pl-[15px] pr-[35px] input-1"
                placeholder="Destination"
                onClick={()=>{setSuggestDefaultR(true);setFilterPlaces(placeList)}}
                onChange={(evt) => { setFilterPlaces(selectPlaces(evt.target.value))}}
              >
              </input>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"
                className="absolute right-[15px] top-1/2 z-[1]" style={{transform:'translateY(-50%)'}}
              ><path d="M13.2125 12.3516L9.15469 8.29375C9.78438 7.47969 10.125 6.48438 10.125 5.4375C10.125 4.18438 9.63594 3.00937 8.75156 2.12344C7.86719 1.2375 6.68906 0.75 5.4375 0.75C4.18594 0.75 3.00781 1.23906 2.12344 2.12344C1.2375 3.00781 0.75 4.18438 0.75 5.4375C0.75 6.68906 1.23906 7.86719 2.12344 8.75156C3.00781 9.6375 4.18438 10.125 5.4375 10.125C6.48438 10.125 7.47813 9.78438 8.29219 9.15625L12.35 13.2125C12.3619 13.2244 12.376 13.2338 12.3916 13.2403C12.4071 13.2467 12.4238 13.2501 12.4406 13.2501C12.4575 13.2501 12.4741 13.2467 12.4897 13.2403C12.5052 13.2338 12.5194 13.2244 12.5312 13.2125L13.2125 12.5328C13.2244 12.5209 13.2338 12.5068 13.2403 12.4912C13.2467 12.4757 13.2501 12.459 13.2501 12.4422C13.2501 12.4254 13.2467 12.4087 13.2403 12.3931C13.2338 12.3776 13.2244 12.3635 13.2125 12.3516ZM7.9125 7.9125C7.25 8.57344 6.37187 8.9375 5.4375 8.9375C4.50312 8.9375 3.625 8.57344 2.9625 7.9125C2.30156 7.25 1.9375 6.37187 1.9375 5.4375C1.9375 4.50312 2.30156 3.62344 2.9625 2.9625C3.625 2.30156 4.50312 1.9375 5.4375 1.9375C6.37187 1.9375 7.25156 2.3 7.9125 2.9625C8.57344 3.625 8.9375 4.50312 8.9375 5.4375C8.9375 6.37187 8.57344 7.25156 7.9125 7.9125Z" fill="#8C8C8C"></path>
              </svg>
            </div>
            <div className={`absolute md:w-[400px] bg-white shadow-md2 rounded animate-opacityShow ${suggestDefaultR?'block':'hidden'}`}>
              <div className="md:max-h-[418px] overflow-y-auto">
                <div className="md:w-full">
                  <div className="md:max-h-[249px]">
                    <ul className="flex py-[5px] flex-wrap">
                      {filterPlaces.map((item) => {
                        return (
                          <li className="w-1/2">
                            <button className="px-[15px] py-[10px] w-full text-left hover:text-[#ff8917] transition-all duration-200"
                              onClick = {()=>{setDestinationValue(item);setSuggestDefaultR(false);setNeedCorrectPlaceR(false)}}
                            >{item}</button>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md-992px:mx-3 lg-1200px:mx-4 w-1/3">
          <p className="mb-[5px] font-semibold">
          How many passengers?
          </p>
          <div class="click-passenger">
            <div className="relative">
              <button className="px-[5px] pl-[15px] pr-[30px] text-left input-1"
                onClick={() => setPassengerBox(true)}
              >
                <span>{adult} adult, {children} children, {infant} infant</span>
                <svg width="14" height="14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.869 477.869" xmlSpace="preserve" class="svgArrow"
                  className="absolute right-[15px] top-1/2 z-[1]" style={{transform:'translateY(-50%)'}}
                >
                  <path d="M387.415,233.496c48.976-44.029,52.987-119.424,8.958-168.4C355.991,20.177,288.4,12.546,239.02,47.332                                                      
                  c-53.83-37.99-128.264-25.149-166.254,28.68c-34.859,49.393-27.259,117.054,17.689,157.483                                                      
                  c-55.849,29.44-90.706,87.481-90.453,150.613v51.2c0,9.426,7.641,17.067,17.067,17.067h443.733                                                      
                  c9.426,0,17.067-7.641,17.067-17.067v-51.2C478.121,320.976,443.264,262.935,387.415,233.496z M307.201,59.842                                                      
                  c47.062-0.052,85.256,38.057,85.309,85.119c0.037,33.564-19.631,64.023-50.237,77.799c-1.314,0.597-2.628,1.143-3.959,1.707                                                      
                  c-4.212,1.699-8.556,3.051-12.988,4.045c-0.853,0.188-1.707,0.29-2.577,0.461c-4.952,0.949-9.977,1.457-15.019,1.519                                                      
                  c-2.27,0-4.557-0.171-6.827-0.375c-0.853,0-1.707,0-2.56-0.171c-9.7-1.142-19.136-3.923-27.904-8.226                                                      
                  c-0.324-0.154-0.7-0.137-1.024-0.273c-1.707-0.819-3.413-1.536-4.932-2.458c0.137-0.171,0.222-0.358,0.358-0.529                                                      
                  c7.826-10.056,13.996-21.296,18.278-33.297l0.529-1.434c1.947-5.732,3.459-11.602,4.523-17.562c0.154-0.87,0.273-1.707,0.41-2.645                                                      
                  c0.987-6.067,1.506-12.2,1.553-18.347c-0.049-6.135-0.568-12.257-1.553-18.313c-0.137-0.887-0.256-1.707-0.41-2.645                                                      
                  c-1.064-5.959-2.576-11.83-4.523-17.562l-0.529-1.434c-4.282-12.001-10.453-23.241-18.278-33.297                                                      
                  c-0.137-0.171-0.222-0.358-0.358-0.529C277.449,63.831,292.19,59.843,307.201,59.842z M85.335,145.176                                                      
                  c-0.121-47.006,37.886-85.21,84.892-85.331c22.034-0.057,43.232,8.434,59.134,23.686c0.99,0.956,1.963,1.911,2.918,2.901                                                      
                  c2.931,3.071,5.634,6.351,8.09,9.813c0.751,1.058,1.434,2.185,2.133,3.277c2.385,3.671,4.479,7.523,6.263,11.52                                                      
                  c0.427,0.973,0.751,1.963,1.126,2.935c1.799,4.421,3.215,8.989,4.233,13.653c0.12,0.512,0.154,1.024,0.256,1.553                                                      
                  c2.162,10.597,2.162,21.522,0,32.119c-0.102,0.529-0.137,1.041-0.256,1.553c-1.017,4.664-2.433,9.232-4.233,13.653                                                      
                  c-0.375,0.973-0.7,1.963-1.126,2.935c-1.786,3.991-3.88,7.837-6.263,11.503c-0.7,1.092-1.382,2.219-2.133,3.277                                                      c-2.455,3.463-5.159,6.742-8.09,9.813c-0.956,0.99-1.929,1.946-2.918,2.901c-6.91,6.585-14.877,11.962-23.569,15.906                                                      c-1.382,0.631-2.782,1.212-4.198,1.707c-4.114,1.633-8.347,2.945-12.663,3.925c-1.075,0.239-2.185,0.375-3.277,0.563                                                      c-4.634,0.863-9.333,1.336-14.046,1.417h-1.877c-4.713-0.08-9.412-0.554-14.046-1.417c-1.092-0.188-2.202-0.324-3.277-0.563                                                      c-4.316-0.98-8.55-2.292-12.663-3.925c-1.417-0.563-2.816-1.143-4.198-1.707C105.013,209.057,85.374,178.677,85.335,145.176z                                                      M307.201,418.242H34.135v-34.133c-0.25-57.833,36.188-109.468,90.76-128.614c29.296,12.197,62.249,12.197,91.546,0                                                      c5.698,2.082,11.251,4.539,16.623,7.356c3.55,1.826,6.827,3.908,10.24,6.007c2.219,1.382,4.471,2.731,6.605,4.25                                                      c3.294,2.338,6.4,4.881,9.455,7.492c1.963,1.707,3.908,3.413,5.751,5.12c2.816,2.662,5.461,5.478,8.004,8.363                                                      c1.826,2.082,3.601,4.198,5.291,6.383c2.236,2.867,4.369,5.803,6.349,8.823c1.707,2.56,3.226,5.222,4.727,7.885                                                      c1.707,2.935,3.277,5.871,4.71,8.926c1.434,3.055,2.697,6.4,3.925,9.66c1.075,2.833,2.219,5.649,3.106,8.533                                                      c1.195,3.959,2.031,8.055,2.867,12.151c0.512,2.423,1.178,4.796,1.553,7.253c1.011,6.757,1.53,13.579,1.553,20.412V418.242z                                                      M443.735,418.242h-102.4v-34.133c0-5.342-0.307-10.633-0.785-15.872c-0.137-1.536-0.375-3.055-0.546-4.591                                                      c-0.461-3.772-0.99-7.509-1.707-11.213c-0.307-1.581-0.631-3.169-0.973-4.762c-0.819-3.8-1.769-7.566-2.85-11.298                                                      c-0.358-1.229-0.683-2.475-1.058-3.686c-4.779-15.277-11.704-29.797-20.565-43.127l-0.666-0.973                                                      c-2.935-4.358-6.07-8.573-9.404-12.646l-0.119-0.154c-3.413-4.232-7.117-8.346-11.008-12.237c0.222,0,0.461,0,0.7,0                                                      c4.816,0.633,9.666,0.975,14.524,1.024h0.939c4.496-0.039,8.985-0.33,13.449-0.87c1.399-0.171,2.782-0.427,4.181-0.649                                                      c3.63-0.557,7.214-1.28,10.752-2.167c1.007-0.256,2.031-0.495,3.055-0.785c4.643-1.263,9.203-2.814,13.653-4.642                                                      
                  c54.612,19.127,91.083,70.785,90.829,128.649V418.242z" fill="#8c8c8c"></path>
                </svg>
              </button>
              <div className={`absolute top-full left-0 z-10 w-full bg-white rounded py-[7.5px] shadow-md2 ${passengerBox?'block':'hidden'}`}>
                <div>
                  <div className="flex justify-between items-center py-[10px] px-[15px]">
                    <button className="btn-passenger-action"
                      onClick={() => {setAdult(adult-1); 
                                      if (children >= adult) setChildren(children-1);
                                      if (infant >= adult) setInfant(infant-1)}}
                      {...((adult <= 2)?{disabled:true}:{disabled:false})}
                    >
                      <span role="img" aria-label="minus" class="anticon anticon-minus"><svg viewBox="64 64 896 896" focusable="false" data-icon="minus" width="1em" height="1em" fill="inherit" aria-hidden="true"><path d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path></svg></span>
                    </button>
                    <p className="px-[15px] font-semibold">{adult} adult</p>
                    <button className="btn-passenger-action"
                      onClick = {() => setAdult(adult+1)}
                      {...((adult >= 6)?{disabled:true}:{disabled:false})}
                    >
                      <span role="img" aria-label="plus" class="anticon anticon-plus"><svg viewBox="64 64 896 896" focusable="false" data-icon="plus" width="1em" height="1em" fill="inherit" aria-hidden="true"><defs><style></style></defs><path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"></path><path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"></path></svg></span>
                    </button>
                  </div>
                  <div className="flex justify-between items-center py-[10px] px-[15px]">
                    <button className="btn-passenger-action"
                      onClick={() => setChildren(children-1)}
                      {...((children <= 0)?{disabled:true}:{disabled:false})}
                    >
                      <span role="img" aria-label="minus" class="anticon anticon-minus"><svg viewBox="64 64 896 896" focusable="false" data-icon="minus" width="1em" height="1em" fill="inherit" aria-hidden="true"><path d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path></svg></span>
                    </button>
                    <p className="px-[15px] font-semibold text-center">
                      {children} trẻ em
                      <span className="text-sm font-normal text-[#868686] block">2 - 12 tuổi</span>
                    </p>
                    <button className="btn-passenger-action"
                      onClick={() => setChildren(children+1)}
                      {...((children >= adult)?{disabled:true}:{disabled:false})}
                    >
                      <span role="img" aria-label="plus" class="anticon anticon-plus"><svg viewBox="64 64 896 896" focusable="false" data-icon="plus" width="1em" height="1em" fill="inherit" aria-hidden="true"><defs><style></style></defs><path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"></path><path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"></path></svg></span>
                    </button>
                  </div>
                  <div className="flex justify-between items-center py-[10px] px-[15px]">
                    <button className="btn-passenger-action"
                      onClick={() => setInfant(infant-1)}
                      {...((infant <= 0)?{disabled:true}:{disabled:false})}
                    >
                      <span role="img" aria-label="minus" class="anticon anticon-minus"><svg viewBox="64 64 896 896" focusable="false" data-icon="minus" width="1em" height="1em" fill="inherit" aria-hidden="true"><path d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path></svg></span>
                    </button>
                    <p className="px-[15px] font-semibold text-center">
                      {infant} infant
                      <span className="text-sm font-normal text-[#868686] block">&lt; 2 tuổi</span>
                    </p>
                    <button className="btn-passenger-action"
                      onClick={() => setInfant(infant+1)}
                      {...((infant >= adult)?{disabled:true}:{disabled:false})}
                    >
                      <span role="img" aria-label="plus" class="anticon anticon-plus"><svg viewBox="64 64 896 896" focusable="false" data-icon="plus" width="1em" height="1em" fill="inherit" aria-hidden="true"><defs><style></style></defs><path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"></path><path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"></path></svg></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="mb-[5px] font-semibold">
          How long is your trip?
        </p>
        <div className="md-992px:-mx-3 lg-1200px:-mx-4 flex items-center">
          <div className="md-992px:mx-3 lg-1200px:mx-4 w-1/3 md:h-[55px] md-992px:bg-[#fff7e6] border rounded md-992px:border-[#ff8917] cursor-pointer px-3 py-[5px]">
            <p className="text-[#ff8917] text-xs">
              3 days 2 nights
            </p>
            <p className="text-[#ff8917] font-semibold">
              $86.52/passenger
            </p>
          </div>
          <div className="md-992px:mx-3 lg-1200px:mx-4 w-1/3 md:h-[55px] border rounded md-992px:border-[#d9d9d9] cursor-pointer px-3 py-[5px]">
            <p className="text-[#595959] text-xs">
              4 days 3 nights
            </p>
            <p className="text-[#595959] font-semibold">
              $95.17/passenger
            </p>
          </div>
          <div className="md-992px:mx-3 lg-1200px:mx-4 w-1/3 md:h-[55px]">
            <button className="w-full h-full border rounded border-[#ff8917] bg-[#ff8917] text-white font-semibold">
              Show result
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SamePriceCombo;