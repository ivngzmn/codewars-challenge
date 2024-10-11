import './App.css';
import { useState } from 'react';
import CHART_DATA from './data';
import BarChart from './BarChart';

function App() {
  const [showChart, setShowChart] = useState(false);
  return (
    <>
      {/* TODO: build toggle button */}
      {/* TODO: render the chart */}
      {/* TODO: tooltips */}
      {/* TODO: Animate the chart */}

      <main className='container'>
        <button onClick={() => setShowChart((prev) => !prev)}>
          Toggle Chart
        </button>
        {showChart ? <BarChart data={CHART_DATA} /> : null}
      </main>
    </>
  );
}

export default App;
