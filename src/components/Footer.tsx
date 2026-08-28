import svgPaths from "../assets/svg-s7akwzj1ba"
import imgAppStoreBadge from "../assets/app-store-badge.png"
import imgGooglePlayBadge from "../assets/google-play-badge.png"
function H12() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="h5"
    >
      <div className="[word-break:break-word] flex flex-col font-['Mulish:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#424242] text-[16px] w-full">
        <p className="leading-[22px]">
          SafeGuard Insurance General Insurance Company Limited,
        </p>
      </div>
    </div>
  )
}

function P6() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="p"
    >
      <div className="[word-break:break-word] flex flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#212121] text-[14px] w-full">
        <p className="leading-[20px]">{`Maple & Co. Building, 742, Sunrise Boulevard, Near Central Park Plaza, Westfield, New York - 10012.`}</p>
      </div>
    </div>
  )
}

function PWithBorder() {
  return (
    <div
      className="border-[#ccc] border-r border-solid content-stretch flex flex-col items-start pr-[10px] relative shrink-0"
      data-name="p.with-border"
    >
      <div className="[word-break:break-word] flex flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#212121] text-[14px]">
        <p className="leading-[20px]">Reg. No.115</p>
      </div>
    </div>
  )
}

function PEmailPara() {
  return (
    <div
      className="border-[#ccc] border-r border-solid content-stretch flex flex-col items-start pr-[10px] relative shrink min-w-0 max-w-full"
      data-name="p.email-para"
    >
      <div className="[word-break:break-word] flex flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] relative min-w-0 shrink text-[#212121] text-[14px]">
        <p className="leading-[20px] break-all">
          Email-customersupport@safeguardinsurance.com
        </p>
      </div>
    </div>
  )
}

function PWithBorder1() {
  return (
    <div
      className="border-[#ccc] border-r border-solid content-stretch flex flex-col items-start pr-[10px] relative shrink-0"
      data-name="p.with-border"
    >
      <div className="[word-break:break-word] flex flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#212121] text-[14px]">
        <p className="leading-[20px]">Fax no - 022 61961323</p>
      </div>
    </div>
  )
}

function P7() {
  return (
    <div
      className="content-stretch flex flex-col items-start pr-[10px] relative shrink-0"
      data-name="p"
    >
      <div className="[word-break:break-word] flex flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#212121] text-[14px]">
        <p className="leading-[20px]">Contact - 1856 1234 (Available 24 x 7)</p>
      </div>
    </div>
  )
}

function DivFooterInfo() {
  return (
    <div
      className="content-center flex flex-wrap gap-[0px_10px] items-center relative shrink-0 w-full"
      data-name="div.footer-info"
    >
      <PWithBorder />
      <PEmailPara />
      <PWithBorder1 />
      <P7 />
    </div>
  )
}

function DivFooterTopBlock() {
  return (
    <div
      className="relative lg:absolute content-stretch flex flex-col gap-[6px] items-start mx-[15px] lg:mx-0 mt-[24px] lg:mt-0 lg:left-[15px] pb-[40px] lg:right-[15px] lg:top-[86px]"
      data-name="div.footer-top-block"
    >
      <H12 />
      <P6 />
      <DivFooterInfo />
    </div>
  )
}

function AIcon() {
  return (
    <a
      className="absolute content-stretch cursor-pointer flex items-start left-0 overflow-clip top-0 w-[24px]"
      href="https://www.facebook.com/SafeGuardInsurance"
      target="_blank"
      data-name="a.icon"
    >
      <div
        className="overflow-clip relative shrink-0 size-[24px]"
        data-name="Component 7"
      >
        <div className="absolute inset-[0_0.03%_0_0]" data-name="Vector">
          <svg
            className="absolute block inset-0 size-full"
            fill="none"
            height="23.999"
            preserveAspectRatio="none"
            viewBox="0 0 23.9938 23.999"
            width="23.9938"
          >
            <path d={svgPaths.p2ee16480} fill="#020202" id="Vector" />
          </svg>
        </div>
        <div
          className="absolute inset-[22.74%_29.58%_0_29.55%]"
          data-name="Vector"
        >
          <svg
            className="absolute block inset-0 size-full"
            fill="none"
            height="18.5413"
            preserveAspectRatio="none"
            viewBox="0 0 9.80714 18.5413"
            width="9.80714"
          >
            <path d={svgPaths.p1ca57cf0} fill="white" id="Vector" />
          </svg>
        </div>
      </div>
    </a>
  )
}

function LiMargin() {
  return (
    <div className="h-[20px] relative shrink-0 w-[50px]" data-name="li:margin">
      <AIcon />
    </div>
  )
}

function AIcon1() {
  return (
    <a
      className="absolute content-stretch cursor-pointer flex items-start left-0 overflow-clip top-0 w-[24px]"
      href="https://www.instagram.com/safeguardinsurance"
      target="_blank"
      data-name="a.icon"
    >
      <div
        className="overflow-clip relative shrink-0 size-[24px]"
        data-name="Component 7"
      >
        <div className="absolute inset-[0_0.06%_0_-0.03%]" data-name="Vector">
          <svg
            className="absolute block inset-0 size-full"
            fill="none"
            height="24"
            preserveAspectRatio="none"
            viewBox="0 0 23.9929 24"
            width="23.9929"
          >
            <path d={svgPaths.p1ee74500} fill="#020202" id="Vector" />
          </svg>
        </div>
        <div
          className="absolute inset-[20.35%_19.08%_20.33%_18.99%]"
          data-name="Vector"
        >
          <svg
            className="absolute block inset-0 size-full"
            fill="none"
            height="14.2354"
            preserveAspectRatio="none"
            viewBox="0 0 14.8633 14.2354"
            width="14.8633"
          >
            <path d={svgPaths.pd0e9b80} fill="white" id="Vector" />
          </svg>
        </div>
        <div
          className="absolute inset-[35.59%_35.62%_35.57%_35.54%]"
          data-name="Vector"
        >
          <svg
            className="absolute block inset-0 size-full"
            fill="none"
            height="6.9218"
            preserveAspectRatio="none"
            viewBox="0 0 6.91975 6.9218"
            width="6.91975"
          >
            <path d={svgPaths.pbef6830} fill="white" id="Vector" />
          </svg>
        </div>
        <div
          className="absolute inset-[30.14%_30.4%_62.09%_61.83%]"
          data-name="Vector"
        >
          <svg
            className="absolute block inset-0 size-full"
            fill="none"
            height="1.86498"
            preserveAspectRatio="none"
            viewBox="0 0 1.86443 1.86498"
            width="1.86443"
          >
            <path d={svgPaths.pcf1b480} fill="white" id="Vector" />
          </svg>
        </div>
      </div>
    </a>
  )
}

