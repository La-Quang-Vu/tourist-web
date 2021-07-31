

const ChatWidget = () => {

  return (
    <div className="hidden fixed z-[16000002] w-[253px] h-[30px] right-[10px] bottom-0 overflow-hidden">
      <div className="bg-[#fbaf18] h-full cursor-pointer relative pl-9 rounded-tl-[5px] rounded-tr-[5px]">
        <div className="absolute w-9 left-0 bg-[#eba200] h-full rounded-tl-[5px] text-center">
          <div className="text-[#654301]">💬</div>
        </div>
        <div className="relative px-[10px] w-full cursor-pointer text-center">
            <label className="font-bold text-[#654301] cursor-pointer h-full">Bạn cần hỗ trợ? Chat ngay</label>
        </div>
      </div>
    </div>
  )
}

export default ChatWidget;