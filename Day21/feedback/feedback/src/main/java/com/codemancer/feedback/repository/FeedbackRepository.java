package com.codemancer.feedback.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.codemancer.feedback.model.Feedback;

import java.util.Optional;

@Repository

public interface FeedbackRepository extends JpaRepository<Feedback, Long>{
      Optional<Feedback> findByUsernameAndUseremail(String username,String useremail);
}