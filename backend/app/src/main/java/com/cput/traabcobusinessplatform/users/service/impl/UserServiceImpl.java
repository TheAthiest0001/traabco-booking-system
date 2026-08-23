package com.cput.traabcobusinessplatform.users.service.impl;
/**
 * Muso Nkuntsu*/

import com.cput.traabcobusinessplatform.config.JwtUtil;
import com.cput.traabcobusinessplatform.users.domain.UserEntity;
import com.cput.traabcobusinessplatform.users.dto.LoginRequest;
import com.cput.traabcobusinessplatform.users.dto.RegisterRequest;
import com.cput.traabcobusinessplatform.users.dto.UserResponse;
import com.cput.traabcobusinessplatform.users.mapper.UserMapper;
import com.cput.traabcobusinessplatform.users.repository.UserRepository;
import com.cput.traabcobusinessplatform.users.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final UserMapper userMapper;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;

    @Override
    public UserResponse registerUser(RegisterRequest request){
        if (UserRepository.existsByEmail(request.getEmail()))
            throw new RuntimeException("Email already exists: " + request.getEmail()); {
        }
        UserEntity user = userMapper .toEntity(request);
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        UserEntity savedUser = userRepository.save(user);
        return userMapper.toResponse(savedUser);
    }
    @Override
    public String loginUser(LoginRequest request) {
        UserEntity user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new UserNotFoundException(
                        "No account found with email: " + request.getEmail()));

        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new UserNotFoundException("Invalid credentials");
        }

        return jwtUtil.generateToken(
                user.getEmail(), user.getRole().name());
    }

    @Override
    public List<UserResponse> getAllUsers() {
        return userRepository.findAll()
                .stream()
                .map(userMapper::toResponse)
                .toList();
    }

    @Override
    public UserResponse getUserById(Long id) {
        UserEntity user = userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException(
                        "User not found with id: " + id));
        return userMapper.toResponse(user);
    }

    @Override
    public UserResponse updateUser(Long id, RegisterRequest request) {
        UserEntity user = userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException(
                        "User not found with id: " + id));

        user.setFirstName(request.getFirstName());
        user.setLastName(request.getLastName());
        user.setEmail(request.getEmail());
        user.setRole(request.getRole());

        if (request.getPassword() != null && !request.getPassword().isBlank()) {
            user.setPassword(passwordEncoder.encode(request.getPassword()));
        }

        return userMapper.toResponse(userRepository.save(user));
    }

    @Override
    public void deleteUser(Long id) {
        UserEntity user = userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException(
                        "User not found with id: " + id));
        userRepository.delete(user);
    }
}
