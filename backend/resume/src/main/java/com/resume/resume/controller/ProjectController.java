package com.resume.resume.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.resume.resume.model.Project;
import com.resume.resume.repository.ProjectRepository;

@RestController
public class ProjectController {

    private final ProjectRepository repository;

    public ProjectController(ProjectRepository repository) {
        this.repository = repository;
    }

    @PostMapping("/project")
    public Project addProject(@RequestBody Project project) {
        return repository.save(project);
    }
    // Aggregate root
    // tag::get-aggregate-root[]
    @GetMapping("/projects")
    List<Project> all() {
        return repository.findAll();
    }
}
