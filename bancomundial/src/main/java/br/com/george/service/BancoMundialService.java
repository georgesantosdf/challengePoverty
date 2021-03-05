package br.com.george.service;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.eclipse.microprofile.rest.client.inject.RegisterRestClient;
import org.jboss.resteasy.annotations.jaxrs.PathParam;
import org.jboss.resteasy.annotations.jaxrs.QueryParam;

@Path("/v2")
@RegisterRestClient(configKey = "bancomundial-key")
public interface BancoMundialService {

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/country/{codigoPais}/indicator/SI.POV.DDAY")
    public List<Object> consultarPais(@PathParam("codigoPais") String codigoPais, @QueryParam("format") String format);
}
