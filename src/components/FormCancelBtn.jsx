import "../Style/FormCancelBtn.css"
const FormCancelBtn = ({
    handleAddClick
}) => (
    <button
        type="submit"
        className= "cancel-button"
        onClick={handleAddClick}>Cancel</button>
)

export default FormCancelBtn