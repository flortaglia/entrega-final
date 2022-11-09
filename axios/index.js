const  axios = require("./axios.instance") ;

let id_prod
let producto={title: "empanada de jamón y queso",
description: "empanada de jamón y queso",
code:200,
price:300,
thumbnail:"/img/jyq-empa.webp",
stock:300}

const getProducts = async () => {
  try {
    const response = await axios.get(`/`);
    console.log("##################### getProducts ################################")
    console.log(response.data)
    return (response.data);
  } catch (err) {
    console.log(err);
  }
};

const createProduct = async () => {
  try {
  
    const response = await axios.post(`/`, producto);
    console.log("##################### createProduct ################################")
    console.log(response.data)
    return response.data._id
    // console.log(response.data);
  } catch (err) {
    console.log(err);
  }
};
const getProduct = async (id) => {
  try {
    const response = await axios.get(`/${id}`);
    console.log("##################### getProduct id ################################")
    console.log(response.data);
  } catch (err) {
    console.log(err);
  }
};


const changeProduct = async (id) => {
  try {
    producto= {
      title: "empanada de jamón y queso",
      description: "empanada de jamón y queso",
      code:200,
      price:400,
      thumbnail:"/img/jyq-empa.webp",
      stock:50
    }
    const response = await axios.put(`/${id}`, producto);
    console.log("##################### changeProduct id ################################")
    console.log(response.data);
  } catch (err) {
    console.log(err);
  }
  };



const deleteById = async (id) => {
  try {
      const response = await axios.delete(`/${id}`);
      console.log("##################### deleteById id los que quedan################################")
      console.log(response.data);
  } catch (err) {
  console.log(err);
  }
}


async function run(){
  getProducts()
  id_prod = await createProduct()
  await getProduct (id_prod)
  await changeProduct(id_prod)
  await deleteById(id_prod)

}

run()
