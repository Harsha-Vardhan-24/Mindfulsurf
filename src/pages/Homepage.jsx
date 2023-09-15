import React from "react";
import mentalhealth from "../assests/mentalhealth.png";
import addiction from "../assests/addiction.png";
import what from "../assests/what.png";
import aboutus from "../assests/aboutus.png";
import contactus from "../assests/contactus.png";
import { BsArrowDownSquareFill } from "react-icons/bs";
import "../index.css";

export default function Homepage() {
  return (
    <main>
      <header>
        <h1>Mindfulsurf</h1>
        <nav>
          <h1>About</h1>
          <h1>Contact</h1>
          <button>Download</button>
        </nav>
      </header>
      <section className="hero-1">
        <h1 className="main-text">
          Navigate the web with <span className="underline">purpose</span>
        </h1>
        <img className="featured-img" src={mentalhealth} />
      </section>
      <div className="center">
        <BsArrowDownSquareFill />
      </div>
      <div className="hero-2">
        <h1>introducing mindfulsurf</h1>
        <p>
          Introducing our web browser extension designed to help you regain
          focus and eliminate online distractions, from social media to various
          time-wasting websites. With our extension, you can take control of
          your online experience and boost your productivity by curbing access
          to these distractions
        </p>
      </div>
      <section className="hero-1">
        <img className="featured-img" src={addiction} />
        <div className="text-increase">
          <h1 className="main-text">modern day web</h1>
          <h2>
            In today's digital landscape, distractions abound, with social media
            alone consuming an alarming{" "}
          </h2>
          <ul>
            <li>151 minutes daily (2.5 hours)</li>
            <li>totaling 15 hours weekly</li>
            <li>an astonishing 75 hours monthly</li>
            <li>this adds up to a staggering 900 hours</li>
          </ul>
        </div>
      </section>
      <section className="hero-1 reverse">
        <div className="text-increase">
          <h1 className="main-text">Features</h1>
          <h2>
            By blocking websites, you can increase your productivity, improve
            your focus, and create a digital environment that aligns with your
            goals, allowing you to unlock your full potential and make the most
            of your time online
          </h2>
          <h2 className="underline hero-gap">
            Users who use content blockers will save up to 30 mins to several
            hours per day
          </h2>
        </div>
        <img className="featured-img" src={what} />
      </section>
      <section className="hero-1">
        <img className="featured-img" src={aboutus} />
        <div className="text-increase">
          <h1 className="main-text">About us</h1>
          <h2>
            Hey there, I'm Harsha Vardhan, and I've experienced firsthand the
            challenges of excessive phone usage. That's why I came up with the
            idea for this extension. It's designed to help you regain control by
            blocking websites, social media, and more – all in the pursuit of a
            more focused and productive digital life.
          </h2>
        </div>
      </section>
      <section className="hero-1 reverse">
        <div className="text-increase">
          <h1 className="main-text">Contact</h1>
          <h2>
            wanna get in touch and get up to date updates from mindfulsurf
          </h2>
          <div className="get-data">
            <input
              className="get-email-input"
              placeholder="Email here"
              type="email"
            />
            <button className="submit-btn">Submit</button>
          </div>
        </div>
        <img className="featured-img" src={contactus} />
      </section>
      <footer>
        <h1>© 2023 Mindfulsurf. All Rights Reserved.</h1>
      </footer>
    </main>
  );
}
