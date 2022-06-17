import { useState } from 'react';
import classes from './App.module.css';
import Loading from './components/Loading';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div>
      {isLoading && <Loading />}
    </div>
  );
}

export default App;
