const SortOption = (({name, text, options}) => {
    return (
        <>
            <label htmlFor={name}>{text}</label>
            <select name={name} id={name}>
                {options.map(option => <option value={option}>{option}</option>)}
            </select>
        </>
    )
})

export default SortOption;