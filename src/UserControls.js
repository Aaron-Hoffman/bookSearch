import Search from "./Search";
import Sort from "./Sort";

const UserControls = ({setBooks, books, setError}) => {
    return (
        <div className="controls wrapper">
            <Search setBooks={setBooks} setError={setError}/>
            <Sort setBooks={setBooks} books={books}/>
        </div>
    )
}

export default UserControls;