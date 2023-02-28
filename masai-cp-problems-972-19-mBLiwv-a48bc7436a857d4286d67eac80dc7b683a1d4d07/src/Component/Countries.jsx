import { useEffect, useState } from "react";
import CountriesCard from "./CountriesCard";
import LoadingIndicator from "./LoadingIndicator";
import Pagination from "./Pagination";

function Countries() {

  const [data, setData] = useState([])  
  const [loading, setLoading] = useState(true)
  const [paginationValues, setPaginationValues] = useState({
    totalPages:1,
    limit: 10,
    page: 1
  })
  useEffect(() => {
    getData()
  }, [paginationValues.page])
  

  const getData = () => {
    fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?page=${paginationValues.page}&limit=${paginationValues.limit}&sort=population&order=asc`)
    .then(res => res.json())
    .then(result => {
      setData(result.data)
      setLoading(false)
      setPaginationValues({...paginationValues, totalPages: result.totalPages})
    })
  }

  const onPageChange = (val) => {
    let temp = paginationValues.page;
      temp += val;
    setPaginationValues({...paginationValues, page: temp})
  }

  return loading ? 
    <LoadingIndicator /> :
    (
      <div>
        <h1 data-testid="countries-header">Countries List</h1>
        <div data-testid="countries-container">
          <CountriesCard data={data} />
        </div>
        <div>
          <Pagination paginationValues = {paginationValues} onPageChange = {onPageChange} />
        </div>
      </div>
    );
}

export default Countries;
