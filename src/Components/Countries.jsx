import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const allCountries = () => {

    const [Countries,setCountries] = useState([]);


    useEffect (()=>{
        const CountryUrl = "https://restcountries.com/v3.1/all"

        const fetchCountry =()=>{
            fetch(CountryUrl)
            .then ((response)=>response.json())
            .then ((data)=>{
                // console.log(data);
                setCountries(data)
            })
        }
        fetchCountry();
    },[])

    return ( 
            <Div className="Countries darkMode">
               {Countries.map((item)=>(
                    <Link to={`/${item.name.common}`} key={`${item.name.common}`}>
                        <Section className="Country"  key={item.capital}>
                            <img src={item.flags.svg} alt="" />
                            <h1>{item.name.common} <span>{item.capital}</span></h1>
                            <p><b>Population:</b> {item.population}</p>
                            <p><b>Region:</b>{item.region}</p>
                        </Section>
                    </Link>
               ))}
            </Div>
       
     );
}
 
export default allCountries;

const Div = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 50px;

    .darkMode{
        background-color: black;
    }
    
    a{
        text-decoration: none;
        color: black;
        margin: 0px auto;

    }
    
`
const Section = styled.div`
    width: 250px;
    height: 350px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 10px;
    margin: 0px auto;
    /* margin-top:40px; */

    h1{
        font-size: 20px;
        padding: 10px;
        line-height: 20px;
    }
    p{
        font-size:14px ;
        margin-left:10px ;
        line-height: 30px;
    }

    span{
        font-size: 16px;
        font-weight: 100;
    }
    
    img{
        width: 250px;
        height: 200px;
        object-fit: cover;
        border-radius: 10px 0px 0px;
    }

`
