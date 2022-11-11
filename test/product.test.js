const supertest = require("supertest") ;
const { expect } = require("chai")   ;
const productGenerate = require("./product.generate.js")  ;

let request;
let response
let id
describe("Test sobre Productos", () => {
    before(() => {
        request = supertest("http://localhost:8080");
    });

    const productToCreate = productGenerate.generateProduct();
    
    it("It creates a product (POST => /productos)", async () => {
        response = await request
                    .post("/productos")
                    .send(productToCreate);
        id=response.body._id
        // console.log ('response.body',response.body)
        expect(response.status).to.eql(201);
        expect(response.body.title).to.eql(productToCreate.title);
        expect(response.body.thumbnail).to.eql(productToCreate.thumbnail);
        expect(response.body.description).to.eql(productToCreate.description);
        expect(response.body.price).to.eql(Number(productToCreate.price));
        expect(response.body.stock).to.eql(Number(productToCreate.stock));
        expect(response.body.code).to.eql(Number(productToCreate.code));
    });
   
    it("Return all products - GET => /productos", async () => {
    response = await request
        .get("/productos")

    expect(response.status).to.eql(200);
    });
   
    it("Return status 404 - GET => Unkown Page", async () => {
    const response = await request.get("/asdasds");

    expect(response.status).to.eql(404);
    });

    const productToCreate2 = productGenerate.generateProduct()
    
    it("Modificamos producto - PUT =>/productos/id ", async () => {
        response = await request
                    .put(`/productos/${id}`)
                    .send(productToCreate2);
        // console.log ('response.body PUT',response.body)
        expect(response.status).to.eql(200);
    });

    it("- GET a product by Id => /productos/id", async () => {
    response = await request
        .get(`/productos/${id}`)
    
    expect(response.status).to.eql(200);
    
    expect(response.body).to.keys("_id","title", "description", "code","price", "thumbnail", "stock");
    });

    it("- DELETE product by Id => /productos/id", async () => {
    response = await request
        .delete(`/productos/${id}`)
    expect(response.status).to.eql(200);
    });

});