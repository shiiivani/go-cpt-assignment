import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import "../styles/homePage.css";
import healthExperts from "../assets/about-img.png";
import img1 from "../assets/1.jpeg";
import img2 from "../assets/2.jpeg";
import img3 from "../assets/3.jpeg";
import img4 from "../assets/4.jpeg";
import img5 from "../assets/5.jpeg";
import img6 from "../assets/6.jpeg";
import img7 from "../assets/7.jpeg";
import img8 from "../assets/8.jpeg";
import contactImg from "../assets/contactImg.png";
import "../styles/navbar.css";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function HomePage() {
  const [isOn, setIsOn] = useState(false);
  const [bgSectionInMiddle, setBgSectionInMiddle] = useState(false);
  const [bgSectionTwoInMiddle, setBgSectionTwoInMiddle] = useState(false);
  const navigate = useNavigate();

  const handleScroll = () => {
    const bgSections = document.querySelector(".bg-section");
    const bgSectionTwos = document.querySelector(".bg-section-two");
    const windowHeight = window.innerHeight;

    const rect1 = bgSections.getBoundingClientRect();
    if (rect1.top <= windowHeight / 100 && rect1.bottom >= windowHeight / 100) {
      setBgSectionInMiddle(true);
    } else {
      setBgSectionInMiddle(false);
    }

    const rect2 = bgSectionTwos.getBoundingClientRect();
    if (rect2.top <= -300) {
      setBgSectionTwoInMiddle(true);
    } else {
      setBgSectionTwoInMiddle(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleButton = () => {
    setIsOn(!isOn);
  };

  return (
    <motion.div
      className={`homePage ${isOn ? "on" : "off"}`}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeOut", duration: 0.8 }}
    >
      <div class="navbar flex justify-between items-center">
        <div class="left flex items-center">
          <img src={logo} alt="Logo" />
        </div>
        <div class="middle flex items-center">
          <p>HOME</p>
          <p>FAQ</p>
          <p>FEATURES</p>
          <p>ABOUT US</p>
          <p>CONTACT US</p>
        </div>
        <div class="right flex items-center">
          <button onClick={() => navigate("/Login")}>Log In</button>
          <button onClick={() => navigate("/Signup")}>Sign Up</button>
        </div>
      </div>
      <div className="section-one">
        <div className="toggle-container">
          <div
            className={`toggle-switch ${isOn ? "on" : "off"}`}
            onClick={toggleButton}
          >
            <div className={`toggle-circle-container ${isOn ? "on" : "off"}`}>
              <div
                className={`toggle-switch-circle ${isOn ? "on" : "off"}`}
              ></div>
            </div>
          </div>
        </div>
        <div className="content">
          <h1>
            Welcome to <span style={{ color: "#F197F4" }}>Go</span>
            <span style={{ color: "#2B3A63" }}>CPT</span> BETA
            <br /> Your Path to Effortless CPT Coding!
          </h1>
          <p>
            We’re excited to introduce you to the BETA version of GoCPT Your
            free pass to a simplified and efficient CPT coding experience
            designed exclusively for mental health professionals like you.
          </p>
          <button className="button">Start Testing</button>
        </div>
      </div>
      <div className={`bg-section ${bgSectionInMiddle ? "middle" : ""}`}>
        <div className="section-two">
          <div className="container">
            <h2>Key Features of GoCPT BETA</h2>
            <div className="flex">
              <div className="box">
                <h3>User Friendly</h3>
                <p>
                  The goCPT app offers a user-friendly feature for determining
                  CPT codes based on time alone. To utilize this functionality,
                  simply navigate to the designated time button within the app
                  and input the total time spent managing the patient during the
                  encounter. The app will then generate the appropriate CPT
                  code, considering the significant role of time in certain
                  scenarios, such as counseling or coordination of care, in
                  determining the level of service provided
                </p>
              </div>
              <div className="box">
                <h3>Medical Complexity Assessment</h3>
                <p>
                  The goCPT app calculates encounters of varying complexity
                  (straightforward/minimal, low, moderate, and high) based on a
                  meticulous assessment of Medical Decision-Making (MDM), taking
                  into account the number of diagnoses, management options, risk
                  of complications or morbidity, and the amount and complexity
                  of data reviewed during the encounter
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="box">
                <h3>E&M Code Integration</h3>
                <p>
                  Seamlessly incorporates the key components influencing E&M
                  code selection, such as History of Present Illness (HPI),
                  Examination, Medical Decision-Making (MDM), and Time
                  considerations
                </p>
              </div>
              <div className="box">
                <h3>Streamlined Documentation</h3>
                <p>
                  Facilitates accurate code assignment by providing a
                  user-friendly interface for configuring CPT billing codes
                  directly from your progress notes. The app emphasizes
                  documentation accuracy to capture the true complexity of the
                  services rendered**
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="section-three">
          <div className="flex items-end justify-between">
            <div className="image">
              <img src={healthExperts} alt="Health Professionals" />
            </div>
            <div className="content">
              <h2>About Us</h2>
              <h4>
                Empowering Mental Health Professionals with Simplified CPT
                Coding
              </h4>
              <p>
                Welcome to goCPT, where the journey of revolutionizing the
                medical coding and billing landscape began with a single idea -
                to make mental health care more accessible to everyone.
              </p>
              <p>
                Join us on this transformative journey as we continue to
                innovate and evolve, breaking down barriers and making mental
                health care accessible to all. Together, we can shape a future
                where healthcare providers are empowered, and quality mental
                health care knows no boundaries.
              </p>
            </div>
          </div>
          <button className="button">Sign Up Today!</button>
        </div>

        <div className="section-four">
          <h2>Our Story</h2>
          <p className="para">
            GoCPT was conceived by a passionate psychiatric nurse practitioner
            who, as a new graduate, felt overwhelmed by the complexities of CPT
            coding. Faced with the daunting task of mastering medical coding
            while juggling the demands of patient care, it became clear that a
            solution was needed to bridge the gap between clinical expertise and
            administrative challenges. Time constraints and the intricate
            <br /> nature of CPT coding posed significant hurdles for healthcare
            providers
            <br /> looking to venture into private practice. Recognizing that
            coding
            <br /> and billing are formidable obstacles standing in the way
            <br /> of many talented providers, the idea
            <br /> for goCPT was born.
          </p>
          <div className="flex justify-between">
            <div className="box">
              <h3>Our Mission</h3>
              <p>
                At goCPT, our mission is simple yet profound - to empower mental
                health professionals and remove the barriers that hinder them
                from providing quality care and pursuing their dreams of private
                practice. We believe that every individual should have access to
                exceptional mental health care, and that starts with simplifying
                the coding and billing process.
              </p>
            </div>
            <div className="box">
              <h3>Our Vision</h3>
              <p>
                We envision a future where mental health care is more
                accessible, where providers can focus on what they do best -
                helping individuals on their path to wellness. By harnessing the
                power of technology, we aim to streamline the complexities of
                CPT coding, enabling providers to dedicate more time to patient
                care and less to administrative burdens.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`bg-section-two ${bgSectionTwoInMiddle ? "middle" : ""} ${
          isOn ? "on" : "off"
        } ${bgSectionTwoInMiddle && isOn ? "middle on" : "off"}`}
      >
        <div className="section-five">
          <h2>
            Why <span>GoCPT</span>?
          </h2>
          <p>
            At goCPT, we understand the unique challenges mental health
            professionals face. Our app is designed with your needs in mind,
            offering a user-friendly platform that simplifies the coding
            process. By utilizing goCPT, providers can reclaim valuable time,
            reduce administrative stress, and ensure accurate code assignment
            for proper reimbursement.
          </p>
          <p>
            Join us on this transformative journey as we continue to innovate
            and evolve, breaking down barriers and making mental health care
            accessible to all. Together, we can shape a future where healthcare
            providers are empowered, and quality mental health care knows no
            boundaries.
          </p>
          <p>
            Thank you for choosing goCPT - where innovation meets compassion in
            the pursuit of accessible mental health care.
          </p>
          <p>
            Warm regards,
            <br />
            Tiffinne
            <br />
            Founder, goCPT
          </p>
          <div className="container">
            <h2>
              Ensuring CPT Code Accuracy with <br />
              <span>GoCPT</span> App
            </h2>
            <div className="card-container flex items-center justify-center">
              <div className="card">
                <img src={img1} alt="" />
                <h5>Thorough Documentation</h5>
                <p>
                  Be comprehensive in documenting the patient encounter. Include
                  a detailed history of present illness, an exhaustive
                  examination, and a comprehensive medical decision-making
                  process. Capture all relevant details, ensuring that your
                  notes paint a complete picture of the patient's condition and
                  your clinical assessment
                </p>
              </div>
              <div className="card">
                <img src={img2} alt="" />
                <h5>Assess Risk and Complexity</h5>
                <p>
                  Evaluate and document the risk of complications and/or
                  morbidity associated with the patient's condition. Be explicit
                  about the factors contributing to the complexity of the case.
                  The goCPT app considers risk assessment, and detailed
                  documentation aids in accurate code generation
                </p>
              </div>
              <div className="card">
                <img src={img3} alt="" />
                <h5>Time-Based Coding</h5>
                <p>
                  Time-Based Coding Utilize time-based coding when appropriate.
                  If a significant portion of the encounter is devoted to
                  counseling or coordination of care, document the time spent.
                  The goCPT app recognizes time as a crucial factor in certain
                  code selections, contributing to accurate billing
                </p>
              </div>
              <div className="card">
                <img src={img4} alt="" />
                <h5>Specificity Matters</h5>
                <p>
                  Provide specific details about each medical issue. Describe
                  the nature, severity, and progression of symptoms. Specificity
                  enhances the accuracy of code generation by ensuring that the
                  app captures the complexity of the patient's conditions and
                  the level of decision-making required
                </p>
              </div>
              <div className="card">
                <img src={img5} alt="" />
                <h5>Include Relevant Data</h5>
                <p>
                  Ensure that your note incorporates all relevant data,
                  including diagnostic test results, imaging studies, and
                  laboratory findings. The goCPT app considers the complexity of
                  data analysis, so including these details enhances the
                  accuracy of the generated codes
                </p>
              </div>
              <div className="card">
                <img src={img6} alt="" />
                <h5>Document Thoroughly with All Relevant Data</h5>
                <p>
                  Ensure that your note incorporates all relevant data,
                  including ordering or reviewing diagnostic test results,
                  imaging studies, and laboratory findings. The goCPT app
                  considers the complexity of data analysis, so including these
                  details enhances the accuracy of the generated codes
                </p>
              </div>
              <div className="card">
                <img src={img7} alt="" />
                <h5>Regularly Update the App</h5>
                <p>
                  Keep the goCPT app updated to ensure you benefit from the
                  latest enhancements and refinements. Regular updates enhance
                  the app's capabilities, providing you with increasingly
                  accurate code suggestions
                </p>
              </div>
              <div className="card">
                <img src={img8} alt="" />
                <h5>Stay Informed</h5>
                <p>
                  Stay abreast of changes in coding guidelines and standards.
                  Familiarize yourself with any updates to CPT codes or relevant
                  regulations. A well-informed approach ensures that your
                  documentation aligns with current coding requirements
                </p>
              </div>
            </div>
            <p className="note">
              By incorporating these tips into your practice, you can maximize
              the accuracy of CPT codes generated by the goCPT app. Remember,
              your detailed and precise documentation is instrumental in
              optimizing the app's capabilities and contributing to the overall
              success of your medical coding and billing processes
            </p>
          </div>
        </div>
        <div className="section-six">
          <h4>How Can You Contribute?</h4>
          <div className="flex items-center justify-center">
            <div className="box">
              <h3>Sign Up and Use goCPT Beta</h3>
              <p>
                Dive into the beta version by signing up here!. Explore its
                features and discover first hand how GoCPT can simplify your CPT
                coding processes
              </p>
            </div>
            <div className="box">
              <h3>Share Your Feedback</h3>
              <p>
                Your experiences and insights matter. Utilize the feedback
                mechanism within the app to share your thoughts, suggestions,
                and any issues you encounter. Your feedback guides our ongoing
                improvements.
              </p>
            </div>
          </div>
          <h4>Join GOCPT on this Journey!</h4>
          <p className="note">
            By participating in the goCPT Beta, you're not just a user; you're a
            vital part of our community shaping the future of mental health
            billing. Together, we can create an app that truly meets your needs
            and exceeds your expectations.
          </p>
          <button className="button">Sign Up Today</button>
        </div>
        <div className="section-seven">
          <div className="container">
            <h2>CONTACT US</h2>
            <div className="flex items-end justify-between">
              <img src={contactImg} alt="" />
              <form>
                <input type="text" name="name" placeholder="Company Name" />
                <input type="text" name="email" placeholder="E-Mail Address" />
                <input
                  type="text"
                  name="address"
                  placeholder="Company's Address"
                />
                <textarea row="5" col="10" placeholder="Message" />
                <button className="button">SUBMIT</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
}

export default HomePage;
