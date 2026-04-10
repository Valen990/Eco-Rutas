import { BrowserRouter } from 'react-router-dom';
import Navbar from './pages/navbar';
import RoutesPublic from './routes/RoutesPublic';
import Footer from './pages/footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        
        <RoutesPublic />

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;