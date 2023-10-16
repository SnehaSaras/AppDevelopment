package com.codemancer.sneha.repository;



import org.springframework.data.jpa.repository.JpaRepository;





import org.springframework.stereotype.Repository;



import com.codemancer.sneha.model.*;



@Repository

public interface PolicyUserRepository extends JpaRepository<PolicyUser, Integer>{



}