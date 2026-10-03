package com.example.authentication;

import com.example.authentication.config.AppConstants;
import com.example.authentication.entity.Role;
import com.example.authentication.repository.RoleRepository;
import java.util.UUID;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class AuthenticationAppApplication implements CommandLineRunner{
    
    @Autowired
    private RoleRepository roleRepository;
    
    public static void main(String[] args) {
        SpringApplication.run(AuthenticationAppApplication.class, args);
        }

    @Override
    public void run(String... args) throws Exception {
        // some default user role
        roleRepository.findByName("ROLE_" + AppConstants.ADMIN_ROLE).ifPresentOrElse(role -> {
            System.out.println("Admin Role Already Exists: " + role.getName());
        }, () -> {
            Role role = new Role();
            role.setName("ROLE_" +  AppConstants.ADMIN_ROLE);
            role.setId(UUID.randomUUID());
            roleRepository.save(role);
        });
    
        roleRepository.findByName("ROLE_" + AppConstants.GUEST_ROLE).ifPresentOrElse(role -> {
            System.out.println("Guest Role Already Exists: " + role.getName());
            }, () -> {
             Role role = new Role();
             role.setName("ROLE_" +  AppConstants.GUEST_ROLE);
             role.setId(UUID.randomUUID());
             roleRepository.save(role);
        });
    }
}
