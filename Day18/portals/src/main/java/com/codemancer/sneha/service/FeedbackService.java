package com.codemancer.sneha.service;

import java.util.List;

import com.codemancer.sneha.dto.response.FeedbackResponse;

public interface FeedbackService {

    List<FeedbackResponse> getFeedbacks();

}