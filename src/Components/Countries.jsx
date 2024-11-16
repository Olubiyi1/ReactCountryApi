import { useState, useEffect } from "react";
import styled from "styled-components";

const allCountries = () => {

    const [Countries,setCountries] = useState([]);

    const fetchCountries = "https://restcountries.com/v3.1/all"
    // fetch(fetchCountries)
    // .then ((response)=>response.json())
    // .then ((data)=>{
    //     console.log(data)
    //     setCountries(data)
    // })

    useEffect (()=>{
        const CountryUrl = "https://restcountries.com/v3.1/all"

        const fetchCountry =()=>{
            fetch(CountryUrl)
            .then ((response)=>response.json())
            .then ((data)=>{
                console.log(data);
                setCountries(data)
            })
        }
        fetchCountry();
    },[])

    return ( 
        <Div className="Countries">
           {Countries.map((item)=>(
            <Section className="Country" key={item.capital}>
                <img src={item.flags.svg} alt="" />
                <h1>{item.name.common} <span>{item.capital}</span></h1> 
                <p>Population: {item.population}</p>
                <p>Region :{item.region}</p>
            </Section>

           ))}
        </Div>
     );
}
 
export default allCountries;

const Div = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    margin: 0px auto;
`
const Section = styled.div`
    /* border: 1px solid red; */
    width: 250px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 10px;

    span{
        font-size: 20px;
        font-weight: 100;
    }
    

    img{
        /* border: 2px solid red; */
        width: 250px;
        height: 200px;
        object-fit: cover;
        border-radius: 10px;
    }
`
