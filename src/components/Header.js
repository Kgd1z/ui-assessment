import { SearchBar } from "./SearchBar";

export const Header = () => {
    const navItems= ['Home','Shirts','NBA','Tracksuits','Product Delivery 1-2 Days','Contact','Reviews']
  return (
    <div className="app-header flex-column">
      <div className="grid bg-black ">
        <div
          className="span-2 flex centered white"
          style={{
            height: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.08)",
          }}
        >
          EN
        </div>
        <div className="span-8 flex centered white ">
          <p className="text-align-center">
            SALES BEGIN · FREE SHIPPING ON ALL ORDERS
          </p>
        </div>
        <div
          className="span-2 flex centered white"
          style={{
            height: "100%",
            backgroundColor: "#27B03F",
          }}
        >
          Chat with us
        </div>
      </div>
      <div className="grid">
        <div className="span-2 yellow md-0 md-hide" />
        <div className="span-8 md-0 md-hide">
          <div className="grid">
            <div className="span-2 ">
              <div className="padded flex centered flex-gap">
                <p>All Categories</p>
                <img
                  className='icon'
                  src={require("../assets/icons/svg/down.svg")}
                />
              </div>
            </div>
            <div className="span-10 flex jc-center ai-center">
            
                <SearchBar/>
            </div>
          </div>
        </div>
        <div className="md-6 span-0 ">
          <div className="grid">
            <div className="span-6"></div>
            <div className="span-6"></div>
          </div>
        </div>
        <div className="span-2 md-6">
          <div style={{height:'100%'}} className="grid">
            <div className="span-6 flex centered">
              <img
                className="icon icon-padding"
                src={require("../assets/icons/png/shopping-cart.png")}
              />
            </div>
            <div className="span-6 flex centered">
              <img
                className="icon icon-padding"
                src={require("../assets/icons/png/user.png")}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="grid md-hide">
        <div className="span-2 yellow md-0"></div>
        <div className="span-10 md-0">
          <div className="flex ai-center horizontal-scroll">
            {navItems.map((item, index) => {
              return (
                <div className="padded" key={index}>
                  <p className="">{item}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
