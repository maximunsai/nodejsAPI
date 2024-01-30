const getAllProducts = async(req, res) =>{
    res.status(200).json({msg: "I am from getallProducts"})
};

const getAllProductsTesting = async(req, res) =>{
    res.status(200).json({msg: "I am from getAllProductsTesting"})
};

module.exports = {getAllProducts, getAllProductsTesting};