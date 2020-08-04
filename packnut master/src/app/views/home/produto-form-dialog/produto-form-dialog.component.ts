import { ProdutoService } from './../../../shared/service/produto.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
    public dialogRef: MatDialogRef<ProdutoFormDialogComponent>
  ) { }

  ngOnInit(): void {
    this.produtoForm = this.fb.group({
      nome: ['',[Validators.required]],
      marca: ['',[Validators.required]],
      dataFabricacao: ['01-02-2020',[Validators.required]],
      dataVencimento: ['',[Validators.required]],
      dataEntrada: ['',[Validators.required]],
      lote: ['',[Validators.required]],
      responsavel: ['',[Validators.required]],
      temperatura: ['',[Validators.required]],
    })
  }


  createProduto(){
    this.rest.postProdutos(this.produtoForm.value).subscribe(result => {});
    this.dialogRef.close();
    this.produtoForm.reset();
  }

  cancel(): void {
    this.dialogRef.close();
    this.produtoForm.reset();
  }

}
