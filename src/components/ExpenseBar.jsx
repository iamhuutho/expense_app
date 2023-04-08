import "../Style/ExpenseBar.scss"

const ExpenseBar = ({ month, Style }) => {
    return (
        <div className="bar-wrapper">
            <div className="bar-container">
                <div className="bar"
                    style={{
                        borderRadius: Style == '100%' ? '25px' : '0px 0px 25px 25px ',
                        height: String(Style)
                    }}
                ></div>
            </div>
            <div className="bar-name">{month}</div>
        </div>
    )
}

export default ExpenseBar
