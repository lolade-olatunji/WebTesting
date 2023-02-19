import React from 'react';
import '../styles/dashboard.css';
import Notification from '../components/Notification';
import { gql, useQuery } from '@apollo/client';

const GET_COMPANY = gql`
  query ListCompany {
    company {
      ceo
      cto
      name
      summary
    }
  }
`

export default function Landingpage() {
  const { data } = useQuery(GET_COMPANY)

  const { company: { ceo, cto, summary, name } = {} } = data || {}

    return (
       <section>
         <div className="container">
           <div className="logo-area">
             <img src="/web/Logo.png" alt="Logo" className="dashboard-logo" />
           </div>
           <div className="main-section">
             <div className="dash-left">
               <div className="company-name">
                 <img src="/web/CN icon.png" alt="Logo" className="dashboard-logo" />
                 <h2>{name}</h2>
               </div>
               <div className="Ceo-section">
                 <h3>CEO</h3>
                 <p>{ceo}</p>
               </div>
               <div className="Cto-section">
                 <h3>CTO</h3>
                 <p>{cto}</p>
                 <p className="summ">{summary}</p>
               </div>
             </div>
             <div className="dash-right">
              <Notification />
             </div>
           </div>
         </div>
       </section>
   );
}  