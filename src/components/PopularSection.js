import {  useRef } from "react";
import { Link } from "react-router-dom";


export const PopularSection= ()=>{
    const ref = useRef(null);
    const scroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
    };
    return (
      <div className="PopularSection">
        <div
          className="section-header"
           style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1>MOST POPULAR T-SHIRTS</h1>
          <div>
            <button
              onClick={() => scroll(-180)}
              style={{
                marginRight: 5,
                backgroundColor: "#FFFFFF",
                border: "1px solid #EAEAEC",
                width: 30,
                height: 30,
              }}
            >
              <img
                style={{ transform: "rotate(90deg)" }}
                src={require("../assets/icons/png/down.png")}
              />
            </button>
            <button
              onClick={() => scroll(180)}
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #EAEAEC",
                width: 30,
                height: 30,
              }}
            >
              <img
                style={{ transform: "rotate(270deg)" }}
                src={require("../assets/icons/png/down.png")}
              />
            </button>
          </div>
        </div>
        <div
          className="popular-second"
          ref={ref}
          style={{
            display: "flex",
            flexDirection: "row",
            overflowX: "scroll",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <PopularCard
            title={"Manchester United 21-22"}
            currentPrice={"€30.00"}
            previousPrice={"€89.95"}
          />
          <PopularCard
            title={"Manchester United 21-22"}
            currentPrice={"€30.00"}
            previousPrice={"€89.95"}
          />
          <PopularCard
            title={"Manchester United 21-22"}
            currentPrice={"€30.00"}
            previousPrice={"€89.95"}
          />
          <PopularCard
            title={"Manchester United 21-22"}
            currentPrice={"€30.00"}
            previousPrice={"€89.95"}
          />
          <PopularCard
            title={"Manchester United 21-22"}
            currentPrice={"€30.00"}
            previousPrice={"€89.95"}
          />
          <PopularCard
            title={"Manchester United 21-22"}
            currentPrice={"€30.00"}
            previousPrice={"€89.95"}
          />
          <PopularCard
            title={"Manchester United 21-22"}
            currentPrice={"€30.00"}
            previousPrice={"€89.95"}
          />
          <PopularCard
            title={"Manchester United 21-22"}
            currentPrice={"€30.00"}
            previousPrice={"€89.95"}
          />
        </div>
      </div>
    );
}



const PopularCard = (props)=>{
    return (
      <Link style={{textDecoration:'none',color:'#111112'}}to="/item">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            border: "0.1px solid #EAEAEC",
            marginRight: 25,
          }}
        >
          <img src={require("../assets/images/product-medium.jpg")} />
          <div style={{ paddingLeft: 10 }}>
            <p style={{}}>{props.title}</p>
            <p style={{ fontSize: 20, color: "#111112", fontWeight: 700 }}>
              {props.currentPrice}
              <span
                style={{
                  textDecoration: "line-through",
                  marginLeft: 10,
                  color: "#EE503E",
                  fontSize: 12,
                }}
              >
                {props.previousPrice}
              </span>
            </p>
          </div>
        </div>
      </Link>
    );
}