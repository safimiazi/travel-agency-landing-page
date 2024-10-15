"use client";
import React, { useState, useEffect } from "react";
import Container from "./Container";

const offers = [
  {
    title: "Extra 5% discount on USD ",
    description: "Extra 5% discount on USD ",
  },
  {
    title: "Up to 75% Savings",
    description: "Domestic Hotels and Resorts with ",
  },
  {
    title: "Up to 12% Savings",
    description: "On Flights & Holiday Packages",
  },

  {
    title: "Buy One Get One Free",
    description: "On select holiday packages",
  },
  {
    title: "Free Travel Insurance",
    description: "With every international booking",
  },
  {
    title: "Up to 12% Savings",
    description: "On Flights & Holiday Packages",
  },

  {
    title: "Buy One Get One Free",
    description: "On select holiday packages",
  },
  {
    title: "Free Travel Insurance",
    description: "With every international booking",
  },
  {
    title: "Up to 12% Savings",
    description: "On Flights & Holiday Packages",
  },

  {
    title: "Buy One Get One Free",
    description: "On select holiday packages",
  },
  {
    title: "Free Travel Insurance",
    description: "With every international booking",
  },
];

const ExclusiveOffers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const offersToShow = 3; // Number of offers to show at a time

  const nextSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % (offers.length - offersToShow + 1)
    ); // Adjust for smooth cycling
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 px-4 mt-48">
      <Container>
        <div>
          <h2 className="text-3xl font-bold text-start mb-8">
            Exclusive Offers
          </h2>
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{
                transform: `translateX(-${
                  (100 / offersToShow) * currentIndex
                }%)`,
              }}
            >
              {offers.map((offer, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 p-4"
                >
                  <div className="bg-blue-100 relative p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105">
                    <h3 className="text-xl font-semibold text-blue-600 mb-4">
                      {offer.title}
                    </h3>
                    <p className="text-sm text-gray-700 mb-4">
                      {offer.description}
                    </p>
                    <a
                      href="#"
                      className="bg-blue-600 text-white px-4 py-2 rounded"
                    >
                      View Details
                    </a>

                    <div className="absolute inset-0 flex items-center z-50 justify-center transition-transform transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 bg-blue-100 rounded-lg shadow-lg p-6">
                      <h3 className="text-xl font-semibold text-blue-600 mb-4">
                        mohibulla
                      </h3>
                      <p className="text-sm text-gray-700 mb-4">
                        {offer.description}
                      </p>
                      <a
                        href="#"
                        className="bg-blue-600 text-white px-4 py-2 rounded"
                      >
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
             {/* Hero Section */}
      <div className="relative flex items-center h-80 my-12 justify-center rounded-md">
        <img
          src="https://images.pexels.com/photos/14608968/pexels-photo-14608968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Business Class"
          className="object-cover h-full w-full rounded-md"
        />
        <div className="absolute rounded-md top-0 right-0 bottom-0 left-0 bg-gradient-to-r from-black/50 to-transparent flex items-center justify-end px-6">
          <div className="text-white space-y-4 max-w-md">
            <h2 className="text-3xl font-bold">Experience Premium Service</h2>
            <p className="text-xl">
              on Your Business Class Trips
            </p>
            <ul className="space-y-2">
              <li>✓ Dedicated Travel Manager</li>
              <li>✓ EMI Facility with Credit Card</li>
              <li>✓ Ancillary Services</li>
              <li>✓ Home Service</li>
            </ul>
          </div>
        </div>
      </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ExclusiveOffers;
