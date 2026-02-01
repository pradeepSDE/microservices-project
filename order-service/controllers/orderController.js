const createOrder=async(req,res)=>{
    try {
        res.json({status:"this endpoint is currently being developed"})
    } catch (error) {
        console.error(error)
        res.status(500).json({message:"something went wrong"})
    }

}

module.exports = {createOrder}