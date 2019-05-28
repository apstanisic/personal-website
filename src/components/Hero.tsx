import { h } from 'preact';

export default function Hero() {
  return (
    <div className="w-full">
      <img
        src="http://placehold.it/400x400"
        style={{
          maxHeight: '60vh',
          objectFit: 'cover',
          verticalAlign: 'middle'
        }}
        className="w-full"
        alt=""
        srcset=""
      />
    </div>
  );
}
