import { Box, Button, Card, CardActionArea, CardContent, Grid, Typography } from "@mui/material"
import pic1 from '../assets/img/pic1.jpg'
import { Link } from "react-router-dom"
import { useEffect, useReducer } from "react"
import axios from "axios"

const reducer=(state,action)=>{
  switch(action.type){
    case "FETCH_REQUEST":
      return {...state,loading:true}
    case "FETCH_SUCCESS":
      return {...state,loading:false,product:action.payload}
    case "FETCH_FAILURE":
      return{...state,loading:false,error:action.payload}  
    case "FETCH_REQUEST_SER":
      return {...state,loading1:true}
    case "FETCH_SUCCESS_SER":
      return {...state,loading1:false,service:action.payload}
    case "FETCH_FAILURE_SER":
      return{...state,loading1:false,error1:action.payload}  
    default :
    return " "  
  }
  }
  
  
  const initialtState={
    product:[{image:'datasdsjod'}],
    loading:true,
    error:'',
    service:[],
    loading1:true,
    error1:''
  }
  


function Home() {
  const [{loading,error,product,service,loading1,error1},dispatch]=useReducer(reducer,initialtState)
  useEffect(()=>{
   const fetchData=async()=>{
    dispatch({type:"FETCH_REQUEST"})
    try {
      const result=await axios.get('http://localhost:2000/fetchImg')
      dispatch({type:"FETCH_SUCCESS",payload:result.data})
    } catch (error) {
      dispatch({type:"FETCH_FAILURE",payload:error.message})
    }
   }
   const fetch0=async()=>{
    dispatch({type:"FETCH_REQUEST_SER"})
    try {
      const result=await axios.get('http://localhost:2000/fetchServices')
      dispatch({type:"FETCH_SUCCESS_SER",payload:result.data})
    } catch (error) {
      dispatch({type:"FETCH_FAILURE_SER",payload:error.message})
    }
   }
   fetch0()
   fetchData()
  },[])
  return (
    <>
    <Box  marginTop={4} className='B4'>
    <Grid  container   columnSpacing={5} >
     <Grid item  lg={6} md={6} xs={12}>
      <Box   style={{marginLeft:'40px'}}>
      <span id="B1" >Hi, I'm</span>
       <h1 >Tejaswini Kashyup <br />
       A Frontend Developer Based <br />
       in Vancouver.</h1>
       <p >I like to craft solid and scalable frontend products with great user experience</p>
       <Box sx={{marginTop:'50px'}}>
       <Button  color="secondary" variant="contained">Download Resume</Button> or <span style={{fontWeight:'bold'}}> Browse my Github</span>
       </Box>
      </Box>
     </Grid>
     <Grid  item lg={6} md={6} xs={12}>
      <img style={{marginTop:"40px"}} src={product[0].image} alt="pic" width='75%' height='350px' />
     </Grid>
    </Grid>
 </Box>
  <Box marginTop={8} sx={{width:'100%'}}>
    <hr  className='BHR' />
  </Box>
<Box marginTop={8} className='B5' style={{marginLeft:'40px'}}>
  <h3>Some things I've Built</h3>
  <Grid container columnSpacing={5}>
    { service.map(ser =>(
      <Grid key={ser.id} item lg={6} md={6} xs={12}>
     <img src={ser.image} width='100%' height='350px' alt="" />
     <h5><strong>{ser.title}</strong></h5>
     <h5>{ser.framework}</h5>
     <Link to={ser.link}><h5>Visit Link</h5></Link>
    </Grid>
      ))}
  </Grid>
 </Box>
 <Box  sx={{marginLeft:'40px'}} marginTop={8} className='B4'>
         <Grid  container  justifyContent='center' columnSpacing={5} >
          <Grid item  lg={6} md={6} xs={12}>
            <h1>My Skills and Experience</h1>
          <p>Est est quia voluptas quo aperiam sint quaerat quo. Molestias exercitationem quidem eum animi ab laboriosam rem possimus eligendi. Fugiat consequuntur recusandae libero et magni quidem perferendis. Blanditiis non molestiae commadi voluptas sapiente. Quia ea odit qui est quia illum tenetur laboriosam quisquam. Madi provident ut perferendis repudiandae. Dolor saepe corporis. Distinctio quas in voluptate cupiditate alias temporibus dignissimos quis. Id sed expedita. Ullam alias officia tempore maxime. Sunt et laborum non aut veniam eum similique.</p>
          </Grid>
          <Grid  item lg={6} md={6} xs={12}>
            <Box sx={{marginTop:'50px',color:'blue'}}>
              <Box sx={{display:"flex",marginLeft:"20px"}}>
               <p style={{marginLeft:'20px'}}>React</p>
               <p style={{marginLeft:'30px'}}>MongoDB</p>
               <p style={{marginLeft:'30px'}}>Javascript</p>
               <p style={{marginLeft:'30px'}}>Java</p>
               <p style={{marginLeft:'30px'}}>JQuerry</p>
              </Box>
              <Box sx={{display:"flex",marginLeft:"20px"}}>
               <p style={{marginLeft:'30px'}}>Redux</p>
               <p style={{marginLeft:'30px'}}>HTML</p>
               <p style={{marginLeft:'30px'}}>CSS</p>
               <p style={{marginLeft:'30px'}}>Bootstrap</p>
               <p style={{marginLeft:'30px'}}>Next JS</p>
              </Box>
              <Box sx={{display:"flex",marginLeft:"20px"}}>
               <p style={{marginLeft:'30px'}}>Python</p>
               <p style={{marginLeft:'30px'}}>React Native</p>
               <p style={{marginLeft:'30px'}}>Php</p>
               <p style={{marginLeft:'30px'}}>SalesForce</p>
               <p style={{marginLeft:'30px'}}>Agile Methodology</p>
              </Box>
              <Box sx={{display:"flex",marginLeft:"20px"}}>
               <p style={{marginLeft:'30px'}}>SwiftUi</p>
               <p style={{marginLeft:'30px'}}>Type Script</p>
               <p style={{marginLeft:'30px'}}>Amazon AWS</p>
               <p style={{marginLeft:'30px'}}>WordPress</p>
               <p style={{marginLeft:'30px'}}>Html</p>
              </Box>
              <Box sx={{display:"flex",marginLeft:"20px"}}>
               <p style={{marginLeft:'30px'}}>Tailwind</p>
               <p style={{marginLeft:'30px'}}>GRAPHSQL</p>
               <p style={{marginLeft:'30px'}}>Rest Full Api</p>
               <p style={{marginLeft:'30px'}}>Angular</p>
               <p style={{marginLeft:'30px'}}>ServeLets</p>
              </Box>
              <Box sx={{display:"flex",marginLeft:"20px"}}>
               <p style={{marginLeft:'30px'}}>Express JS</p>
               <p style={{marginLeft:'30px'}}>Hibernate</p>
               <p style={{marginLeft:'30px'}}>Dotnet</p>
               <p style={{marginLeft:'30px'}}>MY Sql</p>
               <p style={{marginLeft:'30px'}}>SASS</p>
              </Box>
            </Box>
          </Grid>
         </Grid>
      </Box>
      <Box marginTop={8} sx={{width:'100%'}}>
    <hr  className='BHR' />
  </Box>
  <Box marginTop={8} className='B6'>
    <Box textAlign='center'>
         <h1>Learn more  <Link to='/about'>about me</Link></h1> or
         <h1 style={{marginLeft:"150px"}}>Let's Read this <Link to='#B1'>page again. ↑</Link></h1>
    </Box>
  </Box>
 </>
  )
}

export default Home
