## N2_Rajis

Mateus Malicheski de Souza 

Após Baixar todas as necessidades no terminal coloco um cd para a pasta de destino no meu pc dos scripts "cd C:\Users\Pichau\Documents\GitHub\N2_Rajis\N2_Edinilson" 
Então após isso escrevo "npm install" e instale as dependencias, por precaução "npm install dotenv", "npm install express", "npm install mongoose", "npm install nodemon". 

Então abro o postman usando a url "http://localhost:3000/"


Então no postman, voce pode colocar:

# GET
GET:  "http://localhost:3000/usuario" Mostrar todos os usuarios.  

GET: "http://localhost:3000/usuario/nome" Mostrar um usuario pelo nome dele.

GET: "http://localhost:3000/sala" Mostrar as salas criadas (Todas elas).

GET: "http://localhost:3000/sala/salaid" Mostrar uma sala pelo seu id. 

# POST

POST: "http://localhost:3000/criar_user" para criar um usuario. 

POST: "http://localhost:3000/criar_salas" para criar uma sala.

# Outros comandos 

DELETE: "http://localhost:3000/usuario/idUsuario" para remover um usuario pelo seu id.

PATCH "http://localhost:3000/sala/salaid" para editar uma sala com o seu id.




Para Realizar esses comandos os formatos usados no JSON foram.

{

        "nome": "Ex: roberto",
        "Sobrenome": "Ex: trump"      

}

{

        "nome": "Ex: maquinas",
        "lotacao": Ex: 8
        
}



