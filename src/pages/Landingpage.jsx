import React from 'react';
import '../styles/landing.css';
import Login from '../components/Login';

export default function Landingpage() {
    return (
      <section>
        <div className="background">
          <div className="Left-side">
            <div className="top">
              <div className="image">
              <img src="/web/Logo.png" alt="Logo" className="Logo" />
              </div>
              <h1>Hi there, see what's new</h1>
              <p>Here is how Foodcourt helps you manage your daily operations and ensure your rides are efficent.</p>
            </div>
            <div className="mid">
              <button className="land-but">
                <div className="select">
                  <img src="/web/monitor icon.png" alt="Logo" className="ava" />
                   <div className="select-items">
                    <h5>Monitor your earnings</h5>
                    <p>Easily see how much your businesses are earning on each transactions and watch your earnings rise.</p>
                   </div>  
                </div>
              </button>
              <button className="land-but">
                <div className="select">
                  <img src="/web/manageicon.png" alt="Logo" className="ava" />
                   <div className="select-items">
                    <h5>Manage your businesses</h5>
                    <p>Easily see how much your businesses are earning on each transactions and watch your earnings rise.</p>
                   </div>  
                </div>
              </button>
              <button className="land-but">
                <div className="select">
                  <img src="/web/deligate icon.png" alt="Logo" className="ava" />
                   <div className="select-items">
                    <h5>Delegate to staff</h5>
                    <p>Easily see how much your businesses are earning on each transactions and watch your earnings rise.</p>
                   </div>  
                </div>
              </button>
            </div>
          </div>
          <div className="Right-side">
           <Login />
          </div>
        </div>
      </section>
  );
}       