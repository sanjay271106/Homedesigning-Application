package com.example.home.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.home.model.User;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByUsername(String username);
    void deleteById(int Id);
    Optional<User> findByEmail(String email);
}

