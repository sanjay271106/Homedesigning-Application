package com.example.home.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

@Entity
@Table(name="design")
public class Design {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long deg_id;
    private String dgnType;
    private int mdlno;
    private int price;

    
    public Design(Long deg_id, String dgnType, int mdlno, int price) {
        this.deg_id = deg_id;
        this.dgnType = dgnType;
        this.mdlno = mdlno;
        this.price = price;
    }

    public Design() {

    }
    
    public Long getDeg_id() {
        return deg_id;
    }
    public void setDeg_id(Long deg_id) {
        this.deg_id = deg_id;
    }
    public String getDgnType() {
        return dgnType;
    }
    public void setDgnType(String dgnType) {
        this.dgnType = dgnType;
    }
    public int getMdlno() {
        return mdlno;
    }
    public void setMdlno(int mdlno) {
        this.mdlno = mdlno;
    }
    public int getPrice() {
        return price;
    }
    public void setPrice(int price) {
        this.price = price;
    }

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="user_eid")
    @JsonBackReference
    private User user;

    public User getUser() {
        return user;
    }
    public void setUser(User user) {
        this.user = user;
    }
}
