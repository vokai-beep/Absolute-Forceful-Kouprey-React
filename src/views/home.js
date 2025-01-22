import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Absolute Forceful Kouprey</title>
        <meta property="og:title" content="Absolute Forceful Kouprey" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="home-text10">#home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text11">#services</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text12">#projects</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text13">#contact</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text14">Home</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text15">Services</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text16">Projects</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text17">Contact</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text18">Learn More</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text19">Contact Us</span>
          </Fragment>
        }
        logoSrc="/screenshot%20(7)-1500h.png"
        page1Description={
          <Fragment>
            <span className="home-text20">
              Welcome to our company specializing in landfill elimination and
              recycling ash for sustainable housing solutions.
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text21">
              Discover our services for landfill privatization and ash recycling
              to create man-made islands for housing projects.
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text22">
              Explore our successful projects where we have transformed
              landfills into vibrant communities on man-made islands.
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="home-text23">
              Get in touch with us to learn more about our services and how we
              can help in creating sustainable housing solutions.
            </span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action1={
          <Fragment>
            <span className="home-text24">Learn More</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text25">Get Involved</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text26">
              We specialize in upgrading landfills and recycling ash to create
              man-made islands for building houses and infrastructures. Join us
              in our mission to build a greener and more sustainable future.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text27">
              Transforming Landfills into Sustainable Communities
            </span>
          </Fragment>
        }
      ></Hero17>
      <CTA26
        action1={
          <Fragment>
            <span className="home-text28">Get in touch</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text29">
              Contact us today to learn more about our innovative solutions.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text30">
              Ready to transform landfills into sustainable communities?
            </span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature1Title={
          <Fragment>
            <span className="home-text31">Landfill Elimination</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text32">Recycling Ash</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text33">Man-Made Islands</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text34">
              We specialize in eliminating landfills by recycling ash and
              creating man-made islands for sustainable housing solutions.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text35">
              We recycle ash from landfills to create building materials for
              constructing houses on man-made islands.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text36">
              Our innovative approach involves using recycled materials to build
              artificial islands that serve as residential areas.
            </span>
          </Fragment>
        }
      ></Features25>
      <Steps2
        step1Title={
          <Fragment>
            <span className="home-text37">Initial Assessment</span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text38">Ash Recycling Process</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text39">Island Construction</span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text40">Infrastructure Building</span>
          </Fragment>
        }
        step1Description={
          <Fragment>
            <span className="home-text41">
              Our team conducts a thorough assessment of the landfill site to
              see if it is fit for upgrading its facilities
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text42">
              We collect your trashes, as we begin the process of burning them
              and purification of the smoke that it produces. Then we collect
              the ashes left behind.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text43">
              Using the ashes as one of the main component for man-made island.
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text44">
              Finally, we build eco-friendly houses on the man-made island,
              providing sustainable living solutions for communities. As well as
              infrastructures, for business or utility, benefitting the growth
              of economy.
            </span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        review1={
          <Fragment>
            <span className="home-text45">
              I never thought building houses on man-made islands created from
              recycled ash was possible until I saw the work of Landfill
              Eliminators. Truly inspiring!
            </span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text46">
              Landfill Eliminators is leading the way in sustainable
              construction practices. Their dedication to eliminating landfills
              and repurposing waste is commendable.
            </span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text47">
              I have collaborated with Landfill Eliminators on several projects,
              and each time I am impressed by their commitment to creating a
              greener future through innovative solutions.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text48">
              The work done by Landfill Eliminators not only benefits the
              environment but also provides a unique and sustainable housing
              solution. I highly recommend their services.
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text49">
              Working with Landfill Eliminators has been a game-changer for our
              company. Their innovative approach to recycling ash and creating
              man-made islands has helped us reduce our environmental impact
              significantly.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text50">Testimonials</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text51">John Doe</span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text52">Jane Smith</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text53">Michael Johnson</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text54">Sarah Lee</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text55">CEO of Eco Solutions Inc.</span>
          </Fragment>
        }
        author2Position={
          <Fragment>
            <span className="home-text56">Architect at Green Designs</span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text57">Environmental Activist</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text58">Urban Planner</span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text59">
              Feel free to reach out to us for any inquiries or to learn more
              about our services.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text60">Contact Us</span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text61">Headquarters</span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text62">Regional Office</span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text63">
              123 Main Street, Cityville, Country
            </span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text64">
              456 Elm Avenue, Townsville, Country
            </span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        link1={
          <Fragment>
            <span className="home-text65">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text66">Services</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text67">Projects</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text68">About Us</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text69">Contact Us</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text70">Terms &amp; Conditions</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text71">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text72">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
      <svg width="24" height="24" viewBox="0 0 24 24">
        <path
          d="M12 19.2c-2.5 0-4.71-1.28-6-3.2c.03-2 4-3.1 6-3.1s5.97 1.1 6 3.1a7.23 7.23 0 0 1-6 3.2M12 5a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-3A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10c0-5.53-4.5-10-10-10"
          fill="currentColor"
        ></path>
      </svg>
      <svg width="24" height="24" viewBox="0 0 24 24">
        <path
          d="M12 19.2c-2.5 0-4.71-1.28-6-3.2c.03-2 4-3.1 6-3.1s5.97 1.1 6 3.1a7.23 7.23 0 0 1-6 3.2M12 5a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-3A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10c0-5.53-4.5-10-10-10"
          fill="currentColor"
        ></path>
      </svg>
    </div>
  )
}

export default Home
