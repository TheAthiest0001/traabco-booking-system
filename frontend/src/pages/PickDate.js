import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function PickDate() {

  const navigate = useNavigate();

  const location = useLocation();

  const service = location.state?.service;

  const [selectedDate, setSelectedDate] = useState("");


  if (!service) {

    return (
      <div className="review-page">

        <div className="review-container">

          <h1>
            No booking found
          </h1>

          <p className="review-subtitle">
            Please select a service first.
          </p>

          <button
            className="review-btn"
            onClick={() => navigate("/")}
          >
            Choose a service
          </button>

        </div>

      </div>
    );
  }


  const handleContinue = () => {

    if (!selectedDate) {
      alert("Please select a date.");
      return;
    }

    navigate("/profile", {
      state: {
        service: service,
        date: selectedDate,
      },
    });
  };


  return (
    <div className="page">

      {/* Header */}
      <header className="header">

        <div className="brand">

          <div className="brand-icon">
            T
          </div>

          <span>
            TRAABCO
          </span>

        </div>


        <div className="page-title">
          Pick a date
        </div>


        <button
          className="account-btn"
          onClick={() => navigate("/review", {
            state: {
              service: service
            }
          })}
        >
          ← Back
        </button>

      </header>


      <main className="review-page">

        <div className="review-container">

          {/* Progress */}
          <div className="review-progress">

            <div className="review-step completed">

              <div className="review-number">
                ✓
              </div>

              <span>
                Choose service
              </span>

            </div>


            <div className="review-step active">

              <div className="review-number">
                2
              </div>

              <span>
                Pick a date
              </span>

            </div>


            <div className="review-step">

              <div className="review-number">
                3
              </div>

              <span>
                Profile
              </span>

            </div>

          </div>


          <h1>
            Pick a date
          </h1>


          <p className="review-subtitle">
            Select a date for your{" "}
            <strong>
              {service.title}
            </strong>{" "}
            booking.
          </p>


          {/* Service */}
          <div className="selected-service">

            <div
              className={`service-icon icon-${service.id}`}
            >
              {service.icon}
            </div>


            <div className="selected-service-info">

              <h2>
                {service.title}
              </h2>

              <strong>
                {service.price}
              </strong>

            </div>

          </div>


          {/* Date */}
          <div className="date-placeholder">

            <h2>
              Select your preferred date
            </h2>


            <input
              type="date"
              className="date-input"
              value={selectedDate}
              onChange={(e) =>
                setSelectedDate(e.target.value)
              }
            />

          </div>


          {/* Buttons */}
          <div className="review-actions">

            <button
              className="back-btn"
              onClick={() =>
                navigate("/review", {
                  state: {
                    service: service
                  }
                })
              }
            >
              ← Back
            </button>


            <button
              className="review-btn"
              onClick={handleContinue}
            >
              Continue →
            </button>

          </div>

        </div>

      </main>

    </div>
  );
}

export default PickDate;