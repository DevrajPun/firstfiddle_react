import React from "react";

function Footer() {
  return (
    <>
      <footer>
        <div className="bg-[#18191a] text-center md:text-left">
          <div className=" md:flex p-5 md:p-[70px] ">
            <div className="w-full md:w-2/5 flex justify-center">
              <span>
                <img
                  src="https://pn-paul.netlify.app/image/ff-logo-02.png"
                  className="md:w-[250px] w-[150px] md:mr-[100px]"
                  alt=""
                />
              </span>
            </div>
            <div className="w-full md:w-3/5 text-white">
              <h1 className="font-[prague]  font-bold text-[30px] md:text-[50px] my-1">
                <span className="text-[orange]">CONTACT</span> <span>US</span>
              </h1>
              <p className="text-[14px] md:text-[18px] text-justify">
                We're a team focusing on redefining the way the hospitality
                industry works by bringing in concept based restaurants across
                India. We are truly committed to catering to the ever-changing
                cosmopolitan taste of the customer and revolutioning the F & B
                industry!
              </p>
              <div className="md:flex mt-5">
                <div className="md:w-1/2 my-2">
                  <h2 className="text-[orange] my-2 font-serif text-[18px]">
                    Address
                  </h2>
                  <p className="text-[14px] md:text-[18px] text-justify md:pr-10">
                    S-357 2nd floor, Block S, Panchsheel Park South, Panchsheel
                    Park, New Delhi, Delhi 110017
                  </p>
                </div>
                <div className="md:w-1/2 my-2">
                  <h2 className="text-[orange] my-2 font-serif text-[18px]">
                    Enquiry
                  </h2>
                  <p className="text-[14px] md:text-[18px] md:text-justify">
                    {" "}
                    Email:{" "}
                    <span className="text-[orange] font-serif">
                      customercare@firstfiddle.in
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-[orange] md:-mt-12 py-6 text-[30px] md:text-[40px] flex justify-center">
            <i class="fa-brands fa-facebook mx-2"></i>
            <i class="fa-brands fa-twitter mx-2"></i>
            <i class="fa-brands fa-instagram mx-2"></i>
          </div>
        </div>
        <div className="bg-black text-[11px] md:text-[16px] h-20 md:h-[100px] text-white text-center flex items-center justify-center ">
          EMPLOYEE POLICIES | PRIVACY POLICY | TERMS AND CONDITIONS
          <br />| BLOG | APP COPYRIGHT © 2024 FIRST FIDDLE F&B PRIVATE LIMITED
        </div>
      </footer>
    </>
  );
}

export default Footer;
