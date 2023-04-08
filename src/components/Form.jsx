import FormCancelBtn from "./FormCancelBtn"
import FormInput from "./FormInput"
import FormSubmitBtn from "./FormSubmitBtn"
import "../Style/Form.scss"
const Form = ({
    isAdding,
    handleAddClick,
    newName,
    newAmmount,
    newDate,
    handleNameChange,
    handleAmmountChange,
    handleDateChange,
    addExpense,
}) => {
    if (isAdding) {
        return (
            <div className="form-container">
                <FormInput
                    type='Name'
                    value={newName}
                    handleChange={handleNameChange}></FormInput>
                <FormInput
                    type='Ammount'
                    value={newAmmount}
                    handleChange={handleAmmountChange}></FormInput>
                <div>
                    Date
                    <input
                        type={'date'}
                        value={newDate}
                        onChange={(e) => handleDateChange(e)}
                        placeholder='dd/mm/yyyy'>
                    </input>
                </div>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'end',
                        gap: '16px'
                    }}>
                    <FormSubmitBtn addExpense={addExpense}></FormSubmitBtn>
                    <FormCancelBtn handleAddClick={handleAddClick}></FormCancelBtn>
                </div>
            </div>
        )
    } else {
        return (
            <div className="form">
                <button onClick={handleAddClick()}>ADD NEW EXPENSE</button>
            </div>
        )
    }
}

export default Form