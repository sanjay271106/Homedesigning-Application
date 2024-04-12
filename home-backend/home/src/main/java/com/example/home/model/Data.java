package com.example.home.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

@Entity
@Table(name="data", uniqueConstraints = {@UniqueConstraint(columnNames = { "number"})})

public class Data {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="data_id")
    private Long id;

    private int age;
    @Column
    private String number;

    private String location;

    @OneToOne
    @JoinColumn(name = "user_id")
    @JsonBackReference
    private User user;

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }

    public int getAge() {
        return age;
    }
    public void setAge(int age) {
        this.age = age;
    }
    public String getNumber() {
        return number;
    }
    public void setNumber(String number) {
        this.number = number;
    }
    public String getLocation() {
        return location;
    }
    public void setLocation(String location) {
        this.location = location;
    }

    public Data() {

    }
    public Data(Long id, int age, String number, String location) {
        this.id = id;
        this.age = age;
        this.number = number;
        this.location = location;
    }

    
   
}
