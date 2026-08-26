import imgImage53 from "../../assets/50ea34f828a99f53784aa6e9928a01fbec6abaf7.png"
const POPULAR_SEARCH_TERMS = [
  "Health Insurance",
  "Bike Insurance",
  "Travel Insurance",
  "Vehicle Insurance",
  "Car Insurance Blogs",
  "Marine Insurance",
  "Fire Insurance",
  "What is Roadside Assistance",
  "Zero Depreciation in Car Insurance",
  "Car Insurance Calculator",
  "Comprehensive Car Insurance",
  "Cashless Car Insurance",
  "Model based Car Insurance",
  "Car Insurance in Ahmedabad",
  "Deductible in Car Insurance",
  "Car Insurance in Jaipur",
  "Second Hand Car Insurance",
  "Car Insurance in Nashik",
  "Consumable Car Insurance",
  "IDV in Car Insurance",
  "Car Insurance in Gurgaon",
]
function DivContBlock2() {
  return (
    <div
      className="flex-[1_0_0] min-w-px relative w-full px-4 sm:px-6 md:px-[40px] py-[20px]"
      data-name="div.cont-block"
    >
      <p className="font-['Mulish:Medium',sans-serif] font-medium text-[#282828] text-[28px] sm:text-[35px] leading-[44px] mb-[20px]">
        Popular Searches
      </p>
      <div className="flex flex-wrap gap-[10px]">
        {POPULAR_SEARCH_TERMS.map((label) => (
          <a
            key={label}
            className="[word-break:break-word] bg-white flex flex-col font-['Mulish:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-black rounded-[100px] px-[15px] py-[8px]"
            href="https://www.google.com/"
            target="_blank"
          >
            <p className="cursor-pointer leading-[15px]">{label}</p>
          </a>
        ))}
      </div>
    </div>
  )
}

function DivFlexDiv3() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px relative w-full"
      data-name="div.flex-div"
    >
      <DivContBlock2 />
    </div>
  )
}

function SectionSectionContent1() {
  return (
    <div
      className="bg-[#f8f6f6] content-stretch flex flex-[1_0_0] items-start min-w-px py-[20px] lg:py-[60px] relative w-full"
      data-name="section.section-content"
    >
      <DivFlexDiv3 />
    </div>
  )
}

function DivFlexDiv2() {
  return (
    <div
      className="content-stretch flex flex-col lg:flex-row items-center min-w-px relative w-full"
      data-name="div.flex-div"
    >
      <div
        className="hidden lg:block h-[212px] relative shrink-0 w-[290px]"
        data-name="image 53"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgImage53}
        />
      </div>
      <SectionSectionContent1 />
    </div>
  )
}

function SectionSectionContent() {
  return (
    <div
      className="bg-[#f8f6f6] content-stretch flex items-start px-4 sm:px-6 md:px-[70px] py-[60px] relative shrink-0 w-full"
      data-name="section.section-content"
    >
      <DivFlexDiv2 />
    </div>
  )
}
export default SectionSectionContent
