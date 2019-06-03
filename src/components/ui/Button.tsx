import { h } from 'preact';

interface Props extends Partial<HTMLButtonElement> {
  children?: any;
  color?: string;

  // shade?: string;
}

export default function Button({
  children,
  color,
  className,
  ...props
}: Props) {
  return (
    // @ts-ignore
    <button
      {...props}
      className={`
      ${color || 'bg-green-700'}  text-gray-100 my-4 w-64 mx-auto
           font-semibold py-2 px-4 rounded shadow
           hover-scale-05
        ${className || ''}`}
    >
      {children}
    </button>
  );
}
