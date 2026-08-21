import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import services from "../data/services";

function ServiceSelection() {
  const navigate = useNavigate();

  const [selectedService, setSelectedService] = useState(1);

  const handleReviewBooking = () => {
    const service = services.find(
      (item) => item.id === selectedService
    );

    navigate("/review", {
      state: {
        service: service,
      },
    });
  };

  return (
    <div className="page">

      {/* Header */}
      <header className="header">

        <div className="brand">
          <div className="brand-icon">T</div>
          <span>TRAABCO</span>
        </div>

        <div className="page-title">
          Book a service
        </div>

        <button className="account-btn">
          ← Back to my account
        </button>

      </header>


      <main className="content">

        {/* Introduction */}
        <section className="intro">

          <h1>
            What can we help you with?
          </h1>

          <p>
            Select the service you need. Not sure?{" "}
            <span>
              Call us on 047 531 0000
            </span>{" "}
            and we'll advise you.
          </p>

        </section>


        {/* Progress */}
        <div className="progress">

          <div className="step active">
            <div className="step-number">
              1
            </div>

            <span>
              Choose service
            </span>
          </div>


          <div className="step">

            <div className="step-number inactive">
              2
            </div>

            <span>
              Pick a date
            </span>

          </div>


          <div className="step">

            <div className="step-number inactive">
              3
            </div>

            <span>
              Profile
            </span>

          </div>

        </div>


        {/* Services */}
        <div className="services-grid">

          {services.map((service) => (

            <div
              key={service.id}
              className={`service-card ${
                selectedService === service.id
                  ? "selected"
                  : ""
              }`}
              onClick={() =>
                setSelectedService(service.id)
              }
            >

              <div className="service-content">

                <div
                  className={`service-icon icon-${service.id}`}
                >
                  {service.icon}
                </div>


                <h2>
                  {service.title}
                </h2>


                <p>
                  {service.description}
                </p>


                <div className="service-bottom">

                  <span className="price">
                    {service.price}
                  </span>


                  {selectedService === service.id ? (

                    <button
                      className="selected-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      Selected
                    </button>

                  ) : (

                    <button
                      className="select-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedService(service.id);
                      }}
                    >
                      Select →
                    </button>

                  )}

                </div>

              </div>

            </div>

          ))}

        </div>


        {/* Bottom Buttons */}
        <div className="actions">

          <button
            className="cancel-btn"
            onClick={() => navigate(-1)}
          >
            Cancel
          </button>


          <button
            className="review-btn"
            onClick={handleReviewBooking}
          >
            Review booking →
          </button>

        </div>

      </main>

    </div>
  );
}

export default ServiceSelection;