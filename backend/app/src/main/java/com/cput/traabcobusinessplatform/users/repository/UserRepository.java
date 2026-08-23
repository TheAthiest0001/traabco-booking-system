package com.cput.traabcobusinessplatform.users.repository;

import com.cput.traabcobusinessplatform.users.domain.UserEntity;
import com.cput.traabcobusinessplatform.users.domain.enums.UserRole;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

public interface UserRepository {
    Optional<UserEntity> findByEmail(String email);

    boolean existsByEmail(String email);

    Page<UserEntity> findByRole(UserRole role, Pageable pageable);

    Page<UserEntity> findByIsActive(Boolean isActive, Pageable pageable);
}
