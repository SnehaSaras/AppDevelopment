package com.codemancer.sneha.client;

import java.util.List;
import com.codemancer.sneha.client.*;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.codemancer.sneha.dto.request.FeedbackRequest;
import com.codemancer.sneha.vo.Feedback;


@FeignClient(name = "FEEDBACK", url = "${application.config.feedback-service.url}")
public interface FeedbackClient {

    @PostMapping("/add")
    boolean saveFeedback(@RequestBody FeedbackRequest request);

    @GetMapping("/get")
    List<Feedback> getFeedbacks();
}