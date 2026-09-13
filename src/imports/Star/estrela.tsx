import * as React from "react";

type EstrelaProps = React.SVGProps<SVGSVGElement> & {
  fillColor?: string;
  strokeColor?: string;
};

const Estrela = ({
  fillColor = "#e1e6d8",
  strokeColor = "#3A5942",
  ...props
}: EstrelaProps) => {
  return (
    <svg  width={props.width ?? 84}
  height={props.height ?? 80}
  viewBox="0 0 84 80"
  fill="none"
  xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M43.6057 12.3708L50.1047 32.447L77.2688 32.447L72.3098 36.0623L55.2922 48.4705L61.7942 68.5525L63.6917 74.4158L58.7122 70.7849L41.7024 58.3806L24.6936 70.7849L19.7141 74.4158L21.6126 68.5525L28.1135 48.4705L11.0959 36.0623L6.13696 32.447H33.301L39.8001 12.3708L41.7034 6.4939L43.6057 12.3708Z" 
     fill={fillColor}  stroke={strokeColor}  strokeWidth={4}/>
    </svg>
  );
};

export default Estrela;
