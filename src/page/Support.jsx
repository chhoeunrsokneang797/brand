import React from "react";
import Imge from "../assets/support.jpg";

const Support = () => {
  return (
    <div name='support' className="w-full mt-24">
      <div className="w-full h-[700px] bg-gray-900/90 absolute">
        <img
          className="w-full h-full object-cover mix-blend-overlay"
          src={Imge}
        />
      </div>
      <div className="max-w-[1240px] mx-auto text-white relative">
        <div className="px-4 py-12">
          <h2 className="text-3xl pt-8 text-slate-300 uppercase text-center">
            Support
          </h2>
          <h3 className="text-5xl font-bold py-6 text-center">
            finding the right team
          </h3>
          <p className="py-4 text-3xl text-slate-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
            delectus explicabo reprehenderit, non maxime modi sed ipsa in iste
            unde quidem, aspernatur sunt accusantium veritatis. Numquam 
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-y-16 gap-x-8 px-4 pt-12 sm:pt-20 text-black">
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <i className="fa-solid fa-phone w-16 p-4 bg-blue-500 text-white rounded-lg mt-[-4rem] text-center"></i>
              <h3 className="font-bold text-2xl my-6">Sales</h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptates ex velit odit omnis possimus a consequatur qui sit
                incidunt eius?
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-blue-500">
                Contact Us<i className="fa-solid fa-arrow-right w-5 ml-2"></i>
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <i className="fa-sharp fa-regular fa-sun w-16 p-4 bg-blue-500 text-white rounded-lg mt-[-4rem] text-center"></i>
              <h3 className="font-bold text-2xl my-6">Technical Support</h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptates ex velit odit omnis possimus a consequatur qui sit
                incidunt eius?
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-blue-500">
                Contact Us<i className="fa-solid fa-arrow-right w-5 ml-2"></i>
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <i className="fa-solid fa-suitcase w-16 p-4 bg-blue-500 text-white rounded-lg mt-[-4rem] text-center"></i>
              <h3 className="font-bold text-2xl my-6">Media Inquiries</h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptates ex velit odit omnis possimus a consequatur qui sit
                incidunt eius?
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-blue-500">
                Contact Us<i className="fa-solid fa-arrow-right w-5 ml-2"></i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
