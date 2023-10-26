import React from 'react';
import parts from '../../assets/images/about_us/parts.jpg'

const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img
            src="https://i.postimg.cc/ZKgP59vv/Rectangle-4.jpg"
            className="w-3/4 rounded-lg shadow-2xl"
          />
          <img
            src={parts}
            className="w-1/2 rounded-lg absolute right-5 top-60 border-white border-8 shadow-2xl"
          />
        </div>
        <div className="lg:w-1/2 space-y-5 p-4">
          <h3 className="text-3xl text-[#FF3811] font-bold">About Us</h3>
          <h1 className="text-5xl font-bold">
            We are qualified <br /> & of experience <br /> in this field
          </h1>
          <p className="py-6">
            There are many variations of passages of Lorem Ipsum <br />{" "}
            available, but the majority have suffered alteration in some <br />{" "}
            form, by injected humour, or randomised words which don't <br />{" "}
            look even slightly believable.
          </p>
          <p className="py-6">
            the majority have suffered alteration in some form, by injected{" "}
            <br />
            humour, or randomised words which don't look even slightly <br />
            believable.
          </p>
          <button className="btn bg-[#FF3811] text-white hover:bg-orange-500">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;