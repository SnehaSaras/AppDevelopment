package com.codemancer.sneha.dto.request;

import com.codemancer.sneha.model.enumerate.Role;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserRequest {
    private String user;
    private String email;
    private String password;
    private Boolean isEnabled;
    private Role role;
}
