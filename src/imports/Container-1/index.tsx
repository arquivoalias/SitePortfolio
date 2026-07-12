import svgPaths from "./svg-9u2cjo38cc";

function Paragraph() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inconsolata:Regular',sans-serif] font-normal leading-[21.6px] relative shrink-0 text-[#b84d6a] text-[14.4px] tracking-[1.728px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Contato
      </p>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[24px] relative shrink-0 w-[599px]" data-name="Heading 2">
      <p className="[word-break:break-word] font-['Outfit:SemiBold',sans-serif] font-semibold leading-[0] relative shrink-0 text-[#3a5942] text-[0px] tracking-[-2.5082px] w-[618px]">
        <span className="leading-[83.608px] text-[83.608px]">{`Vamos trabalhar `}</span>
        <span className="font-['Outfit:Regular',sans-serif] font-normal leading-[83.608px] text-[#b84d6a] text-[83.608px]">juntos?</span>
      </p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex flex-col h-[111px] items-start max-w-[591px] pb-[30px] pr-[15px] pt-[38px] relative shrink-0 w-[591px]" data-name="Paragraph">
      <div className="[word-break:break-word] font-['Outfit:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#5e7e67] text-[16px] whitespace-nowrap">
        <p className="leading-[26px] mb-0">Estou disponível para projetos, colaborações e conversas.</p>
        <p className="leading-[26px]">Se você tem uma ideia, fala comigo!</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M7 7H17V17" id="Vector" stroke="var(--stroke-0, #3A5942)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M7 17L17 7" id="Vector_2" stroke="var(--stroke-0, #3A5942)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[42px] items-center left-0 top-0" data-name="Link">
      <p className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Outfit:SemiBold',sans-serif] font-semibold leading-[42px] relative shrink-0 text-[#3a5942] text-[28px] tracking-[-0.56px] underline whitespace-nowrap">valentinareal2005@gmail.com</p>
      <Icon />
    </div>
  );
}

function InlineContent() {
  return (
    <div className="h-[42px] relative shrink-0 w-full" data-name="Inline content">
      <Link />
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 w-[310px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph />
        <Heading />
        <Paragraph1 />
        <InlineContent />
      </div>
    </div>
  );
}

function DecorativeStar() {
  return (
    <div className="h-[366px] relative shrink-0 w-[355px]" data-name="Decorative star">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 355 366">
        <g clipPath="url(#clip0_125_550)" id="Decorative star">
          <g filter="url(#filter0_f_125_550)" id="Star 13">
            <path d={svgPaths.pd237880} fill="var(--fill-0, #B84D6A)" fillOpacity="0.3" />
            <path d={svgPaths.p18159f00} stroke="var(--stroke-0, #B84D6A)" strokeOpacity="0.3" strokeWidth="4" />
          </g>
          <g filter="url(#filter1_f_125_550)" id="Star 14">
            <path d={svgPaths.p5baf700} stroke="var(--stroke-0, #B84D6A)" strokeOpacity="0.3" strokeWidth="4" />
          </g>
          <g filter="url(#filter2_f_125_550)" id="Star 15">
            <path d={svgPaths.p19537100} stroke="var(--stroke-0, #B84D6A)" strokeOpacity="0.3" strokeWidth="4" />
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="245.617" id="filter0_f_125_550" width="248.448" x="103.285" y="121.026">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feGaussianBlur result="effect1_foregroundBlur_125_550" stdDeviation="4" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="95.8341" id="filter1_f_125_550" width="93.4725" x="70.197" y="127.421">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feGaussianBlur result="effect1_foregroundBlur_125_550" stdDeviation="4" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="149.074" id="filter2_f_125_550" width="154.112" x="190.98" y="-14.6259">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feGaussianBlur result="effect1_foregroundBlur_125_550" stdDeviation="4" />
          </filter>
          <clipPath id="clip0_125_550">
            <rect fill="white" height="366" width="355" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-[#c4ccb5] content-stretch flex items-start pl-[62px] pr-[41px] py-[61px] relative rounded-[30px] size-full" data-name="Container">
      <div aria-hidden className="absolute border border-[rgba(58,89,66,0.2)] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <Frame />
      <DecorativeStar />
    </div>
  );
}