import imgImage1 from "../../assets/bf19c89c8754e6fd72e65e1ddf0d2eceb9035bdf.png"
import imgDivIlContainer from "../../assets/6446f0932e2deb8d75c06cac45187410732116ad.png"
import imgImage2 from "../../assets/04dc5afd1160c4e369bc592194d5fde513e22a6e.png"
import imgBefore from "../../assets/5472b0482e8c2eace30c4953a477265d83e1d161.png"
function H2Heading() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="h2.heading2"
    >
      <div className="[word-break:break-word] flex flex-col font-['Mulish:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#212121] text-[36px] w-full">
        <p className="leading-[45px]">What is Car Insurance?</p>
      </div>
    </div>
  )
}

function PText() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="p.text"
    >
      <div className="[word-break:break-word] flex flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#212121] text-[16px] w-full">
        <p className="leading-[24px] mb-0">
          Your car is more than just a machine, it’s your companion on every
          journey, and it deserves reliable
        </p>
        <p className="leading-[24px] mb-0">
          protection. Our car insurance acts as a dependable shield, covering
          you against unexpected events
        </p>
        <p className="leading-[24px] mb-0">
          such as accidents, theft, and natural disasters, while also ensuring
          you stay compliant with the Motor
        </p>
        <p className="leading-[24px]">
          Vehicles Act, 1988, which makes third-party insurance mandatory.
        </p>
      </div>
    </div>
  )
}

function PText1() {
  return (
    <div
      className="font-['Mulish:Regular',sans-serif] font-normal relative shrink-0 text-[#212121] text-[16px] w-full"
      data-name="p.text"
    >
      <p className="leading-[24px]">
        With policy starting at just ₹2094 per year
        <sup className="text-[13px]">B</sup>, you enjoy the peace of mind
        that comes with cashless repairs at trusted network garages,
        hassle-free claim settlement, and 24x7 customer support.
      </p>
      <p className="leading-[24px]">
        Wherever the road takes you, drive with confidence knowing we're
        always by your side.
      </p>
    </div>
  )
}

function DivContSec() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-w-0 min-[1350px]:mr-[-83.17px] relative self-stretch"
      data-name="div.cont-sec"
    >
      <H2Heading />
      <PText />
      <PText1 />
    </div>
  )
}

function DivImgSec() {
  return (
    <div
      className="hidden min-[1350px]:block min-[1350px]:mr-[-83.17px] relative self-stretch shrink-0 w-[83.17px]"
      data-name="div.img-sec"
    />
  )
}

function DivImgContSec() {
  return (
    <div
      className="content-stretch flex flex-col min-[1350px]:flex-row items-start relative shrink-0 w-full min-[1350px]:w-[1300px]"
      data-name="div.img-cont-sec"
    >
      <DivContSec />
      <DivImgSec />
      <div
        className="h-[220px] sm:h-[332px] relative shrink-0 w-full min-[1350px]:w-[419px]"
        data-name="image 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgImage1}
        />
      </div>
    </div>
  )
}

function QuickSummary() {
  return (
    <div
      className="h-[43px] overflow-clip relative shrink-0 w-[45px]"
      data-name="Quick summary"
    >
      <div
        className="absolute h-[43px] left-[-0.5px] top-[0.17px] w-[45px]"
        data-name="image 2"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgImage2}
        />
      </div>
    </div>
  )
}

function H2Heading1() {
  return (
    <div
      className="content-stretch flex flex-col items-center relative shrink-0"
      data-name="h2.heading2"
    >
      <div className="[word-break:break-word] flex flex-col font-['Mulish:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[36px] text-center text-white">
        <p className="leading-[45px]">Quick Summary</p>
      </div>
    </div>
  )
}

function H2Heading2Margin() {
  return (
    <div
      className="content-stretch flex flex-col items-start pb-[15px] relative shrink-0"
      data-name="h2.heading2:margin"
    >
      <H2Heading1 />
    </div>
  )
}

function DivFlexBlock() {
  return (
    <div
      className="content-stretch flex gap-[20px] items-center justify-center relative shrink-0 w-full"
      data-name="div.flex-block"
    >
      <QuickSummary />
      <H2Heading2Margin />
    </div>
  )
}

function PText2() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="p.text"
    >
      <div className="[word-break:break-word] flex flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-white w-full">
        <p className="leading-[24px] mb-0">
          Car insurance protects your vehicle against damages and losses caused
          by
        </p>
        <p className="leading-[24px] mb-0">
          accidents, theft, natural and man-made calamities, fire, third-party
        </p>
        <p className="leading-[24px]">liabilities, etc.</p>
      </div>
    </div>
  )
}

function LiListItem() {
  return (
    <div
      className="absolute content-stretch flex flex-col inset-[0_52%_184px_0] items-start pl-[40px]"
      data-name="li.list-item"
    >
      <PText2 />
      <div
        className="absolute h-[19px] left-0 top-[5px] w-[15px]"
        data-name="::before"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[84.21%] left-0 max-w-none top-0 w-[106.67%]"
            src={imgBefore}
          />
        </div>
      </div>
    </div>
  )
}

