package com.cput.traabcobusinessplatform.users.dto;


import lombok.Builder;
import lombok.Getter;


import java.time.LocalDate;
import java.time.LocalDateTime;

/**
 * Represents the user data the server sends back to the client.
 * This is an outbound DTO — it goes out from the server, never comes in.
 * It deliberately excludes the password field so sensitive credentials
 * are never exposed in an API response. This is what gets returned after
 * a successful register, login, or any user lookup endpoint.
 */

@Getter
@Builder
public class UserResponse {

    private final int userId;
    private final String fullName;
    private final String email;
    private final String role;
    private final LocalDateTime createdAt;


}
