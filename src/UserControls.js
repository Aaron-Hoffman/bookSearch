import Search from "./Search";
import Sort from "./Sort";

const UserControls = ({setBooks, books}) => {
    return (
        <div className="controls wrapper">
            <Search setBooks={setBooks}/>
            <Sort setBooks={setBooks} books={books}/>
        </div>
    )
}

export default UserControls;