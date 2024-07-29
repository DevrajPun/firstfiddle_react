import React from "react";

function Careers() {
  return (
    <>
      {/* first */}
      <div className="mt-[64px] md:mt-0 bg-[url('https://pn-paul.netlify.app/image/new-careers-1.jpg')] w-full">
        <h1 className="py-[100px] md:py-[250px] text-2xl md:text-6xl text-white text-center font-[pargue]">
          CAREERS
        </h1>
      </div>
      {/* second */}
      <div className="mx-4 md:mx-14 my-14">
        <div className="mb-9">
          <h1 className="text-2xl md:text-5xl font-[pargue] text-center my-6">
            COME WORK <span className="text-[orange]">WITH US!</span>
          </h1>
          <p className="text-xl text-justify font-thin">
            First Fiddle is all about innovation, creativity and understanding
            ever-changing consumer needs. The work environment enables both
            professional and personal growth.
          </p>

          <h1 className="text-2xl md:text-5xl font-[pargue] text-center my-6">
            HOW TO <span className="text-[orange]">APPLY!</span>
          </h1>
          <p className="text-xl text-justify font-thin">
            First Fiddle is all about innovation, creativity and understanding
            ever-changing consumer needs. The work environment enables both
            professional and personal growth.
          </p>
        </div>
        <br />
        <div className="md:flex">
          <div className="md:w-1/2 px-4 md:px-[30px]">
            <h3 className="text-2xl my-2"> Steep learning curve</h3>
            <p className="font-thin text-lg text-justify">
              Talent and merit are rewarded at First Fiddle Restaurants. Add
              value, and see yourself grow!
            </p>
            <br />
            <h3 className="text-2xl my-2">Growth opportunities</h3>
            <p className="font-thin text-lg text-justify">
              Talent and merit are rewarded at First Fiddle Restaurants. Add
              value, and see yourself grow!
            </p>
            <br />
            <h3 className="text-2xl my-2">Exciting work environment</h3>
            <p className="font-thin text-lg text-justify">
              Work in a highly motivated environment with talented people. A
              positive work environment, ensures a productive and happy you.
            </p>
          </div>
          <div className="md:w-1/2 md:px-[30px] mt-5 md:mt-0">
            <div className="shadow-2xl rounded-xl md:px-4 py-5">
              <h3 className="text-2xl text-center mb-5">Share Details</h3>
              <div>
                <form action="">
                  <div className="flex justify-center mb-9">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Name*"
                      required
                      autocomplete="off"
                      class="block w-5/6 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                  <div className="flex justify-center mb-9">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Email*"
                      required
                      autocomplete="off"
                      class="block w-5/6 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                  <div className="flex justify-center mb-9">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Phone*"
                      required
                      autocomplete="off"
                      class="block w-5/6 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                  <div className="flex justify-center mb-9">
                    <textarea
                      type="text"
                      name=""
                      id=""
                      placeholder="Message*"
                      required
                      autocomplete="off"
                      class="block w-5/6 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                  <div className="flex justify-center">
                    <button className="bg-[orange] rounded-lg text-white text-lg px-6 py-[6px]">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Careers;
