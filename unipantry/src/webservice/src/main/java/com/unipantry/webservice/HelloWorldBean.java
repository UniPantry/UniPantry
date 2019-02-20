package com.unipantry.webservice;

public class HelloWorldBean {
  
  private String message;

  public HelloWorldBean(String message) {
    this.message = message;
  }

  public void setMessage(String message) {
    this.message = message;
  }

  public String getMessage() {
    return this.message;
  }

  @Override
  public String toString() {
    return String.format("HelloWorldBean [message=%s]", this.message);
  }
}