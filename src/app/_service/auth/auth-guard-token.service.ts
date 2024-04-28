import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { AuthService } from './auth.service';
import { TokenStorageService } from './token-storage.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardTokenService {

  constructor(private authService: AuthService, private router: Router, private tokenStorage: TokenStorageService, private toastr: ToastrService) { }

  canActivate(): boolean{
    if(this.authService.isAuthenticated()){
      return true;
    }

    this.toastr.error(
      'Você precisa estar logado para acessar essa página',
      'Não autorizado'
    );
    this.router.navigate(["/"]).then(() => window.location.reload);
    return false;
  }
}
