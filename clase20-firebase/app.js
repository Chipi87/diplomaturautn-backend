const express = require("express");
const admin = require("firebase-admin");


const hbs = require("hbs");
const port = 3000;


// tremos el archivo que descargamos en firebase en generar clave privada
const serviceAccount = require("./crud-coud-firebase-adminsdk-cec2c-74800e2541.json");

const app = express();

// figura con la clave privada
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});



const db = admin.firestore();
const todosCollection = db.collection('todos');

app.set('view engine', 'hbs');

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', async (req,res) => {
    todosSnapShot = await todosCollection.get(); // nuestra constante que tenemos en nuestra de base de todos
    const todos = todosSnapShot.docs.map(doc =>({  //con map los mapea y transforma en un array de javascript
      id: doc.id, // nos va a traer el ID y el documento osea data
      ...doc.data()
    }))
    res.render('index', { todos }) // renderiza en la vista todos

})

app.post('todos/create', async (req,res) => {
    const {nombre, descripcion} = req.body; // va a venir del body la info
    const todo = { // desestructuramos todo en nombre y descripcion
      nombre,
      descripcion
    };
    await todosCollection.add(todo);
    res.redirect('/') //esto significa que agregamos algo a la base nos re dirige a la principal
})

app.get('todos/create',  (req,res) => {
  res.render('create')  //mostrame la vista
})


app.listen(port, () =>{
  console.log(`Servidor escucnahdo en el puerto http://localhost:${port}`);
})