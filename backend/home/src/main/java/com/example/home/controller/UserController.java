package com.example.home.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.home.model.User;
import com.example.home.repository.UserRepository;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {


    @Autowired
    private UserRepository userRepository;

    @GetMapping("/login")
    List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @PostMapping("/register")
    User register(@RequestBody User user) {
        return userRepository.save(user);
    }

    @PutMapping("users/{id}")
    public ResponseEntity<?> updateUser(@PathVariable Long id, @RequestBody User updatedUser) {
        Optional<User> optionalUser = userRepository.findById(id);
        if (!optionalUser.isPresent()) {
            return ResponseEntity.notFound().build();
        }

        User existingUser = optionalUser.get();
        existingUser.setUsername(updatedUser.getUsername());
        existingUser.setEmail(updatedUser.getEmail());
        existingUser.setPassword(updatedUser.getPassword());


        if (!existingUser.equals(updatedUser)) {
            userRepository.save(existingUser);
            return ResponseEntity.ok().body("User updated successfully");
        } else {
            return ResponseEntity.ok().body("No changes made to the user");
        }
    }

    @PatchMapping("/update/{username}")
    public ResponseEntity<?> patchUser(@PathVariable String username, @RequestBody User user) {
        try {
            Optional<User> userExists = userRepository.findByUsername(username);
            if (userExists.isPresent()) {

                User existingUser = userExists.get();

                if (user.getUsername() != null) {
                    existingUser.setUsername(user.getUsername());
                }
                if (user.getEmail() != null) {
                    existingUser.setEmail(user.getEmail());
                }
                if (user.getPassword() != null) {
                    existingUser.setPassword(user.getPassword());
                }

                userRepository.save(existingUser);

                return new ResponseEntity<>(existingUser, HttpStatus.OK);
            } else {
                return new ResponseEntity<>("User with username " + username + " not found", HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return new ResponseEntity<>("Something went wrong", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

        @DeleteMapping("delete/{id}")
        public ResponseEntity<?> deleteUser(@PathVariable Long id) {
            try {
                Optional<User> optionalUser = userRepository.findById(id);
                if (optionalUser.isPresent()) {
                    userRepository.deleteById(id);
                    return ResponseEntity.ok().body("User with ID " + id + " deleted successfully");
                } else {
                    return ResponseEntity.notFound().build();
                }
            } catch (Exception e) {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to delete user");
            }
        }


}

