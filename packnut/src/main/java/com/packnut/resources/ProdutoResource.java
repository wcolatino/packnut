package com.packnut.resources;

import com.packnut.models.Produto;
import com.packnut.repository.ProdutoRepository;
import com.packnut.services.ProdutoService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/produtos")
public class ProdutoResource {

    private final ProdutoRepository produtoRepository;
    private final ProdutoService produtoService;

    public ProdutoResource(ProdutoRepository produtoRepository, ProdutoService produtoService) {
        this.produtoRepository = produtoRepository;
        this.produtoService = produtoService;
    }

    @GetMapping
    public List<Produto> listarProdutos() {
        return produtoRepository.findAll();
    }

    @GetMapping("/{id}")
    public Produto buscarProduto(@PathVariable(value = "id") long id) {
        return produtoRepository.findById(id);
    }

    @PostMapping
    public Produto salvarProduto(@RequestBody Produto produto) {
    	return this.produtoService.salvarProduto(produto);
    }

    @DeleteMapping ("/{id}")
    public void deletarProduto(@PathVariable(value = "id") long id) {
        produtoRepository.deleteById(id);
    }

    @PutMapping
    public Produto atualizarProduto(@RequestBody Produto produto) {
        return produtoRepository.save(produto);
    }
}
