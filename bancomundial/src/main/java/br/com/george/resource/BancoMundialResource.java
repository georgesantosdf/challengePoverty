package br.com.george.resource;

import java.util.ArrayList;
import java.util.List;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.eclipse.microprofile.openapi.annotations.Operation;
import org.eclipse.microprofile.rest.client.inject.RestClient;

import br.com.george.service.BancoMundialService;

@Path("/indicador")
public class BancoMundialResource {

    @Inject
    @RestClient
    BancoMundialService bancoMundialService;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Operation(summary = "Consulta o indicador de um determinado pais.")
    public Response consultar(@QueryParam(value = "codigoPais") String codigoPais) {
        //bancoMundialService.consultarPais(codigoPais, "json");
        return Response.ok(bancoMundialService.consultarPais(codigoPais, "json")).build();
    }
    
}
