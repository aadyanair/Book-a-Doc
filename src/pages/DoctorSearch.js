// import React, { useState } from 'react';
import React, { useState, useEffect } from "react";
import axios from "axios";

const DoctorSearch = () => {
    // const [items, setItems] = useState([]);
    const [specialty, setSpecialty] = useState('');
    const [location, setLocation] = useState('');
    const [doctors, setDoctors] = useState([]);

    const handleSearch = async () => {
       
        

        const response = await fetch(`http://localhost:3000/findDoctor?location=${encodeURIComponent(location)}&specialty=${encodeURIComponent(specialty)}`);
        const data = await response.json();

        // Format the fetched data
        const fetchedDoctors = data.map((doctor, index) => ({
            id: doctor._id,
            name: doctor.name,
            specialty: doctor.specialty,
            location: doctor.location,
            availableSlots: doctor.availableSlots,
        }));
        console.log(fetchedDoctors);
        setDoctors(fetchedDoctors);
    };

    const handleBook = (doctorId, slot) => {
        console.log(`Booking doctor with ID: ${doctorId} for slot: ${slot}`);

    };

    // useEffect(() => {
    //     axios
    //         .get("http://localhost:3000/api/items")
    //         .then((response) => setItems(response.data))
    //         .catch((error) => console.error(error));
    // }, []);

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
              {/* {items.map((item) => (
                <li key={item._id}>
                  <h3>{item.specialty}</h3>
                  <p>{item.location}</p>
                </li>
              ))} */}
              hello
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
                  <option value="Cardiology">Cardiology</option>
                  <option value="Dermatology">Dermatology</option>
                  <option value="Neurology">Neurology</option>
                  <option value="Gynecology">Gynecology</option>
                  <option value="Ophthalmology">Ophthalmology</option>
                  <option value="Orthopedic">Orthopedic</option>
                  <option value="Pediatrics">Pediatrics</option>
                  <option value="Radiology">Radiology</option>
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
                  <option value="Delhi">Delhi</option>
                  <option value="himachal">Himachal</option>
                  <option value="punjab">Punjab</option>
                  <option value="shimla">Shimla</option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
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