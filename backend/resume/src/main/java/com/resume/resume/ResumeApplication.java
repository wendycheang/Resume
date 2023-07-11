package com.resume.resume;

import org.springframework.boot.SpringApplication;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


@SpringBootApplication
@EnableMongoRepositories
public class ResumeApplication implements CommandLineRunner{

	public static void main(String[] args){
		SpringApplication.run(ResumeApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
	}

	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/**").allowedOrigins("*");
			}
		};
	}
}
