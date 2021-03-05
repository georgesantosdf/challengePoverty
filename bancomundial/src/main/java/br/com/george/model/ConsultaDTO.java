package br.com.george.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ConsultaDTO {
    private IndicadorDTO indicator;
    private int date;
    private double value;
    private String countryiso3code;   
}