function LiMargin1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[50px]" data-name="li:margin">
      <AIcon1 />
    </div>
  )
}

function AIcon2() {
  return (
    <a
      className="absolute content-stretch cursor-pointer flex items-start left-0 overflow-clip pb-[0.889px] top-0 w-[24px]"
      href="https://twitter.com/SafeGuardIns"
      target="_blank"
      data-name="a.icon"
    >
      <div
        className="h-[23.111px] overflow-clip relative shrink-0 w-[24px]"
        data-name="Component 7"
      >
        <div className="absolute inset-[0_0.08%_0_3.65%]" data-name="Vector">
          <svg
            className="absolute block inset-0 size-full"
            fill="none"
            height="23.1111"
            preserveAspectRatio="none"
            viewBox="0 0 23.1051 23.1111"
            width="23.1051"
          >
            <path d={svgPaths.p3f218800} fill="#020202" id="Vector" />
          </svg>
        </div>
        <div
          className="absolute inset-[22.06%_19.47%_22.04%_23.03%]"
          data-name="Vector"
        >
          <svg
            className="absolute block inset-0 size-full"
            fill="none"
            height="12.9187"
            preserveAspectRatio="none"
            viewBox="0 0 13.7996 12.9187"
            width="13.7996"
          >
            <path d={svgPaths.pd6032f0} fill="white" id="Vector" />
          </svg>
        </div>
      </div>
    </a>
  )
}

function LiMargin2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[50px]" data-name="li:margin">
      <AIcon2 />
    </div>
  )
}

function AIcon3() {
  return (
    <a
      className="absolute content-stretch cursor-pointer flex items-start left-0 overflow-clip pb-[0.889px] top-0 w-[24px]"
      href="https://www.youtube.com/@safeguardinsurance"
      target="_blank"
      data-name="a.icon"
    >
      <div
        className="h-[23.111px] overflow-clip relative shrink-0 w-[24px]"
        data-name="Component 7"
      >
        <div className="absolute inset-[0_0.11%_0_3.63%]" data-name="Vector">
          <svg
            className="absolute block inset-0 size-full"
            fill="none"
            height="23.1111"
            preserveAspectRatio="none"
            viewBox="0 0 23.1043 23.1111"
            width="23.1043"
          >
            <path d={svgPaths.p322e9f00} fill="#020202" id="Vector" />
          </svg>
        </div>
        <div
          className="absolute inset-[27.66%_17.41%_27.67%_20.92%]"
          data-name="Vector"
        >
          <svg
            className="absolute block inset-0 size-full"
            fill="none"
            height="10.3231"
            preserveAspectRatio="none"
            viewBox="0 0 14.8014 10.3231"
            width="14.8014"
          >
            <path d={svgPaths.pd780800} fill="white" id="Vector" />
          </svg>
        </div>
      </div>
    </a>
  )
}

function LiMargin3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[50px]" data-name="li:margin">
      <AIcon3 />
    </div>
  )
}

function AIcon4() {
  return (
    <a
      className="absolute content-stretch cursor-pointer flex items-start left-0 overflow-clip pb-[0.889px] top-0 w-[24px]"
      href="https://www.linkedin.com/company/safeguard-insurance"
      target="_blank"
      data-name="a.icon"
    >
      <div
        className="h-[23.111px] overflow-clip relative shrink-0 w-[24px]"
        data-name="Component 7"
      >
        <div className="absolute inset-[0_0.14%_0_3.6%]" data-name="Vector">
          <svg
            className="absolute block inset-0 size-full"
            fill="none"
            height="23.1111"
            preserveAspectRatio="none"
            viewBox="0 0 23.1043 23.1111"
            width="23.1043"
          >
            <path d={svgPaths.p11e0cb80} fill="#020202" id="Vector" />
          </svg>
        </div>
        <div
          className="absolute inset-[22.26%_61.81%_22.26%_24.66%]"
          data-name="Vector"
        >
          <svg
            className="absolute block inset-0 size-full"
            fill="none"
            height="12.8224"
            preserveAspectRatio="none"
            viewBox="0 0 3.24748 12.8224"
            width="3.24748"
          >
            <path d={svgPaths.p23a0af0} fill="white" id="Vector" />
          </svg>
        </div>
        <div
          className="absolute inset-[39.75%_21.19%_22.92%_43.45%]"
          data-name="Vector"
        >
          <svg
            className="absolute block inset-0 size-full"
            fill="none"
            height="8.62649"
            preserveAspectRatio="none"
            viewBox="0 0 8.48551 8.62649"
            width="8.48551"
          >
            <path d={svgPaths.p259f8e00} fill="white" id="Vector" />
          </svg>
        </div>
      </div>
    </a>
  )
}

function LiMargin4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[50px]" data-name="li:margin">
      <AIcon4 />
    </div>
  )
}

function SocialIconsLeftSide() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] gap-[16px] items-start min-w-px relative"
      data-name="Social Icons (Left Side)"
    >
      <LiMargin />
      <LiMargin1 />
      <LiMargin2 />
      <LiMargin3 />
      <LiMargin4 />
    </div>
  )
}

function SpanAppLabel() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0"
      data-name="span.app-label"
    >
      <div className="[word-break:break-word] flex flex-col font-['Mulish:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#212121] text-[18px]">
        <p className="leading-[20px]">SafeGuard App</p>
      </div>
    </div>
  )
}

function DivIconslogo() {
  return (
    <div
      className="content-stretch flex gap-[12px] items-start relative shrink-0"
      data-name="div.iconslogo"
    >
      <a
        className="h-[41px] relative shrink-0 w-[125px]"
        data-name="a.app-st"
        href="https://www.apple.com/app-store/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          alt="Download on the App Store"
          className="h-full w-full object-contain"
          src={imgAppStoreBadge}
        />
      </a>
      <a
        className="h-[41px] relative shrink-0 w-[125px]"
        data-name="a.g-play"
        href="https://play.google.com/store"
        target="_blank"
        rel="noreferrer"
      >
        <img
          alt="Get it on Google Play"
          className="h-full w-full object-contain"
          src={imgGooglePlayBadge}
        />
      </a>
    </div>
  )
}

