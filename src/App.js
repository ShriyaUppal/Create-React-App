import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textforms from './components/Textforms';
import Alert from './components/Alert';
// Import other components here if needed

function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not 
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert('Dark Mode has been enabled', 'success');
      document.title = 'Textutils dark home';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode has been enabled', 'success');
      document.title = 'Textutils light home';
    }
  }

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        {/* Uncomment the Router and Routes components when you want to use them */}
        {/* 
        <Router>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Textforms heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />} />
          </Routes>
        </Router> 
        */}
        {/* Commented Router and Routes */}
        
        {/* Uncomment this section if you want to use the Textforms component without the Router and Routes */} 
        <Textforms heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />
      </div>
    </>
  );
}

export default App;
