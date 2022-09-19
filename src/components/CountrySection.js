import championsLeague from '../assets/images/country-leagues/champions-league.jpg';
import asianCup from '../assets/images/country-leagues/asian-cup.jpg';
import caf from '../assets/images/country-leagues/caf.jpg';
import copaAmerica from '../assets/images/country-leagues/copa-america.jpg';
import europaLeague from '../assets/images/country-leagues/europa-league.jpg';

export const CountrySection = () => {
 
    return (
        <div className='CountrySection'>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 30 }}>
                <h1 style={{ fontSize: 32, weight: 800 }}>COUNTRY LEAGUES</h1>
   
            </div>
            <div className="country-items">
                <CountryCard title={'Champions League'} image={championsLeague} />
                <CountryCard title={'Europe League'} image={europaLeague} />
                <CountryCard title={'Copa America'} image={copaAmerica} />
                <CountryCard title={'Asian Cup'} image={asianCup} />
                <CountryCard title={'African Nations Cup'} image={caf} />
             
            </div>
        </div>
    )
}



const CountryCard = (props) => {
    return (
        <div className="country-cards">
            <img style={{}} src={props.image} />
            <div style={{ paddingLeft: 10 }}>
                <p style={{fontWeight:700}}>{props.title}</p>

            </div>


        </div>)
}