import React from "react";
import Container from "./Container";

const BestHotels = () => {
  return (
    <div className="py-20">
      <Container>
        <div className="space-y-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-start">
              Best Hotels for Your Next Trip
            </h2>
            <p className="text-[15px] max-w-[700px]">
              Luxurious or budget-friendly hotels, villas or resorts, browse
              accommodations at ShareTrip that meet the need. Book Long-term or
              short-term accommodation from our hotel deals
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
           
           
            <div className="relative group h-[350px] min-w-[224px] overflow-hidden bg-slate-400 rounded-md">
              <img
                src="https://shorturl.at/YBFp1"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                alt=""
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/75 to-transparent p-4">
                <h2 className="text-xl font-bold text-white transition-transform duration-500 group-hover:translate-y-[-3px]">
                  Cumilla
                </h2>
                <p className="text-white transition-transform duration-500 group-hover:translate-y-[-3px]">
                  100 Hotels Available
                </p>
              </div>
            </div>
           
            <div className="relative group h-[350px] min-w-[224px] overflow-hidden bg-slate-400 rounded-md">
              <img
                src="https://shorturl.at/YBFp1"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                alt=""
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/75 to-transparent p-4">
                <h2 className="text-xl font-bold text-white transition-transform duration-500 group-hover:translate-y-[-3px]">
                  Cumilla
                </h2>
                <p className="text-white transition-transform duration-500 group-hover:translate-y-[-3px]">
                  100 Hotels Available
                </p>
              </div>
            </div>
           
            <div className="relative group h-[350px] min-w-[224px] overflow-hidden bg-slate-400 rounded-md">
              <img
                src="https://shorturl.at/YBFp1"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                alt=""
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/75 to-transparent p-4">
                <h2 className="text-xl font-bold text-white transition-transform duration-500 group-hover:translate-y-[-3px]">
                  Cumilla
                </h2>
                <p className="text-white transition-transform duration-500 group-hover:translate-y-[-3px]">
                  100 Hotels Available
                </p>
              </div>
            </div>
           
            <div className="relative group h-[350px] min-w-[224px] overflow-hidden bg-slate-400 rounded-md">
              <img
                src="https://shorturl.at/YBFp1"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                alt=""
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/75 to-transparent p-4">
                <h2 className="text-xl font-bold text-white transition-transform duration-500 group-hover:translate-y-[-3px]">
                  Cumilla
                </h2>
                <p className="text-white transition-transform duration-500 group-hover:translate-y-[-3px]">
                  100 Hotels Available
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BestHotels;
