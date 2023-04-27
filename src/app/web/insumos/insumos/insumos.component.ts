import { Component, OnInit } from '@angular/core';
import { Insumo } from 'src/app/_model/insumos/insumo.model';
import { InsumosService } from 'src/app/_service/insumos/insumos.service';

@Component({
  selector: 'app-insumos',
  templateUrl: './insumos.component.html',
  styleUrls: ['./insumos.component.css']
})
export class InsumosComponent implements OnInit {
  supplies: Insumo[] = []

  constructor(private supplieService: InsumosService) { }

  ngOnInit(): void {
    this.loadSupplies()
  }

  loadSupplies() {
    this.supplieService.getSupplies().subscribe((data) => {
      this.supplies = data[0]
    })
  }
}
