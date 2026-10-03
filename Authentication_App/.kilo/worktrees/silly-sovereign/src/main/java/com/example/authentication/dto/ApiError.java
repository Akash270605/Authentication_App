/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.authentication.dto;

import java.time.OffsetDateTime;
import java.time.ZoneOffset;

/**
 *
 * @author Leveno
 */
public record ApiError(
        int status,
        String error,
        String message,
        String path,
        OffsetDateTime timestamp
        ) {
    
    public static ApiError of(int status, String error, String message, String path){
        return new ApiError(status, error, message, path, OffsetDateTime.now(ZoneOffset.UTC));
    }
    
    public static ApiError of(int status, String error, String message, String path, boolean noDateTime){
        return new ApiError(status, error, message, path, null);
    }
}
