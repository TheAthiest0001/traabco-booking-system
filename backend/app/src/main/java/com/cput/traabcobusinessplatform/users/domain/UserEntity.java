package com.cput.traabcobusinessplatform.users.domain;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

@Entity
@Table(name = "users")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserEntity {

    @Id
    private int User_id;


    @Column(name = "full_name")
    private String fullName;

    @Column(name = "email")
    private String email;


}
