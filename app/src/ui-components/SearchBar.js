const SearchBar = () => (
    <form action="/" method="get">
        <input
            type="text"
            id="header-search"
            placeholder="Search companies and products"
            name="s" 
        />
        <button type="submit">Search</button>
    </form>
);

export default SearchBar;