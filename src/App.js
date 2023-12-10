import React from 'react';
import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Assessment from './pages/Assessment/Assessment';
import MyLibrary from './pages/MyLibrary/MyLibrary';
import MainLayout from './layout/MainLayout';

function App() {
  return (
    <MainLayout>
      <Routes>
               <>
                <Route path="Dashboard" element={<Dashboard />} />
                <Route path="Assessment" element={<Assessment />} />
                <Route path="MyLibrary" element={<MyLibrary />} />
               </>
      </Routes>
    </MainLayout>
  );
}

export default App;
