import React from 'react'
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';


function Home() {

    const Navigate = useNavigate('');

    
  return (
    <div className="container-fluid" id="landing">
        <div className="container-md text-center" id="landing-content">
            <img id="tittleLanding" src='../src/assets/tittleWhite.png'/>  
            <div className="row" id="row-landing">
                <div className="container text-center">
                    Which dish deserves to win this battle?
                </div>
            </div>
            <div className="row" id="row-landing">
                <div className="container text-center">
                <button type="button" className="btn btn-warning" style={{ fontWeight: 'bolder' } } onClick={() => Navigate('/Categories')}>START</button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Home;