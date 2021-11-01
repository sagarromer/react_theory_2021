import { useState, useEffect } from 'react';
import { 
  Container
} from 'semantic-ui-react'
import './App.css';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';
import ModalEdit from './components/ModalEdit';

function App() {
  const [entries, setEntries] = useState(initialEntries);
  const [description, setDescription] = useState('');
  const [value, setValue] =useState('');
  const [isExpense, setIsExpense] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryId] = useState();

  useEffect(() => {
    if(!isOpen && entryId){
      const index = entries.findIndex((entry) => entry.id === entryId);
      const newEntries = [...entries];
      newEntries[index].description = description;
      newEntries[index].value = value;
      newEntries[index].isExpense = isExpense;
      setEntries(newEntries);
    }
  }, [isOpen]);


  function deleteEntry(id){
    const result = entries.filter((entry) => entry.id !== id);
    console.log('entries', entries);
    console.log('result', result);
    setEntries(result);
    
  }
  function addEntry(description, value, isExpense) {
    const result = entries.concat({
      id: entries.length + 1,
      description,
      value,
      isExpense
    });
    setEntries(result);
  }
  function editEntry(id){
    console.log('edit entry');
    if(id) {
      const index =entries.findIndex(entry => entry.id);
      const entry = entries[index];
      setDescription(entry.description);
      setValue(entry.value);
      setIsOpen(true);
    }
    
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
        editEntry={editEntry}
      />
      <MainHeader title='Add new transaction' type='h3' />
      <NewEntryForm 
        addEntry={addEntry}
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense} 
      />
      <ModalEdit 
        isOpen={isOpen} 
        setIsopen={setIsOpen}
        addEntry={addEntry}
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense} 
      />
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
