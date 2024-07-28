import React from "react";

function Contact() {
  return (
    <>
      {/* first */}
      <div className="mt-[64px] md:mt-0 bg-[url('https://pn-paul.netlify.app/image/CONTACT-US.jpg')] w-100">
        <h1 className="py-[100px] md:py-[250px] text-2xl md:text-6xl text-white text-center font-[pargue]">
          CONTACT US
        </h1>
      </div>
      {/* Second */}
      <div className="md:flex justify-between my-14">
        <div className="md:w-1/2">
          <h1 className="text-center text-4xl font-thin mb-9">
            SEND US MESSAGE
          </h1>
          <div>
            <form action="">
              <div className="flex justify-center mb-9">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Name*"
                  required
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
        <div className="md:w-1/2 px-14 pt-14 md:pt-0">
          <h1 className="text-4xl mb-5">CONTACT INFO</h1>
          <h4 className="text-2xl text-[orange] mb-1"> Address</h4>
          <p className="font-thin mb-4">
            6, Chanakyapuri Shopping Complex, 48, Malcha Marg, New Delhi 110021
          </p>
          <h4 className="text-2xl text-[orange] mb-1">For Franchise Enquiry</h4>
          <p className="font-thin mb-4">
            MOBILE: +91 9313663486
            <br />
            EMAIL: franchise@firstfiddle.in
          </p>
          <h4 className="text-2xl text-[orange] mb-1">For HR Enquiry</h4>
          <p className="font-thin mb-4">
            MOBILE: +91 9999304427
            <br />
            EMAIL: hr@firstfiddle.in
          </p>
          <h4 className="text-2xl text-[orange] mb-1">For Other Enquiry</h4>
          <p className="font-thin mb-4">
            PHONE: 7676380000
            <br />
            EMAIL: customercare@firstfiddle.in
            <br />
            Open: Monday - Saturday 10:30 - 19:30
          </p>
        </div>
      </div>
    </>
  );
}

export default Contact;
