import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Comprador } from 'src/app/_model/compradores/comprador.model';
import { CompradoresService } from 'src/app/_service/compradores/compradores.service';

@Component({
  selector: 'app-atualizar-compradores',
  templateUrl: './atualizar-compradores.component.html',
  styleUrls: ['./atualizar-compradores.component.css'],
})
export class AtualizarCompradoresComponent implements OnInit {
  formData: FormGroup;
  buyer: Comprador | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private buyerService: CompradoresService,
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) {
    this.formData = this.formBuilder.group({
      nome_empresa: '',
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.loadBuyer(params['id'])
    })
  }

  loadBuyer(id: number) {
    this.buyerService.getBuyer(id).subscribe({
      next: (data) => {
        this.buyer = data.mensagem
        this.formData.get('nome_empresa')?.setValue(this.buyer?.nome_empresa)
      },
      error: (error) => {
        if (error) {
          this.toastr.error(
            'Ocorreu um erro ao carregar o comprador, entre em contato com os administradores',
            'Erro interno'
          );
        }
      }
    })
  }

  onSubmit() {
    this.buyerService.updateBuyer(this.buyer?.id!, this.formData.value).subscribe({
      next: (data) => {
        if (data) {
          this.toastr.success(
            'Comprador atualizado com sucesso',
            'Sucesso ao atualizar'
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
