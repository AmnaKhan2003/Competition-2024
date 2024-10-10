import React, { useState, useEffect } from 'react';
import './formPage.css';

export default function Form() {
  const [deviceType, setDeviceType] = useState('');
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [purchaseYear, setPurchaseYear] = useState('');
  const [condition, setCondition] = useState('');
  const [storage, setStorage] = useState('');
  const [defects, setDefects] = useState([]);
  const [estimatedPrice, setEstimatedPrice] = useState(null); 
  const [priceAccepted, setPriceAccepted] = useState(false); 

  const calculatePrice = () => {
    let basePrice = 0;

    if (deviceType === 'smartphone') basePrice = 300;
    else if (deviceType === 'tablet') basePrice = 400;
    else if (deviceType === 'laptop') basePrice = 700;

    if (brand === 'Apple') basePrice += 200;
    else if (brand === 'Samsung') basePrice += 100;

    if (condition === 'new') basePrice *= 1.2;
    else if (condition === 'used') basePrice *= 0.8;
    else if (condition === 'damaged') basePrice *= 0.5;

    if (storage === '128GB') basePrice += 50;
    else if (storage === '256GB') basePrice += 100;

    basePrice -= defects.length * 50; 

    return basePrice;
  };

  useEffect(() => {
    if (deviceType && brand && condition && storage) {
      const price = calculatePrice();
      setEstimatedPrice(price);
    }
  }, [deviceType, brand, condition, storage, defects]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      deviceType,
      brand,
      model,
      purchaseYear,
      condition,
      storage,
      defects,
      estimatedPrice,
    });
  };

  return (
    <form className="device-form" onSubmit={handleSubmit}>
      <h2>Sell Your Device</h2>

      <div className="form-section">
        <label htmlFor="deviceType">Select Device Type:</label>
        <select id="deviceType" value={deviceType} onChange={(e) => setDeviceType(e.target.value)}>
          <option value="">Choose a device</option>
          <option value="smartphone">Smartphone</option>
          <option value="tablet">Tablet</option>
          <option value="laptop">Laptop</option>
        </select>
      </div>

      <div className="form-section">
        <label htmlFor="brand">Brand:</label>
        <input type="text" id="brand" value={brand} onChange={(e) => setBrand(e.target.value)} required />
      </div>

      <div className="form-section">
        <label>Condition:</label>
        <select value={condition} onChange={(e) => setCondition(e.target.value)} required>
          <option value="">Choose condition</option>
          <option value="new">New</option>
          <option value="used">Used</option>
          <option value="damaged">Damaged</option>
        </select>
      </div>

      <div className="form-section">
        <label>Storage Capacity:</label>
        <select value={storage} onChange={(e) => setStorage(e.target.value)} required>
          <option value="">Choose storage</option>
          <option value="64GB">64GB</option>
          <option value="128GB">128GB</option>
          <option value="256GB">256GB</option>
        </select>
      </div>

      <div className="form-section">
        <label>Defects (if any):</label>
        <label>
          <input type="checkbox" value="screen-crack" onChange={(e) => setDefects(e.target.checked ? [...defects, 'screen-crack'] : defects.filter(d => d !== 'screen-crack'))} /> Screen Crack
        </label>
        <label>
          <input type="checkbox" value="battery-issue" onChange={(e) => setDefects(e.target.checked ? [...defects, 'battery-issue'] : defects.filter(d => d !== 'battery-issue'))} /> Battery Issue
        </label>
      </div>
      
      {estimatedPrice !== null && (
        <div className="estimated-price">
          <h3>Estimated Price: ${estimatedPrice}</h3>
          <label>
            <button type="button" onClick={() => setPriceAccepted(true)}>Accept Price</button>
            <button type="button" onClick={() => setPriceAccepted(false)}>Exit</button>
          </label>
        </div>
      )}

      <button type="submit" disabled={!priceAccepted}>Submit</button>
    </form>
  );
}
