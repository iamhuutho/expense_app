import Date from './Date';
import Ammount from './Ammount';
import RemoveBtn from './RemoveBtn';
import "../Style/Expense.scss"
const Expense = ({
    name,
    ammount,
    date,
    handleDelete
}) => {
    return (
        <div className='expense'>
            <Date date={date}></Date>
            <div className='expense_name'>
                <h3>{name}</h3>
                <Ammount ammount={ammount}></Ammount>
            </div>
            <RemoveBtn handleDelete={handleDelete}></RemoveBtn>
        </div>
    )
}
export default Expense