package com.codemancer.sneha.dto.response;

import com.codemancer.sneha.model.enumerate.Role;

import lombok.AllArgsConstructor;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AuthenticationResponse {
    private String token;
    private Long uid;
    private String user;
    private String email;
    private Role role;
}
