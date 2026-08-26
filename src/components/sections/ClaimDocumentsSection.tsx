import svgPaths from "../../assets/svg-s7akwzj1ba"
import imgImage46 from "../../assets/a7405f6fcd6d566fd1c7e5a07724d250436ac42b.png"
function H2Heading21() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="h2.heading2"
    >
      <div className="[word-break:break-word] flex flex-col font-['Mulish:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#212121] text-[36px] w-full">
        <p className="leading-[normal] mb-0">
          Documents Required for Filing a Car
        </p>
        <p className="leading-[normal]">Insurance Claim</p>
      </div>
    </div>
  )
}

function PText92() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="p.text"
    >
      <div className="[word-break:break-word] flex flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#212121] text-[16px] w-full">
        <p className="leading-[24px] mb-0">
          Filing a car insurance claim can be quite simple if you keep the right
          documents ready
        </p>
        <p className="leading-[24px] mb-0">
          with you. This will help to speed up the claims process. Here’s a
          quick look at the
        </p>
        <p className="leading-[24px]">
          documents you’ll need to file a car insurance claim smoothly.
        </p>
      </div>
    </div>
  )
}

const CLAIM_DOCUMENTS = [
  { label: "Identification Proofs: ", text: "Certified copy of one officially valid document & PAN card/form 60." },
  { label: "Claim Form: ", text: "A duly filled and signed claim form with NEFT mandate form/cancelled cheque." },
  { label: "Registration Certificate (RC): ", text: "Your car's valid RC to confirm ownership." },
  { label: "Driving Licence: ", text: "A copy of the licence of the person driving at the time of the incident." },
  { label: "FIR/Police Report: ", text: "This is mandatory for theft claims or if a third party is involved." },
  { label: "Repair Bills and Invoices: ", text: "Original garage estimate and final repair bills." },
  { label: "Form 28/29/30: ", text: "These are required in case of total loss or salvage situations." },
  { label: "No Objection Certificate (NOC): ", text: "Needed if the car is under loan or finance." },
]

function DocumentBullet() {
  return (
    <div className="relative shrink-0 size-[10px] mt-[7px]" data-name="Component 7">
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="12"
        preserveAspectRatio="none"
        viewBox="0 0 10 12"
        width="10"
      >
        <path
          clipRule="evenodd"
          d={svgPaths.p374784f0}
          fill="#EC6625"
          fillRule="evenodd"
          id="Vector"
        />
      </svg>
    </div>
  )
}

function DocumentListItem({ label, text }: { label: string; text: string }) {
  return (
    <div className="flex items-start gap-[10px] w-full" data-name="li.text">
      <DocumentBullet />
      <p className="font-['Mulish:Regular',sans-serif] font-normal leading-[24px] text-[#212121] text-[16px]">
        <span className="font-['Mulish:Bold',sans-serif] font-bold">{label}</span>
        {text}
      </p>
    </div>
  )
}

function Ul10() {
  return (
    <div
      className="content-stretch flex flex-col gap-[15px] items-start pt-[5px] relative shrink-0 w-full"
      data-name="ul"
    >
      {CLAIM_DOCUMENTS.map((doc) => (
        <DocumentListItem key={doc.label} label={doc.label} text={doc.text} />
      ))}
    </div>
  )
}

function PText93() {
  return (
    <div
      className="content-stretch flex items-center pt-[15px] relative shrink-0 w-full"
      data-name="p.text"
    >
      <div className="[word-break:break-word] flex flex-col font-['Mulish:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#212121] text-[0px]">
        <p className="text-[16px]">
          <span className="font-['Mulish:Bold',sans-serif] font-bold leading-[24px]">{`Note: `}</span>
          <span className="font-['Mulish:Regular',sans-serif] font-normal leading-[24px]">{`Check the full list of `}</span>
        </p>
      </div>
      <div
        className="h-[20px] relative shrink-0 w-[83.88px]"
        data-name="Component 1"
      >
        <a
          className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Mulish:Bold',sans-serif] font-bold justify-center leading-[0] left-0 text-[#f26624] text-[16px] top-[10px] w-[84.13px]"
          href="https://www.google.com/"
          target="_blank"
        >
          <p className="[text-underline-position:from-font] cursor-pointer decoration-from-font decoration-solid leading-[24px] underline">
            documents
          </p>
        </a>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#212121] text-[16px]">
        <p className="leading-[24px]">.</p>
      </div>
    </div>
  )
}

function DivContBlock1() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col gap-[15px] items-start min-w-px relative w-full lg:w-auto"
      data-name="div.cont-block"
    >
      <H2Heading21 />
      <PText92 />
      <Ul10 />
      <PText93 />
    </div>
  )
}

function DivContImgBlock1() {
  return (
    <div
      className="content-stretch flex flex-col lg:flex-row items-center gap-[24px] lg:gap-0 px-4 sm:px-6 md:px-[100px] py-[32px] relative shrink-0 w-full"
      data-name="div.cont-img-block"
    >
      <DivContBlock1 />
      <div
        className="h-[260px] sm:h-[458px] relative shrink-0 w-full lg:w-[450px]"
        data-name="image 46"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgImage46}
        />
      </div>
    </div>
  )
}
export default DivContImgBlock1
