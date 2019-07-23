package it.contrader.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

import java.io.Serializable;
import java.util.Objects;

/**
 * A Cure.
 */
@Entity
@Table(name = "cure")
public class Cure implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "age")
    private Integer age;

    @Column(name = "name")
    private String name;

    @Column(name = "dosage")
    private String dosage;

    @Column(name = "posology")
    private String posology;

    @Column(name = "notes")
    private String notes;

    @ManyToOne
    @JsonIgnoreProperties("")
    private Reading reading;

    @ManyToOne
    @JsonIgnoreProperties("")
    private Patology patology;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getAge() {
        return age;
    }

    public Cure age(Integer age) {
        this.age = age;
        return this;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public Cure name(String name) {
        this.name = name;
        return this;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDosage() {
        return dosage;
    }

    public Cure dosage(String dosage) {
        this.dosage = dosage;
        return this;
    }

    public void setDosage(String dosage) {
        this.dosage = dosage;
    }

    public String getPosology() {
        return posology;
    }

    public Cure posology(String posology) {
        this.posology = posology;
        return this;
    }

    public void setPosology(String posology) {
        this.posology = posology;
    }

    public String getNotes() {
        return notes;
    }

    public Cure notes(String notes) {
        this.notes = notes;
        return this;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public Reading getReading() {
        return reading;
    }

    public Cure reading(Reading reading) {
        this.reading = reading;
        return this;
    }

    public void setReading(Reading reading) {
        this.reading = reading;
    }

    public Patology getPatology() {
        return patology;
    }

    public Cure patology(Patology patology) {
        this.patology = patology;
        return this;
    }

    public void setPatology(Patology patology) {
        this.patology = patology;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Cure cure = (Cure) o;
        if (cure.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), cure.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Cure{" +
            "id=" + getId() +
            ", age=" + getAge() +
            ", name='" + getName() + "'" +
            ", dosage='" + getDosage() + "'" +
            ", posology='" + getPosology() + "'" +
            ", notes='" + getNotes() + "'" +
            "}";
    }
}
