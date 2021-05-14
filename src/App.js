import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import AppRoute from "./routes/AppRoute";
import Navbar from "./containers/Navbar";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <AppRoute />
      </AuthProvider>
    </Router>
  );
}

export default App;
