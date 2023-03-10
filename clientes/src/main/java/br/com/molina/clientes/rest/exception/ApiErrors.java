package br.com.molina.clientes.rest.exception;

import lombok.Getter;

import java.util.Arrays;
import java.util.List;

public class ApiErrors {

    @Getter
    private List<String> erros;

    public ApiErrors(List<String> errors){
        this.erros = errors;
    }

    public ApiErrors(String message){
        this.erros = Arrays.asList(message);
    }
}
