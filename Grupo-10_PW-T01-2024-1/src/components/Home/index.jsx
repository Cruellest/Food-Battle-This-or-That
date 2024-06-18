import React from 'react'
import { useAuth } from '../../AuthContext';
import { useNavigate } from 'react-router-dom';


function Home() {
    const {user} = useAuth();
    const navigate = useNavigate();

    const handleLogged = async(e) => {
        if(user){
            return navigate(`/categories`);
        }

        else{
            return navigate(`/login`);
                }
    }

    
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
                <button type="button" className="btn btn-warning" style={{ fontWeight: 'bolder' } } onClick={() => handleLogged()}>START</button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Home;