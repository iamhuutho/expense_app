import "../Style/FormSubmitBtn.css"
const FormSubmitBtn = ({
    addExpense
}) => (
    <button
        type="submit"
        onClick={(e) => addExpense(e)}
        className="submit-button"
    >Add</button>
)

export default FormSubmitBtn