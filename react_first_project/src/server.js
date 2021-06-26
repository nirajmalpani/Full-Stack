const express=require('express');
const app=express();
const PORT=3001;
var cors = require('cors')

app.use(cors())
const postJson=
    {
        "home":"Title of Verticle gallery",
        "articlebody":"Gujarat is vastly underratted and ita a mystery to us why it isnt a tourist destination.",
        "articletitle":"Catch waves with an adventure guide",
        "articlefooter":"Travel/12/4/2021",
        "cardheading":"Joshua Tree overnight Adventure",
        "date":"/12/4/2021",
        'tech':'Tech',
        "stories":"West Bengal is the second largest tea-producing state in India and is home to the globally acclaimed Darjeeling tea variety. Its location advantage makes the state a traditional market for eastern India, the Northeast, Nepal, and Bhutan. It is also a strategic entry point for markets in Southeast Asia.",
        "blogger" :" West Bengal is the second largest tea-producing state in India and is home to the globally acclaimed Darjeeling tea variety. Its location advantage makes the state a traditional market for eastern India, the Northeast, Nepal, and Bhutan. It is also a strategic entry point for markets in Southeast Asia.FACTFILE Capital: Kolkata Geographical Area (sq km):88,752 .West Bengal is situated in eastern India and shares its borders with Jharkhand, Bihar, Odisha, Sikkim, and Assam. The state also shares international borders with Bangladesh, Bhutan, and Nepal.West Bengal has abundant natural resources of minerals and suitable agro-climatic conditions for agriculture, horticulture, and fisheries.West Bengal ranked eleventh among Indian states on ease of doing business and reforms implementation according to a study by the World Bank and KPMG."
    }




app.get("/home",(request,response)=>{
    response.send(postJson);
   
})

app.listen(PORT,()=>{
    console.log("Server is running");
})