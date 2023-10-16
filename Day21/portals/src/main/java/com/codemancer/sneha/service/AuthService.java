package com.codemancer.sneha.service;

import com.codemancer.sneha.dto.request.AuthenticationRequest;
import com.codemancer.sneha.dto.request.RegisterRequest;
import com.codemancer.sneha.dto.response.AuthenticationResponse;

public interface AuthService {
    boolean userRegistration(RegisterRequest request);

    AuthenticationResponse userAuthentication(AuthenticationRequest request);
}
