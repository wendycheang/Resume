package com.resume.resume.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.resume.resume.model.Employment;

@Repository
public interface EmploymentRepository extends MongoRepository<Employment, String>{
    
    List<Employment> findAll();
    
    public long count();
}