package com.codemancer.sneha.model;

import jakarta.persistence.Column;


import jakarta.persistence.Entity;

import jakarta.persistence.GeneratedValue;

import jakarta.persistence.GenerationType;

import jakarta.persistence.Id;

import jakarta.persistence.Table;

import lombok.AllArgsConstructor;

import lombok.Builder;

import lombok.Data;

import lombok.NoArgsConstructor;







@Entity

@Table(name = "___policy")

public class PolicyUser {

	@Id

    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;
	private String policy_name;
	private String available_vacants;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getPolicy_name() {
		return policy_name;
	}
	public void setPolicy_name(String policy_name) {
		this.policy_name = policy_name;
	}
	public String getAvailable_vacants() {
		return available_vacants;
	}
	public void setAvailable_vacants(String available_vacants) {
		this.available_vacants = available_vacants;
	}
	@Override
	public String toString() {
		return "PolicyUser [id=" + id + ", policy_name=" + policy_name + ", available_vacants=" + available_vacants
				+ "]";
	}
}