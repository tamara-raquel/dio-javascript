/*
Atividade 1: Maps

Crie uma função que retorna o nome dos membros de um Map que tem o papel 'ADMIN' no sistema
1. Crie uma função getAdmins que recebe um Map
2. Crie um Map e popule-o com nomes de usuários e seus papéis no sistema (Ex: Luiz => 'Admin')
3. Dentro de getAdmins, utilize o loop for...of para retornar uma lista dos usuários que são administradores
*/

//Funcao getAdmin
function getAdmins(map){
    //Cria array auxiliar
    let admins =[];
    //Loop for...of
    for([key, value] of map){
        if(value === 'Admin'){
            admins.push(key)
        }
    }
    return admins;
}

//Cria map
let usuarios = new Map();

//Populando o map
usuarios.set('Luiz', 'Admin');
usuarios.set('Aline', 'User');
usuarios.set('Luana', 'Admin');
usuarios.set('Lucas', 'User');
usuarios.set('Mariana', 'Moderador');
usuarios.set('Mirela', 'User');
usuarios.set('Fabio', 'Admin');

console.log(getAdmins(usuarios));