function PText3() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="p.text"
    >
      <div className="[word-break:break-word] flex flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-white w-full">
        <p className="leading-[24px] mb-0">
          It is mandatory to have third-party car insurance to legally drive
          your
        </p>
        <p className="leading-[24px]">vehicle on Indian roads.</p>
      </div>
    </div>
  )
}

function LiListItem1() {
  return (
    <div
      className="absolute content-stretch flex flex-col inset-[0_2.4%_184px_49.6%] items-start pl-[40px]"
      data-name="li.list-item"
    >
      <PText3 />
      <div
        className="absolute h-[19px] left-0 top-[5px] w-[15px]"
        data-name="::before"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[84.21%] left-0 max-w-none top-0 w-[106.67%]"
            src={imgBefore}
          />
        </div>
      </div>
    </div>
  )
}

function PText4() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="p.text"
    >
      <div className="[word-break:break-word] flex flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-white w-full">
        <p className="leading-[24px] mb-0">
          You can opt for add-ons like Zero Depreciation Cover, Consumable Items
        </p>
        <p className="leading-[24px] mb-0">
          Cover, IL Smart Assist, Engine Protect Plus, Pay As You Drive and more
          to
        </p>
        <p className="leading-[24px]">customise your car insurance coverage.</p>
      </div>
    </div>
  )
}

function LiListItem2() {
  return (
    <div
      className="absolute content-stretch flex flex-col inset-[92px_52%_92px_0] items-start pl-[40px]"
      data-name="li.list-item"
    >
      <PText4 />
      <div
        className="absolute h-[19px] left-0 top-[5px] w-[15px]"
        data-name="::before"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[84.21%] left-0 max-w-none top-0 w-[106.67%]"
            src={imgBefore}
          />
        </div>
      </div>
    </div>
  )
}

function PText5() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="p.text"
    >
      <div className="[word-break:break-word] flex flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-white w-full">
        <p className="leading-[24px] mb-0">
          Your car insurance premium is based on your vehicle’s IDV, fuel type,
          make
        </p>
        <p className="leading-[24px]">
          and model, age, geography, claim history and add-ons opted.
        </p>
      </div>
    </div>
  )
}

function LiListItem3() {
  return (
    <div
      className="absolute content-stretch flex flex-col inset-[92px_2.4%_92px_49.6%] items-start pl-[40px]"
      data-name="li.list-item"
    >
      <PText5 />
      <div
        className="absolute h-[19px] left-0 top-[5px] w-[15px]"
        data-name="::before"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[84.21%] left-0 max-w-none top-0 w-[106.67%]"
            src={imgBefore}
          />
        </div>
      </div>
    </div>
  )
}

function PText6() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="p.text"
    >
      <div className="[word-break:break-word] flex flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-white w-full">
        <p className="leading-[24px] mb-0">
          You can earn a No Claim Bonus of up to 50% for not making any claims
          in
        </p>
        <p className="leading-[24px]">five consecutive years.</p>
      </div>
    </div>
  )
}

function LiListItem4() {
  return (
    <div
      className="absolute content-stretch flex flex-col inset-[184px_52%_0_0] items-start pl-[40px]"
      data-name="li.list-item"
    >
      <PText6 />
      <div
        className="absolute h-[19px] left-0 top-[5px] w-[15px]"
        data-name="::before"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[84.21%] left-0 max-w-none top-0 w-[106.67%]"
            src={imgBefore}
          />
        </div>
      </div>
    </div>
  )
}

function PText7() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="p.text"
    >
      <div className="[word-break:break-word] flex flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-white w-full">
        <p className="leading-[24px] mb-0">
          You need to renew your car insurance policy on time to retain your
        </p>
        <p className="leading-[24px] mb-0">
          accumulated NCB, avoid a policy lapse, meet legal requirements and
          enjoy
        </p>
        <p className="leading-[24px]">continuous coverage.</p>
      </div>
    </div>
  )
}

function LiListItem5() {
  return (
    <div
      className="absolute content-stretch flex flex-col inset-[184px_2.4%_0_49.6%] items-start pl-[40px]"
      data-name="li.list-item"
    >
      <PText7 />
      <div
        className="absolute h-[19px] left-0 top-[5px] w-[15px]"
        data-name="::before"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[84.21%] left-0 max-w-none top-0 w-[106.67%]"
            src={imgBefore}
          />
        </div>
      </div>
    </div>
  )
}

function UlList() {
  return (
    <div className="h-[256px] relative shrink-0 w-full" data-name="ul.list">
      <LiListItem />
      <LiListItem1 />
      <LiListItem2 />
      <LiListItem3 />
      <LiListItem4 />
      <LiListItem5 />
    </div>
  )
}

function DivIlContainer() {
  return (
    <div
      className="content-stretch flex flex-col gap-[40px] items-start max-w-[1330px] p-[40px] relative rounded-[30px] shrink-0 w-full"
      data-name="div.il-container"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[30px]">
        <img
          alt=""
          className="absolute left-0 max-w-none size-full top-0"
          src={imgDivIlContainer}
        />
      </div>
      <DivFlexBlock />
      <UlList />
    </div>
  )
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center py-[32px] relative shrink-0 w-full">
      <DivImgContSec />
      <DivIlContainer />
    </div>
  )
}
export default Frame
