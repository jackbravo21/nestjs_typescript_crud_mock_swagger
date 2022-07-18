import { HttpException, Injectable } from "@nestjs/common";
import { USERS } from "./users.mock";

@Injectable()
export class UsersService
{

    users = USERS;

    getUsers(): Promise<any>
    {
        return new Promise(resolve => 
        {
            resolve(this.users);
        })
    }

    getUser(userId): Promise<any>
    {
        const id = Number(userId);
        
        return new Promise(resolve =>
            {            
                //peco para me retornar com find, tudo que tiver o user.id = id;
                const user = this.users.find(user => user.id === id);

                //se o user vier vazio;
                if(!user)
                {
                throw new HttpException(`Este usuário ${id} não existe!`, 404);                
                }

                resolve(user);

            });
    }

    addUser(body): Promise<any>
    {
        return new Promise(resolve =>
        {
            this.users.push(body);
            resolve(this.users);
        });
    }

    editUser(body): Promise<any>
    {
        //refatoro os valores para ter certeza que estao vindo corretos;
        const id = Number(body.id);
        const name = body.name;
        const age = Number(body.age);
        const sector = body.sector;

        return new Promise(resolve =>
            {            
                //aqui eu verifico se existe o usuario pelo id;
                const user = this.users.find(user => user.id === id);

                //se nao existir;
                if(!user)
                {
                    throw new HttpException(`Este usuário ${id} não existe!`, 404);                
                }

                //se existir;
                else
                {
                    //verifico o indice do usuario (javaScript basico);
                    const userIndex = this.users.findIndex(user => user.id === id);

                    //o "-1" eh porque o indice comeca por 0;
                    if(userIndex !== -1)
                    {
                        this.users[userIndex].name      = name;
                        this.users[userIndex].age       = age;
                        this.users[userIndex].sector    = sector;
                    }
                }

                resolve(user);

            });
    }

    deleteUser(query): Promise<any>
    {
        let id = Number(query);
        return new Promise(resolve => 
        {
            let index = this.users.findIndex(user => user.id === id);

            if(index === -1)
            {
                throw new HttpException("Este usuário não existe!", 404);
            }

            this.users.splice(index, 1);
            resolve(`Usuário ${id} deletado com sucesso!`);

        });
    }

}