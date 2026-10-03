/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.authentication.exception;

import com.example.authentication.dto.ApiError;
import com.example.authentication.dto.ErrorResponse;
import jakarta.servlet.http.HttpServletRequest;
import javax.security.auth.login.CredentialExpiredException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;


@RestControllerAdvice
public class GlobalExceptionHandler {
    
        private final Logger logger = LoggerFactory.getLogger(GlobalExceptionHandler.class);
    
        @ExceptionHandler({
            UsernameNotFoundException.class,
            BadCredentialsException.class,
            CredentialExpiredException.class,
            DisabledException.class
        })
        public ResponseEntity<ApiError> handleAuthException(Exception e, HttpServletRequest request){
            logger.info("Exception  :  {}", e.getClass().getName());
            var apiError= ApiError.of(HttpStatus.BAD_REQUEST.value(), "Bad Request", e.getMessage(), request.getRequestURI());
            
            return ResponseEntity.badRequest().body(apiError);
        }
    
        // resource not found exception handler
        @ExceptionHandler(ResourceNotFoundException.class)
        public ResponseEntity<ErrorResponse> handleResourceNotFoundException(ResourceNotFoundException exception){
            ErrorResponse internalServerError = new ErrorResponse(exception.getMessage(), HttpStatus.NOT_FOUND, 404);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(internalServerError);
        }
        
        @ExceptionHandler(IllegalArgumentException.class)
        public ResponseEntity<ErrorResponse> handleIllegalArgumentException(IllegalArgumentException exception){
            ErrorResponse internalServerError = new ErrorResponse(exception.getMessage(), HttpStatus.BAD_REQUEST, 400);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(internalServerError);
        }
}
