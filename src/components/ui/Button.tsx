import { h } from 'preact';

interface Props {
  children?: any;
  color?: string;
  // shade?: string;
}

export default function Button({ children, color }: Props) {
  return (
    <button
      className={`
      ${color ? color : 'bg-green-700'}  text-gray-100 my-4 w-64 mx-auto
           font-semibold py-2 px-4 rounded shadow
           hover-scale-05
        `}
    >
      {children}
    </button>
  );
}
