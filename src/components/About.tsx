import { h } from 'preact';
import image from '../assets/aleksandar.jpg';
export default function About() {
  return (
    <div className="lg:flex bg-blue-700">
      <div className="text-xl p-4 sm:p-6 text-center text-white lg:w-2/3 center">
        Hi, I'm Aleksandar, web developer from Belgrade, and I like to create
        interesting things. Don't hasitate to contact me if you have some job or
        cool idea, or if you want to hang out.
      </div>
      <div className="md:py-6 pb-6 mx-4 lg:w-1/3">
        <img src={image} alt="Aleksandar" className="mx-auto rounded-lg" />
      </div>
    </div>
  );
}
