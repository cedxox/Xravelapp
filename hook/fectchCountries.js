import { useState,useEffect } from "react";
import { Axios } from "axios";

const fetchCountries = ()=> {
    const [countries, setCountries] = useState([]);
    const [isloading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);


    const fetchData = async ()=> {
        setIsLoading(true)

        try {
            const response = await axios.get('')

            setCountries(response.data.countries)
            setIsLoading(false)
        } catch (error) {
            setError(error)
        } finally{
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const refetch =()=> {
        setIsLoading(true)
        fetchData()
    }
return {countries, isloading, error, refetch}
}

export default fetchCountries;