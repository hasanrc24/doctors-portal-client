import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Appointment from './components/Appointment/Appointment';
import Login from './components/Login/Login';
import { AuthProvider } from '../src/Contexts/AuthContext';
import Dashboard from './components/AdminDashboard/Dashboard/Dashboard';
import AppointmentDashboard from './components/AdminDashboard/AppointmentDashboard/AppointmentDashboard';
import PatientsDashboard from './components/AdminDashboard/PatientsDashboard/PatientsDashboard';
import PrescriptionsDashboard from './components/AdminDashboard/PrescriptionsDashboard/PrescriptionsDashboard';
import AddDoctor from './components/AdminDashboard/AddDoctor/AddDoctor';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/appointment">
            <Appointment />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/appointments">
            <AppointmentDashboard />
          </PrivateRoute>
          <PrivateRoute path="/patients">
            <PatientsDashboard />
          </PrivateRoute>
          <PrivateRoute path="/prescription">
            <PrescriptionsDashboard />
          </PrivateRoute>
          <PrivateRoute path="/addDoctor">
            <AddDoctor />
          </PrivateRoute>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
