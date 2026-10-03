/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.authentication.helper;

import java.util.UUID;

/**
 *
 * @author Leveno
 */
public class UserHelper {
        public static UUID parseUUID(String uuid){
            return UUID.fromString(uuid);
        }
}
