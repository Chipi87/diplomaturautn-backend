//Ejercicio 3
    // Creamos usuario y le asignamos un rol
    use ecommerce 
    db.createUser({
        user: "admin",
        pwd: "password",
        roles: ["root"]
    })

    //2. Habilitamos la autenticación
    // El siguiente comando debe ejecutarse desde la terminal o línea de comandos
    // No debe ejecutarse en la consola de MongoDB
    mongod --auth

    //3. habilitar la autorización
    use ecommerce 
    db.createRole({
        role: "customRole", 
        privileges:[ 
            { 
                resource: { db: "ecommerce", collection: "" }, 
                actions: ["find"] 
            }
        ], 
        roles: [] 
    })

    db.createUser({
        user: "user", 
        pwd: "password", 
        roles: ["customRole"]
    })

