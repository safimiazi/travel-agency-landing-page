import Container from "./Container";

// components/DomesticRoutes.js
const DomesticRoutes = () => {
    const routes = [
      { from: 'Dhaka', fromAirport: 'Hazrat Shahjalal I...', to: 'Cox\'s Bazar', toAirport: 'Cox\'s Bazar Airport' },
      { from: 'Dhaka', fromAirport: 'Hazrat Shahjalal I...', to: 'Sylhet', toAirport: 'Osmani Internati...' },
      { from: 'Dhaka', fromAirport: 'Hazrat Shahjalal I...', to: 'Jashore', toAirport: 'Jashore Airport' },
      { from: 'Dhaka', fromAirport: 'Hazrat Shahjalal I...', to: 'Chattogram', toAirport: 'Shah Amanat Int...' },
      { from: 'Dhaka', fromAirport: 'Hazrat Shahjalal I...', to: 'Barisal', toAirport: 'Barisal Airport' },
      { from: 'Dhaka', fromAirport: 'Hazrat Shahjalal I...', to: 'Saidpur', toAirport: 'Saidpur Airport' },
    ];
  
    return (
     <div className="py-20">
         <Container>
       <div className="flex flex-col justify-center items-center">
         <h2 className="text-3xl font-bold text-center">Top Domestic & International Routes</h2>
        <p className="text-center mt-2 mb-6 max-w-[700px]">Make your next trip unforgettable with ShareTrip! From business class to economy class flights on international trips or domestic ones, choose from hundreds of airlines.</p>
  
       </div>
        <div className="flex justify-center space-x-4 mb-6">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Domestic</button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded">International</button>
        </div>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {routes.map((route, index) => (
            <div key={index} className="flex items-center justify-between bg-gray-100 p-4 rounded shadow-sm">
              <div>
                <h4 className="font-semibold">{route.from}</h4>
                <p className="text-sm text-gray-500">{route.fromAirport}</p>
              </div>
              <span className="mx-4 text-blue-500">✈️</span>
              <div>
                <h4 className="font-semibold">{route.to}</h4>
                <p className="text-sm text-gray-500">{route.toAirport}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
     </div>
    );
  };
  
  export default DomesticRoutes; 

