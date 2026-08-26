import imgInsuranceLogo from "../assets/3fbd36ec349795727b3a9398e43951e8d75c809f.png"
function ALoginRevampClick({ onClick }: { onClick: () => void }) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault()
          onClick()
        }
      }}
      className="bg-[#005dac] content-stretch cursor-pointer flex items-start pb-[7px] pl-[14px] pr-[20px] pt-[4px] relative rounded-[5px] shrink-0"
      data-name="a#login-revamp-click"
    >
      <div className="[word-break:break-word] flex flex-col font-['Mulish:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-white tracking-[0.5px]">
        <p className="leading-[normal]">Login</p>
      </div>
      <div className="absolute flex items-center justify-center right-[8.36px] size-[11.312px] top-[9.35px]">
        <div className="-rotate-46 flex-none">
          <div
            className="border-b-2 border-r-2 border-solid border-white relative size-[8px]"
            data-name="::after"
          />
        </div>
      </div>
    </div>
  )
}

function Frame6({ onLoginClick }: { onLoginClick: () => void }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-between min-w-px pr-4 sm:pr-6 md:pr-[48px] relative">
      <div
        className="h-[49px] relative shrink-0 w-[180px]"
        data-name="Insurance Logo"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[367.35%] left-0 max-w-none top-[-136.73%] w-full"
            src={imgInsuranceLogo}
          />
        </div>
      </div>
      <div className="relative shrink-0" data-name="Component 5">
        <div className="content-stretch flex items-start relative size-full">
          <div className="relative shrink-0" data-name="Component 4">
            <div className="content-stretch flex items-start relative size-full">
              <ALoginRevampClick onClick={onLoginClick} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function DivBottomMenuWrap({ onLoginClick }: { onLoginClick: () => void }) {
  return (
    <div
      className="bg-gradient-to-l content-stretch flex from-[#003770] h-[58px] items-start max-h-[61px] relative shrink-0 to-[#003770] via-1/2 via-[#047fb3] w-full"
      data-name="div.bottom-menu-wrap"
    >
      <Frame6 onLoginClick={onLoginClick} />
    </div>
  )
}
export default DivBottomMenuWrap
