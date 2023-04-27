import { Component, OnInit } from '@angular/core';
import { Comprador } from 'src/app/_model/compradores/comprador.model';
import { CompradoresService } from 'src/app/_service/compradores/compradores.service';

@Component({
  selector: 'app-compradores',
  templateUrl: './compradores.component.html',
  styleUrls: ['./compradores.component.css']
})
export class CompradoresComponent implements OnInit {
  buyers: Comprador[] = []

  constructor(private buyerService: CompradoresService) { }

  ngOnInit(): void {
    this.loadBuyers()
  }

  loadBuyers() {
    this.buyerService.getBuyers().subscribe((data) => {
      this.buyers = data[0]
    })
  }
}
