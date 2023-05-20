import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CompradoresService } from 'src/app/_service/compradores/compradores.service';

@Component({
  selector: 'app-cadastrar-compradores',
  templateUrl: './cadastrar-compradores.component.html',
  styleUrls: ['./cadastrar-compradores.component.css'],
})
export class CadastrarCompradoresComponent implements OnInit {
  formData: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private buyerService: CompradoresService,
    private toastr: ToastrService
  ) {
    this.formData = this.formBuilder.group({
      nome_empresa: '',
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.buyerService.createBuyer(this.formData.value).subscribe({
      next: (data) => {
        if (data) {
          this.toastr.success(
            'Comprador cadastrado com sucesso',
            'Sucesso ao cadastrar'
          );
        }
      },
      error: (error) => {
        if (error.status === 422) {
          this.toastr.error(
            'Os campos estão incorretos, favor verificar.',
            'Erro ao cadastrar'
          );
        }
        if (error.status === 500) {
          this.toastr.error(
            'Entre em contato com os administradores',
            'Erro interno'
          );
        }
      }
    });
  }
}
