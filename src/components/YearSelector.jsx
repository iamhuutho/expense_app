import "../Style/YearSelector.css";

const YearSelector = ({ handleFilterChange }) => (
    <select
        onChange={(e) => { handleFilterChange(e) }}
        style={{
            borderRadius: '4px',
            padding: '4px 20px',
            fontWeight: 'bold',
        }}>
        <option value={''}>All</option>
        <option value={2023}>2021</option>
        <option value={2022}>2022</option>
        <option value={2021}>2023</option>
    </select>
)

export default YearSelector
