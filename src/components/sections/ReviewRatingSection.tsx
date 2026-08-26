function H10() {
  return (
    <div
      className="content-stretch flex flex-col items-center pb-[10px] relative shrink-0 w-full"
      data-name="h2"
    >
      <div className="[word-break:break-word] flex flex-col font-['Mulish:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#282828] text-[35px] text-center">
        <p className="leading-[normal]">Reviews and ratings</p>
      </div>
    </div>
  )
}

function H11() {
  return (
    <div
      className="border-[#cbcdce] border-r border-solid content-stretch flex flex-col items-start pb-[10px] relative shrink-0 w-full"
      data-name="h2"
    >
      <div className="[word-break:break-word] flex flex-col font-['Mulish:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#282828] text-[35px]">
        <p className="leading-[normal]">4.7</p>
      </div>
    </div>
  )
}

function Li37() {
  return (
    <div
      className="content-stretch flex flex-col items-start px-[10px] relative self-stretch shrink-0 w-[120px]"
      data-name="li"
    >
      <H11 />
    </div>
  )
}

function Li38() {
  return (
    <div
      className="[word-break:break-word] content-stretch flex flex-col items-start leading-[0] px-[10px] relative self-stretch shrink-0"
      data-name="li"
    >
      <div className="flex flex-col font-['Mulish:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[#212121] text-[15px]">
        <p className="leading-[18px]">Our customers have rated us</p>
      </div>
      <div className="flex flex-col font-['Mulish:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#6c6c6c] text-[12px]">
        <p className="leading-[normal]">Based on 1926 reviews</p>
      </div>
    </div>
  )
}

function UlRatingCount() {
  return (
    <div
      className="content-stretch flex items-start relative shrink-0"
      data-name="ul.rating_count"
    >
      <Li37 />
      <Li38 />
    </div>
  )
}

function DivAlignCenter() {
  return (
    <div
      className="content-stretch flex flex-col gap-[10px] items-center relative shrink-0 w-full"
      data-name="div.align-center"
    >
      <H10 />
      <UlRatingCount />
    </div>
  )
}

function DivAlignCenter1() {
  return (
    <div
      className="content-stretch flex flex-col items-center relative shrink-0 w-full"
      data-name="div.align-center"
    >
      <div
        className="bg-white relative rounded-[5px] shrink-0"
        data-name="Component 1"
      >
        <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-start justify-center px-[24px] py-[13px] relative size-full">
            <a
              className="[word-break:break-word] flex flex-col font-['Mulish:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#ec6625] text-[16px] text-center"
              href="https://www.google.com/"
              target="_blank"
            >
              <p className="cursor-pointer leading-[normal]">
                Read all reviews
              </p>
            </a>
          </div>
        </div>
        <div
          aria-hidden
          className="absolute border border-[#005dac] border-solid inset-0 pointer-events-none rounded-[5px]"
        />
      </div>
    </div>
  )
}

function DivRow() {
  return (
    <div
      className="content-stretch flex flex-col gap-[26px] items-start relative shrink-0 w-full"
      data-name="div.row"
    >
      <DivAlignCenter />
      <DivAlignCenter1 />
    </div>
  )
}

function ReviewRatingBlock() {
  return (
    <div
      className="content-stretch flex flex-col items-start overflow-clip pb-[46px] pt-[60px] px-4 sm:px-6 md:px-[70px] relative shrink-0 w-full"
      data-name="review rating block"
    >
      <DivRow />
    </div>
  )
}
export default ReviewRatingBlock
