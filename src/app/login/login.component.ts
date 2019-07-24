import { Component, OnInit } from '@angular/core';
import { LoginDTO } from 'src/dto/logindto';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/service/user.service';
import { Router } from '@angular/router';
import { UserDTO } from 'src/dto/userdto';
import { NgForOf } from '@angular/common';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginDTO: LoginDTO;

  constructor(private service: UserService, private router: Router) { }

  ngOnInit() {
  }

  login(f: NgForm): void {
    this.loginDTO = new LoginDTO(f.value.username, f.value.password);

    this.service.login(this.loginDTO).subscribe((token : any) => {
      localStorage.setItem("AUTOKEN", JSON.stringify({ "authorities": token.id_token }));
      localStorage.setItem("currentUser", JSON.stringify({ "authorities": token.id_token }));
      this.service.userLogged(this.loginDTO.username).subscribe((user:UserDTO)=>{

      if (user != null) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        console.log(user.authorities);

        switch (user.authorities.toString()) {
          case 'ROLE_ADMIN': {
            this.router.navigate(['/admin-dashboard']);
            break;
          }
          case 'ROLE_TUTOR': {
            this.router.navigate(['/tutor-dashboard']);
            break;
          }
          case 'ROLE_DOCTOR': {
            this.router.navigate(['/doctor-dashboard']);
            break;
          }
          case 'ROLE_DEVICE': {
            this.router.navigate(['/device-dashboard']);
            break;
          }
          
          case 'ROLE_USER': {
            this.router.navigate(['/work-in-progress']);
            break;
          }

          default:
            this.router.navigate(['/login']);
      }
    }
      else{
          alert("Wrong username or password");
        }
      });
    });
    }

    register(): void {
      this.router.navigate(['/registration']);
    }
    
}
