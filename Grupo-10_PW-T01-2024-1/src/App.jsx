import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter} from 'react-router-dom';
import { AuthProvider } from "./contexts/AuthContext";
import RouteApp from "./routes";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {ToastContainer} from 'react-toastify';

// Importamos as páginas HomePage, AboutPage e ContactPage

// Função principal do componente App
function App() {
  return (
    <div className="container-fluid" id="scream">
        <BrowserRouter>
          <AuthProvider>
            <Header />
            <ToastContainer
              position="bottom-right"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
              transition: Bounce
              />
            <div id="content">
              {RouteApp()}
            <div>
              <Footer />
            </div>
                </div>

          </AuthProvider>
        </BrowserRouter>
    </div>

  );
}
 
export default App;
