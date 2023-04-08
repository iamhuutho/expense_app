const FormInput = ({
    type,
    value,
    handleChange
}) => {
    return (
        <div>
            {type}
            <input
                type={'text'}
                value={value}
                onChange={(e) => handleChange(e)}
                placeholder={`Enter ${type}...`}>
            </input>
        </div>
    )
}

export default FormInput