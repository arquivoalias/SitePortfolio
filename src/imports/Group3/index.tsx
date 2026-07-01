import svgPaths from "./svg-swnr86mpbk";
import imgImageWithFallback from "./df855383771e6469be22788cfb11d95652ae7d47.png";

function ImageWithFallback() {
  return (
    <div className="h-[597px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[#bdc6ae] h-[540px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-end overflow-clip relative rounded-[inherit] size-full">
        <ImageWithFallback />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col h-[550px] items-start left-0 p-[5px] top-0 w-[493px]" data-name="Container">
      <div aria-hidden className="absolute border-5 border-[rgba(58,89,66,0.2)] border-solid inset-0 pointer-events-none" />
      <Container1 />
    </div>
  );
}

function Estrela() {
  return (
    <div className="absolute h-[202px] left-0 top-0 w-[150px]" data-name="ESTRELA">
      <div className="absolute inset-[-9.03%_-9.8%_-10.3%_-6.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 174.071 241.046">
          <g id="ESTRELA">
            <g filter="url(#filter0_f_125_557)" id="Star 13">
              <path d={svgPaths.p26662f00} fill="var(--fill-0, #3A5942)" />
              <path d={svgPaths.p227e4800} stroke="var(--stroke-0, #3A5942)" strokeWidth="4" />
            </g>
            <g filter="url(#filter1_f_125_557)" id="Star 14">
              <path d={svgPaths.p1bf61df0} fill="var(--fill-0, #C4CCB5)" />
              <path d={svgPaths.p2bd60a80} stroke="var(--stroke-0, #3A5942)" strokeWidth="4" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="160.223" id="filter0_f_125_557" width="165.658" x="8.41289" y="9.53674e-07">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_125_557" stdDeviation="4" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="99.0581" id="filter1_f_125_557" width="97.8844" x="9.53674e-07" y="141.988">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_125_557" stdDeviation="4" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default function Group() {
  return (
    <div className="contents relative size-full">
      <Container />
      <Estrela />
      <div className="absolute flex h-[73.158px] items-center justify-center left-0 top-0 w-[73.148px]">
        <div className="flex-none rotate-[42.76deg]">
          <div className="h-[51.861px] relative w-[51.672px]">
            <div className="absolute inset-[-40.47%_-36.79%_-26.11%_-36.79%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 89.6918 86.3897">
                <g filter="url(#filter0_f_125_544)" id="Star 13">
                  <path d={svgPaths.p1ab15e00} fill="var(--fill-0, #3A5942)" />
                  <path d={svgPaths.p24f89c70} stroke="var(--stroke-0, #3A5942)" strokeWidth="4" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="86.3897" id="filter0_f_125_544" width="89.6918" x="-9.53674e-07" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_125_544" stdDeviation="4" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[39.088px] items-center justify-center left-0 top-0 w-[39.174px]">
        <div className="flex-none rotate-[75.88deg]">
          <div className="h-[32.297px] relative w-[32.179px]">
            <div className="absolute inset-[-64.98%_-60.56%_-47.71%_-60.56%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 71.1533 68.694">
                <g filter="url(#filter0_f_125_555)" id="Star 14">
                  <path d={svgPaths.pa6c5000} stroke="var(--stroke-0, #3A5942)" strokeWidth="4" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="68.694" id="filter0_f_125_555" width="71.1533" x="9.53674e-07" y="-9.53674e-07">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_125_555" stdDeviation="4" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}