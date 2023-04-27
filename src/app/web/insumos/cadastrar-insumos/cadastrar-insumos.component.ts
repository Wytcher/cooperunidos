import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Fornecedor } from 'src/app/_model/fornecedores/fornecedor.model';
import { FornecedoresService } from 'src/app/_service/fornecedores/fornecedores.service';
import { InsumosService } from 'src/app/_service/insumos/insumos.service';

@Component({
  selector: 'app-cadastrar-insumos',
  templateUrl: './cadastrar-insumos.component.html',
  styleUrls: ['./cadastrar-insumos.component.css']
})
export class CadastrarInsumosComponent implements OnInit {
  supliers: Fornecedor[] = []
  formData: FormGroup

  constructor(private suplierService: FornecedoresService, private formBuilder: FormBuilder, private supplieService: InsumosService) {
    this.formData = this.formBuilder.group({
      id_fornecedor: '',
      nome_insumo: ''
    })
  }

  ngOnInit(): void {
    this.loadSupliers()
  }

  loadSupliers() {
    this.suplierService.getSupliers().subscribe((data) => {
      this.supliers = data[0]
    })
  }

  onSubmit() {
    this.supplieService.createSupplies(this.formData.value).subscribe((data) => {
      console.log(data)
    })
  }
}
