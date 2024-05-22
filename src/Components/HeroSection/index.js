import React, { useState } from "react";
import "./heroSection.css";
import ModalComponent from "../ModalComponent";
const continents = {
    "Africa": ["Nigeria", "Egypt", "South Africa", "Kenya"],
    "Asia": ["China", "India", "Japan", "Thailand"],
    "Europe": ["France", "Germany", "Italy", "Spain"],
    "North America": ["Canada", "United States", "Mexico", "Cuba"],
    "South America": ["Brazil", "Argentina", "Colombia", "Chile"],
    "Australia": ["Australia", "New Zealand", "Fiji", "Papua New Guinea"],
    "Antarctica": ["N/A"]
};

const interests = [
    "Adventure & Outdoors",
    "Beaches",
    "Heritage & Culture",
    "Nature & Landscapes",
    "Wildlife & Safaris",
    "Wine & Food"
];

const travelerOptions = [
    "1 traveler",
    "2 travelers",
    "3 travelers",
    "4 travelers",
    "5 travelers",
    "6 travelers",
    "6+ travelers"
];

const budgetOptions = [
    "$4000-$5000",
    "$5000-$6000",
    "$6000-$7000",
    "$7000-$8000",
    "$8000-$10000",
    "$10000+"
];

const HeroSection = () => {
    const [selectedDestination, setSelectedDestination] = useState("");
    const [selectedInterests, setSelectedInterests] = useState("");
    const [selectedTravelers, setSelectedTravelers] = useState("");
    const [selectedBudget, setSelectedBudget] = useState("");
    const [showModal, setShowModal] = useState(false);

    const handleLocationChange = (e) => {
        setSelectedDestination(e.target.value);
    };

    const handleCreateTrip = () =>{
        setShowModal(true);
    }
    return (
        <div className="hero-section">
            <div className="image-container">
                <img src="heroImg1.jpg" alt="heroImg" className="animated-image" />
                <img src="heroImg2.jpg" alt="heroImg" className="animated-image" />
                <img src="heroImg3.jpg" alt="heroImg" className="animated-image" />
                <img src="heroImg4.jpg" alt="heroImg" className="animated-image" />
                <img src="heroImg5.jpg" alt="heroImg" className="animated-image" />
            </div>
            <div className="hero-inner">
                <div className="hero-inner-title">Crafting memorable vacations for 20 years</div>
                <div className="hero-inner-description">Let Our Experts Plan Your Private, Tailor-Made and Secure Tour in 70+ Inspiring Destinations.</div>
                <div className="hero-inner-overlayForm">
                        <select
                            className="destination-dropdown"
                            name="destination"
                            onChange={handleLocationChange}
                            value={selectedDestination}
                        >
                            <option value="" disabled hidden>Where do you want to go?</option>
                            {Object.keys(continents).map((continent) => (
                                <optgroup key={continent} label={continent}>
                                    {continents[continent].map((country) => (
                                        <option key={country} value={`${continent} - ${country}`}>{country}</option>
                                    ))}
                                </optgroup>
                            ))}
                        </select>

                        <select
                            className="interests-dropdown"
                            name="interests"
                            id="interests"
                            value={selectedInterests}
                            onChange={(e) => setSelectedInterests(e.target.value)}
                        >
                            <option value="" disabled hidden>Your Interests?</option>
                            {interests.map((interest) => (
                                <option key={interest} value={interest}>{interest}</option>
                            ))}
                        </select>

                        <select
                            className="travelers-count-dropdown"
                            name="travelers"
                            id="travelers"
                            value={selectedTravelers}
                            onChange={(e) => setSelectedTravelers(e.target.value)}
                        >
                            <option value="" disabled hidden>No. of Travelers</option>
                            {travelerOptions.map((option) => (
                                <option key={option} value={option}>{option}</option>
                            ))}
                        </select>
                        <select
                            className="budget-dropdown"
                            name="budget"
                            id="budget"
                            value={selectedBudget}
                            onChange={(e) => setSelectedBudget(e.target.value)}
                        >
                            <option value="" disabled hidden>Budget Per Person</option>
                            {budgetOptions.map((option) => (
                                <option key={option} value={option}>{option}</option>
                            ))}
                        </select>
                    <div className="create-trip-btn" onClick={handleCreateTrip}>CREATE MY TRIP NOW</div>
                    <ModalComponent showModal={showModal} setShowModal={setShowModal}/>
                </div>
                <div className="create-trip-btn-responsive" onClick={handleCreateTrip}>CREATE MY TRIP NOW</div>
            </div>
            <div className="hero-description">Experience a completely customized and flexible trip of a lifetime with experts you can trust. We are an award-winning team that offers round-the-clock local support during your trip and 100% financial protection so you know you are in safe hands. That’s why over 60,000+ enchanted guests vouch for us – because with us, you can dream, book and travel carefree.</div>
        </div>
    );
};

export default HeroSection;
