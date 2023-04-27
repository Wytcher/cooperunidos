import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FornecedoresService } from 'src/app/_service/fornecedores/fornecedores.service';

@Component({
  selector: 'app-cadastrar-fornecedores',
  templateUrl: './cadastrar-fornecedores.component.html',
  styleUrls: ['./cadastrar-fornecedores.component.css']
})
export class CadastrarFornecedoresComponent implements OnInit {
  createMessage: string | undefined
  formData: FormGroup

  constructor(private formBuilder: FormBuilder, private fornecedorService: FornecedoresService) {
    this.formData = this.formBuilder.group({
      nome: '',
      empresa: ''
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.fornecedorService.createSuplier(this.formData.value).subscribe((data) => {
      console.log(data)
    })
  }
}
