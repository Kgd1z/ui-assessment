import truck from '../assets/icons/png/truck.png';
import phone from '../assets/icons/png/phone.png';
import whatsapp from '../assets/icons/png/whatsapp.png';
import tick from '../assets/icons/png/check-badge.png';



export const AfterHero = ()=>{
    return (
      <div style={{padding:20}}>
        <div className="after-hero">
          <div>
            <Card
              heading={"Secure Shipping"}
              description={"on all orders"}
              image={truck}
            />
          </div>
          <div>
            <Card
              heading={"Telephone"}
              description={"+1 23 456 7890"}
              image={phone}
            />
          </div>
          <div>
            <Card
              heading={"Chat WhatsApp"}
              description={"Mon-Fri 9:00-21:00 Sat-Sun 9:00-17:00"}
              image={whatsapp}
            />
          </div>
          <div>
            <Card
              heading={"Quality Guarantee"}
              description={"Verified Purchase Reviews"}
              image={tick}
            />
          </div>
        </div>
      </div>
    );
}

 const Card = (props) => {
    return (
        <div className='card flex-column flex-gap'>
            <div className="card-icon">
                <img  src={props.image} />

            </div>
        
                <p className="card-heading">{props.heading}</p>
                <p className="card-description">{props.description}</p>
         
        </div>
    )
}