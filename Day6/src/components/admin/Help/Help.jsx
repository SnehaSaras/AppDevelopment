import React from 'react'
import './Help.css'

import { Link, useNavigate } from 'react-router-dom'
import { useDispatch} from 'react-redux'
import { logout} from '../../UserSlice';



const Help = () => {
      const navigate = useNavigate() ;
      const dispatch = useDispatch();
      const handleLogout = (e) => {
            e.preventDefault();
            dispatch(logout());
            navigate("/");
      }
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
                              <Link className='link-text' to="/adminClaims">
                                    <span className='link-name'>Claims</span>
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
                              <Link className='link-text-logout' onClick={(e) => handleLogout(e)}>
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
                              <h3>Is online insurance is safe?
</h3>
                              
                        </div>
                        <div className="answer">
                              <p>Moreover, comprehensive or third party insurance purchased online is considered legally valid and authentic by the IRDAI (Insurance Regulatory & Development Authority of India). However, make sure to buy car insurance online from an IRDAI registered motor insurance company only.</p>
                        </div>
                  </div>
                  <div className="faq">
                        
                        <div className="questions">
                              <h3>Is it good to buy insurance?
</h3>
                              
                        </div>
                        <div className="answer">
                              <p>Insurance plans will help you pay for medical emergencies, hospitalisation, contraction of any illnesses and treatment, and medical care required in the future. The financial loss to the family due to the unfortunate death of the sole earner can be covered by insurance plans.
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
                  <div className="address">
                        <div className="addresssub1">
                              <h3>Contact Us</h3>
                              <p>34/1, Kattuvalavu 6th street</p>
                              <p>Thennampalayam EXTN, Tiruppur</p>
                              <p>+93618833(28)</p>
                        </div>
                        <div className="addresssub2">
                              <h3>AdminDetails</h3>
                              <p>Name : SNEHA K</p>
                              <p>Email : snehakalimuthu3112@gmail.com</p>
                              <p>Location : Tiruppur</p>
                              <p>Mobile : 9361883328          </p>
                        </div>
                  </div>
            </div>
      </section>
    </div>
  )
}

export default Help