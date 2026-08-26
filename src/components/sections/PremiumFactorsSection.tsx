function H2Heading6() {
  return (
    <div
      className="content-stretch flex flex-col items-center relative shrink-0 w-full"
      data-name="h2.heading2"
    >
      <div className="[word-break:break-word] flex flex-col font-['Mulish:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#212121] text-[36px] text-center">
        <p className="leading-[45px]">What is IDV (Insured Declared Value)?</p>
      </div>
    </div>
  )
}

function PSubTxt2() {
  return (
    <div
      className="max-w-[1076px] relative shrink-0 w-full font-['Mulish:Regular',sans-serif] font-normal text-[#212121] text-[16px] text-center"
      data-name="p.sub-txt"
    >
      <p className="leading-[24px]">
        {`The `}
        <a
          className="font-['Mulish:Bold',sans-serif] font-bold text-[#f26624]"
          href="https://www.google.com/"
          target="_blank"
        >
          <span className="[text-underline-position:from-font] cursor-pointer decoration-from-font decoration-solid underline">
            Insured's Declared Value (IDV) in car insurance
          </span>
        </a>
        {` is the maximum amount you can get when your insured car is stolen or damaged beyond repair. It is basically your car's current market value minus depreciation.`}
      </p>
    </div>
  )
}
function PSubTxt3() {
  return (
    <div
      className="content-stretch flex flex-col items-center max-w-[1076px] pt-[4px] relative shrink-0 w-full"
      data-name="p.sub-txt"
    >
      <div className="[word-break:break-word] flex flex-col font-['Mulish:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#212121] text-[16px] text-center">
        <p className="leading-[24px]">{`IDV = Manufacturer's listed selling price + Listed cost of any accessories - Depreciation`}</p>
      </div>
    </div>
  )
}

function PSubTxt4() {
  return (
    <div
      className="content-stretch flex flex-col items-center pt-[4px] relative shrink-0 w-full"
      data-name="p.sub-txt"
    >
      <div className="[word-break:break-word] flex flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#212121] text-[16px] text-center">
        <p className="leading-[24px]">
          Note that the depreciation rate is calculated as per the Indian Motor
          Tariff. Here’s how the depreciation is calculated:
        </p>
      </div>
    </div>
  )
}

function Th() {
  return (
    <div
      className="bg-[#e5e0df] border-[#f7f3f2] border-r border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px p-[20px] relative"
      data-name="th"
    >
      <div className="[word-break:break-word] flex flex-col font-['Mulish:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#212121] text-[14px]">
        <p className="leading-[18px]">Age of Your Car</p>
      </div>
    </div>
  )
}

function Th1() {
  return (
    <div
      className="bg-[#e5e0df] border-[#f7f3f2] border-r border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px p-[20px] relative"
      data-name="th"
    >
      <div className="[word-break:break-word] flex flex-col font-['Mulish:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#212121] text-[14px]">
        <p className="leading-[18px]">Applicable Percentage of Depreciation</p>
      </div>
    </div>
  )
}

function Tr() {
  return (
    <div
      className="bg-white content-stretch flex items-start justify-center relative rounded-[10px] shrink-0 w-full"
      data-name="tr"
    >
      <Th />
      <Th1 />
    </div>
  )
}

function TdStrongTxt() {
  return (
    <div
      className="border-[#f5f5f5] border-b border-r border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px p-[20px] relative"
      data-name="td.strong-txt"
    >
      <div className="[word-break:break-word] flex flex-col font-['Mulish:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#212121] text-[14px]">
        <p className="leading-[18px]">Not more than 6 months</p>
      </div>
    </div>
  )
}

function Td() {
  return (
    <div
      className="border-[#f5f5f5] border-b border-r border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px p-[20px] relative"
      data-name="td"
    >
      <div className="[word-break:break-word] flex flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#212121] text-[14px]">
        <p className="leading-[18px]">5%</p>
      </div>
    </div>
  )
}

