// import React, { useState } from 'react';
import React, { useState, useEffect } from "react";
import axios from "axios";

const DoctorSearch = () => {
    const [items, setItems] = useState([]);
    const [specialty, setSpecialty] = useState('');
    const [location, setLocation] = useState('');
    const [doctors, setDoctors] = useState([]);

    const handleSearch = async (e) => {
        e.preventDefault();
        console.log(`Searching for doctors with specialty: ${specialty} in location: ${location}`);

        const fetchedDoctors = [
            { id: 1, name: 'Dr. Naveen', specialty: specialty, location: location, availableSlots: ['9am', '10am', '11am', '12pm'] },
            { id: 2, name: 'Dr. Aadiya', specialty: specialty, location: location, availableSlots: ['2pm', '3pm', '4pm', '5pm'] },

        ];
        setDoctors(fetchedDoctors);
    };

    const handleBook = (doctorId, slot) => {
        console.log(`Booking doctor with ID: ${doctorId} for slot: ${slot}`);

    };

    useEffect(() => {
        axios
            .get("/api/items")
            .then((response) => setItems(response.data))
            .catch((error) => console.error(error));
    }, []);

    return (
      <div>
        <style>{`
                .container {
                    min-height: 100vh;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 20px;
                }
                .form-container {
                    background-color: white;
                    border-radius: 10px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                    padding: 30px;
                    max-width: 500px;
                    width: 100%;
                    text-align: center;
                    margin-bottom: 20px;
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
                .form-input, .form-select {
                    width: 100%;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    font-size: 1rem;
                    color: #333;
                    outline: none;
                    transition: border-color 0.3s ease;
                }
                .form-input:focus, .form-select:focus {
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
                .cards-container {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 20px;
                    justify-content: center;
                }
                .card {
                    background-color: white;
                    border-radius: 10px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                    padding: 20px;
                    width: 300px;
                    text-align: center;
                }
                .card-title {
                    font-size: 1.5rem;
                    font-weight: bold;
                    color: #333;
                    margin-bottom: 10px;
                }
                .card-specialty, .card-location {
                    font-size: 1rem;
                    color: #555;
                    margin-bottom: 10px;
                }
                .time-slot {
                    display: inline-block;
                    padding: 5px 10px;
                    margin: 5px;
                    background-color: #1e3c72;
                    color: white;
                    border-radius: 5px;
                    cursor: pointer;
                    transition: background-color 0.3s ease;
                }
                .time-slot:hover {
                    background-color: #2a5298;
                }
                .book-button {
                    margin-top: 10px;
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
                .book-button:hover {
                    background-color: #2a5298;
                }
            `}</style>
        <div className="container">
          <div className="form-container">
            <h2 className="title">Find a Doctor</h2>
            <h2>
              {items.map((item) => (
                <li key={item._id}>
                  <h3>{item.speciality}</h3>
                  <p>{item.location}</p>
                </li>
              ))}
            </h2>
            <form onSubmit={handleSearch} className="form">
              <div className="form-group">
                <label htmlFor="specialty" className="form-label">
                  Specialty:
                </label>
                <select
                  id="specialty"
                  value={specialty}
                  onChange={(e) => setSpecialty(e.target.value)}
                  className="form-select"
                >
                  <option value="">Select specialty</option>
                  <option value="dermatology">Dermatology</option>
                  <option value="general surgery">General Surgery</option>
                  <option value="dental">Dental</option>
                  <option value="eye">Eye</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="location" className="form-label">
                  Location:
                </label>
                <select
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="form-select"
                >
                  <option value="">Select location</option>
                  <option value="delhi">Delhi</option>
                  <option value="himachal">Himachal</option>
                  <option value="punjab">Punjab</option>
                  <option value="shimla">Shimla</option>
                </select>
              </div>
              <div className="form-group">
                <button type="submit" className="form-button">
                  Search
                </button>
              </div>
            </form>
          </div>
          <div className="cards-container">
            {doctors.map((doctor) => (
              <div key={doctor.id} className="card">
                <div className="card-title">{doctor.name}</div>
                <div className="card-specialty">
                  Specialty: {doctor.specialty}
                </div>
                <div className="card-location">Location: {doctor.location}</div>
                <div>
                  {doctor.availableSlots.map((slot) => (
                    <div
                      key={slot}
                      className="time-slot"
                      onClick={() => handleBook(doctor.id, slot)}
                    >
                      {slot}
                    </div>
                  ))}
                </div>
                <button className="book-button">Book Doctor</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default DoctorSearch;