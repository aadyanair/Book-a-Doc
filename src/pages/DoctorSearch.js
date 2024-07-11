import React, { useState } from 'react';
import IndianStates from '../components/IndianStates';

const DoctorSearch = () => {
    const [specialty, setSpecialty] = useState('');
    const [location, setLocation] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Searching for doctors with specialty: ${specialty} in location: ${location}");
        
    };

    return (
      <div>
        <style>{`
                .container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 60px 20px;
                }
                .form-container {
                    background-color: white;
                    border-radius: 10px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                    padding: 30px;
                    max-width: 500px;
                    width: 100%;
                    text-align: center;
                }
                .title {
                    font-size: 2rem;
                    font-weight: bold;
                    color: #333;
                    margin-bottom: 20px;
                }
                .form {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }
                .form-group {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                }
                .form-label {
                    font-size: 1rem;
                    font-weight: bold;
                    color: #555;
                    margin-bottom: 5px;
                }
                .form-input {
                    width: 100%;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    font-size: 1rem;
                    color: #333;
                    outline: none;
                    transition: border-color 0.3s ease;
                }
                .form-input:focus {
                    border-color: #1e3c72;
                }
                .form-button {
                    width: 100%;
                    padding: 10px;
                    background-color: #1e3c72;
                    color: white;
                    font-size: 1rem;
                    font-weight: bold;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    transition: background-color 0.3s ease;
                }
                .form-button:hover {
                    background-color: #2a5298;
                }
            `}</style>
        <div className="container">
          <div className="form-container">
            <h2 className="title">Find a Doctor</h2>
            <form onSubmit={handleSearch} className="form">
              <div className="form-group">
                <label htmlFor="specialty" className="form-label">
                  Specialty:
                </label>
                <input
                  type="text"
                  id="specialty"
                  value={specialty}
                  onChange={(e) => setSpecialty(e.target.value)}
                  placeholder="Enter specialty"
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="location" className="form-label">
                  Location:
                </label>
                <select className="roundedBlueBorder form-control" name="location" id="states">
                  <option value="Select">Select State</option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chandigarh">Chandigarh</option>
                  <option value="Chhattisgarh">Chhattisgarh</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Goa">Goa</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Manipur">Manipur</option>
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="Mizoram">Mizoram</option>
                  <option value="Nagaland">Nagaland</option>
                  <option value="Odisha">Odisha</option>
                  <option value="Puducherry">Puducherry</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Sikkim">Sikkim</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Tripura">Telangana</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Uttarakhand">Uttarakhand</option>
                </select>
              </div>
              <div className="form-group">
                <button type="submit" className="form-button">
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default DoctorSearch;