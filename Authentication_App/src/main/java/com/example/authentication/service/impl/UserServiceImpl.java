/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.authentication.service.impl;

import com.example.authentication.config.AppConstants;
import com.example.authentication.dto.UserDto;
import com.example.authentication.entity.Role;
import com.example.authentication.entity.User;
import com.example.authentication.enums.Provider;
import com.example.authentication.exception.ResourceNotFoundException;
import com.example.authentication.helper.UserHelper;
import com.example.authentication.repository.RoleRepository;
import com.example.authentication.repository.UserRepository;
import com.example.authentication.service.UserService;
import java.time.Instant;
import java.util.HashSet;
import java.util.UUID;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService{
    
    private final UserRepository userRepository;
    private final ModelMapper modelMapper;
    private final RoleRepository roleRepository;
    

    @Override
    @Transactional
    public UserDto createUser(UserDto userDto) {
        
        if(userDto.getEmail() == null || userDto.getEmail().isBlank()){
            throw new IllegalArgumentException("Email is required");
        }
        
        if(userRepository.existsByEmail(userDto.getEmail())){
            throw new IllegalArgumentException("Email already exists");
        }
        
        if (userDto.getEnable() == null) {
            userDto.setEnable(true);
        }
        
        User user = modelMapper.map(userDto, User.class);       
        user.setProvider(userDto.getProvider() != null ? userDto.getProvider() : Provider.LOCAL);
        
        // role assign to user for authorization
        
        // Registration should assign roles on the server, not trust roles from the request.
        user.setRoles(new HashSet<>());

        Role role = roleRepository.findByName("ROLE_" + AppConstants.ADMIN_ROLE)
                .orElseThrow(() -> new IllegalStateException("Default guest role is missing"));
        user.getRoles().add(role);
        
        
        
        User savedUser = userRepository.save(user);       
        return modelMapper.map(savedUser, UserDto.class);
    }

    @Override
    public UserDto getUserByEmail(String email) {
        
        User user = userRepository.findByEmail(email)
                                    .orElseThrow(() -> new ResourceNotFoundException("User not found with given email id"));
        
        return modelMapper.map(user, UserDto.class);
    }

    @Override
    public UserDto updateUser(UserDto userDto, String userId) {
        UUID uId = UserHelper.parseUUID(userId);
        User existingUser = userRepository.findById(uId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with given id"));
        
        if(userDto.getName() != null)
            existingUser.setName(userDto.getName());
        
        if(userDto.getImage()!= null)
            existingUser.setImage(userDto.getImage());
        
        if(userDto.getProvider()!= null)
            existingUser.setProvider(userDto.getProvider());
        
        if(userDto.getPassword() != null)
            existingUser.setPassword(userDto.getPassword());
        
        existingUser.setEnable(userDto.getEnable());
        existingUser.setUpdatedAt(Instant.now());
        userRepository.save(existingUser);
        User updatedUser = userRepository.save(existingUser);
        
        return modelMapper.map(updatedUser, UserDto.class);
    }

    @Override
    public void deleteUser(String userId) {
        UUID uId = UserHelper.parseUUID(userId);
        
        User user = userRepository.findById(uId)
                                        .orElseThrow(() -> new ResourceNotFoundException("User not found with given id"));
        userRepository.delete(user);
    }

    @Override
    public UserDto getUserById(String userId) {
        User user = userRepository.findById(UserHelper.parseUUID(userId))
                                    .orElseThrow(() -> new ResourceNotFoundException("User not found with given id"));
        return modelMapper.map(user, UserDto.class);
    }

    @Override
    @Transactional(readOnly = true)
    public Iterable<UserDto> getAllUsers() {
            return userRepository
                    .findAll()
                    .stream()
                    .map(user -> modelMapper.map(user, UserDto.class))
                    .toList();
    }
    
}
