import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/_service/auth/auth.service';
import { TokenStorageService } from 'src/app/_service/auth/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formData: FormGroup
  isLoggedIn = false;
  isLoginFailed = false;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router, private toastr: ToastrService) {
    this.formData = this.formBuilder.group({
      email: '',
      password: '',
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.authService.login(this.formData.get("email")?.value, this.formData.get("password")?.value).subscribe(data => {
      this.tokenStorage.saveToken(data.access_token);

      this.isLoggedIn = true;
      this.isLoginFailed = false;
      this.router.navigate(["/vendas"]);
    }, err => {
      if(err.status == 404){
        this.toastr.error(
          'Email e/ou senha incorretos',
          'Erro ao logar'
        );
      }
      if(err.status == 500 && err.error.code == "INTERNAL_ERROR"){
        this.toastr.error(
          'Entre em contato com os administradores',
          'Erro interno'
        );
      }
      this.isLoginFailed = true;
    });
  }
}