function DivAppLinks() {
  return (
    <div
      className="content-stretch flex flex-wrap gap-[16px] items-center relative shrink-0 max-w-full"
      data-name="div.app-links"
    >
      <SpanAppLabel />
      <DivIconslogo />
    </div>
  )
}

function RightSideImageEGAppStoreOrTakeCareAppBadge() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Right Side Image (e.g., App Store or TakeCare App Badge)"
    >
      <DivAppLinks />
    </div>
  )
}

function DivFooterSocialSection() {
  return (
    <div
      className="relative lg:absolute border-[#e0e0e0] border-solid border-t content-stretch flex flex-wrap gap-[16px] items-center justify-between mx-[15px] lg:mx-0 mt-[24px] lg:mt-0 pt-[16px] lg:left-[15px] lg:right-[15px] lg:top-[216px]"
      data-name="div.footer-social-section"
    >
      <SocialIconsLeftSide />
      <RightSideImageEGAppStoreOrTakeCareAppBadge />
    </div>
  )
}

function Li39() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-[110px] relative"
      data-name="li"
    >
      <div className="[word-break:break-word] capitalize flex flex-col font-['Mulish:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#424242] text-[18px] w-full">
        <p className="leading-[20px]">Products</p>
      </div>
    </div>
  )
}

function Li40() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-[110px] relative"
      data-name="li"
    >
      <div className="[word-break:break-word] capitalize flex flex-col font-['Mulish:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#424242] text-[18px] w-full">
        <p className="leading-[20px]">Services</p>
      </div>
    </div>
  )
}

function Li41() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-[110px] relative"
      data-name="li"
    >
      <div className="[word-break:break-word] capitalize flex flex-col font-['Mulish:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#424242] text-[18px] w-full">
        <p className="leading-[20px]">Legal</p>
      </div>
    </div>
  )
}

function Li42() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-[110px] relative"
      data-name="li"
    >
      <div className="[word-break:break-word] capitalize flex flex-col font-['Mulish:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#424242] text-[18px] w-full">
        <p className="leading-[20px]">About Us</p>
      </div>
    </div>
  )
}

function Li43() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-[110px] relative"
      data-name="li"
    >
      <div className="[word-break:break-word] capitalize flex flex-col font-['Mulish:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#424242] text-[18px] w-full">
        <p className="leading-[20px]">Others</p>
      </div>
    </div>
  )
}

function Ul12() {
  return (
    <div
      className="content-stretch flex flex-wrap gap-y-[8px] items-center justify-between relative shrink-0 w-full"
      data-name="ul"
    >
      <Li39 />
      <Li40 />
      <Li41 />
      <Li42 />
      <Li43 />
    </div>
  )
}

function DivAccordionHeader() {
  return (
    <div
      className="content-stretch flex flex-col items-start mb-[-14px] px-4 sm:px-6 md:px-[42px] py-[32px] relative shrink-0 w-full"
      data-name="div.accordion-header"
    >
      <Ul12 />
      <div
        className="absolute bottom-[41.58%] flex items-center justify-center right-[39.93px] top-[41.58%] w-[14.142px]"
        style={{ containerType: "size" }}
      >
        <div className="-rotate-135 flex-none h-[hypot(50cqw,-50cqh)] w-[hypot(-50cqw,-50cqh)]">
          <div
            className="border-[#ec6625] border-b-2 border-r-2 border-solid relative size-full"
            data-name="::after"
          />
        </div>
      </div>
    </div>
  )
}

function Ul13() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="ul"
    >
      <div className="relative shrink-0 w-full" data-name="Component 2">
        <div className="content-stretch flex flex-col items-start pb-[12px] relative size-full">
          <div className="relative shrink-0 w-full" data-name="Component 1">
            <div className="content-stretch flex items-start relative size-full">
              <a
                className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#333] text-[14px]"
                href="https://www.google.com/"
                target="_blank"
              >
                <p className="cursor-pointer leading-[normal]">
                  Motor Insurance
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Component 2">
        <div className="content-stretch flex flex-col items-start pb-[12px] relative size-full">
          <div className="relative shrink-0 w-full" data-name="Component 1">
            <div className="content-stretch flex items-start relative size-full">
              <a
                className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#333] text-[14px]"
                href="https://www.google.com/"
                target="_blank"
              >
                <p className="cursor-pointer leading-[normal]">Car Insurance</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Component 2">
        <div className="content-stretch flex flex-col items-start pb-[12px] relative size-full">
          <div className="relative shrink-0 w-full" data-name="Component 1">
            <div className="content-stretch flex items-start relative size-full">
              <a
                className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#333] text-[14px]"
                href="https://www.google.com/"
                target="_blank"
              >
                <p className="cursor-pointer leading-[normal]">
                  Two Wheeler Insurance
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Component 2">
        <div className="content-stretch flex flex-col items-start pb-[12px] relative size-full">
          <div className="relative shrink-0 w-full" data-name="Component 1">
            <div className="content-stretch flex items-start relative size-full">
              <a
                className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#333] text-[14px]"
                href="https://www.google.com/"
                target="_blank"
              >
                <p className="cursor-pointer leading-[normal]">
                  Health Insurance
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Component 2">
        <div className="content-stretch flex flex-col items-start pb-[12px] relative size-full">
          <div className="relative shrink-0 w-full" data-name="Component 1">
            <div className="content-stretch flex items-start relative size-full">
              <a
                className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#333] text-[14px]"
                href="https://www.google.com/"
                target="_blank"
              >
                <p className="cursor-pointer leading-[normal]">
                  Travel Insurance
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Component 2">
        <div className="content-stretch flex flex-col items-start pb-[12px] relative size-full">
          <div className="relative shrink-0 w-full" data-name="Component 1">
            <div className="content-stretch flex items-start relative size-full">
              <a
                className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#333] text-[14px]"
                href="https://www.google.com/"
                target="_blank"
              >
                <p className="cursor-pointer leading-[normal]">
                  NRI Insurance Services
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Component 2">
        <div className="content-stretch flex flex-col items-start pb-[12px] relative size-full">
          <div className="relative shrink-0 w-full" data-name="Component 1">
            <div className="content-stretch flex items-start relative size-full">
              <a
                className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#333] text-[14px]"
                href="https://www.google.com/"
                target="_blank"
              >
                <p className="cursor-pointer leading-[normal]">
                  Business Insurance
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Component 2">
        <div className="content-stretch flex flex-col items-start pb-[12px] relative size-full">
          <div className="relative shrink-0 w-full" data-name="Component 1">
            <div className="content-stretch flex items-start relative size-full">
              <a
                className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#333] text-[14px]"
                href="https://www.google.com/"
                target="_blank"
              >
                <p className="cursor-pointer leading-[normal]">
                  Crop Insurance
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Component 2">
        <div className="content-stretch flex flex-col items-start pb-[12px] relative size-full">
          <div className="relative shrink-0 w-full" data-name="Component 1">
            <div className="content-stretch flex items-start relative size-full">
              <a
                className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#333] text-[14px]"
                href="https://www.google.com/"
                target="_blank"
              >
                <p className="cursor-pointer leading-[normal]">
                  Cyber Insurance
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Component 2">
        <div className="content-stretch flex flex-col items-start pb-[12px] relative size-full">
          <div className="relative shrink-0 w-full" data-name="Component 1">
            <div className="content-stretch flex items-start relative size-full">
              <a
                className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#333] text-[14px]"
                href="https://www.google.com/"
                target="_blank"
              >
                <p className="cursor-pointer leading-[normal]">
                  SafeGuard Bharat Griha Raksha Policy
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function DivColFooterContent() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-[140px] relative self-stretch"
      data-name="div.col-footer-content"
    >
      <Ul13 />
    </div>
  )
}

