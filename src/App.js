import { useState } from 'react';

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
