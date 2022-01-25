import BookingContainer from './BookingContainer';

import './App.css';

const App: React.FC = () => {
  return (
    <div className="App" data-testid="main-app">
      <BookingContainer />
    </div>
  )
};

export default App;
