import ExpenseBar from './ExpenseBar';
import YearSelector from './YearSelector';
import "../Style/Filter.scss"



const Filter = ({ expensesToShow, handleFilterChange }) => {
    const months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const monthlyExpenses = months.map((month, id) => {
        return expensesToShow.reduce(
            (accum, cur) => accum + (Number(cur.date.slice(5, 7)) === (id + 1) ? Number(cur.ammount) : 0),
            0
        )
    })
    const tol = expensesToShow.reduce(
        (accum, cur) => Number(accum) + Number(cur.ammount),
        0
    )

    let Styles = []
    if (tol > 0) {
        Styles = monthlyExpenses.map(month => { return `${Math.round(Number(month) / tol * 100)}%` })
    } else {
        for (let i = 0; i < 11; i++) {
            Styles[i] = `0%`
        }
    }
    


    return (
        <div>
            <div className='filter'>
                <div className='filter_name'> Filter by year </div>
                <YearSelector
                    handleFilterChange={handleFilterChange}
                ></YearSelector>
            </div>
            <div className="summary">
                {months.map((month, id) => (
                    <ExpenseBar key={month} month={month} Style={Styles[id]}></ExpenseBar>
                ))}
            </div>
        </div>
    )
}

export default Filter
