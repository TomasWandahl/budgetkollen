import react, {useState, useEffect} from 'react';
import './style/input.css'

function Input(props) {
    const [value, setInputIncome] = useState(0);
    const [category, setIncomeCategory] = useState('Lön');
    
    const onSubmit = (e) => {
        e.preventDefault();

        let newState = props.value;
        newState[category] = parseInt(value);
        
        let total = 0;
        Object.keys(newState).map(item => {
            if(item != 'total') {
                total += parseInt(newState[item]);
            }
        });
        newState.total = total;
        props.onChange(newState);
        
    };

    const renderedList = props.incomeCategories.map((item) => {
        return (
            <option key = {item} value={item}>{item}</option>
        );
    });
    

    return (
        <div>
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