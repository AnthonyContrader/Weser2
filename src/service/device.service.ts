import { Injectable } from '@angular/core';
import { AbstractService } from './abstractservice';
import { DeviceDTO } from 'src/dto/devicedto';
import { HttpClient } from '@angular/common/http';
import { UserDTO } from 'src/dto/userdto';
import { Observable } from 'rxjs';
import { LoginDTO } from 'src/dto/logindto';

/**
 * I service sono decorati da @Injectable. 
 * Qui trovate i metodi ereditati dall'Abstract(in mirror con il backend).
 * 
 * @author PattyGè
 * 
 * @see AbstractService
 */
@Injectable({
    providedIn: 'root'
})
export class DeviceService extends AbstractService<DeviceDTO>{
   
    constructor(http: HttpClient) {
        super(http);
        this.nome = 'micro1';
        this.type ='devices';
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