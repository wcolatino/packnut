package com.packnut.models;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "TB_PRODUTO")
public class Produto {

	private static final long seriaVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO) // Gerada automaticamente pelo Banco de Dados;
	private long idProduto;

	private LocalDate dataFabricacao;

	private LocalDate dataVencimento;

	private LocalDate dataEntrada;

	private String lote;

	private String marca;

	private String nome;

	private int qdtDescarte;

	private int qdtVendida;

	private String responsavel;

	private double temperatura;

	public long getIdProduto() {
		return idProduto;
	}

	public void setIdProduto(long idProduto) {
		this.idProduto = idProduto;
	}

	public LocalDate getDataFabricacao() {
		return dataFabricacao;
	}

	public void setDataFabricacao(LocalDate dataFabricacao) {
		this.dataFabricacao = dataFabricacao;
	}

	public LocalDate getDataVencimento() {
		return dataVencimento;
	}

	public void setDataVencimento(LocalDate dataVencimento) {
		this.dataVencimento = dataVencimento;
	}

	public LocalDate getDataEntrada() {
		return dataEntrada;
	}

	public void setDataEntrada(LocalDate dataEntrada) {
		this.dataEntrada = dataEntrada;
	}

	public String getLote() {
		return lote;
	}

	public void setLote(String lote) {
		this.lote = lote;
	}

	public String getMarca() {
		return marca;
	}

	public void setMarca(String marca) {
		this.marca = marca;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public int getQdtDescarte() {
		return qdtDescarte;
	}

	public void setQdtDescarte(int qdtDescarte) {
		this.qdtDescarte = qdtDescarte;
	}

	public int getQdtVendida() {
		return qdtVendida;
	}

	public void setQdtVendida(int qdtVendida) {
		this.qdtVendida = qdtVendida;
	}

	public String getResponsavel() {
		return responsavel;
	}

	public void setResponsavel(String responsavel) {
		this.responsavel = responsavel;
	}

	public double getTemperatura() {
		return temperatura;
	}

	public void setTemperatura(double temperatura) {
		this.temperatura = temperatura;
	}

}
