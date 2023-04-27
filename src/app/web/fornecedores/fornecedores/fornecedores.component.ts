import { Component, OnInit } from '@angular/core';
import { Fornecedor } from 'src/app/_model/fornecedores/fornecedor.model';
import { FornecedoresService } from 'src/app/_service/fornecedores/fornecedores.service';

@Component({
  selector: 'app-fornecedores',
  templateUrl: './fornecedores.component.html',
  styleUrls: ['./fornecedores.component.css']
})
export class FornecedoresComponent implements OnInit {
  supliers: Fornecedor[] = []

  constructor(private fornecedorService: FornecedoresService) { }

  ngOnInit(): void {
    this.loadSupliers()
  }

  loadSupliers() {
    this.fornecedorService.getSupliers().subscribe((data) => {
      this.supliers = data[0]
      console.log(this.supliers)
    })
  }
}
