import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function ReviewBooking() {
  const navigate = useNavigate();
  const location = useLocation();

  // Get information passed from previous pages
  const service = location.state?.service;

  const selectedDate = location.state?.date || "Tuesday 26 May 2026";
  const selectedTime = location.state?.time || "10:00 – 11:30 (90 min)";

  const [notes, setNotes] = useState(
    "Setting up chart of accounts for new spaza extension. Also need help with June VAT return."
  );

  // If user opens /review directly
  if (!service) {
    return (
      <div className="review-error">
        <div className="review-error-card">
          <h1>No booking found</h1>

          <p>
            Please select a service before reviewing your booking.
          </p>

          <button
            className="primary-button"
            onClick={() => navigate("/")}
          >
            Choose a service
          </button>
        </div>
      </div>
    );
  }

  const handleBackToDate = () => {
    navigate("/date", {
      state: {
        service: service,
        date: selectedDate,
        time: selectedTime,
      },
    });
  };

  const handleChangeService = () => {
    navigate("/");
  };

  const handleSubmit = () => {
    navigate("/confirmation", {
      state: {
        service: service,
        date: selectedDate,
        time: selectedTime,
        notes: notes,
      },
    });
  };

  return (
    <div className="review-booking-page">

      {/* =========================
          HEADER
      ========================= */}

      <header className="booking-header">

        <div className="booking-brand">
          TRAABCO
        </div>

        <div className="booking-header-divider">
          |
        </div>

        <div className="booking-header-title">
          Book a service
        </div>

        <button
          className="back-account"
          onClick={() => navigate("/")}
        >
          ← Back to services
        </button>

      </header>


      {/* =========================
          MAIN CONTENT
      ========================= */}

      <main className="review-main">

        {/* =========================
            PROGRESS STEPS
        ========================= */}

        <div className="booking-progress">

          {/* Step 1 */}
          <div className="progress-item completed">

            <div className="progress-circle">
              ✓
            </div>

            <span>
              Service
            </span>

          </div>


          {/* Line */}
          <div className="progress-line"></div>


          {/* Step 2 */}
          <div className="progress-item completed">

            <div className="progress-circle">
              ✓
            </div>

            <span>
              Date & time
            </span>

          </div>


          {/* Line */}
          <div className="progress-line"></div>


          {/* Step 3 */}
          <div className="progress-item current">

            <div className="progress-circle">
              3
            </div>

            <span>
              Review
            </span>

          </div>

        </div>


        {/* =========================
            PAGE TITLE
        ========================= */}

        <section className="review-heading">

          <h1>
            Review your booking
          </h1>

          <p>
            Please check the details below. Traabco will confirm your
            booking within 24 hours of submission.
          </p>

        </section>


        {/* =========================
            TWO COLUMN LAYOUT
        ========================= */}

        <div className="review-layout">

          {/* =========================
              LEFT COLUMN
          ========================= */}

          <div className="review-left">

            {/* BOOKING SUMMARY */}
            <section className="booking-summary-section">

              <h2>
                BOOKING SUMMARY
              </h2>


              <div className="summary-grid">

                <div className="summary-label">
                  Business
                </div>

                <div className="summary-value">
                  Kaya Spaza Shop
                </div>


                <div className="summary-label">
                  Service
                </div>

                <div className="summary-value">
                  {service.title}
                </div>


                <div className="summary-label">
                  Date
                </div>

                <div className="summary-value">
                  {selectedDate}
                </div>


                <div className="summary-label">
                  Time
                </div>

                <div className="summary-value">
                  {selectedTime}
                </div>


                <div className="summary-label">
                  Location
                </div>

                <div className="summary-value">
                  83 Madeira St, Mthatha
                </div>


                <div className="summary-label">
                  Your consultant
                </div>

                <div className="summary-value">
                  L. Takshana (Director)
                </div>


                <div className="summary-label fee-label">
                  Fee
                </div>

                <div className="summary-value fee">
                  R 2 200.00
                </div>

              </div>

            </section>


            {/* NOTES */}
            <section className="notes-section">

              <h2>
                NOTES FOR YOUR CONSULTANT (OPTIONAL)
              </h2>

              <label>
                Is there anything specific you need help with in this session?
              </label>

              <textarea
                value={notes}
                onChange={(event) =>
                  setNotes(event.target.value)
                }
                placeholder="Enter any notes for your consultant..."
              />

              <p className="notes-helper">
                Your consultant will review these notes before the session.
              </p>

            </section>


            {/* BACK BUTTON */}
            <div className="back-date-container">

              <button
                className="back-date-button"
                onClick={handleBackToDate}
              >
                ← Back to date
              </button>

            </div>

          </div>


          {/* =========================
              RIGHT COLUMN
          ========================= */}

          <aside className="review-right">

            {/* WHAT HAPPENS NEXT */}
            <section className="next-section">

              <h2>
                What happens next
              </h2>


              <div className="next-item">

                <div className="next-number">
                  1
                </div>

                <span>
                  We receive your request and review availability
                </span>

              </div>


              <div className="next-item">

                <div className="next-number">
                  2
                </div>

                <span>
                  You receive a confirmation email within 24 hours
                </span>

              </div>


              <div className="next-item">

                <div className="next-number">
                  3
                </div>

                <span>
                  Attend your session at 83 Madeira St, Mthatha
                </span>

              </div>


              <div className="next-item">

                <div className="next-number">
                  4
                </div>

                <span>
                  Fee is payable on the day by EFT or cash
                </span>

              </div>

            </section>


            {/* CHANGE BOOKING */}
            <section className="change-section">

              <h3>
                Need to change something?
              </h3>

              <p>
                Go back and update your service or date
                before confirming.
              </p>


              <button
                onClick={handleChangeService}
              >
                ← Change service
              </button>


              <button
                onClick={handleBackToDate}
              >
                ← Change date
              </button>

            </section>


            {/* QUESTIONS */}
            <section className="questions-section">

              <h3>
                Questions?
              </h3>

              <p>
                Call us on{" "}
                <a href="tel:0475310000">
                  047 531 0000
                </a>{" "}
                or email
              </p>

              <a href="mailto:info@traabco.co.za">
                info@traabco.co.za
              </a>

            </section>


            {/* SUBMIT */}
            <button
              className="submit-booking-button"
              onClick={handleSubmit}
            >
              Submit booking request
            </button>

          </aside>

        </div>

      </main>

    </div>
  );
}

export default ReviewBooking;