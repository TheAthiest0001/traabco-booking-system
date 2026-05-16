package com.cput.traabcobusinessplatform.users.dto;




/**
 * Represents the user data the server sends back to the client.
 * This is an outbound DTO — it goes out from the server, never comes in.
 * It deliberately excludes the password field so sensitive credentials
 * are never exposed in an API response. This is what gets returned after
 * a successful register, login, or any user lookup endpoint.
 */
public class UserResponse {
}
