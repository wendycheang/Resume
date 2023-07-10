package com.resume.resume;

import org.springframework.boot.SpringApplication;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import com.resume.resume.model.Employment;
import com.resume.resume.model.Person;
import com.resume.resume.model.Project;
import com.resume.resume.model.Skill;
import com.resume.resume.repository.EmploymentRepository;
import com.resume.resume.repository.PersonRepository;
import com.resume.resume.repository.ProjectRepository;
import com.resume.resume.repository.SkillRepository;


@SpringBootApplication
@EnableMongoRepositories
public class ResumeApplication implements CommandLineRunner{

	public static void main(String[] args){
		SpringApplication.run(ResumeApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
	}

}
