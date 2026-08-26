import { useState } from "react"
function H2Heading24() {
  return (
    <div
      className="content-stretch flex flex-col items-center relative shrink-0 w-full"
      data-name="h2.heading2"
    >
      <div className="[word-break:break-word] flex flex-col font-['Mulish:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#212121] text-[36px] text-center">
        <p className="leading-[45px]">
          Frequently Asked Questions About Car Insurance
        </p>
      </div>
    </div>
  )
}

const FAQ_CATEGORIES = ["General", "Cover", "Premium", "Claims", "Renewal"]

const FAQ_CONTENT: Record<string, { question: string; answer: string }[]> = {
  General: [
    {
      question: "Why do I need to insure my car?",
      answer:
        "Car insurance is mandatory under the Motor Vehicles Act, and it protects you financially against accidents, theft, natural calamities, and third-party liability. Driving without valid insurance can also lead to fines and legal penalties.",
    },
    {
      question: "What are the different types of car insurance policies?",
      answer:
        "There are two main types: third-party liability insurance, which covers damage or injury caused to a third party, and comprehensive insurance, which covers third-party liability plus damage to your own vehicle from accidents, theft, fire, and natural disasters.",
    },
    {
      question: "What are the benefits of buying car insurance online?",
      answer:
        "Buying online is faster, lets you compare plans and premiums instantly, gives you digital access to your documents, and often comes with lower premiums thanks to reduced overhead costs.",
    },
    {
      question: "How quickly can I buy/renew car insurance online?",
      answer:
        "In most cases you can complete a purchase or renewal in a few minutes by entering your vehicle and contact details, choosing a plan, and making the payment online.",
    },
    {
      question:
        "What are the various types of vehicles that I can insure online?",
      answer:
        "You can typically insure private cars, two-wheelers, and commercial vehicles online, depending on the plans an insurer offers.",
    },
    {
      question: "Do I need a valid PUC to drive in India?",
      answer:
        "Yes, a valid Pollution Under Control (PUC) certificate is a legal requirement for driving in India, in addition to valid insurance and registration documents.",
    },
    {
      question:
        "Can I skip the ₹15 lakh Personal Accident cover for owner in my car insurance policy?",
      answer:
        "This cover can usually be skipped only if you already hold an equivalent personal accident cover elsewhere; otherwise insurers generally keep it mandatory unless a valid exemption is submitted.",
    },
    {
      question:
        "What are the risks covered by Private Car Package Insurance Policy?",
      answer:
        "It typically covers own-damage risks such as accidents, fire, and theft, along with third-party liability for injury or property damage caused to others.",
    },
    {
      question:
        "I am the car's second owner and want to book a fresh policy in my name. What is the process?",
      answer:
        "You'll generally need to transfer the vehicle's RC into your name with the RTO first, then apply for a fresh policy using your updated ownership documents and the vehicle's registration details.",
    },
    {
      question:
        "Can I switch to SafeGuard Insurance at the time of renewal from another insurer?",
      answer:
        "Yes, you can switch insurers at renewal by providing your vehicle details, previous policy information, and no-claim bonus proof, if applicable, before your existing policy expires.",
    },
    {
      question: "What is an endorsement in car insurance?",
      answer:
        "An endorsement is an official change made to your policy, such as updating your address, vehicle details, or adding or removing a cover, without needing to issue a completely new policy.",
    },
    {
      question: "Where can I check my car insurance policy details?",
      answer:
        "You can view your policy details through the insurer's website or app by logging in with your policy number and registered mobile number or email.",
    },
  ],
  Cover: [],
  Premium: [],
  Claims: [],
  Renewal: [],
}

function FaqTab({
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
      data-name={`li#${label.toLowerCase()}`}
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

function Ul11({
  activeCategory,
  onSelect,
}: {
  activeCategory: string
  onSelect: (category: string) => void
}) {
  return (
    <div
      className="border-[#c9c9c9] border-b border-solid content-stretch flex items-start justify-start sm:justify-center overflow-x-auto relative shrink-0 w-full sm:w-[828px] max-w-full"
      data-name="ul"
    >
      {FAQ_CATEGORIES.map((label) => (
        <FaqTab
          key={label}
          label={label}
          active={activeCategory === label}
          onClick={() => onSelect(label)}
        />
      ))}
    </div>
  )
}

function DivAccordRow({
  question,
  answer,
  open,
  onToggle,
}: {
  question: string
  answer: string
  open: boolean
  onToggle: () => void
}) {
  return (
    <div
      className="border-[#c9c9c9] border-b border-solid content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="div.accord-row"
    >
      <div
        role="button"
        tabIndex={0}
        aria-expanded={open}
        onClick={onToggle}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault()
            onToggle()
          }
        }}
        className="content-stretch cursor-pointer flex flex-col items-start pl-[15px] pr-[21px] py-[15px] relative shrink-0 w-full"
        data-name="h3.text"
      >
        <div className="[word-break:break-word] flex flex-col font-['Mulish:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#212121] text-[16px]">
          <p className="leading-[24px]">{question}</p>
        </div>
        <div className="absolute flex items-center justify-center right-[18.34px] size-[11.314px] top-[23.34px]">
          <div
            className={`flex-none transition-transform ${
              open ? "-rotate-135" : "rotate-45"
            }`}
          >
            <div
              className="border-[#ec6625] border-b-2 border-r-2 border-solid relative size-[8px]"
              data-name="::after"
            />
          </div>
        </div>
      </div>
      {open && (
        <div
          className="content-stretch flex flex-col items-start pb-[20px] pl-[15px] pr-[40px] relative shrink-0 w-full"
          data-name="div.accord-answer"
        >
          <p className="font-['Mulish:Regular',sans-serif] leading-[22px] text-[#4a4a4a] text-[14px]">
            {answer}
          </p>
        </div>
      )}
    </div>
  )
}

function DivAccordianBlock({
  items,
  activeCategory,
}: {
  items: { question: string; answer: string }[]
  activeCategory: string
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  if (items.length === 0) {
    return (
      <div
        className="bg-white content-stretch flex flex-col items-center max-w-[900px] py-[40px] relative shrink-0 w-full"
        data-name="div.accordian-block"
      >
        <p className="font-['Mulish:Regular',sans-serif] text-[#838383] text-[14px]">
          No FAQs added for {activeCategory} yet.
        </p>
      </div>
    )
  }

  return (
    <div
      className="bg-white content-stretch flex flex-col items-start max-w-[900px] relative shrink-0 w-full"
      data-name="div.accordian-block"
    >
      {items.map((item: { question: string; answer: string }, index: number) => (
        <DivAccordRow
          key={item.question}
          question={item.question}
          answer={item.answer}
          open={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  )
}

function DivIlContainer22() {
  const [activeCategory, setActiveCategory] = useState("General")
  return (
    <div
      className="content-stretch flex flex-col gap-[40px] items-center max-w-[1330px] px-[15px] relative shrink-0 w-full"
      data-name="div.il-container"
    >
      <H2Heading24 />
      <Ul11 activeCategory={activeCategory} onSelect={setActiveCategory} />
      <DivAccordianBlock
        key={activeCategory}
        items={FAQ_CONTENT[activeCategory]}
        activeCategory={activeCategory}
      />
    </div>
  )
}

function SectionFaqSec() {
  return (
    <div
      className="bg-[#fafafa] content-stretch flex flex-col items-start px-4 sm:px-6 md:px-[55px] py-[60px] relative shrink-0 w-full"
      data-name="section#faq-sec"
    >
      <DivIlContainer22 />
    </div>
  )
}
export default SectionFaqSec
