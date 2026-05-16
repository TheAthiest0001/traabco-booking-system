package com.cput.traabcobusinessplatform.users.dto;



/**
 * Represents the data a returning user submits when logging in.
 * This is an inbound DTO — it comes from the client, never from the server.
 * Only two fields are needed: email to identify the user and password to
 * verify them. If both match a record in the database, a JWT token is
 * returned. Nothing more is required or accepted.
 */
public class LoginResponse {
}
