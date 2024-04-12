package com.example.home.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.home.model.User;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {


    @Query("SELECT u FROM User u WHERE u.email=:email")
    List<User> findByEmailJPQL(String email);

    Optional<User> findByUsername(String username);
    void deleteById(int Id);
    Optional<User> findByEmail(String email);


}

