const admin = require("firebase-admin");
const dbConfig = require('../../config.js');

admin.initializeApp({
  credential: admin.credential.cert(config.firebase),
});

const db = admin.firestore();

class ContenedorFirebase {

  constructor(nombreColeccion) {
    this.collection = db.collection(nombreColeccion);
  }

  async getById(id) {
    console.log('id', id)
    const doc = await this.collection.doc(id).get();
    const response = doc.data();
    return response;
  }
 
  async getAll(){
    const docSnapshot = await this.collection.get()
    const docs = docSnapshot.docs;

    const response = docs.map((doc) =>{
      const result = doc.data();
      result.id = doc.id;
      return result;
    });
    return response;
  }

  async deleteById(id){
      await this.collection.doc(id).delete();
  }
  
}
export default ContenedorFirebase;