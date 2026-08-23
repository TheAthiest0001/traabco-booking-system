package com.cput.traabcobusinessplatform.users.dto;

/**
 * Represents the data a new user submits when creating an account.
 * This is an inbound DTO — it comes from the client, never from the server.
 * It carries everything needed to create a User record: personal details,
 * credentials, and their assigned role. Validation annotations ensure
 * no field arrives empty or malformed before it touches the service layer.
 */


import com.cput.traabcobusinessplatform.users.domain.enums.UserRole;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RegisterRequest {

    @NotBlank(message = "Full name is required")
    private String fullName;

    @NotBlank(message = "Email is required")
    @Email(message = "Email should be valid")
    private String email;

    @NotBlank(message = "Password is required")
    private String password;

   @NotNull(message = "Role is required")
    private UserRole role;

   }




