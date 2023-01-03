// a basic function which would be called once /help is triggered

const helpDetails = (req , res) => {

    return res.status(200).send({
        success:true ,
        message: "Successfully hitting api" ,
        data: {
            contact : "79XXXXXXXX"
        }
     }) 

}

module.exports ={
    helpDetails
}