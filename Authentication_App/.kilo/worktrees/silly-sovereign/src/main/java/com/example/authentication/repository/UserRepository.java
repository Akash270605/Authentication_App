/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.example.authentication.repository;

import com.example.authentication.entity.User;
import java.util.Optional;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author Leveno
 */
public interface UserRepository extends JpaRepository<User, UUID>{
    
    Optional<User> findByEmail(String email);
    boolean existsByEmail(String email);
}
