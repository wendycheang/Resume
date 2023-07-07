package com.resume.resume.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.resume.resume.model.Person;

@Repository
public interface PersonRepository extends MongoRepository<Person, String>{
 
    @Query("{name:'?0'}")
    Person findItemByName(String name);
    
    List<Person> findAll();
    
    public long count();
}