function Ul14() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="ul"
    >
      <div className="relative shrink-0 w-full" data-name="Component 2">
        <div className="content-stretch flex flex-col items-start pb-[12px] relative size-full">
          <div className="relative shrink-0 w-full" data-name="Component 1">
            <div className="content-stretch flex items-start relative size-full">
              <a
                className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#333] text-[14px]"
                href="https://www.google.com/"
                target="_blank"
              >
                <p className="cursor-pointer leading-[normal]">
                  Customer Support
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Component 2">
        <div className="content-stretch flex flex-col items-start pb-[12px] relative size-full">
          <div className="relative shrink-0 w-full" data-name="Component 1">
            <div className="content-stretch flex items-start relative size-full">
              <a
                className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#333] text-[14px]"
                href="https://www.google.com/"
                target="_blank"
              >
                <p className="cursor-pointer leading-[normal]">
                  Citizen Charter
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Component 2">
        <div className="content-stretch flex flex-col items-start pb-[12px] relative size-full">
          <div className="relative shrink-0 w-full" data-name="Component 1">
            <div className="content-stretch flex items-start relative size-full">
              <a
                className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#333] text-[14px]"
                href="https://www.google.com/"
                target="_blank"
              >
                <p className="cursor-pointer leading-[normal]">
                  Retrieve Quote
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Component 2">
        <div className="content-stretch flex flex-col items-start pb-[12px] relative size-full">
          <div className="relative shrink-0 w-full" data-name="Component 1">
            <div className="content-stretch flex items-start relative size-full">
              <a
                className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#333] text-[14px]"
                href="https://www.google.com/"
                target="_blank"
              >
                <p className="cursor-pointer leading-[normal]">
                  Unclaimed Amount
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Component 2">
        <div className="content-stretch flex flex-col items-start pb-[12px] relative size-full">
          <div className="relative shrink-0 w-full" data-name="Component 1">
            <div className="content-stretch flex items-start relative size-full">
              <a
                className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#333] text-[14px]"
                href="https://www.google.com/"
                target="_blank"
              >
                <p className="cursor-pointer leading-[normal]">
                  Intimate PA claim
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Component 2">
        <div className="content-stretch flex flex-col items-start pb-[12px] relative size-full">
          <div className="relative shrink-0 w-full" data-name="Component 1">
            <div className="content-stretch flex items-start relative size-full">
              <a
                className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#333] text-[14px]"
                href="https://www.google.com/"
                target="_blank"
              >
                <p className="cursor-pointer leading-[normal]">
                  Renew Your Policy
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Component 2">
        <div className="content-stretch flex flex-col items-start pb-[12px] relative size-full">
          <div className="relative shrink-0 w-full" data-name="Component 1">
            <div className="content-stretch flex items-start relative size-full">
              <a
                className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#333] text-[14px]"
                href="https://www.google.com/"
                target="_blank"
              >
                <p className="cursor-pointer leading-[normal]">Portability</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Component 2">
        <div className="content-stretch flex flex-col items-start pb-[12px] relative size-full">
          <div className="relative shrink-0 w-full" data-name="Component 1">
            <div className="content-stretch flex items-start relative size-full">
              <a
                className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#333] text-[14px]"
                href="https://www.google.com/"
                target="_blank"
              >
                <p className="cursor-pointer leading-[normal]">EIA</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Component 2">
        <div className="content-stretch flex flex-col items-start pb-[12px] relative size-full">
          <div className="relative shrink-0 w-full" data-name="Component 1">
            <div className="content-stretch flex items-start relative size-full">
              <a
                className="[word-break:break-word] cursor-pointer flex flex-[1_0_0] flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#333] text-[14px]"
                href="https://www.google.com/"
                target="_blank"
              >
                <p className="leading-[normal] mb-0">
                  Online Dispute Resolution Portal
                </p>
                <p className="leading-[normal]">for Investors</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Component 2">
        <div className="content-stretch flex flex-col items-start pb-[12px] relative size-full">
          <div className="relative shrink-0 w-full" data-name="Component 1">
            <div className="content-stretch flex items-start relative size-full">
              <a
                className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#333] text-[14px]"
                href="https://www.google.com/"
                target="_blank"
              >
                <p className="cursor-pointer leading-[normal]">
                  SME Endorsements
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function DivColFooterContent1() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-[140px] relative self-stretch"
      data-name="div.col-footer-content"
    >
      <Ul14 />
    </div>
  )
}

