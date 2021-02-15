import react, {useState, useEffect} from 'react';
import './style/input.css'

function Input(props) {
    const [value, setInputIncome] = useState(0);
    const [category, setIncomeCategory] = useState('Lön');
    
    const onSubmit = (e) => {
        e.preventDefault();

        let newState = props.value;
        
        let total = 0;

        newState.map(i => {
            if(i.name == category) {
                i.value += parseInt(value);
            } 
        });
        
        props.onChange(newState, parseInt(value));
        
    };

    const renderedList = props.incomeCategories.map((item) => {
        return (
            <option key = {item} value={item}>{item}</option>
        );
    });
    

    return (
        <div className="income-form">
            <form onSubmit={onSubmit}>
                <h1>{`${props.title}: `}</h1>
                <select id="dropdown" name="dropdown" onChange = {e => {setIncomeCategory(e.target.value)}}>
                    {renderedList}
                </select>
                <br />
                <input autoComplete="off" type="number" id="income" name="income" value={value > 0 ? value : ''} onChange={e => {setInputIncome(e.target.value)}}></input>
                <br />
                <input autoComplete="off" type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default Input;