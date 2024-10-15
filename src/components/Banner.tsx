import Head from "next/head";
import Container from "./Container";

export default function Banner() {
  return (
    <div>
      {/* Banner section */}
      <section className="py-10 px-4">
        <div
          className="text-center bg-cover bg-no-repeat  h-80"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
            padding: "4rem 0",
          }}
        >
          <Container>
            <div className="text-white w-full">
              <h1 className="text-4xl text-start font-bold mb-2">Welcome to ShareTrip!</h1>
              <p className="text-lg text-start mb-6">
                Find Flights, Hotels, Visa & Holidays
              </p>
              <div className="bg-white inline-block w-full p-6 rounded-lg  shadow-md">
                <div className="flex justify-center mb-4 space-x-4">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded">
                    Flight
                  </button>
                  <button className="bg-gray-200 text-black px-4 py-2 rounded">
                    Hotel
                  </button>
                  <button className="bg-gray-200 text-black px-4 py-2 rounded">
                    Shop
                  </button>
                </div>
                <form className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label className="mb-2 text-gray-600">From</label>
                    <input
                      type="text"
                      placeholder="Dhaka (DAC)"
                      className="border p-2 rounded"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="mb-2 text-gray-600">To</label>
                    <input
                      type="text"
                      placeholder="Cox's Bazar (CXB)"
                      className="border p-2 rounded"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="mb-2 text-gray-600">Departure</label>
                    <input type="date" className="border p-2 rounded" />
                  </div>
                  <div className="flex flex-col">
                    <label className="mb-2 text-gray-600">Return</label>
                    <input type="date" className="border p-2 rounded" />
                  </div>
                </form>
                <button
                  type="submit"
                  className="bg-orange-500 text-white mt-4 px-6 py-2 rounded"
                >
                  Search
                </button>
              </div>
            </div>
          </Container>
        </div>
      </section>
    </div>
  );
}
