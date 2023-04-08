import './App.scss';
import expensesService from './services/expenses';
import { useState } from 'react';
import { useEffect } from 'react';
import Form from './components/Form';
import Expense from './components/Expense';
import Filter from './components/Filter';

const App = () => {
  const [expenses, setExpenses] = useState([])
  const [isAdding, setAdding] = useState(false)
  const [newName, setNewName] = useState('')
  const [newAmmount, setNewAmmount] = useState('')
  const [newDate, setNewDate] = useState('')
  const [newFilter, setNewFilter] = useState('')

  let expensesToShow = newFilter === ''
    ? expenses
    : expenses.filter(expense => expense.date.slice(0, 4) === newFilter)
  console.log('expensesToShow :>> ', expensesToShow);
  console.log('expenses :>> ', expenses);

  // ! Using json server/express
  useEffect(() => {
    expensesService
      .getAll()
      .then(initialEx => {
        setExpenses(initialEx)
      })
  }, [])


  useEffect(() => {
    if (newFilter !== '') {
      console.log('filtering');
    }
  }, [expenses])

  const clearForm = () => {
    setNewName('')
    setNewAmmount('')
    setNewDate('')
  }

  const handleDeleteEx = id => {
    if (window.confirm(
      'Do you wanna delete this entry?'
    )) {
      expensesService
        .remove(id)
        .then(() => {
          console.log('deleted entry');
          expensesService
            .getAll()
            .then(initialEx => {
              setExpenses(initialEx)
            })
        })
    }
  }

  const validateForm = () => {
    if (newAmmount === '' || newDate === '' || newName === '') {
      alert('Input must not be empty')
      return false
    }
    else if (isNaN(Number(newAmmount)) || Number(newAmmount) <= 0) {
      alert('Ammount must be a positive number')
      return false
    }
    return true
  }

  const handleFilterChange = (e) => {
    console.log('filter changed');
    setNewFilter(e.target.value);
  }

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handleAmmountChange = (e) => {
    // console.log('Amm changed');
    setNewAmmount(e.target.value)
  }

  const handleDateChange = (e) => {

    // console.log('Date changed', e.target.value);
    setNewDate(e.target.value)
  }

  const handleAddClick = () => {
    console.log('btn clicked');
    setAdding(!isAdding)
    clearForm()
  }

  const generateMaxId = () => {
    const maxId = expenses.length > 0
      ? Math.max(...expenses.map(n => n.id))
      : 0
    return maxId + 1
  }

  const addExpense = (e) => {
    e.preventDefault()
    if (validateForm()) {
      console.log('new ex added');

      const current_id = generateMaxId;
      const newEx = {
        id: current_id,
        name: newName,
        ammount: newAmmount,
        date: newDate
      }
      expensesService
        .create(newEx)
        .then((returnedExpense) => {
          setExpenses(expenses.concat(returnedExpense))
          clearForm()
        })
    }
  }
  return (
    <div className="App">
      <Form
        isAdding={isAdding}
        handleAddClick={handleAddClick}
        newName={newName}
        newAmmount={newAmmount}
        newDate={newDate}
        handleNameChange={handleNameChange}
        handleAmmountChange={handleAmmountChange}
        handleDateChange={handleDateChange}
        addExpense={addExpense}
      />
      <div className='res-container'>
        <Filter
          expensesToShow={expensesToShow}
          handleFilterChange={handleFilterChange}
        ></Filter>
        <div className='list-container'>
          {expensesToShow.map(expense => {
            return (
              <Expense
                key={expense.id}
                name={expense.name}
                ammount={expense.ammount}
                date={expense.date}
                handleDelete={() => handleDeleteEx(expense.id)}></Expense>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;