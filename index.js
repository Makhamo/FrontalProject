const express = require('express');
const app = express()
bodyparser = require('body-parser');

require('express-async-errors')

const db = require('./db');
employeesRoute = require('./controller/employees.controller');
usersRoute = require('./controller/users.controller');


//------------------------------employees(syntex.err)---------------------------------------------------
app.use(bodyparser.json())
app.use('/api/employees', employeesRoute);
app.use('/api/users', usersRoute);
app.use((err,req,res,next)=>{
    console.log(err)
    res.status(err.status || 500).send('Something went wrong!')

})
//------------------------------users(syntex.err)---------------------------------------------------





db.query("SELECT 1")
.then(() => {
    console.log('database connected successfully.')
    app.listen(5000, () => console.log('server started at port 3000'));
   
    
})
//-------------------------------------------------------------------------------------

.catch(err => console.log('db connection failed. \n' + err))



