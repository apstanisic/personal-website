import { h } from 'preact';
import HeroImage from '../assets/hero.png';

export default function Hero() {
  return (
    <div
      className="w-full overflow-hidden relative "
      style={{ filter: 'blur(100%)' }}
    >
      <img
        src={HeroImage}
        style={{
          maxHeight: '60vh',
          minHeight: '50vh',
          objectFit: 'cover',
          verticalAlign: 'middle',
          filter: 'blur(2px)',
          transform: 'scale(1.1)'
        }}
        className="w-full"
        alt=""
        srcset=""
      />
      <h1
        className="absolute text-white inset-0 center text-5xl md:text-6xl p-12"
        style={{ zIndex: 3 }}
      >
        <span
          className="border-4 p-4 lg:p-8"
          style={{
            borderRadius: '0.75rem',
            backgroundColor: 'rgba(0,0,0,0.6)'
          }}
        >
          Aleksandar Stanišić
        </span>
      </h1>
    </div>
  );
}
