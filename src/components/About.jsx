import React from "react";

function About() {
  return (
    <>
      {/* first */}
      <div className="mt-[64px] md:mt-0 bg-[url('https://pn-paul.netlify.app/image/ourimage.jpg')] w-100">
        <h1 className="py-[100px] md:py-[250px] text-2xl md:text-6xl text-white text-center font-[pargue]">
          OUR STORY
        </h1>
      </div>
      {/* second */}
      <div className="mt-10 px-5  md:px-10 mb-[60px]">
        <h1 className="text-center text-[22px] md:text-[30px] font-[prague] tracking-widest mb-2">
          ONCE UPON <span className="text-[orange] font-bold">AN AFFAIRE</span>
        </h1>
        <div className="md:flex">
          <div className="md:w-3/5 md:px-10">
            <p className="text-justify text-sm md:text-lg md:leading-9 md:tracking-[1px] mb-4">
              First Fiddle Restaurants, formerly known as The Lazeez Affaire
              Group, was conceived in the year 1999 by Priyank Sukhija and Y.P.
              Ashok. Since then, the company has made a name for itself as
              innovators and leaders in the industry. Starting with their first
              brand, Lazeez Affaire, Priyank popularised the conceptof fine
              dining at a time when the same was unheard of. Following its
              success, First Fiddle introduced the concept of casual dining with
              brands such as Warehouse Cafe, Tamasha, Lord of The Drinks, Flying
              Saucer Cafe, and more, storming Delhi’s nightlife. WIth each new
              brand, First Fiddle brought a concept that was never experienced
              or heard of before, such as Plum by Bent Chair, Miso Sexy, Diablo,
              and more. The restaurants are spread all over India in major
              metropolitan cities like New Delhi, Mumbai, Pune, Lucknow and
              more, with plans to expand internationally soon.
            </p>
          </div>
          <div className="md:w-2/5 flex justify-center">
            <span>
              <img
                className="md:w-[100%]"
                src="https://pn-paul.netlify.app/image/first.jpg"
                alt=""
              />
            </span>
          </div>
        </div>
      </div>
      {/* third */}
      <div
        className="text-center py-[140px] px-[5px] text-white bg-cover bg-center"
        style={{
          backgroundImage: `url('https://pn-paul.netlify.app/image/gamebanner.jpg')`,
        }}
      >
        <h1 className="md:text-[40px] font-semibold">THE GAME CHANGER</h1>
        <div className="flex justify-center">
          <div className="w-[700px]">
            <p className="leading-[20px] md:leading-[40px] text-[8px] md:text-[16px]">
              The company is dedicated to being a game changer in the F&B
              industry with the introduction of ‘concept’ restaurants. It is
              committed to catering to the ever-changing cosmopolitan taste of
              its customers & customer satisfaction is an utmost priority.
            </p>
          </div>
        </div>
      </div>
      {/* fourth */}
      <div className="mt-10 px-5  md:px-10 mb-[60px]">
        <h1 className="text-center text-[22px] md:text-[30px] font-[prague] tracking-widest mb-6">
          THE MAN{" "}
          <span className="text-[orange] font-bold">BEHIND THE FIDDLE</span>
        </h1>
        <div className="md:flex">
          <div className="md:w-2/5 flex justify-center">
            <span>
              <img
                className="md:w-[100%] mb-3"
                src="https://pn-paul.netlify.app/image/about-priyank.jpg"
                alt=""
              />
            </span>
          </div>
          <div className="md:w-3/5 md:px-10">
            <p className="text-justify text-sm md:text-lg md:leading-9 md:tracking-[1px] mb-4">
              With over 30 restaurants in 23 years under his belt, the prolific
              restaurateur Priyank Sukhija has become somewhat of a legend in
              the industry, starting his journey at a mere age of 19. Priyank
              was the first in his family to venture into business, hailing from
              a family of lawyers, going on to create an empire in F&B.
              Following his heart and tongue through his F&B career, Priyank has
              successfully created some of the most talked-about brands in the
              industry - Diablo, Lord of the Drinks, Plum by Bent Chair, Lazeez
              Affaire, Tamasha, The Flying Saucer Cafe, and many more.
            </p>
          </div>
        </div>
      </div>
      {/* fifth */}
      <div className="md:mt-[140px] px-5 mt-[140px] md:px-10 mb-[60px]">
        <h1 className="text-center text-[24px] md:text-[30px] font-[prague] tracking-widest my-6">
          JOIN<span className="text-[orange] font-bold"> OUR FAMILY</span>
        </h1>
        <div className="md:flex">
          <div className="md:w-3/5 md:px-10">
            <p className="text-justify leading-6 md:leading-9 md:tracking-[1px]">
              At First Fiddle Restaurants, we leave no stone unturned to provide
              the most desirable experience across markets and restaurants.
              Serving over five lakh customers monthly with 15+ brands and 35+
              restaurants, our brands like Diablo, Plum by Bent Chair, Dragonfly
              Experience, Tamasha, Daddy, JLWA, and more have revolutionized the
              experience of dining & nightlife for everyone. Exploring a
              franchise with First Fiddle Restaurants provides you with a large
              existing customer base besides the added advantage of nation-wide
              recognition.
            </p>
            <button className="text-white  my-14 text-sm md:text-xl bg-[orange] rounded-md py-2 px-4">
              Franchise With Us
            </button>
          </div>
          <div className="md:w-2/5 flex justify-center">
            <span>
              <img
                className="md:w-[350px] md:h-[400px]"
                src="https://pn-paul.netlify.app/image/333X3322.jpg"
                alt=""
              />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
