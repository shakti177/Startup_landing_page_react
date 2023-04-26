import React from 'react'
import './Newsletter.css'

const Newsletter = () => {
  return (
    <section id="newsletter_main">
        <div className="newsletter_section">
            <div className="newsletter_content">
                <h2>Stay in the loop</h2>
                <p>Join our newsletter to get top news before anyone else.</p>
            </div>
            <div className="newsletter_mail">
                <input type="text" placeholder='Your best email...'/>
                <button>Subscribe</button>
            </div>
        </div>
    </section>
  )
}

export default Newsletter