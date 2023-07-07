package com.resume.resume;

import org.springframework.boot.SpringApplication;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import com.resume.resume.model.Person;
import com.resume.resume.repository.PersonRepository;

@SpringBootApplication
@EnableMongoRepositories
public class ResumeApplication implements CommandLineRunner{

	@Autowired
    private PersonRepository personRepo;

	public static void main(String[] args){
		SpringApplication.run(ResumeApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

		List<Person> person = personRepo.findAll();
		System.out.println(person);
	
	}

}
