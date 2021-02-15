import react, {useState, useEffect} from 'react';
import Input from './Input';
import './style/main.css';

function App() {

    const incomeCategories = ['Lön', 'Försäkringskassan', 'Övrigt'];
    const [expenses, setExpenses] = useState(0);
    const [income, setIncome] = useState({
        'Lön' : 0,
        'Försäkringskassan' : 0,
        'Övrigt' : 0,
        total : 0
    });


    function onIncomeChange(obj) {
        setIncome(obj);
        console.log(income.total);
    }

    

    return (
        <div>
            <div className='container'>
                <div className='data'>
                    <h1>Inkomst: {income.total} kr | Utgifter: {expenses} kr | Differens: {income-expenses} kr</h1>
                </div>

                <Input title = 'Inkomst'  incomeCategories = {incomeCategories} value ={income} onChange={onIncomeChange} />
                <Input title = 'Utgifter' incomeCategories = {incomeCategories} value ={expenses} setIncome={setExpenses} />
            </div>


        </div>
    )
}

export default App;