
import React, { useState } from 'react';
import Navbar from '../Pages/Navbar';
import Footer from '../shared/Footer';
const Tracker = () => {
    const [trackingCode, setTrackingCode] = useState('');
  const [trackingResult, setTrackingResult] = useState(null);

  const handleTrackingCodeChange = (e) => {
    setTrackingCode(e.target.value);
  };

  const handleTrackButtonClick = () => {
    const sampleTrackingResult = {
      status: 'In Transit',
      location: 'Los Angeles, CA',
      estimatedDelivery: 'September,10, 2023',
    };

    setTrackingResult(sampleTrackingResult);
  };
  return (
    <>
       <Navbar/>
    <div className="container mx-auto mt-8 w-[860px]">
    <div className="bg-white p-4 rounded shadow-lg my-16">
      <h1 className="text-2xl font-semibold mb-4">Track Your Shipment</h1>
      <div className="mb-4">
        <input
          type="text"
          className="w-full px-4 py-2 border rounded shadow"
          placeholder="Enter Tracking Code"
          value={trackingCode}
          onChange={handleTrackingCodeChange}
        />
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={handleTrackButtonClick}
      >
        Track
      </button>
      {trackingResult && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-2">Tracking Result</h2>
          <p>Status: {trackingResult.status}</p>
          <p>Location: {trackingResult.location}</p>
          <p>Estimated Delivery: {trackingResult.estimatedDelivery}</p>
        </div>
      )}
    </div>
  </div>
  <Footer/>
    </>
    
  )
}

export default Tracker