import express from 'express'

// Express app
const app = express()
//Router
const router = express.Router()
//PORT
const port = +process.env.PORT || 5000

//JSON URL
const dataURL = 'https://ntokozo-sithebe.github.io/vue_js_port_data/data/'

//application middleware
app.use(
    router
)


// / => home
// displays your status code from the serve --- and is dynamic  (status: res.statusCode,)
router.get('^/$|/ejd', (req, res)=>{
    res.json({
        status: res.statusCode,
        msg: 'You\'re home Ntokozo'

    })
})

// fetching the education data from vue-js data file
router.get('/education', async(req,res)=>{
    let {education} = await (await fetch(dataURL)).json()
    res.json({
        status:res.statusCode, 
        education

    })
})

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