package com.example.home.service;

import com.example.home.model.Data;
import com.example.home.repository.DataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import jakarta.transaction.Transactional;
@Transactional
@Service
public class DataService {
    @Autowired
    private DataRepository dataRepository;

    public Data savedata(Data data) {
        return dataRepository.save(data);
    }


    public Data getDataById(int id) {
        return dataRepository.findById(id).orElse(null);
    }


    public Data updateData(int id, Data data) {
        Data existingAddress = dataRepository.findById(id).orElse(null);
        if (existingAddress != null) {
            existingAddress.setAge(data.getAge());
            existingAddress.setNumber(data.getNumber());
            existingAddress.setLocation(data.getLocation());
            return dataRepository.save(existingAddress);
        }
        return null;
    }


    public boolean deleteData(int id) {
        Data existingAddress = dataRepository.findById(id).orElse(null);
        if (existingAddress != null) {
            dataRepository.delete(existingAddress);
            return true;
        }
        return false;
    }
}
