import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../logo192.png';
import './LandingPage.css';

function LandingPage() {
 const history = useHistory();
  return (
    <div className="landing-page">
     <Link to="/">Home</Link>
     <img src={logo} alt="" onClick={
      () => { history.push('/'); }
      }></img>
    </div>
  );
}

export default LandingPage;
