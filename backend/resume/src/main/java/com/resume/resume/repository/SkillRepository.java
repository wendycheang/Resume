package com.resume.resume.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.resume.resume.model.Skill;

@Repository
public interface SkillRepository extends MongoRepository<Skill, String>{
    
    List<Skill> findAll();
    
    public long count();
}
