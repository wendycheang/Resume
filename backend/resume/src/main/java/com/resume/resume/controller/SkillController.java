package com.resume.resume.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.resume.resume.model.Skill;
import com.resume.resume.repository.SkillRepository;

@RestController
public class SkillController {

    private final SkillRepository repository;

    public SkillController(SkillRepository repository) {
        this.repository = repository;
    }

    // Aggregate root
    // tag::get-aggregate-root[]
    @GetMapping("/skills")
    List<Skill> all() {
        return repository.findAll();
    }
}

