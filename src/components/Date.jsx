import "../Style/Date.scss"

const Date = ({ date }) => {
    const year = String(date).substring(0, 4)
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const month = monthNames[Number(String(date).substring(5, 7)) - 1]
    const day = String(date).substring(8, 11)

    return (
        <div className="date">
            <div>
                {month}
            </div>
            <div>
                {year}
            </div>
            <div className="day">
                {day}
            </div>
        </div>
    )
}

export default Date
