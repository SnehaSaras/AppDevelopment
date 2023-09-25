import React from 'react'
import './UserHelp.css'
import { useNavigate } from 'react-router-dom'

const UserHelp = () => {
      const navigate = useNavigate() ;
      const handleHome = () => {
            navigate("/Homelog")
      }
  return (
    <div className='main'>
      <section className="help-user">
            <div className="faq-main">
            <button className='btn-home' onClick={handleHome}>HOME</button>
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
                              <p>Mobile : 9361883328</p>
                        </div>
                  </div>
            </div>
      </section>
    </div>
  )
}

export default UserHelp