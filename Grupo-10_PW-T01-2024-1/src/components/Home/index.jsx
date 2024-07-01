import React from 'react'
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import tittleBlack from "../../assets/tittleBlack.png"
import logoHome from '../../assets/logo.svg'


function Home() {
    const {user} = useAuth();
    const navigate = useNavigate();

    const handleLogged = async(e) => {
        if(user){
            return navigate(`/categories`);
        }

        else{
            return navigate(`/Login`);
                }
    }

    
  return (
    <div className="container-sm">
        <div className="container text-center" id="image">
            <img id="tittle-all" src={tittleBlack} alt="Tittle Black" />
        </div>
    <center>
            <div className="container-sm rounded" id="landing">
            <div className="row row-cols-1 row-cols-md-2 g-4" id="row">
                    
                    <div className="container-sm text-center" id="col">
                            <img id="logo-svg" className="img-fluid" src={logoHome}/>  
                    </div>
                        
                    <div className="container text-center" id="col">
                        <p style={{ color: '#ffc107',  fontWeight: 'bolder' } }>Which dish deserves to win this battle?</p>
                        <p>Choose from the best and most appetizing known meals and root for your favorites.</p>
                    </div>


            </div>
            <div className="row" id="row">
                <div className="container text-center">
                    <button type="button" className="btn btn-warning" style={{ fontWeight: 'bolder' } } onClick={() => handleLogged()}>START</button>
                </div>
            </div>
            </div>
    </center>
</div>
  );
}

export default Home;