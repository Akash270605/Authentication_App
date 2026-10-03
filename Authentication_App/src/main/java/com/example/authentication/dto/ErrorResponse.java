/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Record.java to edit this template
 */
package com.example.authentication.dto;

import org.springframework.http.HttpStatus;

/**
 *
 * @author Leveno
 */
public record ErrorResponse(
        String message,
        HttpStatus status,
        int statusCode
        ) {

}