function Ul15() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="ul"
    >
      <div className="relative shrink-0 w-full" data-name="Component 2">
        <div className="content-stretch flex flex-col items-start pb-[12px] relative size-full">
          <div className="relative shrink-0 w-full" data-name="Component 1">
            <div className="content-stretch flex items-start relative size-full">
              <a
                className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#333] text-[14px]"
                href="https://www.google.com/"
                target="_blank"
              >
                <p className="cursor-pointer leading-[normal]">
                  Privacy Policy
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Component 2">
        <div className="content-stretch flex flex-col items-start pb-[12px] relative size-full">
          <div className="relative shrink-0 w-full" data-name="Component 1">
            <div className="content-stretch flex items-start relative size-full">
              <a
                className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#333] text-[14px]"
                href="https://www.google.com/"
                target="_blank"
              >
                <p className="cursor-pointer leading-[normal]">
                  Insure App Privacy Policy
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Component 2">
        <div className="content-stretch flex flex-col items-start pb-[12px] relative size-full">
          <div className="relative shrink-0 w-full" data-name="Component 1">
            <div className="content-stretch flex items-start relative size-full">
              <a
                className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#333] text-[14px]"
                href="https://www.google.com/"
                target="_blank"
              >
                <p className="cursor-pointer leading-[normal]">
                  Product Withdrawal
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Component 2">
        <div className="content-stretch flex flex-col items-start pb-[12px] relative size-full">
          <div className="relative shrink-0 w-full" data-name="Component 1">
            <div className="content-stretch flex items-start relative size-full">
              <a
                className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#333] text-[14px]"
                href="https://www.google.com/"
                target="_blank"
              >
                <p className="cursor-pointer leading-[normal]">
                  Do Not Call Registry
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Component 2">
        <div className="content-stretch flex flex-col items-start pb-[12px] relative size-full">
          <div className="relative shrink-0 w-full" data-name="Component 1">
            <div className="content-stretch flex items-start relative size-full">
              <a
                className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#333] text-[14px]"
                href="https://www.google.com/"
                target="_blank"
              >
                <p className="cursor-pointer leading-[normal]">{`General Terms & Conditions`}</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Component 2">
        <div className="content-stretch flex flex-col items-start pb-[12px] relative size-full">
          <div className="relative shrink-0 w-full" data-name="Component 1">
            <div className="content-stretch flex items-start relative size-full">
              <a
                className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#333] text-[14px]"
                href="https://www.google.com/"
                target="_blank"
              >
                <p className="cursor-pointer leading-[normal]">Disclaimer</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Component 2">
        <div className="content-stretch flex flex-col items-start pb-[12px] relative size-full">
          <div className="relative shrink-0 w-full" data-name="Component 1">
            <div className="content-stretch flex items-start relative size-full">
              <a
                className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#333] text-[14px]"
                href="https://www.google.com/"
                target="_blank"
              >
                <p className="cursor-pointer leading-[normal]">
                  Insurance Ombudsman
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Component 2">
        <div className="content-stretch flex flex-col items-start pb-[12px] relative size-full">
          <div className="relative shrink-0 w-full" data-name="Component 1">
            <div className="content-stretch flex items-start relative size-full">
              <a
                className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#333] text-[14px]"
                href="https://www.google.com/"
                target="_blank"
              >
                <p className="cursor-pointer leading-[normal]">
                  Stewardship Policy
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Component 2">
        <div className="content-stretch flex flex-col items-start pb-[12px] relative size-full">
          <div className="relative shrink-0 w-full" data-name="Component 1">
            <div className="content-stretch flex items-start relative size-full">
              <a
                className="[word-break:break-word] cursor-pointer flex flex-[1_0_0] flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#333] text-[14px]"
                href="https://www.google.com/"
                target="_blank"
              >
                <p className="leading-[normal] mb-0">
                  Disclosure under Stewardship
                </p>
                <p className="leading-[normal]">Policy</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Component 2">
        <div className="content-stretch flex flex-col items-start pb-[12px] relative size-full">
          <div className="relative shrink-0 w-full" data-name="Component 1">
            <div className="content-stretch flex items-start relative size-full">
              <a
                className="[word-break:break-word] cursor-pointer flex flex-[1_0_0] flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#333] text-[14px]"
                href="https://www.google.com/"
                target="_blank"
              >
                <p className="leading-[normal] mb-0">
                  Policy for Policyholder’s Interest
                </p>
                <p className="leading-[normal]">{`Protection & Grievance Redressal`}</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Component 2">
        <div className="content-stretch flex flex-col items-start pb-[12px] relative size-full">
          <div className="relative shrink-0 w-full" data-name="Component 1">
            <div className="content-stretch flex items-start relative size-full">
              <a
                className="[word-break:break-word] cursor-pointer flex flex-[1_0_0] flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#333] text-[14px]"
                href="https://www.google.com/"
                target="_blank"
              >
                <p className="leading-[normal] mb-0">
                  Advisory to Customer and Channel
                </p>
                <p className="leading-[normal]">Partners</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Component 2">
        <div className="content-stretch flex flex-col items-start pb-[12px] relative size-full">
          <div className="relative shrink-0 w-full" data-name="Component 1">
            <div className="content-stretch flex items-start relative size-full">
              <a
                className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#333] text-[14px]"
                href="https://www.google.com/"
                target="_blank"
              >
                <p className="cursor-pointer leading-[normal]">
                  SafeGuard Insurance Product List
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Component 2">
        <div className="content-stretch flex flex-col items-start pb-[12px] relative size-full">
          <div className="relative shrink-0 w-full" data-name="Component 1">
            <div className="content-stretch flex items-start relative size-full">
              <a
                className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#333] text-[14px]"
                href="https://www.google.com/"
                target="_blank"
              >
                <p className="cursor-pointer leading-[normal]">
                  GRO Details of Active Branches
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Component 2">
        <div className="content-stretch flex flex-col items-start pb-[12px] relative size-full">
          <div className="relative shrink-0 w-full" data-name="Component 1">
            <div className="content-stretch flex items-start relative size-full">
              <a
                className="[word-break:break-word] cursor-pointer flex flex-[1_0_0] flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#333] text-[14px]"
                href="https://www.google.com/"
                target="_blank"
              >
                <p className="leading-[normal] mb-0">
                  Motor Third Party claims -
                </p>
                <p className="leading-[normal]">
                  Statewise nodal officer details
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Component 2">
        <div className="content-stretch flex flex-col items-start pb-[12px] relative size-full">
          <div className="relative shrink-0 w-full" data-name="Component 1">
            <div className="content-stretch flex items-start relative size-full">
              <a
                className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#333] text-[14px]"
                href="https://www.google.com/"
                target="_blank"
              >
                <p className="cursor-pointer leading-[normal]">
                  Whistle Blower Policy
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function DivColFooterContent2() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-[140px] relative self-stretch"
      data-name="div.col-footer-content"
    >
      <Ul15 />
    </div>
  )
}

