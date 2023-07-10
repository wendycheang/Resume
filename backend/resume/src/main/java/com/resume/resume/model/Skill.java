package com.resume.resume.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Skills")
public class Skill {

    @Id
    private String id;
    private String category;

    private List<SubSkill> skills;

    public Skill(String id, String category, List<SubSkill> skills) {
        this.id = id;
        this.category = category;
        this.skills = skills;
    }

    public String getId() {
        return id;
    }
    
    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public List<SubSkill> getSkills() {
        return skills;
    }

    public void setSkills(List<SubSkill> skills) {
        this.skills = skills;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((id == null) ? 0 : id.hashCode());
        result = prime * result + ((category == null) ? 0 : category.hashCode());
        result = prime * result + ((skills == null) ? 0 : skills.hashCode());
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Skill other = (Skill) obj;
        if (id == null) {
            if (other.id != null)
                return false;
        } else if (!id.equals(other.id))
            return false;
        if (category == null) {
            if (other.category != null)
                return false;
        } else if (!category.equals(other.category))
            return false;
        if (skills == null) {
            if (other.skills != null)
                return false;
        } else if (!skills.equals(other.skills))
            return false;
        return true;
    }

    @Override
    public String toString() {
        return "Skill [id=" + id + ", category=" + category + ", skills=" + skills + "]";
    }


}
