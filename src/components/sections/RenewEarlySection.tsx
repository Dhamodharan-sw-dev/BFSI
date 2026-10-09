import { toPath } from "../../lib/links"
import imgImage30 from "../../assets/7663216cb29565f0a6ebfa204140e0c638a4af7d.png"
function H2Heading14() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="h2.heading2"
    >
      <div className="[word-break:break-word] flex flex-col font-['Mulish:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#212121] text-[28px] w-full">
        <p className="leading-[45px]">Too early to renew?</p>
      </div>
    </div>
  )
}

function PText65() {
  return (
    <div
      className="content-stretch flex flex-col items-start pt-[10px] relative shrink-0 w-full"
      data-name="p.text"
    >
      <div className="[word-break:break-word] flex flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#666] text-[16px] w-full">
        <p className="leading-[24px]">{`Set a reminder with us. We'll notify you at the right time with an exciting renewal offer so you don't miss out.`}</p>
      </div>
    </div>
  )
}

function InputValmobiles() {
  return (
    <div
      className="bg-white border border-[#c9c9c9] border-solid content-stretch flex h-[50px] items-start justify-center overflow-clip px-[13px] relative rounded-[5px] shrink-0 w-full sm:w-[332px]"
      data-name="input#valmobiles"
    >
      <div
        className="absolute inset-0 rounded-[5px]"
        data-name="input#valmobiles:outline"
      >
        <div
          aria-hidden
          className="absolute border border-[#c9c9c9] border-solid inset-[-1px] pointer-events-none rounded-[6px]"
        />
      </div>
    </div>
  )
}

