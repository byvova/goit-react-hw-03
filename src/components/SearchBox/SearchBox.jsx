export const SearchBox = ({ search }) => {
    return (
        <div>
            <p>Find contacts by name</p>
            <input type="text" value={search} />
        </div>
    )
}