function Tr1() {
  return (
    <div
      className="bg-white content-stretch flex items-start justify-center relative rounded-[10px] shrink-0 w-full"
      data-name="tr"
    >
      <TdStrongTxt />
      <Td />
    </div>
  )
}

function TdStrongTxt1() {
  return (
    <div
      className="border-[#f5f5f5] border-b border-r border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px p-[20px] relative"
      data-name="td.strong-txt"
    >
      <div className="[word-break:break-word] flex flex-col font-['Mulish:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#212121] text-[14px]">
        <p className="leading-[18px]">
          More than 6 months but less than 1 year
        </p>
      </div>
    </div>
  )
}

function Td1() {
  return (
    <div
      className="border-[#f5f5f5] border-b border-r border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px p-[20px] relative"
      data-name="td"
    >
      <div className="[word-break:break-word] flex flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#212121] text-[14px]">
        <p className="leading-[18px]">15%</p>
      </div>
    </div>
  )
}

function Tr2() {
  return (
    <div
      className="bg-white content-stretch flex items-start justify-center relative shrink-0 w-full"
      data-name="tr"
    >
      <TdStrongTxt1 />
      <Td1 />
    </div>
  )
}

function TdStrongTxt2() {
  return (
    <div
      className="border-[#f5f5f5] border-b border-r border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px p-[20px] relative"
      data-name="td.strong-txt"
    >
      <div className="[word-break:break-word] flex flex-col font-['Mulish:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#212121] text-[14px]">
        <p className="leading-[18px]">More than 1 year but less than 2 years</p>
      </div>
    </div>
  )
}

function Td2() {
  return (
    <div
      className="border-[#f5f5f5] border-b border-r border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px p-[20px] relative"
      data-name="td"
    >
      <div className="[word-break:break-word] flex flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#212121] text-[14px]">
        <p className="leading-[18px]">20%</p>
      </div>
    </div>
  )
}

function Tr3() {
  return (
    <div
      className="bg-white content-stretch flex items-start justify-center relative shrink-0 w-full"
      data-name="tr"
    >
      <TdStrongTxt2 />
      <Td2 />
    </div>
  )
}

function TdStrongTxt3() {
  return (
    <div
      className="border-[#f5f5f5] border-b border-r border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px p-[20px] relative"
      data-name="td.strong-txt"
    >
      <div className="[word-break:break-word] flex flex-col font-['Mulish:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#212121] text-[14px]">
        <p className="leading-[18px]">
          More than 2 years but less than 3 years
        </p>
      </div>
    </div>
  )
}

function Td3() {
  return (
    <div
      className="border-[#f5f5f5] border-b border-r border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px p-[20px] relative"
      data-name="td"
    >
      <div className="[word-break:break-word] flex flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#212121] text-[14px]">
        <p className="leading-[18px]">30%</p>
      </div>
    </div>
  )
}

function Tr4() {
  return (
    <div
      className="bg-white content-stretch flex items-start justify-center relative shrink-0 w-full"
      data-name="tr"
    >
      <TdStrongTxt3 />
      <Td3 />
    </div>
  )
}

function TdStrongTxt4() {
  return (
    <div
      className="border-[#f5f5f5] border-b border-r border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px p-[20px] relative"
      data-name="td.strong-txt"
    >
      <div className="[word-break:break-word] flex flex-col font-['Mulish:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#212121] text-[14px]">
        <p className="leading-[18px]">
          More than 3 years but less than 4 years
        </p>
      </div>
    </div>
  )
}

function Td4() {
  return (
    <div
      className="border-[#f5f5f5] border-b border-r border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px p-[20px] relative"
      data-name="td"
    >
      <div className="[word-break:break-word] flex flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#212121] text-[14px]">
        <p className="leading-[18px]">40%</p>
      </div>
    </div>
  )
}