function Ul16() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="ul"
    >
      <div className="relative shrink-0 w-full" data-name="Component 2">
        <div className="content-stretch flex flex-col items-start pb-[12px] relative size-full">
          <div className="relative shrink-0 w-full" data-name="Component 1">
            <div className="content-stretch flex items-start relative size-full">
              <a
                className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#333] text-[14px]"
                href="https://www.google.com/"
                target="_blank"
              >
                <p className="cursor-pointer leading-[normal]">Overview</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Component 2">
        <div className="content-stretch flex flex-col items-start pb-[12px] relative size-full">
          <div className="relative shrink-0 w-full" data-name="Component 1">
            <div className="content-stretch flex items-start relative size-full">
              <a
                className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#333] text-[14px]"
                href="https://www.google.com/"
                target="_blank"
              >
                <p className="cursor-pointer leading-[normal]">Promoters</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Component 2">
        <div className="content-stretch flex flex-col items-start pb-[12px] relative size-full">
          <div className="relative shrink-0 w-full" data-name="Component 1">
            <div className="content-stretch flex items-start relative size-full">
              <a
                className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#333] text-[14px]"
                href="https://www.google.com/"
                target="_blank"
              >
                <p className="cursor-pointer leading-[normal]">CSR</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Component 2">
        <div className="content-stretch flex flex-col items-start pb-[12px] relative size-full">
          <div className="relative shrink-0 w-full" data-name="Component 1">
            <div className="content-stretch flex items-start relative size-full">
              <a
                className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#333] text-[14px]"
                href="https://www.google.com/"
                target="_blank"
              >
                <p className="cursor-pointer leading-[normal]">
                  Risk Management
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Component 2">
        <div className="content-stretch flex flex-col items-start pb-[12px] relative size-full">
          <div className="relative shrink-0 w-full" data-name="Component 1">
            <div className="content-stretch flex items-start relative size-full">
              <a
                className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#333] text-[14px]"
                href="https://www.google.com/"
                target="_blank"
              >
                <p className="cursor-pointer leading-[normal]">
                  Public Disclosures
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Component 2">
        <div className="content-stretch flex flex-col items-start pb-[12px] relative size-full">
          <div className="relative shrink-0 w-full" data-name="Component 1">
            <div className="content-stretch flex items-start relative size-full">
              <a
                className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#333] text-[14px]"
                href="https://www.google.com/"
                target="_blank"
              >
                <p className="cursor-pointer leading-[normal]">
                  Awards and Recognitions
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Component 2">
        <div className="content-stretch flex flex-col items-start pb-[12px] relative size-full">
          <div className="relative shrink-0 w-full" data-name="Component 1">
            <div className="content-stretch flex items-start relative size-full">
              <a
                className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#333] text-[14px]"
                href="https://www.google.com/"
                target="_blank"
              >
                <p className="cursor-pointer leading-[normal]">
                  Investor Relations
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Component 2">
        <div className="content-stretch flex flex-col items-start pb-[12px] relative size-full">
          <div className="relative shrink-0 w-full" data-name="Component 1">
            <div className="content-stretch flex items-start relative size-full">
              <a
                className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#333] text-[14px]"
                href="https://www.google.com/"
                target="_blank"
              >
                <p className="cursor-pointer leading-[normal]">Media</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function DivColFooterContent3() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-[140px] relative self-stretch"
      data-name="div.col-footer-content"
    >
      <Ul16 />
    </div>
  )
}

function Ul17() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="ul"
    >
      <div className="relative shrink-0 w-full" data-name="Component 2">
        <div className="content-stretch flex flex-col items-start pb-[12px] relative size-full">
          <div className="relative shrink-0 w-full" data-name="Component 1">
            <div className="content-stretch flex items-start relative size-full">
              <a
                className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#333] text-[14px]"
                href="https://www.google.com/"
                target="_blank"
              >
                <p className="cursor-pointer leading-[normal]">
                  Agents’ Portal
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Component 2">
        <div className="content-stretch flex flex-col items-start pb-[12px] relative size-full">
          <div className="relative shrink-0 w-full" data-name="Component 1">
            <div className="content-stretch flex items-start relative size-full">
              <a
                className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#333] text-[14px]"
                href="https://www.google.com/"
                target="_blank"
              >
                <p className="cursor-pointer leading-[normal]">
                  Corporate Login
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Component 2">
        <div className="content-stretch flex flex-col items-start pb-[12px] relative size-full">
          <div className="relative shrink-0 w-full" data-name="Component 1">
            <div className="content-stretch flex items-start relative size-full">
              <a
                className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#333] text-[14px]"
                href="https://www.google.com/"
                target="_blank"
              >
                <p className="cursor-pointer leading-[normal]">
                  Blacklisted Agents
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Component 2">
        <div className="content-stretch flex flex-col items-start pb-[12px] relative size-full">
          <div className="relative shrink-0 w-full" data-name="Component 1">
            <div className="content-stretch flex items-start relative size-full">
              <a
                className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#333] text-[14px]"
                href="https://www.google.com/"
                target="_blank"
              >
                <p className="cursor-pointer leading-[normal]">
                  BAGI Blacklisted Agents
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Component 2">
        <div className="content-stretch flex flex-col items-start pb-[12px] relative size-full">
          <div className="relative shrink-0 w-full" data-name="Component 1">
            <div className="content-stretch flex items-start relative size-full">
              <a
                className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#333] text-[14px]"
                href="https://www.google.com/"
                target="_blank"
              >
                <p className="cursor-pointer leading-[normal]">
                  Distribution Channels
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Component 2">
        <div className="content-stretch flex flex-col items-start pb-[12px] relative size-full">
          <div className="relative shrink-0 w-full" data-name="Component 1">
            <div className="content-stretch flex items-start relative size-full">
              <a
                className="[word-break:break-word] cursor-pointer flex flex-[1_0_0] flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#333] text-[14px]"
                href="https://www.google.com/"
                target="_blank"
              >
                <p className="leading-[normal] mb-0">
                  Pradhan Mantri Suraksha Bima
                </p>
                <p className="leading-[normal]">Yojna</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Component 2">
        <div className="content-stretch flex flex-col items-start pb-[12px] relative size-full">
          <div className="relative shrink-0 w-full" data-name="Component 1">
            <div className="content-stretch flex items-start relative size-full">
              <a
                className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#333] text-[14px]"
                href="https://www.google.com/"
                target="_blank"
              >
                <p className="cursor-pointer leading-[normal]">
                  Hospital Empanelment Criteria
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Component 2">
        <div className="content-stretch flex flex-col items-start pb-[12px] relative size-full">
          <div className="relative shrink-0 w-full" data-name="Component 1">
            <div className="content-stretch flex items-start relative size-full">
              <a
                className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#333] text-[14px]"
                href="https://www.google.com/"
                target="_blank"
              >
                <p className="cursor-pointer leading-[normal]">
                  Account Aggregator
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Component 2">
        <div className="content-stretch flex flex-col items-start pb-[12px] relative size-full">
          <div className="relative shrink-0 w-full" data-name="Component 1">
            <div className="content-stretch flex items-start relative size-full">
              <a
                className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#333] text-[14px]"
                href="https://www.google.com/"
                target="_blank"
              >
                <p className="cursor-pointer leading-[normal]">
                  International Business (IIO)
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Component 2">
        <div className="content-stretch flex flex-col items-start pb-[12px] relative size-full">
          <div className="relative shrink-0 w-full" data-name="Component 1">
            <div className="content-stretch flex items-start relative size-full">
              <a
                className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#333] text-[14px]"
                href="https://www.google.com/"
                target="_blank"
              >
                <p className="cursor-pointer leading-[normal]">Sitemap</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Component 2">
        <div className="content-stretch flex flex-col items-start pb-[12px] relative size-full">
          <div className="relative shrink-0 w-full" data-name="Component 1">
            <div className="content-stretch flex items-start relative size-full">
              <a
                className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#333] text-[14px]"
                href="https://www.google.com/"
                target="_blank"
              >
                <p className="cursor-pointer leading-[normal]">
                  Become an Agent (SME)
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Component 2">
        <div className="content-stretch flex flex-col items-start pb-[12px] relative size-full">
          <div className="relative shrink-0 w-full" data-name="Component 1">
            <div className="content-stretch flex items-start relative size-full">
              <a
                className="[word-break:break-word] cursor-pointer flex flex-[1_0_0] flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#333] text-[14px]"
                href="https://www.google.com/"
                target="_blank"
              >
                <p className="leading-[normal] mb-0">
                  Data on Health Claim Service
                </p>
                <p className="leading-[normal]">Indicators</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Component 2">
        <div className="content-stretch flex flex-col items-start pb-[12px] relative size-full">
          <div className="relative shrink-0 w-full" data-name="Component 1">
            <div className="content-stretch flex items-start relative size-full">
              <a
                className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#333] text-[14px]"
                href="https://www.google.com/"
                target="_blank"
              >
                <p className="cursor-pointer leading-[normal]">
                  IRDAI List of Blacklisted Agents
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function DivColFooterContent4() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-[140px] relative self-stretch"
      data-name="div.col-footer-content"
    >
      <Ul17 />
    </div>
  )
}

