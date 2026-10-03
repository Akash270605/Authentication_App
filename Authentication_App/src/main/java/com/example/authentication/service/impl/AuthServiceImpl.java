/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.authentication.service.impl;

import com.example.authentication.config.AppConstants;
import com.example.authentication.dto.UserDto;
import com.example.authentication.entity.Role;
import com.example.authentication.repository.RoleRepository;
import com.example.authentication.service.AuthService;
import com.example.authentication.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class AuthServiceImpl implements AuthService{

    private final UserService userService;
    private final PasswordEncoder passwordEncoder;
    
    @Override
    public UserDto registerUser(UserDto userDto) {
        userDto.setPassword(passwordEncoder.encode(userDto.getPassword()));
        
        return userService.createUser(userDto);
    }
    
}
