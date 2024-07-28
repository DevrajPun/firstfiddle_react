import React from "react";

function Team() {
  return (
    <>
      <div>
        {/* first */}
        <div className="mt-[64px] md:mt-0 bg-[url('https://pn-paul.netlify.app/image/new-our-team.jpg')] w-100">
          <h1 className="py-[100px] md:py-[250px] text-2xl md:text-6xl text-white text-center font-[pargue]">
            MEET OUR TEAM
          </h1>
        </div>
        {/* second */}
        <div className="md:flex md:justify-between md:px-[60px] py-14">
          <div className="md:w-2/5 flex justify-center">
            <img
              className="w-[90%] md:w-[490px] md:h-[510px]"
              src="https://pn-paul.netlify.app/image/priyank-our%20team.jpg"
              alt=""
            />
          </div>
          <div className=" px-4 right md:w-3/5 md:pl-[30px] md:pr-[55px]">
            <h1 className="text-4xl mt-2 mb-3">Priyank Sukhija</h1>
            <span className="text-xl">C.E.O. & M.D.</span>
            <p className="text-[17px] text-justify md:leading-[33px] md:tracking-widest">
              A 19-year-old dropout kid, who was just setting up his first
              venture, envisioned what nobody thought would make him a business
              tycoon in the hospitality industry. Once he began, there was no
              stopping this entrepreneur from reaching the heights he has
              reached today. It is the passion and creative streak of Priyank
              Sukhija that has made him the most watched-out restaurateur of
              today’s time. Coming from a family of lawyers, he ventured into
              the business world on his own with Lazeez Affaire in 1999 and has
              never looked back since.
            </p>
            <div>
              <button className="py-[8px] my-[10px] px-5 bg-[orange] text-[22px] text-white rounded-lg hover:bg-yellow-600">
                Read More
              </button>
            </div>
            <div className="text-[orange] text-[30px] md:text-[40px]">
              <i class="fa-brands fa-facebook mr-2"></i>
              <i class="fa-brands fa-twitter mx-2"></i>
              <i class="fa-brands fa-instagram mx-2"></i>
            </div>
          </div>
        </div>
        {/* third */}
        <div>
          <div className="md:flex md:justify-evenly my-7 text-white">
            <div className="flex justify-center mb-4">
              <div className="bg-[url('https://pn-paul.netlify.app/image/YPAshok.jpg')] bg-cover bg-center w-[280px] h-[280px] md:md:w-[350px] md:md:h-[350px] rounded-lg overflow-hidden relative flex justify-center shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <h2 className="font-bold text-2xl absolute bottom-0 mb-7">
                  Y. P. ASHOK
                </h2>
                <p className="text-lg absolute bottom-0 mb-2">chairman</p>
              </div>
            </div>
            <div className="flex justify-center mb-4">
              <div className="bg-[url('https://pn-paul.netlify.app/image/B.R.-Sachdeva.jpg')] bg-cover bg-center w-[280px] h-[280px] md:md:w-[350px] md:md:h-[350px] rounded-lg overflow-hidden relative flex justify-center shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <h2 className="font-bold text-2xl absolute bottom-0 mb-7">
                  B.R. SACHDEVA
                </h2>
                <p className="text-lg absolute bottom-0 mb-2">
                  Director Finance & Legal
                </p>
              </div>
            </div>
            <div className="flex justify-center mb-4">
              <div className="bg-[url('https://pn-paul.netlify.app/image/Sagar-Bajaj.jpg')] bg-cover bg-center w-[280px] h-[280px] md:md:w-[350px] md:md:h-[350px] rounded-lg overflow-hidden relative flex justify-center shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <h2 className="font-bold text-2xl absolute bottom-0 mb-7">
                  SAGAR BAJAJ
                </h2>
                <p className="text-lg absolute bottom-0 mb-2">Corporate Chef</p>
              </div>
            </div>
          </div>
          <div className="md:flex md:justify-evenly my-7 text-white">
            <div className="flex justify-center mb-4">
              <div className="bg-[url('https://pn-paul.netlify.app/image/JAY-PHOTO-1-1.jpg')] bg-cover bg-center w-[280px] h-[280px] md:md:w-[350px] md:md:h-[350px] rounded-lg overflow-hidden relative flex justify-center shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <h2 className="font-bold text-2xl absolute bottom-0 mb-7">
                  JAY SHANKAR NATRAJ
                </h2>
                <p className="text-lg absolute bottom-0 mb-2">Franchise Lead</p>
              </div>
            </div>
            <div className="flex justify-center mb-4">
              <div className="bg-[url('https://pn-paul.netlify.app/image/vibhutiPR.jpg')] bg-cover bg-center w-[280px] h-[280px] md:md:w-[350px] md:md:h-[350px] rounded-lg overflow-hidden relative flex justify-center shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <h2 className="font-bold text-2xl absolute bottom-0 mb-7">
                  VIBHUTI SOOD
                </h2>
                <p className="text-lg absolute bottom-0 mb-2">
                  PR And Communications Head
                </p>
              </div>
            </div>
            <div className="md:block hidden">
              <div className="flex justify-center mb-4">
                <div className="bg-cover bg-center w-[280px] h-[280px] md:md:w-[350px] md:md:h-[350px] rounded-lg overflow-hidden relative flex justify-center transition-shadow duration-300">
                  <h2 className="font-bold text-2xl absolute hidden bottom-0 mb-7">
                    SAGAR BAJAJ
                  </h2>
                  <p className="text-lg absolute bottom-0 hidden mb-2">
                    Corporate Chef
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
