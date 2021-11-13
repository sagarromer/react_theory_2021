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
import { useDispatch, useSelector } from 'react-redux';


function App() {
  //const [entries, setEntries] = useState([]);
  const [description, setDescription] = useState('');
  const [value, setValue] =useState('');
  const [isExpense, setIsExpense] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryId] = useState();
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const entries = useSelector((state) => state.entries);


  // const payload_add = {
  //   id: 5,
  //   description: 'hello from redux',
  //   value: 999,
  //   isExpense: true
  // };
  // const payload_remove = {
  //   id: 1
  // }

  useEffect(() => {
    if(!isOpen && entryId){
      const index = entries.findIndex((entry) => entry.id === entryId);
      const newEntries = [...entries];
      newEntries[index].description = description;
      newEntries[index].value = value;
      newEntries[index].isExpense = isExpense;
      //setEntries(newEntries);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);
  useEffect(() => {
    let totalIncomes = 0;
    let totalExpenses = 0;
    entries.map((entry) => {
      if (entry.isExpense) {
        return (totalExpenses += Number(entry.value));
      }
      return (totalIncomes += Number(entry.value))
    });
    //let total = totalIncomes - totalExpenses;
    console.log(`total incomes are : ${totalIncomes}
    total expenses are ${totalExpenses}`);
    setTotal(totalIncomes - totalExpenses);
    setExpenseTotal(totalExpenses);
    setIncomeTotal(totalIncomes);
    
  }, [entries]);

  // function addEntryRedux(payload) {
  //   return { type: 'ADD_ENTRY', payload };
  // }

  // function removeEntryRedux(id){
  //   return { type: 'REMOVE_ENTRY', payload: { id } };
  // }
  // store.dispatch(addEntryRedux(payload_add));
  // store.dispatch(removeEntryRedux(1));
  // store.dispatch(removeEntryRedux(2));
  // store.dispatch(removeEntryRedux(3));
  // store.dispatch(removeEntryRedux(4));
  // store.dispatch(removeEntryRedux(5));

  function deleteEntry(id){
    const result = entries.filter((entry) => entry.id !== id);
    console.log('entries', entries);
    console.log('result', result);
    //setEntries(result);
    
  }
  function addEntry(description, value, isExpense) {
    const result = entries.concat({
      id: entries.length + 1,
      description,
      value,
      isExpense
    });
    //setEntries(result);
    resetEntry();
  }
  function resetEntry() {
    setDescription('');
    setValue('');
    setIsExpense(true);
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
      <DisplayBalance title='Your Balance:' value={total} size='small' />

      <DisplayBalances expenseTotal={expenseTotal} incomeTotal={incomeTotal}/>

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