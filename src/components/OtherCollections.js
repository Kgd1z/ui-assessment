import kids from "../assets/images/other-collections/kids.jpg";
import largeSizes from "../assets/images/other-collections/large-sizes.jpg";
import proPlayer from "../assets/images/other-collections/pro-player.jpg";
import shorts from "../assets/images/other-collections/shorts.jpg";
import socks from "../assets/images/other-collections/socks.jpg";
import goalkeeper from "../assets/images/other-collections/goalkeeper.jpg";

export const OtherCollections = () => {
  return (
    <div className="OtherSection page-section">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ fontSize: 32, weight: 800 }}>OTHER COLLECTIONS</h1>
      </div>
      <div className="other-collections-items">
        <div>
          <CollectionCard title={"Kids"} image={kids} />
        </div>
        <div>
          <CollectionCard title={"Large Sizes"} image={largeSizes} />
        </div>
        <div>
          <CollectionCard title={"Goalkeeper"} image={goalkeeper} />
        </div>
        <div>
          <CollectionCard title={"Automatic/Pro Player"} image={proPlayer} />
        </div>
        <div>
          <CollectionCard title={"Shorts"} image={shorts} />
        </div>
        <div>
          <CollectionCard title={"Socks"} image={socks} />
        </div>
      </div>
    </div>
  );
};

const CollectionCard = (props) => {
  return (
    <div
      style={{
        height: 300,
        backgroundImage: `url(${props.image})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "row",
        
      }}
    >
      <div
        style={{
          width: "88%",
          backdropFilter: "blur(8px)",
          paddingLeft: 10,
          alignSelf: "flex-end",
        }}
      >
        <p style={{ fontWeight: 600, fontSize: 14, color: "#FFFFFF" }}>
          {props.title}
        </p>
      </div>
      <div
        style={{
          width: "12%",
          height: "15%",
          backgroundColor: "#F9DC38",
          alignSelf: "flex-end",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          style={{ transform: "rotate(270deg)" }}
          src={require("../assets/icons/png/down.png")}
        />
      </div>
    </div>
  );
};