function Tr5() {
  return (
    <div
      className="bg-white content-stretch flex items-start justify-center relative shrink-0 w-full"
      data-name="tr"
    >
      <TdStrongTxt4 />
      <Td4 />
    </div>
  )
}

function TdStrongTxt5() {
  return (
    <div
      className="border-[#f5f5f5] border-b border-r border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px p-[20px] relative"
      data-name="td.strong-txt"
    >
      <div className="[word-break:break-word] flex flex-col font-['Mulish:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#212121] text-[14px]">
        <p className="leading-[18px]">
          More than 4 years but less than 5 years
        </p>
      </div>
    </div>
  )
}

function Td5() {
  return (
    <div
      className="border-[#f5f5f5] border-b border-r border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px p-[20px] relative"
      data-name="td"
    >
      <div className="[word-break:break-word] flex flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#212121] text-[14px]">
        <p className="leading-[18px]">50%</p>
      </div>
    </div>
  )
}

function Tr6() {
  return (
    <div
      className="bg-white content-stretch flex items-start justify-center relative shrink-0 w-full"
      data-name="tr"
    >
      <TdStrongTxt5 />
      <Td5 />
    </div>
  )
}

function Tbody() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="tbody"
    >
      <Tr1 />
      <Tr2 />
      <Tr3 />
      <Tr4 />
      <Tr5 />
      <Tr6 />
    </div>
  )
}

function TableTableWrap() {
  return (
    <div
      className="content-stretch flex flex-col items-start overflow-clip relative rounded-[10px] shrink-0 w-full"
      data-name="table.table-wrap"
    >
      <Tr />
      <Tbody />
    </div>
  )
}

function DivTableWrapper() {
  return (
    <div
      className="border border-[#ddd] border-solid content-stretch flex flex-col items-start max-w-[650px] overflow-clip relative rounded-[10px] shrink-0 w-full"
      data-name="div.table-wrapper"
    >
      <TableTableWrap />
    </div>
  )
}

function PAlignCenter() {
  return (
    <div
      className="content-stretch flex flex-col items-center pt-[4px] relative shrink-0 w-full max-w-[1076px]"
      data-name="p.align-center"
    >
      <div className="[word-break:break-word] flex flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#212121] text-[16px] text-center">
        <p className="leading-[24px] mb-0">
          Let’s understand this with an example. Suppose the listed selling
          price of your vehicle was ₹4,00,000 and you added accessories worth
          ₹50,000.
        </p>
        <p className="leading-[24px] mb-0">
          The total value of your car would be ₹4,50,000. And the applicable
          depreciation after two years would be ₹90,000 (which is 20% of
          ₹4,50,000).
        </p>
        <p className="leading-[24px]">
          As a result, your IDV would be ₹4,50,000 - ₹90,000 = ₹3,60,000.
        </p>
      </div>
    </div>
  )
}

function DivIlContainer5() {
  return (
    <div
      className="content-stretch flex flex-col gap-[16px] items-center max-w-[1330px] px-[15px] relative shrink-0 w-full"
      data-name="div.il-container"
    >
      <H2Heading6 />
      <PSubTxt2 />
      <PSubTxt3 />
      <PSubTxt4 />
      <DivTableWrapper />
      <PAlignCenter />
    </div>
  )
}

function H2Heading7() {
  return (
    <div
      className="content-stretch flex flex-col items-center relative shrink-0 w-full"
      data-name="h2.heading2"
    >
      <div className="[word-break:break-word] flex flex-col font-['Mulish:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#212121] text-[36px] text-center">
        <p className="leading-[45px]">
          Which Factors Affect Your Car Insurance Premium?
        </p>
      </div>
    </div>
  )
}

function PText32() {
  return (
    <div
      className="content-stretch flex flex-col items-center relative shrink-0 w-full"
      data-name="p.text"
    >
      <div className="[word-break:break-word] flex flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#212121] text-[16px] text-center">
        <p className="leading-[24px]">
          Car insurance premium is calculated based on a number of factors and
          components. These decide how much risk your car carries and, in turn,
          your final premium amount.
        </p>
      </div>
    </div>
  )
}

