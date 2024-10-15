import React from "react";
import Container from "./Container";

const FindHoliday = () => {
  return (
    <div
      className="py-20"
      style={{
        background:
          "linear-gradient(90deg, rgba(0,36,23,0.15309873949579833) 0%, rgba(121,96,9,0.1923144257703081) 35%, rgba(255,203,0,0.17270658263305327) 100%)",
      }}
    >
      <Container>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between md:gap-6 gap-4">
          <div className="space-y-1">
            <h2 className="text-3xl font-bold text-center md:text-start">
              Members can save on lifestyle
            </h2>
            <p className="text-center md:text-start">
              Enjoy privileges such as exclusive flight prices, unbelievable
              discounts on thousands of hotels, and much more.
            </p>
          </div>

          <div className="flex justify-center md:justify-start">
            <button className="px-4 py-2 max-w-64 bg-orange-400 text-white rounded-full transition-transform duration-300 hover:scale-105">
              Find Holiday Savings
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FindHoliday;
