package com.cput.traabcobusinessplatform.users.dto;

/**
 * Represents the data a new user submits when creating an account.
 * This is an inbound DTO — it comes from the client, never from the server.
 * It carries everything needed to create a User record: personal details,
 * credentials, and their assigned role. Validation annotations ensure
 * no field arrives empty or malformed before it touches the service layer.
 */


import com.cput.traabcobusinessplatform.users.enums.UserRole;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RegisterRequest {

    private String fullName;
    private String email;
    private String password;

    private UserRole role;

   public void validate(){
       if (fullName == null || fullName.trim().isEmpty()){

       }
   }



}
