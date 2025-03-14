import React from "react";

function Footer() {
  return (
    <div>
      <div className="flex flex-row justify-around mt-10 mb-20">
        <div>HeyDoc!</div>
        <div>
          <div>
            <strong>Company</strong>
          </div>
          <ul>
            <li>Home</li>
            <li>Faq's</li>
          </ul>
        </div>
        <div>
          <div>
            <strong>Quick Login</strong>
          </div>
          <ul>
            <li>Patients</li>
            <li>Partners</li>
            <li>Doctors</li>
          </ul>
        </div>
        <div>
          <div>
            <strong>Services</strong>
          </div>
          <ul>
            <li>Free Instant Consultation</li>
            <li>Specialist Video Consultation</li>
            <li>Book Hospital Appointment</li>
          </ul>
        </div>
        <div>
          <div>
            <strong>GET IN TOUCH</strong>
          </div>
          <ul>
            <li>Banepa-4, Nala, Kavre</li>
            <li>9812345768</li>
            <li>heydoc@gmail.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
