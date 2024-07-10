import express from 'express'; //no need to use (const express = require('express') this is old version)


const app = express();


//we use listen to create express server.
//takes two aurgumnet 1, port 2. callback function

//first aurgument
const PORT = 8000;

//second aurgument within applisten
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));