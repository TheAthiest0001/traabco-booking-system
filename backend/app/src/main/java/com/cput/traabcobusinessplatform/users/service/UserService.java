package com.cput.traabcobusinessplatform.users.service;

import com.cput.traabcobusinessplatform.users.dto.LoginRequest;
import com.cput.traabcobusinessplatform.users.dto.RegisterRequest;
import com.cput.traabcobusinessplatform.users.dto.UserResponse;

import java.util.List;

public interface UserService {

    UserResponse registerUser(RegisterRequest request);
    String loginUser(LoginRequest request);
    List<UserResponse> getAllUsers();
    UserResponse getUserById(Long id);
    UserResponse updateUser(Long id,RegisterRequest request);
    void deleteUser(Long id);
}
