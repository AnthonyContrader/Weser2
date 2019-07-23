package it.contrader.service.dto;

import java.io.Serializable;
import java.util.Objects;

/**
 * A DTO for the Cure entity.
 */
public class CureDTO implements Serializable {

    private Long id;

    private Integer age;

    private String name;

    private String dosage;

    private String posology;

    private String notes;

    private Long readingId;

    private String readingCf;

    private Long patologyId;

    private String patologyPato;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDosage() {
        return dosage;
    }

    public void setDosage(String dosage) {
        this.dosage = dosage;
    }

    public String getPosology() {
        return posology;
    }

    public void setPosology(String posology) {
        this.posology = posology;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public Long getReadingId() {
        return readingId;
    }

    public void setReadingId(Long readingId) {
        this.readingId = readingId;
    }

    public String getReadingCf() {
        return readingCf;
    }

    public void setReadingCf(String readingCf) {
        this.readingCf = readingCf;
    }

    public Long getPatologyId() {
        return patologyId;
    }

    public void setPatologyId(Long patologyId) {
        this.patologyId = patologyId;
    }

    public String getPatologyPato() {
        return patologyPato;
    }

    public void setPatologyPato(String patologyPato) {
        this.patologyPato = patologyPato;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        CureDTO cureDTO = (CureDTO) o;
        if (cureDTO.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), cureDTO.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "CureDTO{" +
            "id=" + getId() +
            ", age=" + getAge() +
            ", name='" + getName() + "'" +
            ", dosage='" + getDosage() + "'" +
            ", posology='" + getPosology() + "'" +
            ", notes='" + getNotes() + "'" +
            ", reading=" + getReadingId() +
            ", reading='" + getReadingCf() + "'" +
            ", patology=" + getPatologyId() +
            ", patology='" + getPatologyPato() + "'" +
            "}";
    }
}
