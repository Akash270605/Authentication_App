/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.example.authentication.service;

import com.example.authentication.dto.UserDto;

/**
 *
 * @author Leveno
 */
public interface UserService {
    
    //Create User
    UserDto createUser(UserDto userDto);
    
    // get user by email
    UserDto getUserByEmail(String email);
    
    // update user
    UserDto updateUser(UserDto userDto, String userId);
    
    // delete user
    void deleteUser(String userId);
    
    // get user by id
    UserDto getUserById(String userId);
    
    // get all users
    Iterable<UserDto> getAllUsers();
}
