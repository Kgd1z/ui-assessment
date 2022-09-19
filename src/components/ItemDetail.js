export const ItemDetail=()=>{
    return (
      <div className="item">
        <div className="item-image">
          <div className="item-main">
            <img
              className="product-large"
              style={{}}
              src={require("../assets/images/product-large.jpg")}
            />
          </div>
          <div className="item-sec">
            <img
              className="product-small"
              style={{  }}
              src={require("../assets/images/product-small.jpg")}
            />
            <img
              className="product-small"
              style={{  }}
              src={require("../assets/images/product-small.jpg")}
            />
            <img
              className="product-small"
              style={{  }}
              src={require("../assets/images/product-small.jpg")}
            />
            <img
              className="product-small"
              style={{  }}
              src={require("../assets/images/product-small.jpg")}
            />
            <img
              className="product-small"
              style={{  }}
              src={require("../assets/images/product-small.jpg")}
            />
            <img
              className="product-small"
              style={{  }}
              src={require("../assets/images/product-small.jpg")}
            />
          </div>
        </div>
        <div className="item-detail">
          <h1 style={{ marginBottom: 0, fontSize: 24 }}>
            Manchester United 21-22 Home Shirt
          </h1>
          <div
            style={{
              display: "flex",
              flexDirection: "row",

              alignItems: "center",
            }}
          >
            <div>
              <h1 style={{ fontSize: 40, fontWeight: 700, marginRight: 10 }}>
                €30.00
              </h1>
            </div>
            <div style={{ marginRight: 10 }}>
              <p style={{ textDecoration: "line-through", color: "red" }}>
                €89.95
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#23C353",
                width: 91,
                height: 32,
              }}
            >
              <p style={{ color: "#FFFFFF", fontWeight: 600 }}>Save 67%</p>
            </div>
            <div className="add-to-div"
              style={{
               
              }}
            >
              <img
                style={{ marginRight: 10 }}
                src={require("../assets/icons/png/heart-outline.png")}
              />
              <p className="add-to" style={{ fontSize: 12 }}>Add to Favorites</p>
            </div>
          </div>
          <div className="item-desc"
            style={{
              
            }}
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque euismod lacinia aliquam. Morbi est nis, at lacus.
              Donec ornare, dui vel facilisis luctus, metus mi ttitor erat
              sapien scelerisque nunc. Pellentesque ornare elit tellus...
              <span style={{ textDecoration: "underline", fontWeight: 700 }}>
                Read More
              </span>
            </p>
          </div>

          <div className="form-group">
            <label style={{ fontWeight: 600, fontSize: 12 }}>
              Size<span>*</span>
            </label>
            <div style={{ display: "flex" }}>
              <input
                className="form-input-size"
                id="size"
                type="text"
                placeholder="Select a shirt size"
              />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  width: 130,
                  height: 40,
                  marginLeft: 8,
                  backgroundColor: "#F5F5F6",
                  border: "1px solid #EAEAEC ",
                }}
              >
                <p style={{ fontSize: 12 }}>View Size Chart</p>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label style={{ fontWeight: 600, fontSize: 12 }}>Name</label>
            <input
              className="form-input"
              id="size"
              type="text"
              placeholder="What name would you want in the shirt?"
            />
          </div>
          <div className="form-group">
            <label style={{ fontWeight: 600, fontSize: 12 }} for="size">
              Number on Shirt
            </label>
            <input
              className="form-input"
              id="size"
              type="text"
              placeholder="Enter a number between 0 and 99"
            />
          </div>
          <div className="form-group">
            <label style={{ fontWeight: 600, fontSize: 12 }}>Patch</label>
            <input
              className="form-input"
              id="size"
              type="text"
              placeholder="Select a patch"
            />
          </div>
          <div className="form-group">
            <label style={{ fontWeight: 600, fontSize: 12 }}>Quantity</label>
            <input
              className="form-input"
              id="size"
              type="number"
              placeholder=""
            />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                paddingLeft: 24,
                backgroundColor: "#F9DC38",
                width: 496,
                height: 56,
                fontSize: 16.8,
                fontWeight: 600,
              }}
            >
              Add to Cart
            </div>
            <div
              style={{
                backgroundColor: "#111112",
                width: 56,
                height: 56,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                style={{}}
                src={require("../assets/icons/png/shopping-cart-white.png")}
              />
            </div>
          </div>
        </div>
      </div>
    );
}