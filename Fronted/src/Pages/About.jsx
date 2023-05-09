import { Box, Button, Card, CardActionArea, CardContent, Grid, Typography } from "@mui/material"
import {Link} from 'react-router-dom'
import pic1 from '../assets/img/pic1.jpg'
import { useEffect, useReducer } from "react"
import axios from "axios"
const reducer=(state,action)=>{
  switch(action.type){
    case "FETCH_REQUEST":
      return {...state,loading:true}
    case "FETCH_SUCCESS":
      return {...state,loading:false,product:action.payload}
    case "FETCH_FAILURE":
      return{...state,loading:false,product:action.payload}  
    default :
    return " "  
  }
  }
  
  
  const initialtState={
    product:[{image:'datasdsjod'}],
    loading:true,
    error:''
  }
  
function About() {
  const [{loading,error,product},dispatch]=useReducer(reducer,initialtState)
  useEffect(()=>{
   const fetchData=async()=>{
    dispatch({type:"FETCH_REQUEST"})
    try {
      const result=await axios.get('http://localhost:2000/fetchImg2')
      dispatch({type:"FETCH_SUCCESS",payload:result.data})
    } catch (error) {
      dispatch({type:"FETCH_FAILURE",payload:error.message})
    }
   }
   fetchData()
  },[])
  return (
    <>
      <Box marginLeft='40px' marginTop={4} className='B4'>
         <Grid  container  justifyContent='center' columnSpacing={5} >
          <Grid item  lg={6} md={6} xs={12}>
            <h1>A Lil More About Me</h1>
            <p>Est est quia voluptas quo aperiam sint quaerat quo. Molestias exercitationem quidem eum animi ab laboriosam rem possimus eligendi. Fugiat consequuntur recusandae libero et magni quidem perferendis. Blanditiis non molestiae commadi voluptas sapiente. Quia ea odit qui est quia illum tenetur laboriosam quisquam. Madi provident ut perferendis repudiandae. Dolor saepe corporis. <br /> Distinctio quas in voluptate cupiditate alias temporibus dignissimos quis. Id sed expedita. Ullam alias officia tempore maxime. Sunt et laborum non aut veniam eum similique.</p>
          </Grid>
          <Grid  item lg={6} md={6} xs={12}>
           <img src={product[0].image} alt="pic" width='80%' height='350px' />
          <Typography variant="body2" marginTop={4} color="text.secondary">
            Our Oath is 100% Satisfaction of a Client
          </Typography>
          </Grid>
         </Grid>
      </Box>
    </>
  )
}

export default About
