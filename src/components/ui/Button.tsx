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
      ${
        color ? 'bg-' + color : 'bg-green-700'
      } hover:bg-green-800 text-gray-100 my-2 w-64 mx-auto
           font-semibold py-2 px-4 rounded shadow
        `}
    >
      {children}
    </button>
  );
}
