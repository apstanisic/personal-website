import { h } from "preact";

interface Props {
  children?: any;
  bg?: string;
  className?: string;
  [key: string]: any;
}

export default function Section({ children, bg, ...props }: Props) {
  return (
    <div className={`w-full py-6 sm:py-10 px-3 ${bg || ""}`}>
      <div {...props} className={`container mx-auto ${props.className ?? ""}`}>
        {children}
      </div>
    </div>
  );
}
