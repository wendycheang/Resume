package com.resume.resume.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.resume.resume.model.Employment;
import com.resume.resume.repository.EmploymentRepository;

@RestController
public class EmploymentController {

    private final EmploymentRepository repository;

    public EmploymentController(EmploymentRepository repository) {
        this.repository = repository;
    }

    // Aggregate root
    // tag::get-aggregate-root[]
    @GetMapping("/employment")
    List<Employment> all() {
        List<Employment> employmentList = repository.findAll();
        employmentList.sort((o1, o2) -> (Integer.valueOf(o1.getSort()).compareTo(o2.getSort())));
        System.out.println(employmentList);
        return employmentList;
    }
}
