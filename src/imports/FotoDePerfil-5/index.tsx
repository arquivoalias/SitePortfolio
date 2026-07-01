import svgPaths from "./svg-1g1iufafqz";

export default function FotoDePerfil() {
  return (
    <div className="relative size-full" data-name="foto de perfil">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1080 1080">
        <g clipPath="url(#clip0_42_494)" id="foto de perfil">
          <g filter="url(#filter0_f_42_494)" id="Star 13">
            <path d={svgPaths.p1daff880} stroke="var(--stroke-0, #E1E6D3)" strokeWidth="40" />
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="973.794" id="filter0_f_42_494" width="989.091" x="60.3995" y="84.1605">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feGaussianBlur result="effect1_foregroundBlur_42_494" stdDeviation="15" />
          </filter>
          <clipPath id="clip0_42_494">
            <rect fill="white" height="1080" width="1080" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}