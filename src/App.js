import pasfoto from './pasfoto.png';
import githublogo from './githublogo.png';
import iglogo from './iglogo.png';
import linkedinlogo from './linkedinlogo.jpg';

import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <div className='flex flex-row mx-auto my-auto'>
        <img src={pasfoto} className="w-72 ml-2 " alt="logo" />
        <div className='text-blue-300 lg:ml-44 mt-10 md:m-0 mr-1'>
          <p className='mt-8 inline-grid'>Hello! My Name Is<span className='font-bold text-blue-700'>M.Haidar Shahab</span></p>
          <p>Front End Developer</p>
          <button onClick={()=>(alert("Terima kasih Banyak"))} className="rounded-md my-2 p-3 bg-blue-300 text-white text-sm font-semibold">Support Me</button>
          <div className='flex flex-row mt-2 mx-auto'>
            <a href='https://github.com/haidar180202'><img src={githublogo} className="w-15 h-12" alt='github'/></a>
            <a href='https://www.linkedin.com/in/muhammad-haidar-shahab-bb9338212/'><img src={linkedinlogo} className="w-12 mr-2" alt='LinkedIn'/></a>
            <a href='https://www.instagram.com/muhammad_haidar_syihab/'><img src={iglogo} className="w-12" alt='ig'/></a>
          </div>
        </div>
        </div>
        
        
      </header>
      <Footer/>
    </div>
  );
}

export default App;
