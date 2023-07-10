package com.resume.resume.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.resume.resume.model.Person;
import com.resume.resume.repository.PersonRepository;
import com.resume.resume.exception.DocumentNotFoundException;

@RestController
public class PersonController {

    private final PersonRepository repository;

    public PersonController(PersonRepository repository) {
        this.repository = repository;
    }

    // Aggregate root
    // tag::get-aggregate-root[]
    @GetMapping("/person")
    List<Person> all() {
        return repository.findAll();
    }

    @GetMapping("/person/{name}")
    Person one(@PathVariable String name) {

        return repository.findItemByName(name)
                .orElseThrow(() -> new DocumentNotFoundException(name));
    }
}
