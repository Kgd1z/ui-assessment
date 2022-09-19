export const SearchHeader = () => {
    return (
        <div style={{ display: "flex", flexDirection: 'row', border: '1px solid #EAEAEC' }}>
            <div style={{ backgroundColor: '#F9DC38', height: 88, width: 160,  }}></div>
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', border: '1px solid #EAEAEC' }}>
                <div style={{ display: 'flex', height: 56,  border: '1px solid #EAEAEC' }}>
                    <div style={{ width: '20%', borderRight:'1px solid #EAEAEC' ,display:'flex',alignItems:'center'}}>
                        <select className="search-select">
                            <option value="all">All Categories</option>
                        </select>
                    </div>
                    <div style={{ display: 'flex', width: '80%',   }}>
                        <div style={{ display: 'flex', width: '73%', marginRight: '8%',marginTop:10,marginBottom:10 }}>
                            <input style={{ height: 30, marginLeft: 20, width: '80%' ,border:'none',}} type='text' placeholder='What are you looking for?' />
                            <button style={{ border: 'none', backgroundColor: '#F9DC38', width: '15%' }}>Search</button>

                            <div style={{ backgroundColor: 'black', width: '10%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><img src={require('../assets/icons/png/search.png')} alt="search" /></div>

                        </div>

                        <div style={{ display: 'flex', border: '1px solid #EAEAEC ', width: '19%' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '50%' }}><img src={require('../assets/icons/png/shopping-cart.png')} alt="search" /></div>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '50%', borderLeft: '1px solid #EAEAEC' }}><img src={require('../assets/icons/png/user.png')} alt="search" /></div>

                        </div>


                    </div>

                </div>

                <div style={{ display: 'flex', flexDirection: 'row', height: 32, marginLeft: '3%', alignItems: 'center' }}>
                    <div className="nav-items">Home</div>
                    <div className="nav-items">T-shirts</div>
                    <div className="nav-items">NBA</div>
                    <div className="nav-items">Tracksuits</div>
                    <div className="nav-items">Products dedivery</div>
                    <div className="nav-items">Contacts</div>
                    <div className="nav-items">Reviews</div>
                </div>



            </div>


        </div>
    )
}