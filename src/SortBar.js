import SortOption from "./SortOption"

const SortBar = ({setBooks, books}) => {

    return (
        <div>
            <SortOption name="alphabetically" text="Sort alphabetically by title" options={["A-Z", "Z-A"]} setBooks={setBooks} books={books}/>
            <SortOption name="byDate" text="Sort by date" options={["Newest first", "Oldest first"]} setBooks={setBooks} books={books}/>
        </div>
    )
}

export default SortBar;