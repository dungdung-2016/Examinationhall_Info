import * as React from 'react';
import { BrowserRouter, Route, Routes, Link, NavLink } from "react-router-dom";
import './App.css';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid';
import { Checkbox, TextField } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Home from './Home';
import NotFound from './NotFound';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
