import { h } from 'preact';
import image from '../assets/aleksandar.jpg';
export default function About() {
  return (
    <div className=" bg-blue-700 py-4 ">
      <div className="lg:flex container mx-auto">
        <div className="text-xl md:text-2xl p-4 sm:p-6 text-center text-white lg:w-2/3 center text-shadow">
          Hi, I'm Aleksandar, web developer from Belgrade, and I like to create
          interesting things. Don't hasitate to contact me if you have some
          project or cool idea, or if you want to hang out.
        </div>
        <div className="md:py-6 pb-6 mx-5 lg:w-1/3">
          <img
            src={image}
            alt="Aleksandar"
            className="mx-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
