import styles from "./CountriesCard.module.css";

function CountriesCard(props) {
  const data = props.data;

  return (
  
      data.map((each) => (
        <div key={each.id} data-testid="country-card" className={styles.container}>
          <div>
            Country: <b data-testid="country-card-name">{each.country}</b>
          </div>
          <div>
            Population: <b data-testid="country-card-population">{each.population}</b>
          </div>
        </div>
      ))
    
  );
}

export default CountriesCard;
