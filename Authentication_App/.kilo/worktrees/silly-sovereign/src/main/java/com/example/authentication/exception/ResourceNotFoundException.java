/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.authentication.exception;

/**
 *
 * @author Leveno
 */
public class ResourceNotFoundException extends RuntimeException{
    
    public ResourceNotFoundException(){
        super("Resource not found!");
    } 
    
    public ResourceNotFoundException(String message){
        super(message);
    }
}
