import React from 'react'
import './Help.css'
import { Link } from 'react-router-dom'



const Help = () => {
  return (
    <div>
      <nav>
            <div className="logo-name">
                  <label className="logo"><strong>Online </strong>Insurance</label>
            </div>
            <div className="menu-items">
            <ul className="nav-links">
                        <li>
                              <Link className='link-text' to="/adminDashboard">
                                    <span className='link-name'>Dashboard</span>
                              </Link>
                        </li>
                        <li>
                              <Link className='link-text' to="/adminPolicies">
                                    <span className='link-name'>Policies</span>
                              </Link>
                        </li>
                        <li>
                              <Link className='link-text' to="/adminDocument">
                                    <span className='link-name'>Document</span>
                              </Link>
                        </li>
                        <li>
                              <Link className='link-text' to="/adminSettings">
                                    <span className='link-name'>Settings</span>
                              </Link>
                        </li>
                        <li>
                              <Link className='link-text' to="/adminCustomer">
                                    <span className='link-name'>Customer</span>
                              </Link>
                        </li>
                        <li>
                              <Link className='link-text' to="/adminHelp">
                                    <span className='link-name'>Help</span>
                              </Link>
                        </li>
                  </ul>
                  <ul className="logout-mod">
                        <li>
                              <Link className='link-text-logout' to="/">
                                    <span className="link-name">Logout</span>
                              </Link>
                        </li>
                  </ul>
            </div>
      </nav>
      <section className='header'>
                  <label>admin@gmail.com</label>
            </section>
      <section className="help">
            <div className="faq-main">
                  <div className="faq">
                  <h1>Frequently Asked Questions</h1>
                        <div className="questions">
                              <h3>Why we apply Insurance?</h3>
                              
                        </div>
                        <div className="answer">
                              <p>Insurance plans are beneficial to anyone looking to protect their family, assets/property and themselves from financial risk/losses: Insurance plans will help you pay for medical emergencies, hospitalisation, contraction of any illnesses and treatment, and medical care required in the future. 
                              </p>
                        </div>
                  </div>
                  <div className="faq">
                        
                        <div className="questions">
                              <h3>Benifits of Insurance</h3>
                              
                        </div>
                        <div className="answer">
                              <p>Provides Protection. Insurance coverage does reduce the impact of loss that one bears in perilous situations. ...
                              Provides Certainty. Insurance coverage provides a feeling of assurance to the policyholders. ...
                              Risk Sharing. ...
                              Value of Risk. ...
                              Capital Generation. ...
                              Economic Growth. ...
                              Saving Habits.
                              </p>
                        </div>                 
                  </div>
            </div>
            <div className="contact-main">
                  <div className="contact">
                        <h1>Contact Us Directly</h1>
                        <div className="inputname">
                              <input type="text" placeholder='Firstname'/>
                              <input type="text" placeholder='Lastname'/>
                        </div>
                        <input type="text" placeholder='Email Address'/>
                        <input type="text" placeholder='Subject'/>
                        <textarea name='content-request' rows={10} cols={65} placeholder='Your Message'></textarea>
                        <button className='btn'>Submit</button>
                  </div>
            </div>
      </section>
      
    </div>
  )
}

export default Help
