import express from 'express'

const app = express()


app.get('/opa', (request, response)=>{
    return response.json([
        {
            'id': 1,
            'message':'olá mundo'
        },
        {
            'id':2,
            'message':'epa mundo bom'
        },
        {
            'id':3,
            'message':'aoba pessoar'
        }
    ])
})

app.listen(3333)