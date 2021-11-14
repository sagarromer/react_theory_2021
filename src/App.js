import { useState, useEffect } from 'react';
import { 
  Container
} from 'semantic-ui-react';
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
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [entry, setEntry] = useState();
  const { isOpen, id } = useSelector((state) => state.modals);
  const entries = useSelector((state) => state.entries);


  useEffect(() => {
    const index = entries.findIndex(entry => entry.id === id);
    setEntry(entries[index]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  , [isOpen, id, entries]);
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

  return (
    <Container>
      <MainHeader title='Budget' />
      <DisplayBalance title='Your Balance:' value={total} size='small' />

      <DisplayBalances expenseTotal={expenseTotal} incomeTotal={incomeTotal}/>

      <MainHeader title='History' type='h3' />
      <EntryLines entries={entries} />
      <MainHeader title='Add new transaction' type='h3' />
      <NewEntryForm />
      <ModalEdit 
        isOpen={isOpen} {...entry}/>
    </Container>
  );
}

export default App;