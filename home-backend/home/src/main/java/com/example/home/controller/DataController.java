
package com.example.home.controller;
import com.example.home.model.Data;
import com.example.home.service.DataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;



@RestController
@RequestMapping("/api/v1/address")
public class DataController {

    @Autowired
    private DataService dataService;

    // Endpoint to create a new address
    @PostMapping("/add")
    public ResponseEntity<Data> createdata(@RequestBody Data data) {
        Data savedata = dataService.savedata(data);
        return new ResponseEntity<>(savedata, HttpStatus.CREATED);
    }

    // Endpoint to get address by ID
    @GetMapping("/{id}")
    public ResponseEntity<Data> getDataById(@PathVariable int id) {
        Data data = dataService.getDataById(id);
        if (data != null) {
            return new ResponseEntity<>(data, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Endpoint to update an existing address
    @PutMapping("/{id}")
    public ResponseEntity<Data> updateData(@PathVariable int id, @RequestBody Data data) {
        Data updatedData = dataService.updateData(id, data);
        if (updatedData != null) {
            return new ResponseEntity<>(updatedData, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Endpoint to delete an address
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteData(@PathVariable int id) {
        if (dataService.deleteData(id)) {
            return new ResponseEntity<>("Address deleted successfully", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Failed to delete address", HttpStatus.NOT_FOUND);
        }
    }
}
