package com.resume.resume.model;

import org.springframework.data.annotation.Id;

public class SubSkill{

    @Id
    private String id;
    private String skill;
    private int rating;
    
    public SubSkill(String id, String skill, int rating) {
        this.id = id;
        this.skill = skill;
        this.rating = rating;
    }

    public String getId() {
        return id;
    }

    public String getSkill() {
        return skill;
    }

    public void setSkill(String skill) {
        this.skill = skill;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }


    @Override
    public String toString() {
        return "SubSkill [id=" + id + ", skill=" + skill + ", rating=" + rating + "]";
    }

    }
