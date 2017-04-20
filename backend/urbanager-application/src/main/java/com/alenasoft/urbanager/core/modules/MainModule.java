package com.alenasoft.urbanager.core.modules;

import com.alenasoft.urbanager.resources.example.service.ExampleService;
import com.alenasoft.urbanager.resources.example.service.ExampleServiceImpl;
import com.google.inject.AbstractModule;

/**
 * This class should define the main bindings for dependency injection.
 *
 * @author Luis Roberto Perez
 * @since 14-03-17
 */
public class MainModule extends AbstractModule {
  @Override
  protected void configure() {
    bind(ExampleService.class).to(ExampleServiceImpl.class);
  }
}
