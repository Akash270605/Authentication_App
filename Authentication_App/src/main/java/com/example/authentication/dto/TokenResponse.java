/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.authentication.dto;

/**
 *
 * @author Leveno
 */
public record TokenResponse(
        String accessToken,
        String refreshToken,
        long expiresIn,
        String tokenType,
        UserDto userDto
        ) {
    
    public static TokenResponse of(String accessToken, String refreshToken, long expiresIn, UserDto user){
        return new TokenResponse(accessToken, refreshToken, expiresIn, "Bearer", user);
    }
    
}
