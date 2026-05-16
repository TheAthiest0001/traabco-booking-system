package com.cput.traabcobusinessplatform.users.dto;

/**
 * Represents the server's response after successful user authentication.
 * This is an outbound DTO — it goes from the server to the client.
 * It contains a security token (JWT) and the non‑sensitive user profile.
 * The password is never included.
 */
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class LoginResponse {

    private final String accessToken;
    private final String okenType;
    private final UserResponse user;

}
