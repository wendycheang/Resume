package com.resume.resume.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("Person")
public class Person {

    @Id
    private String id;

    private String name;
    private String addressOne;
    private String addressTwo;
    private String phoneNumber;
    private String email;
    private String role;

    private Education education;

    public Person(String id, String name, String addressOne, String addressTwo, String phoneNumber, String email,
            String role, Education education) {
        this.id = id;
        this.name = name;
        this.addressOne = addressOne;
        this.addressTwo = addressTwo;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.role = role;
        this.education = education;
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddressOne() {
        return addressOne;
    }

    public void setAddressOne(String addressOne) {
        this.addressOne = addressOne;
    }

    public String getAddressTwo() {
        return addressTwo;
    }

    public void setAddressTwo(String addressTwo) {
        this.addressTwo = addressTwo;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public Education getEducation() {
        return education;
    }

    @Override
    public String toString() {
        return "PersonItem [id=" + id + ", name=" + name + ", addressOne=" + addressOne + ", addressTwo="
                + addressTwo + ", phoneNumber=" + phoneNumber + ", email=" + email + ", role=" + role
                + ", education=" + education + "]";
    }

    public void setEducation(Education education) {
        this.education = education;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((id == null) ? 0 : id.hashCode());
        result = prime * result + ((name == null) ? 0 : name.hashCode());
        result = prime * result + ((addressOne == null) ? 0 : addressOne.hashCode());
        result = prime * result + ((addressTwo == null) ? 0 : addressTwo.hashCode());
        result = prime * result + ((phoneNumber == null) ? 0 : phoneNumber.hashCode());
        result = prime * result + ((email == null) ? 0 : email.hashCode());
        result = prime * result + ((role == null) ? 0 : role.hashCode());
        result = prime * result + ((education == null) ? 0 : education.hashCode());
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
        Person other = (Person) obj;
        if (id == null) {
            if (other.id != null)
                return false;
        } else if (!id.equals(other.id))
            return false;
        if (name == null) {
            if (other.name != null)
                return false;
        } else if (!name.equals(other.name))
            return false;
        if (addressOne == null) {
            if (other.addressOne != null)
                return false;
        } else if (!addressOne.equals(other.addressOne))
            return false;
        if (addressTwo == null) {
            if (other.addressTwo != null)
                return false;
        } else if (!addressTwo.equals(other.addressTwo))
            return false;
        if (phoneNumber == null) {
            if (other.phoneNumber != null)
                return false;
        } else if (!phoneNumber.equals(other.phoneNumber))
            return false;
        if (email == null) {
            if (other.email != null)
                return false;
        } else if (!email.equals(other.email))
            return false;
        if (role == null) {
            if (other.role != null)
                return false;
        } else if (!role.equals(other.role))
            return false;
        if (education == null) {
            if (other.education != null)
                return false;
        } else if (!education.equals(other.education))
            return false;
        return true;
    }

}