function H3Heading10() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="h3.heading3"
    >
      <div className="[word-break:break-word] flex flex-col font-['Mulish:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#212121] text-[18px] w-full">
        <p className="leading-[26px]">Coverage Type</p>
      </div>
    </div>
  )
}

function PText33() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="p.text"
    >
      <div className="[word-break:break-word] flex flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#212121] text-[16px] w-full">
        <p className="leading-[24px] mb-0">
          Your car insurance premium is based on the
        </p>
        <p className="leading-[24px] mb-0">
          type of policy you choose. The premium for
        </p>
        <p className="leading-[24px] mb-0">
          third-party car insurance is lower than a
        </p>
        <p className="leading-[24px]">comprehensive car insurance.</p>
      </div>
    </div>
  )
}

function DivOptionItem() {
  return (
    <div
      className="bg-white border border-[#e3530f] border-solid content-stretch flex flex-col gap-[10px] items-start p-[30px] relative rounded-[16px]"
      data-name="div.option-item"
    >
      <H3Heading10 />
      <PText33 />
      <div
        className="absolute bg-[#e3530f] h-[50px] left-0 rounded-br-[8px] rounded-tr-[8px] top-[20px] w-[6px]"
        data-name="::after"
      />
    </div>
  )
}

function H3Heading11() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="h3.heading3"
    >
      <div className="[word-break:break-word] flex flex-col font-['Mulish:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#212121] text-[18px] w-full">
        <p className="leading-[26px]">IDV</p>
      </div>
    </div>
  )
}

function PText34() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="p.text"
    >
      <div className="[word-break:break-word] flex flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#212121] text-[16px] w-full">
        <p className="leading-[24px] mb-0">
          IDV in car insurance plays a key role in
        </p>
        <p className="leading-[24px] mb-0">
          determining your payable premium. The higher
        </p>
        <p className="leading-[24px] mb-0">
          your car’s market value, the higher your IDV
        </p>
        <p className="leading-[24px]">and premium will be.</p>
      </div>
    </div>
  )
}

function DivOptionItem1() {
  return (
    <div
      className="bg-white border border-[#e3530f] border-solid content-stretch flex flex-col gap-[10px] items-start p-[30px] relative rounded-[16px]"
      data-name="div.option-item"
    >
      <H3Heading11 />
      <PText34 />
      <div
        className="absolute bg-[#e3530f] h-[50px] left-0 rounded-br-[8px] rounded-tr-[8px] top-[20px] w-[6px]"
        data-name="::after"
      />
    </div>
  )
}

function H3Heading12() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="h3.heading3"
    >
      <div className="[word-break:break-word] flex flex-col font-['Mulish:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#212121] text-[18px] w-full">
        <p className="leading-[26px]">Make and Model</p>
      </div>
    </div>
  )
}

function PText35() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="p.text"
    >
      <div className="[word-break:break-word] flex flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#212121] text-[16px] w-full">
        <p className="leading-[24px] mb-0">
          Luxury and higher-end car models are typically
        </p>
        <p className="leading-[24px] mb-0">
          insured at a higher price, simply because the
        </p>
        <p className="leading-[24px] mb-0">
          cost of repairs/replacement for such vehicles is
        </p>
        <p className="leading-[24px]">higher.</p>
      </div>
    </div>
  )
}

function DivOptionItem2() {
  return (
    <div
      className="bg-white border border-[#e3530f] border-solid content-stretch flex flex-col gap-[10px] items-start p-[30px] relative rounded-[16px]"
      data-name="div.option-item"
    >
      <H3Heading12 />
      <PText35 />
      <div
        className="absolute bg-[#e3530f] h-[50px] left-0 rounded-br-[8px] rounded-tr-[8px] top-[20px] w-[6px]"
        data-name="::after"
      />
    </div>
  )
}

