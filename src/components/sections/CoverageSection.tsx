import { useState } from "react"
function H2Heading3() {
  return (
    <div
      className="content-stretch flex flex-col items-center relative shrink-0 w-full"
      data-name="h2.heading2"
    >
      <div className="[word-break:break-word] flex flex-col font-['Mulish:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#212121] text-[36px] text-center">
        <p className="leading-[45px]">What is Covered Under Car Insurance?</p>
      </div>
    </div>
  )
}

function PSubTxt() {
  return (
    <div
      className="content-stretch flex flex-col items-center max-w-[878px] relative shrink-0 w-full"
      data-name="p.sub-txt"
    >
      <div className="[word-break:break-word] flex flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#212121] text-[16px] text-center">
        <p className="leading-[24px] mb-0">
          The best car insurance does more than just meet legal requirements —
          it protects you from unexpected expenses.
        </p>
        <p className="leading-[24px] mb-0">
          Understanding what your policy covers helps you know exactly when and
          how you’re protected. Here are some key
        </p>
        <p className="leading-[24px]">
          inclusions of ShieldCove Insurance car insurance:
        </p>
      </div>
    </div>
  )
}

const COVERAGE_TABS = ["Covered", "Not Covered"]

const COVERAGE_CONTENT: Record<string, {
  note: string
  items: { title: string; description: string }[]
}> = {
  Covered: {
    note: "Note: This is an indicative list. Kindly go through the policy wordings for detailed information on car insurance inclusions.",
    items: [
      {
        title: "Accidental Damages",
        description:
          "Unexpected collisions, road accidents, and impacts can result in costly repairs. Car insurance helps cover damages or losses to your insured vehicle caused by accidents.",
      },
      {
        title: "Theft",
        description:
          "If your insured car is stolen, you can receive compensation based on the vehicle's Insured Declared Value (IDV), subject to policy terms and conditions.",
      },
      {
        title: "Fire-Related Damage",
        description:
          "Your policy provides coverage for losses or damages caused by fire, self-ignition, explosion, lightning, and similar fire-related incidents.",
      },
      {
        title: "Natural Calamities",
        description:
          "Stay protected against damage caused by natural events such as floods, earthquakes, cyclones, storms, typhoons, landslides, and other natural disasters.",
      },
      {
        title: "Man-made Disasters",
        description:
          "Coverage extends to damages resulting from riots, strikes, vandalism, malicious acts, and terrorist activities, as specified in the policy.",
      },
      {
        title: "Personal Accident Cover",
        description:
          "Owner-drivers are covered in the unfortunate event of accidental death or permanent disability, with compensation of up to ₹15 lakh as per policy provisions.",
      },
      {
        title: "Third-party Liabilities",
        description:
          "Comprehensive car insurance also covers legal liabilities arising from injuries, death, or property damage caused to third parties due to an accident involving your insured vehicle.",
      },
      {
        title: "Damages During Transit",
        description:
          "Your vehicle is protected against loss or damage that may occur while being transported by road, rail, inland waterways, air, or lift.",
      },
    ],
  },
  "Not Covered": {
    note: "Note: This is an indicative list of common exclusions. Kindly go through the policy wordings for the complete list of what's not covered.",
    items: [
      {
        title: "Regular Wear and Tear",
        description:
          "Depreciation and the gradual wear and tear of tyres, parts, or paint from everyday use are not covered under the policy.",
      },
      {
        title: "Mechanical or Electrical Breakdown",
        description:
          "Losses from mechanical or electrical breakdown, including engine failure not caused by an accident, are excluded from coverage.",
      },
      {
        title: "Driving Without a Valid License",
        description:
          "Any claim arising while the vehicle was being driven by a person without a valid driving license is not covered.",
      },
      {
        title: "Driving Under the Influence",
        description:
          "Claims arising from accidents where the driver was under the influence of alcohol or drugs are excluded from the policy.",
      },
      {
        title: "Consequential Damages",
        description:
          "Indirect losses, such as reduced resale value or loss of use after a claim, are not covered unless specifically added to the policy.",
      },
      {
        title: "Usage Outside Policy Terms",
        description:
          "Damage caused while the vehicle is used for purposes other than what's stated in the policy, such as commercial use of a private car, is excluded.",
      },
      {
        title: "Contractual Liability",
        description:
          "Liabilities arising from a contract or agreement, rather than a direct accident, are not covered under a standard policy.",
      },
      {
        title: "War and Nuclear Risks",
        description:
          "Losses caused by war, invasion, nuclear risks, or similar large-scale events are excluded from car insurance coverage.",
      },
    ],
  },
}

function CoverageIcon({ variant }: { variant: "covered" | "not-covered" }) {
  return variant === "covered" ? (
    <svg className="block size-full" fill="none" viewBox="0 0 16 16">
      <circle
        cx="8"
        cy="8"
        fill="#26BA40"
        r="7.2"
        stroke="#26BA40"
        strokeWidth="1.6"
      />
      <path
        d="M5 8.2L7.2 10.4L11 6"
        fill="none"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
    </svg>
  ) : (
    <svg className="block size-full" fill="none" viewBox="0 0 16 16">
      <circle
        cx="8"
        cy="8"
        fill="#E74C3C"
        r="7.2"
        stroke="#E74C3C"
        strokeWidth="1.6"
      />
      <path
        d="M5.5 5.5L10.5 10.5M10.5 5.5L5.5 10.5"
        stroke="white"
        strokeLinecap="round"
        strokeWidth="1.6"
      />
    </svg>
  )
}

