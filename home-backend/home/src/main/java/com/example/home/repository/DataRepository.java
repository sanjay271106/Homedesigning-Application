package com.example.home.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.home.model.Data;

public interface DataRepository extends JpaRepository<Data, Integer> {

    
} 
