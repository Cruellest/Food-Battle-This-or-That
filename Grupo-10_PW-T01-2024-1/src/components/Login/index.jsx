import React from 'react'

function Login() {
  return (
    <div>
    <div class="container text-center" id="image"><img id="tittleLogin" src='../src/assets/tittleBlack.png'/></div>
    <div class="container-sm" id="login">        
        <div class="container-sm text-center" id="login-content">
            <div id="tittleText">LOGIN</div>
            <div class="row" id="row-landing">
                <div class="container text-center" id="loginForm">
                    Email
                </div>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1"></input>
                </div>

            </div>
            <div class="row" id="row-landing">
                <div class="container text-center">
                    Senha
                </div>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Senha" aria-label="Senha" aria-describedby="basic-addon1"></input>
                </div>
            </div>
            <div class="row" id="row-landing">
                <div class="container text-center">
                <button type="button" class="btn btn-warning" style={{ fontWeight: 'bolder' }}>Login</button>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
}

export default Login;