function H3Heading13() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="h3.heading3"
    >
      <div className="[word-break:break-word] flex flex-col font-['Mulish:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#212121] text-[18px] w-full">
        <p className="leading-[26px]">Fuel Type</p>
      </div>
    </div>
  )
}

function PText36() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="p.text"
    >
      <div className="[word-break:break-word] flex flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#212121] text-[16px] w-full">
        <p className="leading-[24px] mb-0">
          Repairing petrol-fuelled cars is cheaper than
        </p>
        <p className="leading-[24px] mb-0">
          those that run on diesel and CNG. As a result,
        </p>
        <p className="leading-[24px]">
          they are also less expensive to insure.
        </p>
      </div>
    </div>
  )
}

function DivOptionItem3() {
  return (
    <div
      className="bg-white border border-[#e3530f] border-solid content-stretch flex flex-col gap-[10px] items-start p-[30px] relative rounded-[16px]"
      data-name="div.option-item"
    >
      <H3Heading13 />
      <PText36 />
      <div
        className="absolute bg-[#e3530f] h-[50px] left-0 rounded-br-[8px] rounded-tr-[8px] top-[20px] w-[6px]"
        data-name="::after"
      />
    </div>
  )
}

function H3Heading14() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="h3.heading3"
    >
      <div className="[word-break:break-word] flex flex-col font-['Mulish:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#212121] text-[18px] w-full">
        <p className="leading-[26px]">Year of Manufacture</p>
      </div>
    </div>
  )
}

function PText37() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="p.text"
    >
      <div className="[word-break:break-word] flex flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#212121] text-[16px] w-full">
        <p className="leading-[24px] mb-0">
          Both new and older cars can be costly to insure
        </p>
        <p className="leading-[24px] mb-0">
          since their spare parts are hard to find in the
        </p>
        <p className="leading-[24px]">market.</p>
      </div>
    </div>
  )
}

function DivOptionItem4() {
  return (
    <div
      className="bg-white border border-[#e3530f] border-solid content-stretch flex flex-col gap-[10px] items-start p-[30px] relative rounded-[16px]"
      data-name="div.option-item"
    >
      <H3Heading14 />
      <PText37 />
      <div
        className="absolute bg-[#e3530f] h-[50px] left-0 rounded-br-[8px] rounded-tr-[8px] top-[20px] w-[6px]"
        data-name="::after"
      />
    </div>
  )
}

function H3Heading15() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="h3.heading3"
    >
      <div className="[word-break:break-word] flex flex-col font-['Mulish:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#212121] text-[18px] w-full">
        <p className="leading-[26px]">Location</p>
      </div>
    </div>
  )
}

function PText38() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="p.text"
    >
      <div className="[word-break:break-word] flex flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#212121] text-[16px] w-full">
        <p className="leading-[24px] mb-0">
          There’s a greater probability of accidental
        </p>
        <p className="leading-[24px] mb-0">
          damages in urban areas since they tend to
        </p>
        <p className="leading-[24px] mb-0">
          have denser traffic. Thus, your premium may
        </p>
        <p className="leading-[24px]">vary depending on your location.</p>
      </div>
    </div>
  )
}

function DivOptionItem5() {
  return (
    <div
      className="bg-white border border-[#e3530f] border-solid content-stretch flex flex-col gap-[10px] items-start p-[30px] relative rounded-[16px]"
      data-name="div.option-item"
    >
      <H3Heading15 />
      <PText38 />
      <div
        className="absolute bg-[#e3530f] h-[50px] left-0 rounded-br-[8px] rounded-tr-[8px] top-[20px] w-[6px]"
        data-name="::after"
      />
    </div>
  )
}

function H3Heading16() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="h3.heading3"
    >
      <div className="[word-break:break-word] flex flex-col font-['Mulish:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#212121] text-[18px] w-full">
        <p className="leading-[26px]">Claim history</p>
      </div>
    </div>
  )
}

