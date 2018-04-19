package com.alenasoft.urbanager.resources.ping.service;

import static org.junit.Assert.assertEquals;

import org.junit.Before;
import org.junit.Test;

public class BasicPingServiceTest {

  private PingService service;

  @Before
  public void setUp() {
    this.service = new BasicPingService();
  }

  @Test
  public void testSendServerStatus() {
    assertEquals(this.service.sendServerStatus().message, "pong");
  }
}
