import React from 'react';
import '../styles/notification.css';

export default function Notification() {
    return (
     <section>
            <div className="coming-soon">
              <img src="/web/timing.png" alt="Logo" className="not-icon" />
              <h3>Coming soon</h3>
            </div>
            <div className="middle-section">
              <div className="compactment">
                <img src="/web/popping.png" alt="Logo" className="ava" />
                <div className="first-rec"></div>
                <div className="second-rec"></div>
              </div>
              <div className="compactment">
                <img src="/web/stars.png" alt="Logo" className="ava" />
                <div className="first-rec"></div>
                <div className="second-rec"></div>
              </div>
              <div className="compactment">
                <img src="/web/boom.png" alt="boom" className="ava" />
                <div className="first-rec"></div>
                <div className="second-rec"></div>
              </div>
            </div>
           <div className="last-section">
              <div className="Noti-icon">
                <img src="/web/gift.png" alt="gift" className="gift" />
                <h2>Notifications</h2>
              </div>
              <p>Recieve notifications about your rider performance, efficency reviews and a lot more</p>
           </div>
     </section>
  );
}   