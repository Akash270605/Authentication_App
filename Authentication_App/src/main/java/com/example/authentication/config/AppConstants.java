/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.authentication.config;

/**
 *
 * @author Leveno
 */
public class AppConstants {
    
    public static final String[] AUTH_PULBIC_URLS = {
        "/error",
        "/v3/api-docs/**",
        "/swagger-ui.html",
        "/swagger-ui/**",
        "/api/v1/auth/**"
    };
    
    public static final String ADMIN_ROLE="ADMIN";
    public static final String GUEST_ROLE="GUEST";
}
