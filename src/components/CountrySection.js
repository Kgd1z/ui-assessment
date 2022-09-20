import championsLeague from '../assets/images/country-leagues/champions-league.jpg';
import asianCup from '../assets/images/country-leagues/asian-cup.jpg';
import caf from '../assets/images/country-leagues/caf.jpg';
import copaAmerica from '../assets/images/country-leagues/copa-america.jpg';
import europaLeague from '../assets/images/country-leagues/europa-league.jpg';

export const CountrySection = () => {
 
    return (
      <div className="CountrySection page-section">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 30,
          }}
        >
          <h1 style={{ fontSize: 32, weight: 800 }}>COUNTRY LEAGUES</h1>
        </div>
        <div className="country-items">
          <div>
       
            <CountryCard title={"Champions League"} image={championsLeague} />
          </div>
          <div>
            <CountryCard title={"Europe League"} image={europaLeague} />
          </div>
          <div>
            <CountryCard title={"Copa America"} image={copaAmerica} />
          </div>
          <div>
            <CountryCard title={"Asian Cup"} image={asianCup} />
          </div>
          <div>
            <CountryCard title={"African Nations Cup"} image={caf} />
          </div>
        </div>
      </div>
    );
}



const CountryCard = (props) => {
    return (
        <div className="country-cards">
            <img style={{width:'100%'}} src={props.image} />
            <div style={{ }}>
                <p style={{fontWeight:700}}>{props.title}</p>

            </div>


        </div>)
}