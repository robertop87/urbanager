package com.alenasoft.urbanager.resources.ping.service;

import com.alenasoft.urbanager.api.ServerStatus;

public class BasicPingService implements PingService {

  @Override
  public ServerStatus sendServerStatus() {
    return new ServerStatus();
  }
}
