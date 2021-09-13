import SortOption from "./SortOption"

const SortBar = () => {
    return (
        <div>
            <SortOption name="alphabetically" text="Sort alphabetically by title" options={["A-Z", "Z-A"]}/>
            <SortOption name="byDate" text="Sort by date" options={["Newest first", "Oldest first"]} />
        </div>
    )
}

export default SortBar;