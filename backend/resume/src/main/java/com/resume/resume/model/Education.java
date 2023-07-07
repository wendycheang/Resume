package com.resume.resume.model;

import org.springframework.data.annotation.Id;

public class Education {

    @Id
    private String id;
    private String collegeName;
    private Degree degree;

    public Education(String id, String collegeName, Degree degree) {
        this.id = id;
        this.collegeName = collegeName;
        this.degree = degree;
    }

    public String getId() {
        return id;
    }

    public String getCollegeName() {
        return collegeName;
    }

    public void setCollegeName(String collegeName) {
        this.collegeName = collegeName;
    }

    public Degree getDegree() {
        return degree;
    }

    public void setDegree(Degree degree) {
        this.degree = degree;
    }

    @Override
    public String toString() {
        return "Education [id=" + id + ", collegeName=" + collegeName + ", degree=" + degree + "]";
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((id == null) ? 0 : id.hashCode());
        result = prime * result + ((collegeName == null) ? 0 : collegeName.hashCode());
        result = prime * result + ((degree == null) ? 0 : degree.hashCode());
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
        Education other = (Education) obj;
        if (id == null) {
            if (other.id != null)
                return false;
        } else if (!id.equals(other.id))
            return false;
        if (collegeName == null) {
            if (other.collegeName != null)
                return false;
        } else if (!collegeName.equals(other.collegeName))
            return false;
        if (degree == null) {
            if (other.degree != null)
                return false;
        } else if (!degree.equals(other.degree))
            return false;
        return true;
    }

    public class Degree {
        @Id
        private String id;

        private String major;
        private String minor;
        private String graduation;
        
        public String getId() {
            return id;
        }
 
        public String getMajor() {
            return major;
        }
        public void setMajor(String major) {
            this.major = major;
        }
        public String getMinor() {
            return minor;
        }
        public void setMinor(String minor) {
            this.minor = minor;
        }
        public String getGraduation() {
            return graduation;
        }
        public void setGraduation(String graduation) {
            this.graduation = graduation;
        }

        @Override
        public int hashCode() {
            final int prime = 31;
            int result = 1;
            result = prime * result + getEnclosingInstance().hashCode();
            result = prime * result + ((id == null) ? 0 : id.hashCode());
            result = prime * result + ((major == null) ? 0 : major.hashCode());
            result = prime * result + ((minor == null) ? 0 : minor.hashCode());
            result = prime * result + ((graduation == null) ? 0 : graduation.hashCode());
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
            Degree other = (Degree) obj;
            if (!getEnclosingInstance().equals(other.getEnclosingInstance()))
                return false;
            if (id == null) {
                if (other.id != null)
                    return false;
            } else if (!id.equals(other.id))
                return false;
            if (major == null) {
                if (other.major != null)
                    return false;
            } else if (!major.equals(other.major))
                return false;
            if (minor == null) {
                if (other.minor != null)
                    return false;
            } else if (!minor.equals(other.minor))
                return false;
            if (graduation == null) {
                if (other.graduation != null)
                    return false;
            } else if (!graduation.equals(other.graduation))
                return false;
            return true;
        }

        private Education getEnclosingInstance() {
            return Education.this;
        }

        @Override
        public String toString() {
            return "Degree [id=" + id + ", major=" + major + ", minor=" + minor + ", graduation=" + graduation + "]";
        }
    }

}
