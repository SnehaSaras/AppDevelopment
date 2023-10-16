package com.codemancer.feedback.service;

import java.util.List;

import com.codemancer.feedback.dto.FeedbackRequest;
import com.codemancer.feedback.dto.FeedbackResponse;

public interface FeedbackService {

    boolean saveFeedback(FeedbackRequest request);

    List<FeedbackResponse> getFeedbacks();

}
