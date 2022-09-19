const express=require('express')
const router=express.Router()

const users=[{
    userId:11,
    userName:'varun',
    emailId:'varunreddy6666@yahoo.com',
    password:'Sunred@123',
    job:'Software Engineer'
},
{
    userId:21,
    userName:'sunny',
    emailId:'varun.trylogic@gmail.com',
    password:'Sunred@123',
    job:'Hardware Engineer'
},
{
    userId:31,
    userName:'Anila',
    emailId:'anilakumari45@gmail.com',
    password:'Sunred@123',
    job:'Home Maker'
},
{
    userId:41,
    userName:'Chandrika',
    emailId:'chandrika.reddy183@gmail.com',
    password:'Sunred@123',
    job:'Home Maker'
}
]
router.get('/',(req,res)=>{
    console.log('this is sample request in /user')

})

router.route('/:userId').get((req,res)=>{
    const userId= req.params.userId
    const user1= users.find(u=>u.userId==userId)
     console.log(`sample output${user1}`)
     res.json(user1)
     res.end();
 }).post((req,res)=>{
                    const newUser=req.body
                    newUser.userId=req.params.userId
                    users.push(newUser)
                    res.status(201).send('New User created').end()

 })/*.delete((req,res)=>{
        const userId=req.params.userId
       const userIndex= users.findIndex(user=>user.userId==userId)
        const user=users[userIndex]
        res.json(users.splice(userIndex)).send(`user ${user.userName} is delete from the Database`).end()

 }) .put((req,res)=>{

        const updateUser=req.body
        const userId=req.params.userId
        const userIndex=users.findIndex(user=>user.userId==userId)
        users[userIndex]=updateUser
        updatedUser=users[userIndex]
        res.json(updatedUser).send(`User details after updating is ${updatedUser}`).end()

 }) */
    
module.exports=router