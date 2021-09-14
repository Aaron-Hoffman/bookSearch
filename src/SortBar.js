import SortOption from "./SortOption"

const SortBar = ({setBooks, books}) => {

    return (
        <form className="wrapper">
            <SortOption name="alphabetically" text="Sort alphabetically by title" options={["A-Z", "Z-A"]} setBooks={setBooks} books={books}/>
            <SortOption name="byDate" text="Sort by date" options={["Newest first", "Oldest first"]} setBooks={setBooks} books={books}/>
        </form>
    )
}

export default SortBar;