function PText39() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="p.text"
    >
      <div className="[word-break:break-word] flex flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#212121] text-[16px] w-full">
        <p className="leading-[24px] mb-0">
          You can gain up to 50% NCB on your premium
        </p>
        <p className="leading-[24px] mb-0">
          if you didn’t file any car insurance claims in the
        </p>
        <p className="leading-[24px]">last five years.</p>
      </div>
    </div>
  )
}

function DivOptionItem6() {
  return (
    <div
      className="bg-white border border-[#e3530f] border-solid content-stretch flex flex-col gap-[10px] items-start p-[30px] relative rounded-[16px]"
      data-name="div.option-item"
    >
      <H3Heading16 />
      <PText39 />
      <div
        className="absolute bg-[#e3530f] h-[50px] left-0 rounded-br-[8px] rounded-tr-[8px] top-[20px] w-[6px]"
        data-name="::after"
      />
    </div>
  )
}

function H3Heading17() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="h3.heading3"
    >
      <div className="[word-break:break-word] flex flex-col font-['Mulish:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#212121] text-[18px] w-full">
        <p className="leading-[26px]">Add-ons</p>
      </div>
    </div>
  )
}

function PText40() {
  return (
    <div
      className="relative shrink-0 text-[16px] w-full font-['Mulish:Regular',sans-serif] font-normal text-[#212121]"
      data-name="p.text"
    >
      <p className="leading-[24px]">
        {`You can opt for optional covers like `}
        <a
          className="font-['Mulish:Bold',sans-serif] font-bold text-[#f26624]"
          href="https://www.google.com/"
          target="_blank"
        >
          <span className="decoration-from-font decoration-solid underline cursor-pointer">
            Zero Depreciation Cover in Car Insurance
          </span>
        </a>
        {`, `}
        <a
          className="font-['Mulish:Bold',sans-serif] font-bold text-[#f26624]"
          href="https://www.google.com/"
          target="_blank"
        >
          <span className="decoration-from-font decoration-solid underline cursor-pointer">
            Engine Protect Cover in Car Insurance
          </span>
        </a>
        {`, etc`}
      </p>
    </div>
  )
}

function DivOptionItem7() {
  return (
    <div
      className="bg-white border border-[#e3530f] border-solid content-stretch flex flex-col gap-[10px] items-start p-[30px] relative rounded-[16px]"
      data-name="div.option-item"
    >
      <H3Heading17 />
      <PText40 />
      <div
        className="absolute bg-[#e3530f] h-[50px] left-0 rounded-br-[8px] rounded-tr-[8px] top-[20px] w-[6px]"
        data-name="::after"
      />
    </div>
  )
}

function DivOptionBlock() {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] relative shrink-0 w-full"
      data-name="div.option-block"
    >
      <DivOptionItem />
      <DivOptionItem1 />
      <DivOptionItem2 />
      <DivOptionItem3 />
      <DivOptionItem4 />
      <DivOptionItem5 />
      <DivOptionItem6 />
      <DivOptionItem7 />
    </div>
  )
}

function DivIlContainer6() {
  return (
    <div
      className="content-stretch flex flex-col gap-[15px] items-start max-w-[1330px] px-[15px] relative shrink-0 w-full"
      data-name="div.il-container"
    >
      <H2Heading7 />
      <PText32 />
      <DivOptionBlock />
    </div>
  )
}

function SectionWhichFactorsAffectCarPremium() {
  return (
    <div
      className="bg-[#edf6ff] content-stretch flex flex-col items-start px-4 sm:px-6 md:px-[55px] py-[60px] relative shrink-0 w-full"
      data-name="section#Which-Factors-Affect-car-Premium"
    >
      <DivIlContainer6 />
    </div>
  )
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center pt-[32px] relative shrink-0">
      <DivIlContainer5 />
      <SectionWhichFactorsAffectCarPremium />
    </div>
  )
}
export default Frame2
