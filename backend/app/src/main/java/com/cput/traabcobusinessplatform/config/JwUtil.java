package com.cput.traabcobusinessplatform.config;


import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import lombok.Value;
import org.springframework.stereotype.Component;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.SignatureAlgorithm;


import java.util.Date;

@Component
public class JwtUtil {
    @Value("${jwt.secret}")
    private String secret;

    @Value("${app.jwt.expiration}")
    private Long expiration;

    private key getSigningKey() {
        return Keys.hmacShaKeyFor(secret.getBytes());
    }
    public String generateToken(String email, String role){
        return Jwts.builder()
                .setSubject(email)
                .claim("role", role)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + expiration))
                .signWith(getSigningKey(), SignatureAlgorithm.HS256)
                .compact();
    }
    public String extractEmail(String token){
        return extractClaims(token).get("role", String.class);

    }
    public boolean isTokenValid(String token){
        try{
            extractClaims(token);
            return true;
        } catch (Exception e){
            return false;
        }
    }
    private Claims extractClaims(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(getSigningKey())
                .build()
                .parseClaimsJws(token)
                .getBody();
    }
}
