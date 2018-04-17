package com.alenasoft.urbanager.resources.ping;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.core.Response;

@Path("ping")
public class PingResource {

  @GET
  public Response sendOkSignal() {
    return Response.ok().build();
  }
}
