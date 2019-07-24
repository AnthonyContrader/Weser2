import { Injectable } from '@angular/core';
import { AbstractService } from './abstractservice';
import { PaymentDTO } from 'src/dto/paymentdto';
import { UserDTO } from 'src/dto/userdto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginDTO } from 'src/dto/logindto';


 @Injectable({
     providedIn: 'root'
 })

 export class PaymentService extends AbstractService<PaymentDTO>{
   
    
    constructor(http: HttpClient) {
        super(http);
        this.nome = 'micro1';
        this.type ='payments';
       this.port = '8080';
    }

 
    
  
  
    userLogged(username: string) {
     // console.log('qua: ', this.auth());
      console.log(this.auth());
      return this.http.get('http://localhost:8080/api/users/' + username, {
        headers: {
          Authorization: this.auth()
        }
      });
    }
 }
