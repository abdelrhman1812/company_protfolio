"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, MoveRight, PhoneIcon } from "lucide-react";
import Link from "next/link";
const AppointmentForm = () => {
  return (
    <div className="container mx-auto px-4 py-14 relative">
      <div className="grid p-8 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <div className="space-y-8">
          <div>
            <h2 className="text-[24px] md:text-[32px] text-secondary font-bold mb-4">
              Get free marketing consultation today
            </h2>
            <p className="text-lightGray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolor magnaaliqua.
            </p>
          </div>

          <div className="space-y-6">
            {/* Call Us */}
            <div className="flex items-start space-x-4 border-b border-b-gray-300p pb-5">
              <div className="bg-[#1273eb] p-3 rounded-lg ">
                <PhoneIcon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Call Us</h3>
                <p className="text-lightGray">0100803461</p>
              </div>
            </div>

            {/* E-mail */}
            <div className="flex items-start space-x-4 border-b border-b-gray-300p pb-5">
              <div className="bg-[#1273eb] p-3 rounded-lg">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">E-mail</h3>
                <p className="text-lightGray">abdelrhmanali1812@gamil.com</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start space-x-4 border-b border-b-gray-300p pb-5">
              <div className="bg-[#1273eb] p-3 rounded-lg">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Address</h3>
                <p className="text-lightGray">Mansoura</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4 pt-4">
            {["Facebook", "Twitter", "Linkedin", "Skype", "Pinterest"].map(
              (social) => (
                <Link
                  key={social}
                  href="/"
                  className="shadow px-3 py-2 hover:bg-[#1273eb] hover:text-white rounded transition duration-500 ease-in-out"
                >
                  {social}
                </Link>
              )
            )}
          </div>
        </div>

        {/* Right Column */}
        <div className="bg-white p-9 rounded-lg shadow-md">
          <h2 className="text-lightGray font-bold mb-2">GET IN TOUCH</h2>
          <p className="text-[24px] md:text-[32px] text-secondary font-bold mb-4">
            Free consultation
          </p>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                placeholder="Name"
                className="bg-[#EFF0F6] outline-none focus:border-[#1273eb] py-4 pl-4 rounded-md"
              />
              <input
                placeholder="Phone"
                className="bg-[#EFF0F6] outline-none focus:border-[#1273eb] py-4 pl-4 rounded-md"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="email"
                placeholder="Email"
                className="bg-[#EFF0F6] outline-none focus:border-[#1273eb] py-4 pl-4 rounded-md"
              />
              <input
                placeholder="Website"
                className="bg-[#EFF0F6] outline-none focus:border-[#1273eb] py-4 pl-4 rounded-md"
              />
            </div>
            <Textarea
              placeholder="How can we help"
              className="min-h-[150px] bg-[#EFF0F6]"
            />
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="appointment" />
                <label
                  htmlFor="appointment"
                  className="text-sm flex gap-1 items-center font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  <span className="text-lightGray">I agree to the</span>
                  <span className="text-[#1273eb]">Terms</span>
                  <span className="text-lightGray">and</span>
                  <span className="text-[#1273eb]">conditions</span>
                </label>
              </div>
              <Button
                type="submit"
                className="w-[200px] bg-[#1273eb] hover:bg-[#1273eb] text-white py-6 text-lg"
              >
                <span>Submit Now</span>
                <MoveRight />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AppointmentForm;
