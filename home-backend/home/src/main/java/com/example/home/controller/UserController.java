package com.example.home.controller;
import com.example.home.model.Data;
import com.example.home.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
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

    @Autowired
    private UserService userService;

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

        @GetMapping("/get/{id}")
            Optional<User> getUserById(@PathVariable Long id) {
              return userRepository.findById(id);
        }


    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers(
            @RequestParam(defaultValue = "0") Integer pageNo,
            @RequestParam(defaultValue = "2") Integer pageSize,
            @RequestParam(defaultValue = "id") String sortBy,
            @RequestParam(defaultValue = "asc") String sortOrder) {

        try {
            Pageable pageable = PageRequest.of(pageNo, pageSize, Sort.by(Sort.Direction.fromString(sortOrder), sortBy));
            Page<User> usersPage = userService.getAllUsers(pageable);
            List<User> users = usersPage.getContent();

            if (users.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(users, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/byEmail")
    public ResponseEntity<List<User>> getUsersByEmail(@RequestParam String email) {
        List<User> users = userService.getUsersByEmail(email);
        if (users.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(users, HttpStatus.OK);
    }


}

