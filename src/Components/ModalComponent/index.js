import React, { useState } from "react";
import "./modalComponent.css";
import Modal from "react-modal";
import { ImCancelCircle } from "react-icons/im";

const countries = [
    { name: "Argentina", short: "AR", code: "+54" },
    { name: "Australia", short: "AU", code: "+61" },
    { name: "Austria", short: "AT", code: "+43" },
    { name: "Belgium", short: "BE", code: "+32" },
    { name: "Brazil", short: "BR", code: "+55" },
    { name: "Canada", short: "CA", code: "+1" },
    { name: "Chile", short: "CL", code: "+56" },
    { name: "China", short: "CN", code: "+86" },
    { name: "Colombia", short: "CO", code: "+57" },
    { name: "Denmark", short: "DK", code: "+45" },
    { name: "Egypt", short: "EG", code: "+20" },
    { name: "Finland", short: "FI", code: "+358" },
    { name: "France", short: "FR", code: "+33" },
    { name: "Germany", short: "DE", code: "+49" },
    { name: "Greece", short: "GR", code: "+30" },
    { name: "India", short: "IN", code: "+91" },
    { name: "Indonesia", short: "ID", code: "+62" },
    { name: "Ireland", short: "IE", code: "+353" },
    { name: "Israel", short: "IL", code: "+972" },
    { name: "Italy", short: "IT", code: "+39" },
    { name: "Japan", short: "JP", code: "+81" },
    { name: "Kenya", short: "KE", code: "+254" },
    { name: "Malaysia", short: "MY", code: "+60" },
    { name: "Mexico", short: "MX", code: "+52" },
    { name: "Netherlands", short: "NL", code: "+31" },
    { name: "New Zealand", short: "NZ", code: "+64" },
    { name: "Nigeria", short: "NG", code: "+234" },
    { name: "Norway", short: "NO", code: "+47" },
    { name: "Philippines", short: "PH", code: "+63" },
    { name: "Poland", short: "PL", code: "+48" },
    { name: "Portugal", short: "PT", code: "+351" },
    { name: "Russia", short: "RU", code: "+7" },
    { name: "Saudi Arabia", short: "SA", code: "+966" },
    { name: "Singapore", short: "SG", code: "+65" },
    { name: "South Africa", short: "ZA", code: "+27" },
    { name: "South Korea", short: "KR", code: "+82" },
    { name: "Spain", short: "ES", code: "+34" },
    { name: "Sweden", short: "SE", code: "+46" },
    { name: "Switzerland", short: "CH", code: "+41" },
    { name: "Thailand", short: "TH", code: "+66" },
    { name: "Turkey", short: "TR", code: "+90" },
    { name: "United Arab Emirates", short: "AE", code: "+971" },
    { name: "United Kingdom", short: "UK", code: "+44" },
    { name: "United States", short: "US", code: "+1" },
    { name: "Vietnam", short: "VN", code: "+84" },
];

const ModalComponent = ({ showModal, setShowModal }) => {
    const [selectedCountryCode, setSelectedCountryCode] = useState("");
    const [selectedMonthYear, setSelectedMonthYear] = useState("");

    const handleCancel = () => {
        setShowModal(false);
    };

    const handleCountryChange = (event) => {
        setSelectedCountryCode(event.target.value);
    };

    const handleMonthYearChange = (event) => {
        setSelectedMonthYear(event.target.value);
    };

    const getCurrentMonthYearArray = () => {
        const startDate = new Date();
        const endDate = new Date('2025-12-31');

        const monthYearArray = [];
        let currentDate = startDate;

        while (currentDate <= endDate) {
            const year = currentDate.getFullYear();
            const month = currentDate.getMonth() + 1;

            const monthYearString = `${month < 10 ? `0${month}` : month}/${year}`;
            monthYearArray.push(monthYearString);
            currentDate.setMonth(currentDate.getMonth() + 1);
        }

        return monthYearArray;
    };

    const monthYearArray = getCurrentMonthYearArray();

    return (
        <div>
            <Modal
                isOpen={showModal}
                onRequestClose={() => setShowModal(false)}
                contentLabel="Add Money Modal"
                className="modal"
                overlayClassName="modal-overlay"
            >
                <div className="modal-container">
                    <div className="close-btn" onClick={handleCancel}>
                        <ImCancelCircle style={{ width: "25px", height: "25px" }} />
                    </div>
                    <div className="modal-content">
                        <div className="modal-content-heading">Almost There!</div>
                        <div className="modal-content-subHeading">We need a bit more info to create your itinerary:</div>
                        <input className="content-input" type="text" placeholder="Full Name*" />
                        <input className="content-input" type="email" placeholder="Email*" />
                        <div className="modal-inner-container">
                            <select
                                className="dropdown-input"
                                onChange={handleCountryChange}
                                value={selectedCountryCode}
                            >
                                {countries.map((country, index) => (
                                    <option key={index} value={country.code}>
                                        {country.name} {country.code}
                                    </option>
                                ))}
                            </select>
                            <input className="content-input" type="number" placeholder="Phone*" />
                        </div>
                        <div className="modal-inner-container">
                            <input className="content-input" type="text" placeholder="Duration(Days)" />
                            <select
                                className="dropdown-input"
                                onChange={handleMonthYearChange}
                                value={selectedMonthYear}
                            >
                                <option value="" disabled>When?</option>
                                {monthYearArray.map((monthYear, index) => (
                                    <option key={index} value={monthYear}>
                                        {monthYear}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <select className="content-input">
                            <option>What stage of planning are you in?</option>
                            <option>Still dreaming / researching</option>
                            <option>Definitely traveling, need destination expertise</option>
                            <option>I want to book a trip</option>
                        </select>
                        <button className={`btn content-input`} onClick={handleCancel}>GET MY QUOTE</button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default ModalComponent;
