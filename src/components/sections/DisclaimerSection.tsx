import { toPath } from "../../lib/links"
function DivDisclaimerContent() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative self-stretch shrink-0"
      data-name="div.disclaimer-content"
    >
      <div className="relative shrink-0" data-name="Component 1">
        <div className="content-stretch flex items-start relative size-full">
          <a
            className="[word-break:break-word] flex flex-col font-['Mulish:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#ec6608] text-[13px]"
            href={toPath("Disclaimers")}
          >
            <p className="[text-underline-position:from-font] cursor-pointer decoration-from-font decoration-solid leading-[21px] underline">
              Disclaimers
            </p>
          </a>
        </div>
      </div>
    </div>
  )
}

function DivBreadcrumbWrapper() {
  return (
    <div
      className="content-stretch flex items-start justify-end relative shrink-0 w-full"
      data-name="div.breadcrumb-wrapper"
    >
      <DivDisclaimerContent />
    </div>
  )
}

function SectionBreadcrumbBlock1() {
  return (
    <div
      className="bg-[#fafafa] content-stretch flex flex-col items-start px-4 sm:px-6 md:px-[70px] py-[20px] relative shrink-0 w-full"
      data-name="section.breadcrumb-block"
    >
      <DivBreadcrumbWrapper />
    </div>
  )
}
export default SectionBreadcrumbBlock1
