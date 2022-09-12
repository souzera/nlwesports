import express from 'express'

const app = express()


app.get('/opa', ()=>{
    console.log('olá mundo')
    window.location.href('https://github.com/souzera')
})

app.listen(3333)