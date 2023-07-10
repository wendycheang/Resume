package com.resume.resume.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Employment")
public class Employment {
    
    @Id
    private String id;
    private String company;
    private String duration;
    private String position; 
    private List<Role> roles;
    private int sort;
    
    public Employment(String id, String company, String duration, String position, List<Role> roles, int sort) {
        this.id = id;
        this.company = company;
        this.duration = duration;
        this.position = position;
        this.roles = roles;
        this.sort = sort;
    }
    public String getId() {
        return id;
    }
    public String getCompany() {
        return company;
    }
    public void setCompany(String company) {
        this.company = company;
    }
    public String getDuration() {
        return duration;
    }
    public void setDuration(String duration) {
        this.duration = duration;
    }
    public String getPosition() {
        return position;
    }
    public void setPosition(String position) {
        this.position = position;
    }
    public List<Role> getRoles() {
        return roles;
    }
    public void setRoles(List<Role> roles) {
        this.roles = roles;
    }
    public int getSort() {
        return sort;
    }
    public void setSort(int sort) {
        this.sort = sort;
    }
    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((id == null) ? 0 : id.hashCode());
        result = prime * result + ((company == null) ? 0 : company.hashCode());
        result = prime * result + ((duration == null) ? 0 : duration.hashCode());
        result = prime * result + ((position == null) ? 0 : position.hashCode());
        result = prime * result + ((roles == null) ? 0 : roles.hashCode());
        result = prime * result + sort;
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
        Employment other = (Employment) obj;
        if (id == null) {
            if (other.id != null)
                return false;
        } else if (!id.equals(other.id))
            return false;
        if (company == null) {
            if (other.company != null)
                return false;
        } else if (!company.equals(other.company))
            return false;
        if (duration == null) {
            if (other.duration != null)
                return false;
        } else if (!duration.equals(other.duration))
            return false;
        if (position == null) {
            if (other.position != null)
                return false;
        } else if (!position.equals(other.position))
            return false;
        if (roles == null) {
            if (other.roles != null)
                return false;
        } else if (!roles.equals(other.roles))
            return false;
        if (sort != other.sort)
            return false;
        return true;
    }

    @Override
    public String toString() {
        return "Employment [id=" + id + ", company=" + company + ", duration=" + duration + ", position=" + position
                + ", roles=" + roles + ", sort=" + sort + "]";
    }

}