function DivColFooterWrapper() {
  return (
    <div
      className="content-stretch flex flex-wrap gap-x-[24px] gap-y-[24px] items-start relative shrink-0 w-full"
      data-name="div.col-footer-wrapper"
    >
      <DivColFooterContent />
      <DivColFooterContent1 />
      <DivColFooterContent2 />
      <DivColFooterContent3 />
      <DivColFooterContent4 />
    </div>
  )
}

function DivFooterAccordion() {
  return (
    <div
      className="relative lg:absolute bg-white content-stretch drop-shadow-[0px_3px_5px_rgba(2,2,2,0.06)] flex flex-col items-center mx-[15px] lg:mx-0 mt-[24px] lg:mt-0 pb-[38px] pt-[24px] lg:left-[15px] lg:right-[15px] rounded-[16px] lg:top-[290px]"
      data-name="div.footer-accordion"
    >
      <DivAccordionHeader />
      <DivColFooterWrapper />
    </div>
  )
}

function Li44() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-[110px] relative"
      data-name="li"
    >
      <div className="[word-break:break-word] capitalize flex flex-col font-['Mulish:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#424242] text-[18px] w-full">
        <p className="leading-[20px]">Info Center</p>
      </div>
    </div>
  )
}

function Li45() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-[110px] relative"
      data-name="li"
    >
      <div className="[word-break:break-word] capitalize flex flex-col font-['Mulish:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#424242] text-[18px] w-full">
        <p className="leading-[20px]">Renewal</p>
      </div>
    </div>
  )
}

function Li46() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-[110px] relative"
      data-name="li"
    >
      <div className="[word-break:break-word] capitalize flex flex-col font-['Mulish:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#424242] text-[18px] w-full">
        <p className="leading-[20px]">Claim</p>
      </div>
    </div>
  )
}

function Li47() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-[110px] relative"
      data-name="li"
    >
      <div className="[word-break:break-word] capitalize flex flex-col font-['Mulish:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#424242] text-[18px] w-full">
        <p className="leading-[20px]">Help</p>
      </div>
    </div>
  )
}

function Li48() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-[110px] relative"
      data-name="li"
    >
      <div className="[word-break:break-word] capitalize flex flex-col font-['Mulish:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#424242] text-[18px] w-full">
        <p className="leading-[20px]">Customer Reviews</p>
      </div>
    </div>
  )
}

function Ul18() {
  return (
    <div
      className="content-stretch flex flex-wrap gap-y-[8px] items-center justify-between relative shrink-0 w-full"
      data-name="ul"
    >
      <Li44 />
      <Li45 />
      <Li46 />
      <Li47 />
      <Li48 />
    </div>
  )
}

function DivAccordionHeader1() {
  return (
    <div
      className="content-stretch flex flex-col items-start px-4 sm:px-6 md:px-[42px] py-[32px] relative shrink-0 w-full"
      data-name="div.accordion-header"
    >
      <Ul18 />
      <div
        className="absolute bottom-[41.58%] flex items-center justify-center right-[39.93px] top-[41.58%] w-[14.142px]"
        style={{ containerType: "size" }}
      >
        <div className="flex-none h-[hypot(-50cqw,50cqh)] rotate-45 w-[hypot(50cqw,50cqh)]">
          <div
            className="border-[#ec6625] border-b-2 border-r-2 border-solid relative size-full"
            data-name="::after"
          />
        </div>
      </div>
    </div>
  )
}

function DivFooterAccordion1() {
  return (
    <div
      className="relative lg:absolute bg-white content-stretch drop-shadow-[0px_3px_5px_rgba(2,2,2,0.06)] flex flex-col items-start mx-[15px] lg:mx-0 mt-[24px] lg:mt-0 lg:left-[15px] lg:right-[15px] rounded-[16px] lg:top-[960px]"
      data-name="div.footer-accordion"
    >
      <DivAccordionHeader1 />
    </div>
  )
}

function Li49() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-[110px] relative"
      data-name="li"
    >
      <div className="[word-break:break-word] capitalize flex flex-col font-['Mulish:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#424242] text-[18px] w-full">
        <p className="leading-[20px]">Car Insurance</p>
      </div>
    </div>
  )
}