function Label4() {
  return (
    <div
      className="[word-break:break-word] absolute bg-white font-['Mulish:SemiBold',sans-serif] font-semibold h-[20px] leading-[0] left-[18px] top-[16.67px] w-[65px]"
      data-name="label"
    >
      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-0 text-[#838383] text-[12px] top-[12.5px] w-[65px]">
        <p className="leading-[15px]">Mobile No.</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[59.54px] text-[#212121] text-[13px] top-[7px] w-[10.161px]">
        <p className="leading-[15px]">{` *`}</p>
      </div>
    </div>
  )
}

function DivIlInputBlock2() {
  return (
    <div
      className="content-stretch flex flex-col h-[54px] items-start pt-[4px] relative shrink-0 w-full sm:w-[332px]"
      data-name="div.il-input-block"
    >
      <InputValmobiles />
      <Label4 />
    </div>
  )
}

function InputHltdb() {
  return (
    <div
      className="bg-white border border-[#c9c9c9] border-solid content-stretch flex h-[50px] items-start justify-center overflow-clip px-[13px] relative rounded-[5px] shrink-0 w-full sm:w-[301px]"
      data-name="input#hltdb1"
    >
      <div
        className="absolute inset-0 rounded-[5px]"
        data-name="input#hltdb1:outline"
      >
        <div
          aria-hidden
          className="absolute border border-[#c9c9c9] border-solid inset-[-1px] pointer-events-none rounded-[6px]"
        />
      </div>
    </div>
  )
}

function Label5() {
  return (
    <div
      className="[word-break:break-word] absolute bg-white font-['Mulish:SemiBold',sans-serif] font-semibold h-[20px] leading-[0] left-[12px] top-[14px] w-[108.95px]"
      data-name="label"
    >
      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-0 text-[#838383] text-[12px] top-[12.5px] w-[100.152px]">
        <p className="leading-[15px]">Policy expiry date</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[99.54px] text-[#212121] text-[13px] top-[7px] w-[10.161px]">
        <p className="leading-[15px]">{` *`}</p>
      </div>
    </div>
  )
}

function DivDatebind() {
  return (
    <div
      className="relative content-stretch flex flex-col items-start pt-[4px] w-full"
      data-name="div#datebind"
    >
      <InputHltdb />
      <Label5 />
    </div>
  )
}

function DivDatebindMargin() {
  return (
    <div className="flex flex-row items-center self-stretch w-full sm:w-auto">
      <div
        className="h-full relative shrink-0 w-full sm:w-[300px]"
        data-name="div#datebind:margin"
      >
        <DivDatebind />
      </div>
    </div>
  )
}

function DivToEarlyInputWrapper() {
  return (
    <div
      className="content-stretch flex flex-wrap gap-[20px] sm:gap-[32px] items-start sm:items-center py-[20px] relative shrink-0 w-full"
      data-name="div.to-early-input-wrapper"
    >
      <DivIlInputBlock2 />
      <DivDatebindMargin />
    </div>
  )
}

function SpanAgreeTerms() {
  return (
    <div
      className="absolute content-stretch flex gap-[3px] items-start left-[16.14px] top-px"
      data-name="span.agree-terms"
    >
      <div className="[word-break:break-word] flex flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#212121] text-[12px]">
        <p className="leading-[normal]">I agree to the</p>
      </div>
      <div className="relative self-stretch shrink-0" data-name="Component 1">
        <div className="content-stretch flex flex-col items-start relative size-full">
          <a
            className="[word-break:break-word] flex flex-col font-['Mulish:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#e3530f] text-[12px]"
            href={toPath("Terms and Conditions")}
          >
            <p className="[text-underline-position:from-font] cursor-pointer decoration-from-font decoration-solid leading-[16px] underline">
              Terms and Conditions
            </p>
          </a>
        </div>
      </div>
    </div>
  )
}

function DivCheckFeild() {
  return (
    <div
      className="h-[17px] relative shrink-0 w-full"
      data-name="div.check-feild"
    >
      <div
        className="absolute bg-white border border-[#767676] border-solid left-0 rounded-[2.5px] size-[13px] top-0"
        data-name="input#tc-conremind"
      />
      <SpanAgreeTerms />
    </div>
  )
}

function Whatsapp() {
  return (
    <div
      className="aspect-[15/31] relative self-stretch shrink-0"
      data-name="whatsapp"
    />
  )
}

function SpanAgreeTerms1() {
  return (
    <div
      className="absolute content-stretch flex gap-[3px] items-start left-[16.14px] min-h-[31px] top-px"
      data-name="span.agree-terms"
    >
      <div className="[word-break:break-word] flex flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#212121] text-[12px]">
        <p className="leading-[normal]">I wish to get policy details on my</p>
      </div>
      <Whatsapp />
      <div className="[word-break:break-word] flex flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#212121] text-[12px]">
        <p className="leading-[normal]">whatsApp</p>
      </div>
    </div>
  )
}

function DivWhatsupModel() {
  return (
    <div
      className="h-[32px] relative shrink-0 w-full"
      data-name="div#whatsupModel"
    >
      <div
        className="absolute bg-white border border-[#767676] border-solid left-0 rounded-[2.5px] size-[13px] top-0"
        data-name="input#remind-details"
      />
      <SpanAgreeTerms1 />
    </div>
  )
}

function DivDetachTcwhtsp() {
  return (
    <div
      className="content-stretch flex flex-col gap-[16px] items-start pb-[20px] relative shrink-0 w-full"
      data-name="div.detach_tcwhtsp"
    >
      <DivCheckFeild />
      <DivWhatsupModel />
    </div>
  )
}

function RightContent() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative"
      data-name="Right Content"
    >
      <H2Heading14 />
      <PText65 />
      <DivToEarlyInputWrapper />
      <DivDetachTcwhtsp />
      <div
        className="bg-[#005dac] max-w-[179px] relative rounded-[5px] shrink-0"
        data-name="Component 8"
      >
        <div className="flex flex-row items-center justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center max-w-[inherit] px-[40px] py-[10px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white">
              <p className="leading-[16px]">Submit</p>
            </div>
          </div>
        </div>
        <div
          aria-hidden
          className="absolute border-3 border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none rounded-[5px]"
        />
      </div>
    </div>
  )
}

function DivRenewWrapper() {
  return (
    <div
      className="content-center flex flex-wrap gap-[0px_40px] items-center relative shrink-0 w-full"
      data-name="div.renew-wrapper"
    >
      <div
        className="h-[180px] sm:h-[303px] relative shrink-0 w-full lg:w-[511px]"
        data-name="image 30"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgImage30}
        />
      </div>
      <RightContent />
    </div>
  )
}

function SectionToEarlyRenew() {
  return (
    <div
      className="bg-[#f5f5f5] content-stretch flex flex-col items-start px-4 sm:px-6 md:px-[70px] py-[60px] relative shrink-0 w-full"
      data-name="section#to-early-renew"
    >
      <DivRenewWrapper />
    </div>
  )
}
export default SectionToEarlyRenew
