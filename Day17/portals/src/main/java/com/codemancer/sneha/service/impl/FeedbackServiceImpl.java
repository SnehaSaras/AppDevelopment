package com.codemancer.sneha.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.codemancer.sneha.client.FeedbackClient;
import com.codemancer.sneha.dto.response.FeedbackResponse;
import com.codemancer.sneha.service.FeedbackService;
import com.codemancer.sneha.vo.Feedback;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class FeedbackServiceImpl implements FeedbackService {

    private final FeedbackClient feedbackClient;

    @Override
    public List<FeedbackResponse> getFeedbacks() {
        List<Feedback> feedbacks = feedbackClient.getFeedbacks();
        return feedbacks.stream()
                .map(feedback -> {
                    FeedbackResponse response = new FeedbackResponse();
                    response.setFid(feedback.getFid());
                    response.setUsername(feedback.getUsername());
                    response.setUseremail(feedback.getUseremail());
                    response.setQuestion(feedback.getQuestion());
                    response.setAnswer(feedback.getAnswer());
                    return response;
                })
                .collect(Collectors.toList());
    }

}