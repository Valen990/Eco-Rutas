import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Information from '../pages/information';
import Features from '../pages/features';
import Questions from '../pages/questions';
import SearchSchedules from '../pages/search_schedules';
import Reminders from '../pages/reminders';

function RoutesPublic() {
  return (
    <Routes>
      <Route path="/" element={
    <>
      <Information />
      <Features /> 
      <SearchSchedules />
      <Questions />
    </>
  } />
      
      <Route path="/caracteristicas" element={<Features />} />
      <Route path="/preguntas" element={<Questions />} />
      <Route path="/mapa" element={<SearchSchedules />} />
      <Route path="/recordatorios" element={<Reminders />} />
    </Routes>
  );
}

export default RoutesPublic;