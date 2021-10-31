import { useState } from 'react';
import { 
  Container
} from 'semantic-ui-react'
import './App.css';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLine from './components/EntryLine';

function App() {
  const [entries, setEntries] = useState(initialEntries);
  return (
    <Container>
      <MainHeader title='Budget' />
      <DisplayBalance title='Your Balance:' value='2,550.53' size='small' />

      <DisplayBalances />

      <MainHeader title='History' type='h3' />
      <EntryLine 
        description={entries[0].description} 
        value={entries[0].isExpense } />
      <EntryLine description='expense' value='$10.00' isExpense />

      <MainHeader title='Add new transaction' type='h3' />
      <NewEntryForm />
    </Container>
  );
}

export default App;

var initialEntries = [
  {
    id: 1,
    description: 'Work income',
    value: 1000.0,
    isExpense: false,
  },
  {
    id: 2,
    description: 'Water bill',
    value: 20.0,
    isExpense: true,
  },
  {
    id: 3,
    description: 'Rent',
    value: 300,
    isExpense: true,
  },
  {
    id: 4,
    description: 'Power bill',
    value: 50,
    isExpense: true,
  },
];
