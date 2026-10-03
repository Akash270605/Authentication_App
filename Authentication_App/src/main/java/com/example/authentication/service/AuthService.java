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
public interface AuthService {
    UserDto registerUser(UserDto userDto);
}
