package com.resume.resume.exception;

public class DocumentNotFoundException extends RuntimeException {

  public DocumentNotFoundException(String query) {
    super("Could not find document " + query);
  }
}

