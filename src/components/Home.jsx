import React from "react";
import img from "../assets/img/back.jpg";
import Carousel from "./Carousel";

function Home() {
  return (
    <>
      <Carousel />
      {/* first */}
      <div className="px-5 md:px-10 mb-[60px]">
        <h1 className="text-center text-[24px] md:text-[30px] font-[prague] tracking-widest my-6">
          WELCOME TO{" "}
          <span className="text-[orange] font-bold"> FIRST FIDDLE</span>
        </h1>
        <div className="md:flex">
          <div className="md:w-3/5 md:px-10">
            <p className="text-justify leading-6 md:leading-9 md:tracking-[1px]">
              First Fiddle Restaurants, one of India's most prominent F&B
              companies in the casual dining sector, is headed by Priyank
              Sukhija. Starting the journey from Lazeez Affair in 1999 to Miso
              Sexy and Bougie in 2022, we have created wave after wave in the
              industry with over 30+ restaurants, brands, and franchises across
              India.
            </p>
            <div className="flex justify-center">
              <button className="text-white  my-14 text-sm md:text-xl bg-[orange] rounded-md py-2 px-4">
                JOIN THE JOURNEY
              </button>
            </div>
          </div>
          <div className="md:w-2/5 flex justify-center">
            <span>
              <img
                className="md:w-[350px] md:h-[400px]"
                src="https://pn-paul.netlify.app/image/first.jpg"
                alt=""
              />
            </span>
          </div>
        </div>
      </div>
      {/* second */}
      <div
        className="text-center py-14 px-[5px] text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${img})` }}
      >
        <h1 className="md:text-[40px] font-semibold">MEDIA MENTIONS</h1>
        <div className="flex justify-center">
          <div className="w-[700px]">
            <p className="leading-[20px] md:leading-[40px] text-[8px] md:text-[16px]">
              We've been making splashes and headlines since 1999 for our
              innovative concepts and aesthetic ideations, experimental
              gastronomic affairs, and exotic mixology. We’ve made our way from
              the heart of the country into the hearts of its people!
            </p>
          </div>
        </div>
        <button className="bg-[orange] active:scale-95 mt-5 md:mt-12 px-3 py-1 md:px-6 md:py-[6px] text-sm md:text-xl rounded transition-transform duration-200 ease-in-out">
          Know More
        </button>
      </div>
      {/* third */}
      <div className="my-[60px]">
        <h1 className="text-xl mb-7 text-center font-[prague]">
          EXPLORE <span className="text-[orange]">OUR BRANDS</span>
        </h1>
        <div>
          <div className="px-[10px] md:flex justify-center">
            <div className="flex justify-center">
              <img
                className="w-[80%] mb-5 hover:scale-105 duration-300 ease-in-out"
                src="https://pn-paul.netlify.app/image/ffpic1.jpg"
                alt=""
              />
            </div>
            <div className="flex justify-center">
              <img
                className="w-[80%] mb-5 hover:scale-105 duration-300 ease-in-out"
                src="https://pn-paul.netlify.app/image/ffpic2.jpg"
                alt=""
              />
            </div>
            <div className="flex justify-center">
              <img
                className="w-[80%] mb-5 hover:scale-105 duration-300 ease-in-out"
                src="https://pn-paul.netlify.app/image/ffpic3.jpg"
                alt=""
              />
            </div>
            <div className="flex justify-center">
              <img
                className="w-[80%]  mb-5 hover:scale-105 duration-300 ease-in-out"
                src="https://pn-paul.netlify.app/image/ffpic4.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/* fourth */}
      <div
        className="text-center py-[120px] px-[5px] text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${img})` }}
      >
        <h1 className="md:text-[40px] font-semibold">
          EXPERIENCE OUR CONCEPTS
        </h1>
        <div className="flex justify-center">
          <div className="w-[700px]">
            <p className="leading-[20px] md:leading-[40px] text-[8px] md:text-[16px]">
              Moving beyond just offering Indian, international, and fusion
              cuisines, our restaurants create magic with our special events,
              mood-setting music, Insta-worthy aesthetics, and tongue-tingling
              signatures! Head over to experience it for yourself!
            </p>
          </div>
        </div>
        <button className="bg-[orange] active:scale-95 mt-5 md:mt-12 px-3 py-1 md:px-6 md:py-[6px] text-sm md:text-xl rounded transition-transform duration-200 ease-in-out">
          Know More
        </button>
      </div>
    </>
  );
}

export default Home;
