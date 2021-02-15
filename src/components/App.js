import react, {useState, useEffect} from 'react';
import Input from './Input';
import PieChart from './ChartPie';
import Header from './Header';
import './style/main.css';


function useForceUpdate(){
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update the state to force render
}

function App() {

    const forceUpdate = useForceUpdate();

    const incomeCategories = ['Lön', 'Försäkringskassan', 'Övrigt'];
    const [expenses, setExpenses] = useState(0);
    const[enterIncome, setEnterIncome] = useState(false);

    const [incomes, setIncome] = useState([
        {name : 'Lön', value : 0},
        {name : 'Försäkringskassan', value : 0},
        {name : 'Övrigt', value : 0},
    ]);
    const [totalIncome, setTotalIncome] = useState(0);


    function onIncomeChange(obj, total) {
        // Why do i need to force update? the income-state is changing and the component should re-render?
        
        setIncome(obj);
        console.log(incomes);
        setTotalIncome(totalIncome + total);
        setEnterIncome(false);
        
    }

    

    return (
        <div>
            <Header appTitle='BudgetKollen' />
            <div className='container' >
                {/* <div className='data'>
                    <h1>Inkomst: {totalIncome} kr | Utgifter: {expenses} kr | Differens: {totalIncome - expenses} kr</h1>
                </div> */}
                
                <div className="button green" onClick={() => {setEnterIncome(true)}}>Ange inkomst</div>

                {(enterIncome 
                    ?   <Input title = 'Inkomst'  incomeCategories = {incomeCategories} value ={incomes} onChange={onIncomeChange} />
                    :   null
                )}
                
                <div className='incomes'>
                    <div> 
                        <p> {incomes[0].name} : {incomes[0].value} kr</p>
                        <p> {incomes[1].name} : {incomes[1].value} kr </p>
                        <p> {incomes[2].name} : {incomes[2].value} kr </p>
                    </div>
                     {/* <Input title = 'Utgifter' incomeCategories = {incomeCategories} value ={expenses} setIncome={setExpenses} /> */}
                    <PieChart data = {incomes} />   
                    <div>
                        <div className="sal"></div> {incomes[0].name } <br /> 
                        <div className="fk"></div> {incomes[1].name} <br /> 
                        <div className="msc"></div> {incomes[2].name} 
                    </div>
                </div>
                <div className="button red" onClick={() => {setEnterIncome(true)}}>Ange utgift</div>
                <div className='incomes'>
                    <div> 
                        <p> {incomes[0].name} : {incomes[0].value} kr</p>
                        <p> {incomes[1].name} : {incomes[1].value} kr </p>
                        <p> {incomes[2].name} : {incomes[2].value} kr </p>
                    </div>
                     {/* <Input title = 'Utgifter' incomeCategories = {incomeCategories} value ={expenses} setIncome={setExpenses} /> */}
                    <PieChart data = {incomes} />   
                    <div>
                        <div className="sal"></div> {incomes[0].name } <br /> 
                        <div className="fk"></div> {incomes[1].name} <br /> 
                        <div className="msc"></div> {incomes[2].name} </div>
                </div>

            </div>


        </div>
    )
}

export default App;