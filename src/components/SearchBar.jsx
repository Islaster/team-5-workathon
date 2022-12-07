import "./SearchBar.css";

export default function SearchBar(props) {
    return (
        <>
            <div className="search-container">
                <form onSubmit="" className="search-form">
                    <input
                        type="text"
                        name="search"
                        onChange=""
                        placeholder="Food Pantry, City or Zip..."
                        value=""
                    />
                    <button type="submit">Search</button>
                </form>
            </div>
        </>
    )
}