package com.codemancer.sneha.service;

import java.util.List;

import com.codemancer.sneha.dto.request.UserRequest;
import com.codemancer.sneha.dto.response.CountResponse;
import com.codemancer.sneha.dto.response.UserResponse;

public interface UserService {

    List<UserResponse> getAllUsers();

    UserResponse getUser(Long uid);

    UserResponse updateUser(UserRequest request, Long uid);

    boolean deleteProduct(Long uid);

    CountResponse userCount();

}
