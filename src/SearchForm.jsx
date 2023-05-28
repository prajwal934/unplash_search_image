import { useGlobalContext } from "./context";

const SearchForm = () => {
    const {setSearchTerm} = useGlobalContext();
    const handelSubmit = (e) => {
        e.preventDefault();
        const searchValue = e.target.elements.search.value;
        if(!searchValue) return ;
        setSearchTerm(searchValue);
    }
    return(
        <section>
            <h1 className='title'>Unplash Image</h1>
            <form className='search-form' onSubmit={handelSubmit}>
                <input type="text" className="form-input search-input" name="search" placeholder="Mustang GT" />
                <button type="submit" className="btn">Search
                </button> 
            </form>
        </section>
    )
};
export default SearchForm;