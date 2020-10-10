import { ProdutoService } from './../../../shared/service/produto.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Produto } from 'src/app/shared/model/produto.model';

@Component({
  selector: 'app-produto-form-dialog',
  templateUrl: './produto-form-dialog.component.html',
  styleUrls: ['./produto-form-dialog.component.css']
})
export class ProdutoFormDialogComponent implements OnInit {

  public produtoForm : FormGroup;


  constructor(
    private fb: FormBuilder,
    private rest: ProdutoService,
    public dialogRef: MatDialogRef<ProdutoFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.produtoForm = this.fb.group({
      idProduto: [],
      nome: ['',[Validators.required]],
      marca: ['',[Validators.required]],
      dataFabricacao: ['Ano-Mês-Dia',[Validators.required]],
      dataVencimento: ['Ano-Mês-Dia',[Validators.required]],
      dataEntrada: ['Ano-Mês-Dia',[Validators.required]],
      lote: ['',[Validators.required]],
      responsavel: ['',[Validators.required]],
      temperatura: ['',[Validators.required]],
      qtdVendida: ['',[Validators.required]],
      qtdDescarte: ['',[Validators.required]]
    });


    if(this.data != null){

      this.produtoForm.patchValue(this.data);
    }

  }


  createProduto() {
    this.rest.postProduto(this.produtoForm.value as Produto).subscribe(result => {
      this.dialogRef.close();
      this.produtoForm.reset();
      
    });
  }

  cancel(): void {
    this.dialogRef.close();
    this.produtoForm.reset();
  }

}
