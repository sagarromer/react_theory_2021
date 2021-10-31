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
import EntryLines from './components/EntryLines';

function App() {
  const [entries, setEntries] = useState(initialEntries);

  function deleteEntry(id){
    const result = entries.filter((entry) => entry.id !== id);
    console.log('entries', entries);
    console.log('result', result);
    setEntries(result);
    
  }
  function addEntry(description, value) {
    const result = entries.concat({
      id: entries.length + 1,
      description,
      value
    });
    setEntries(result);
  }

  return (
    <Container>
      <MainHeader title='Budget' />
      <DisplayBalance title='Your Balance:' value='2,550.53' size='small' />

      <DisplayBalances />

      <MainHeader title='History' type='h3' />
      <EntryLines
        entries={entries}
        deleteEntry={deleteEntry}
        
      />
      <MainHeader title='Add new transaction' type='h3' />
      <NewEntryForm addEntry={addEntry} />
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
