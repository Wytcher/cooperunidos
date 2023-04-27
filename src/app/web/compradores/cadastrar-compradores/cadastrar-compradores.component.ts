import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CompradoresService } from 'src/app/_service/compradores/compradores.service';

@Component({
  selector: 'app-cadastrar-compradores',
  templateUrl: './cadastrar-compradores.component.html',
  styleUrls: ['./cadastrar-compradores.component.css']
})
export class CadastrarCompradoresComponent implements OnInit {
  formData: FormGroup

  constructor(private formBuilder: FormBuilder, private buyerService: CompradoresService) {
    this.formData = this.formBuilder.group({
      nome_empresa: ''
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.buyerService.createBuyer(this.formData.value).subscribe((data) => {
      console.log(data)
    })
  }
}
