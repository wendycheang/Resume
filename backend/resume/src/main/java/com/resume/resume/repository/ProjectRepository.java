package com.resume.resume.repository;


import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.resume.resume.model.Project;

@Repository
public interface ProjectRepository extends MongoRepository<Project, String>{

    List<Project> findAll();
    
    public long count();
}