function Li50() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-[110px] relative"
      data-name="li"
    >
      <div className="[word-break:break-word] capitalize flex flex-col font-['Mulish:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#424242] text-[18px] w-full">
        <p className="leading-[20px]">Two Wheeler Insurance</p>
      </div>
    </div>
  )
}

function Li51() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-[110px] relative"
      data-name="li"
    >
      <div className="[word-break:break-word] capitalize flex flex-col font-['Mulish:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#424242] text-[18px] w-full">
        <p className="leading-[20px]">Health Insurance</p>
      </div>
    </div>
  )
}

function Li52() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-[110px] relative"
      data-name="li"
    >
      <div className="[word-break:break-word] capitalize flex flex-col font-['Mulish:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#424242] text-[18px] w-full">
        <p className="leading-[20px]">Travel Insurance</p>
      </div>
    </div>
  )
}

function Li53() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-[110px] relative"
      data-name="li"
    >
      <div className="[word-break:break-word] capitalize flex flex-col font-['Mulish:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#424242] text-[18px] w-full">
        <p className="leading-[20px]">SME Insurance</p>
      </div>
    </div>
  )
}

function Ul19() {
  return (
    <div
      className="content-stretch flex flex-wrap gap-y-[8px] items-center justify-between relative shrink-0 w-full"
      data-name="ul"
    >
      <Li49 />
      <Li50 />
      <Li51 />
      <Li52 />
      <Li53 />
    </div>
  )
}

function DivAccordionHeader2() {
  return (
    <div
      className="content-stretch flex flex-col items-start px-4 sm:px-6 md:px-[42px] py-[32px] relative shrink-0 w-full"
      data-name="div.accordion-header"
    >
      <Ul19 />
      <div
        className="absolute bottom-[41.58%] flex items-center justify-center right-[39.93px] top-[41.58%] w-[14.142px]"
        style={{ containerType: "size" }}
      >
        <div className="flex-none h-[hypot(-50cqw,50cqh)] rotate-45 w-[hypot(50cqw,50cqh)]">
          <div
            className="border-[#ec6625] border-b-2 border-r-2 border-solid relative size-full"
            data-name="::after"
          />
        </div>
      </div>
    </div>
  )
}

function DivFooterAccordion2() {
  return (
    <div
      className="relative lg:absolute bg-white content-stretch drop-shadow-[0px_3px_5px_rgba(2,2,2,0.06)] flex flex-col items-start mx-[15px] lg:mx-0 mt-[24px] lg:mt-0 lg:left-[15px] lg:right-[15px] rounded-[16px] lg:top-[1084px]"
      data-name="div.footer-accordion"
    >
      <DivAccordionHeader2 />
    </div>
  )
}

function P8() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="p"
    >
      <div className="[word-break:break-word] flex flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#424242] text-[14px] w-full">
        <p className="leading-[20px] mb-0">
          SafeGuard Insurance General Insurance Company Ltd. is one of the
          leading private sector general insurance company in India offering
          insurance coverage for motor, health, travel, home, student travel and
          more.
        </p>
        <p className="leading-[20px]">
          Policies can be purchased and renewed online as well. Immediate
          issuance of policy copy online.
        </p>
      </div>
    </div>
  )
}

function P9() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="p"
    >
      <div className="[word-break:break-word] flex flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#424242] text-[14px] w-full">
        <p className="leading-[20px] mb-0">
          SafeGuard trade logo displayed above belongs to SafeGuard Bank and is
          used by SafeGuard Insurance GIC Ltd. under license and SafeGuardIpsum
          logo belongs to SafeGuard Insurance GIC Ltd. Insurance is the subject
          matter of the
        </p>
        <p className="leading-[20px] mb-0">
          solicitation. The advertisement contains only an indication of cover
          offered. For more details on risk factors, terms, conditions and
          exclusions, please read the sales brochure carefully before concluding
          a sale.
        </p>
        <p className="leading-[20px]">CIN: L123456MH2026PLC1223455</p>
      </div>
    </div>
  )
}

function PCopyright() {
  return (
    <div
      className="border-[#cacaca] border-solid border-t content-stretch flex flex-wrap gap-[8px_20px] items-center justify-between pt-[20px] relative shrink-0 w-full"
      data-name="p.copyright"
    >
      <div className="[word-break:break-word] flex flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink min-w-0 text-[#757575] text-[13px]">
        <p className="leading-[20px]">
          © 2026 SafeGuard Insurance General Insurance Company Ltd. All rights
          reserved.
        </p>
      </div>
      <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
        <a
          className="[word-break:break-word] flex flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#757575] text-[13px]"
          href="https://www.google.com/"
          target="_blank"
        >
          <p className="cursor-pointer leading-[20px] underline">
            Privacy Policy
          </p>
        </a>
        <a
          className="[word-break:break-word] flex flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#757575] text-[13px]"
          href="https://www.google.com/"
          target="_blank"
        >
          <p className="cursor-pointer leading-[20px] underline">
            Terms of Use
          </p>
        </a>
        <a
          className="[word-break:break-word] flex flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#757575] text-[13px]"
          href="https://www.google.com/"
          target="_blank"
        >
          <p className="cursor-pointer leading-[20px] underline">Sitemap</p>
        </a>
      </div>
    </div>
  )
}

function DivFooterBottomBlock() {
  return (
    <div
      className="relative lg:absolute border-[#cacaca] border-solid border-t content-stretch flex flex-col gap-[20px] items-start mx-[15px] lg:mx-0 mt-[24px] lg:mt-0 pt-[40px] lg:left-[15px] lg:right-[15px] lg:top-[1208px] pb-[24px] lg:pb-0"
      data-name="div.footer-bottom-block"
    >
      <P8 />
      <P9 />
      <PCopyright />
    </div>
  )
}

function DivFooterWrapper() {
  return (
    <div
      className="bg-[#f5f5f5] flex-[1_0_0] max-w-full min-h-px relative w-full"
      data-name="div.footer-wrapper"
    >
      <DivFooterTopBlock />
      <DivFooterSocialSection />
      <DivFooterAccordion />
      <DivFooterAccordion1 />
      <DivFooterAccordion2 />
      <DivFooterBottomBlock />
    </div>
  )
}

function FooterStartHere() {
  return (
    <div
      className="bg-[#f5f5f5] content-stretch flex flex-[1_0_0] flex-col items-center min-h-px relative w-full"
      data-name="footer start here"
    >
      <DivFooterWrapper />
    </div>
  )
}
export default FooterStartHere
