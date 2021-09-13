const SortOption = (({name, text, options}) => {
    return (
        <>
            <label htmlFor={name}>{text}</label>
            <select name={name} id={name}>
                {options.map((option, index) => <option value={option} key={index}>{option}</option>)}
            </select>
        </>
    )
})

export default SortOption;