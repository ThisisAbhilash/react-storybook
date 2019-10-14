import React from 'react';
import Graph from './components/graph';
import './App.css';
const yAxis = ['10k', '15k', '20k', '25k', '30k', '35k', '40k', '45k', '50k', '55k', '60k'];
const xAxis = ['20/06/2019', '21/06/2019', '22/06/2019', '23/06/2019', '24/06/2019', '25/06/2019', '26/06/2019'];
const data = [
  {
    id: 1,
    description: 'Fabric Vendor',
    amount: 2,
    unit: 'lacs',
    date: '20/06/2019'
  },
  {
    id: 2,
    description: 'Salary',
    amount: 30,
    unit: 'lacs',
    date: '20/06/2019'
  },
  {
    id: 3,
    description: 'Customer 1',
    amount: 3,
    unit: 'lacs',
    date: '22/06/2019'
  },
  {
    id: 4,
    description: 'GST Payment',
    amount: 5,
    unit: 'lacs',
    date: '24/06/2019'
  },
  {
    id: 5,
    description: 'Customer 4',
    amount: 5,
    unit: 'lacs',
    date: '24/06/2019'
  },
  {
    id: 6,
    description: 'TDS Payment',
    amount: 3,
    unit: 'lacs',
    date: '26/06/2019'
  },
  {
    id: 7,
    description: 'Customer 2',
    amount: 3,
    unit: 'lacs',
    date: '26/06/2019'
  },
  {
    id: 8,
    description: 'Customer 3',
    amount: 10,
    unit: 'lacs',
    date: '26/06/2019'
  }
]
function App() {
  return (
    <div>
        <Graph 
          xAxis={xAxis}
          yAxis={yAxis.reverse()}
          graphData={data}
        />
    </div>
  );
}

export default App;
