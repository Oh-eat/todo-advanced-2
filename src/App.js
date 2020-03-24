import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/common/Header';
import YearViewPage from './pages/YearViewPage';
import MonthViewPage from './pages/MonthViewPage';
import DayViewPage from './pages/DayViewPage';
import HourViewPage from './pages/HourViewPage';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <>
      <Header />
      <Route path={['/', '/todos/']} exact component={YearViewPage} />
      <Route path="/todos/:year" exact component={MonthViewPage} />
      <Route path="/todos/:year/:month" exact component={DayViewPage} />
      <Route path="/todos/:year/:month/:day" exact component={HourViewPage} />
      <Route path="/search" component={SearchPage} />
    </>
  );
}

export default App;
