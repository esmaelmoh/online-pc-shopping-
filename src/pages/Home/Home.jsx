import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer/Footer'
import Laptops from '../../components/Laptops/Laptops'
import Navbar from '../../components/Navbar/Navbar'
import Pc from '../../components/Pc/Pc'
import Search from '../../components/Searchbar/Search'
import Showcase from '../../components/Showcase/Showcase'
import axios from 'axios'
import {Link, useLocation} from 'react-router-dom'
import NewArrival from '../../components/NewArrival/NewArrival'
import {  CSSProperties } from "react";
import HashLoader from "react-spinners/HashLoader";

const cssOverride = {
  display: "block",
  margin: "15rem auto",
  borderColor: "rgb(255, 0, 106)",
};

const Home = ({windowSize}) => {
 const [pcs , setPcs]= useState([])
 const {search} = useLocation()

 const [loading, setLoading] =useState(false)
  useEffect(() => {

    const getPost = async () => {
      setLoading(true)
      const res = await axios.get("http://localhost:5000/backend/pcs/" +search );
      // console.log(res.data)
      setPcs(res.data)
      setLoading(false)
    };
    getPost();
  }, [search]);



  return (
    <div>
     {/* <button><Link to ="/?core=i5" >link</Link></button>  */}
     <Showcase />
      {
        loading? 
        <HashLoader
        color='#ff006a'
        loading={loading}
        cssOverride={cssOverride}
        size={70}
        aria-label="Loading Spinner"
        data-testid="loader"
      />:
      (<> <NewArrival screenSize={windowSize} pcs={pcs}/>
           <Laptops pcs={pcs}/></>)
      }
       
     

    </div>
  )
}

export default Home