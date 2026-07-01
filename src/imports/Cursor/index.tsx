import svgPaths from "./svg-jtos37z4i6";

export default function Cursor() {
  return (
    <div className="relative size-full" data-name="cursor">
      <div className="absolute inset-[-33.79%_-30.31%_-20.22%_-30.31%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 99.4061 95.6624">
          <g filter="url(#filter0_f_131_62)" id="cursor">
            <path d={svgPaths.p17683c52} fill="var(--fill-0, #C4CCB5)" />
            <path d={svgPaths.p1c49e3f0} stroke="var(--stroke-0, #3A5942)" strokeWidth="4" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="95.6624" id="filter0_f_131_62" width="99.4061" x="9.53674e-07" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_131_62" stdDeviation="2" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}