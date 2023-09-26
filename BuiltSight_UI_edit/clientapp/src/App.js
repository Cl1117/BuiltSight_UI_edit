// Importing required modules from React and react-router-dom
import React from 'react';
import LoginComponent from './components/LoginComponent';
import CreateAccountComponent from './components/CreateAccountComponent';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';

// Main App function that renders the Router and Routes
function App() {
    return (
        <Router>
            <div className="App">
                {/* Define the application routes */}
                <Routes>
                    <Route path="/" element={<LoginComponent />} exact /> {/* Added default route to LoginComponent */}
                    <Route path="/login" element={<LoginComponent />} />
                    <Route path="/signup" element={<CreateAccountComponent />} />
                    <Route path="*" element={<div>Not Found, hahaha!</div>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;   
//yo i just want to commit