function CoverageListItem({
  title,
  description,
  variant,
}: {
  title: string
  description: string
  variant: "covered" | "not-covered"
}) {
  return (
    <div
      className="content-stretch flex flex-col items-start pl-[30px] relative shrink-0 w-full"
      data-name="li.flex-list"
    >
      <div
        className="absolute left-0 overflow-clip size-[16px] top-[6px]"
        data-name="Component 7"
      >
        <CoverageIcon variant={variant} />
      </div>
      <div
        className="content-stretch flex flex-col items-start pb-[10px] relative shrink-0 w-full"
        data-name="h4.heading4:margin"
      >
        <div className="[word-break:break-word] flex flex-col font-['Mulish:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#212121] text-[16px] w-full">
          <p className="leading-[24px]">{title}</p>
        </div>
      </div>
      <div
        className="content-stretch flex flex-col items-start relative shrink-0 w-full"
        data-name="p.text"
      >
        <div className="[word-break:break-word] flex flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#212121] text-[16px] w-full">
          <p className="leading-[24px]">{description}</p>
        </div>
      </div>
    </div>
  )
}

function CoverageTab({
  label,
  active,
  onClick,
}: {
  label: string
  active: boolean
  onClick: () => void
}) {
  return (
    <div
      role="tab"
      tabIndex={0}
      aria-selected={active}
      onClick={onClick}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault()
          onClick()
        }
      }}
      className="content-stretch cursor-pointer flex flex-col items-start px-[30px] py-[14px] relative shrink-0"
      data-name={active ? "li.active" : "li"}
    >
      <div
        className="content-stretch flex flex-col items-center relative shrink-0 w-full"
        data-name="span"
      >
        <div
          className={`[word-break:break-word] flex flex-col font-['Mulish:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-center ${
            active ? "text-[#ec6625]" : "text-[#838383]"
          }`}
        >
          <p className="leading-[16px]">{label}</p>
        </div>
      </div>
      {active && (
        <div
          className="absolute bg-[#ec6625] bottom-0 h-[2px] left-0 right-0"
          data-name="::after"
        />
      )}
    </div>
  )
}

function Ul2({
  activeTab,
  onSelect,
}: {
  activeTab: string
  onSelect: (tab: string) => void
}) {
  return (
    <div
      className="border-[#c9c9c9] border-b border-solid content-stretch flex items-start relative shrink-0 w-full"
      data-name="ul"
    >
      {COVERAGE_TABS.map((label) => (
        <CoverageTab
          key={label}
          label={label}
          active={activeTab === label}
          onClick={() => onSelect(label)}
        />
      ))}
    </div>
  )
}

function UlListBlock({
  items,
  variant,
}: {
  items: { title: string; description: string }[]
  variant: "covered" | "not-covered"
}) {
  return (
    <div
      className="gap-x-[20px] gap-y-[24px] grid grid-cols-2 relative shrink-0 w-full"
      data-name="ul.list-block"
    >
      {items.map((item) => (
        <CoverageListItem
          key={item.title}
          title={item.title}
          description={item.description}
          variant={variant}
        />
      ))}
    </div>
  )
}

function PNoteTxt({ text }: { text: string }) {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="p.note-txt"
    >
      <div className="[word-break:break-word] flex flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#212121] text-[14px] w-full">
        <p className="leading-[normal]">{text}</p>
      </div>
    </div>
  )
}

function DivInclusion({
  items,
  note,
  variant,
}: {
  items: { title: string; description: string }[]
  note: string
  variant: "covered" | "not-covered"
}) {
  return (
    <div
      className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full"
      data-name="div#inclusion"
    >
      <UlListBlock items={items} variant={variant} />
      <PNoteTxt text={note} />
    </div>
  )
}

function DivTabBlock() {
  const [activeTab, setActiveTab] = useState("Covered")
  const data = COVERAGE_CONTENT[activeTab]
  return (
    <div
      className="content-stretch flex flex-col gap-[40px] items-start pt-[25px] relative shrink-0 w-full"
      data-name="div.tab-block"
    >
      <Ul2 activeTab={activeTab} onSelect={setActiveTab} />
      <DivInclusion
        items={data.items}
        note={data.note}
        variant={activeTab === "Covered" ? "covered" : "not-covered"}
      />
    </div>
  )
}

function DivIlContainer2() {
  return (
    <div
      className="content-stretch flex flex-col gap-[15px] items-center max-w-[1330px] px-[15px] relative shrink-0 w-full"
      data-name="div.il-container"
    >
      <H2Heading3 />
      <PSubTxt />
      <DivTabBlock />
    </div>
  )
}

function SectionCarCover() {
  return (
    <div
      className="bg-[#f7f3f2] content-stretch flex flex-col items-start px-4 sm:px-6 md:px-[55px] py-[60px] relative shrink-0 w-full"
      data-name="section#car-cover"
    >
      <DivIlContainer2 />
    </div>
  )
}
export default SectionCarCover
