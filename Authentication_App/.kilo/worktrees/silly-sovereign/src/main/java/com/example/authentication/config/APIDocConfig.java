/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.authentication.config;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.enums.SecuritySchemeType;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.security.SecurityScheme;
import org.springframework.context.annotation.Configuration;

@Configuration
@OpenAPIDefinition(
        info = @Info(
                title = "Auth Application built by Akash Kumar",
                description = "Generic auth app that can be used with any application.",
                contact = @Contact(
                        name = "Akash Kumar Srivastava",
                        email = "akashkr270605@gmail.com"
                ),
                version = "1.0",
                summary = "This app is very useful if you don't want to create auth app from scratch."
        ),
        security = {
            @SecurityRequirement(
                    name = "bearerAuth"
            )
        }
)

@SecurityScheme(
        name = "bearerAuth",
        type = SecuritySchemeType.HTTP,
        scheme = "bearer",    // Authorization: Bearer 
        bearerFormat = "JWT"
)
public class APIDocConfig {
    
}
