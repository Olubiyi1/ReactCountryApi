import { useEffect, useState } from "react";
import {  Link,useParams } from "react-router-dom";
import Axios from "axios"
import styled from "styled-components";


const Country = () => {

    const [Country, setCountry] = useState([]);
    const {name} = useParams();

    useEffect(()=>{

        const CountryApi = `https://restcountries.com/v3.1/name/${name}`
        Axios.get (CountryApi)
        .then ((response)=>{
        console.log(response.data);
        setCountry(response.data)  
    })
    },[name]) 

    return ( 
        <Div className="Country">
            <Link to="/">Back</Link>
        {Country.map((item)=>(
                 <Section className="Country" key={item.capital}>
                     <img src={item.flags.svg} alt="" />
                     <aside>
                         <h1>{item.name.common} <span>{item.capital}</span></h1>
                         <p><b>Population:</b> {item.population}</p>
                         <p><b>Region:</b>{item.region}</p>
                     </aside>
                 </Section>
        ))}
     </Div>
     );
}
 
export default Country;

const Div = styled.div`
a{
    text-align: none;
    /* border: 1px solid; */
    padding: 10px 50px;
    text-decoration: none;
    color: white;
    background-color: black;
    border-radius:10px;
    margin:50px;
    
 }
`

const Section = styled.div`
 box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
 max-width: 800px;
 border-radius: 10px;
 margin: 50px auto;
 display: flex;
 align-items: center;
 gap: 50px;
 /* height: auto; */

 
    img{
        margin: 0px;
        padding: 0px;
        width: 300px;
        border-radius:10px ;
    }
    h1{
        font-size: 20px;
        padding: 10px;
        line-height: 20px;
    }
    p{
        font-size:14px ;
        margin-left:10px ;
        /* padding: 5px 0px ; */
        line-height: 30px;
    }

    span{
        font-size: 16px;
        font-weight: 100;
    }
`


