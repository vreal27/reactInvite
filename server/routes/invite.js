const express = require('express')
const Router = express.Router()
const axios = require('axios')

var people = []

axios.get('https://randomuser.me/api/?results=100&?inc=picture,name,email,phone?').then(resp =>{
  people = resp.data.results.map((p,i) => (
    ({
      id: i + 1,
      picture: p.picture.large, 
      fname: p.name.first,
      lname: p.name.last,
      email: p.email,
      phone: p.phone,
      status: 'pending'
    })
  ))

Router.get('/people', (req, res, next) => {
  res.json({
    person: people.find(p => p.status === 'pending')
  })
 }) 
})


 Router.patch('/people', (req,res, next) => {
   const id = req.body.id
   const status = req.body.status

   people = people.map(person => {
     if (person.id == id) {
       return {...person, status: status}
     } else {
       return person
     }
   })
   res.json (people)
 })

 Router.get('/going', (req, res, next) => {
   var going = people.filter(y => y.status === 'going')
   res.json(going)
 })

 Router.get('/notgoing', (req, res, next) => {
   var notgoing= people.filter(n => n.status === 'not going')
   res.json(notgoing)
 })
module.exports = Router