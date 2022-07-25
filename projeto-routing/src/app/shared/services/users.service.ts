import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: Array<User> = [
    {
      id:1,
      nome: 'Nathan',
      email: 'nathan@gmail.com',
      senha: '123456'
    },
    {
      id:2,
      nome: 'Alan',
      email: 'Alan@gmail.com',
      senha: '123456'
    }

  ];

  constructor() { }

  getUsers(){
    return this.getUsers;
  }

  getUserByEmailAndPassword(email: string, password: string){
    return this.users.find((users) => users.email === email && users.senha === password)
  }

}
