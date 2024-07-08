import React, { useState } from 'react';

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
                            <label htmlFor="specialty" className="form-label">Specialty:</label>
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
                            <label htmlFor="location" className="form-label">Location:</label>
                            <input
                                type="text"
                                id="location"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                placeholder="Enter location"
                                className="form-input"
                            />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="form-button">Search</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default DoctorSearch;