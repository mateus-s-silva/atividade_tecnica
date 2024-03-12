package org.manager.task.enums;

public enum Prioridade {
    ALTA("ALTA"),
    MEDIA("MEDIA"),
    BAIXA("BAIXA");

    private final String prioridade;


    Prioridade(String prioridade) {
        this.prioridade = prioridade;
    }

    public String getPrioridade(){
        return this.prioridade;
    }
}
