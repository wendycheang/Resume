package com.resume.resume.model;

import java.util.List;

import org.springframework.data.annotation.Id;

public class Role {

    @Id
    private String id;
    private String title;
    private List<String> projects;

    public Role(String id, String title, List<String> projects) {
        this.id = id;
        this.title = title;
        this.projects = projects;
    }
    public String getId() {
        return id;
    }
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public List<String> getProjects() {
        return projects;
    }
    public void setProjects(List<String> projects) {
        this.projects = projects;
    }
    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((id == null) ? 0 : id.hashCode());
        result = prime * result + ((title == null) ? 0 : title.hashCode());
        result = prime * result + ((projects == null) ? 0 : projects.hashCode());
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
        Role other = (Role) obj;
        if (id == null) {
            if (other.id != null)
                return false;
        } else if (!id.equals(other.id))
            return false;
        if (title == null) {
            if (other.title != null)
                return false;
        } else if (!title.equals(other.title))
            return false;
        if (projects == null) {
            if (other.projects != null)
                return false;
        } else if (!projects.equals(other.projects))
            return false;
        return true;
    }
    @Override
    public String toString() {
        return "Role [id=" + id + ", title=" + title + ", projects=" + projects + "]";
    }
    
}
