export const SearchBar = () => {
  return (
    <div style={{width:'100%'}} className="flex">
      <div className="flex-basis-90 flex ">
        <input
          style={{ height: 30, marginLeft: 20, border: "none" }}
          type="text"
          placeholder="What are you looking for?"
        />
      </div>
      <div className="flex-basis-10 flex">

        <button
        className="flex-grow"
          style={{ border: "none", backgroundColor: "#F9DC38",}}
        >
          Search
        </button>
        <div
          className="flex centered icon-padding"
          style={{
            backgroundColor: "black",
          }}
        >
          <img src={require("../assets/icons/png/search.png")} alt="search" />
        </div>
      </div>
    </div>
  );
};
