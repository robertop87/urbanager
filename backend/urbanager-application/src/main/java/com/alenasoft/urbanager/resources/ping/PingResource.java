package com.alenasoft.urbanager.resources.ping;

import com.alenasoft.urbanager.resources.ping.service.PingService;
import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("ping")
public class PingResource {

  private final PingService service;

  @Inject
  public PingResource(PingService service) {
    this.service = service;
  }

  @GET
  @Produces(MediaType.APPLICATION_JSON)
  public Response sendOkSignal() {
    return Response.ok(this.service.sendServerStatus()).build();
  }
}
