import express from 'express'
import axios from 'axios'
import bodyParser from 'body-parser'
import cors from 'cors'

// Express app
const app = express()
//Router
const router = express.Router()
//PORT
const port = +process.env.PORT || 5000



//JSON URL
const dataURL = 'https://ntokozo-sithebe.github.io/vue_js_port_data/data/'

//application middleware
// anything between the server and client is a middleware 
// http module 
// telling the the server to support .json 

// order/ sequence needs to be exactly the way its meant to be 

app.use(
    express.json(),
    express.urlencoded({
        extended: true
    }),
    cors(),
    router
)


// / => home
//education
// displays your status code from the serve --- and is dynamic  (status: res.statusCode,)
// router.get('^/$|/ejd', (req, res)=>{
//     res.json({
//         status: res.statusCode,
//         msg: 'You\'re home Ntokozo'

//     })
// })

// fetching the education data from vue-js data file
//using fetch

router.get('/education', async (req,res)=>{
    try{
        let response = await fetch (dataURL)
        let {education} = await response.json() 
        res.json({
            status: res.statusCode,
            education 
        })

    }catch(e){
        res.json({
            status:res.statusCode,
            msg: 'Try again mntase!'
        })
    }
     console.log();
    })

    // retrieving the data specifically using id 

router.get('/education/:id', async(req, res)=>{
    try{
        let response = await fetch(dataURL)
        let {education} = await response.json()
        let params = +req.params.id
        let index = params > 0 ? params - 1 : 0
          res.json({
              status: res.statusCode, 
              education: education[index]
          })

    }catch(e){
        res.json({
            status: res.statusCode,
            msg: 'Try again Honeyyyyy'
        })
    }
 })

// always ensure that you remove your consoles before you deploy your backend

router.post('/addeducation',
bodyParser.json(), async (req, res)=>{
    try{
        let dataRes = await axios.post(dataURL, req.body)
        if(dataRes){
            console.log(resVal.data);
            res.json({
                status: res.statusCode,
                msg: 'New Record was added'
        
            })
        }
            
            }catch(e){
                console.log(e.message);
               
            }
    })

router.patch('/updateEducation/:id',bodyParser.json(),(req,res)=>{
    //axios.patch(`${dataURL}`)
})



// router.get('/education/:id', async(req,res)=>{
//      let {education} = await (await fetch(dataURL)).json()
//      let params = +req.params.id
//      let index = params > 0 ? params - 1 : 0
//      res.json({
//          status: res.statusCode, 
//          education: education[index]
//      })
//  })

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})


// option 2 of displaying your json file

// router.get('/education', async (req,res)=>{
//     let res = await fetch (dataURL).json()
//     let {education} = await res 
//     res.json({
//         status: res.statusCode,
//         education 

//     })
 
// })

// another way of retrieving data

// router.get('/education', async(req,res)=>{
//      let {education} = await (await fetch(dataURL)).json()
//      res.json({
//          status:res.statusCode, 
//          education
//      })
//  })

// using AXIOS

// router.get('/education', async(req,res)=>{
     // let {education} = await (await fetch(dataURL)).json()
//     let response = await axios.get(dataURL)
//     let {education} = await response.data
//      res.json({
//          status:res.statusCode, 
//          education
//      })
//  })