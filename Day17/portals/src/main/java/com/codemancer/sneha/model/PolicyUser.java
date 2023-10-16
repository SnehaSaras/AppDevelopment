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

    private int id;
	private String policy_name;
	private String available_vacants;
	public int getId() {
		return id;
	}
	public void setId(int id) {
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
	public PolicyUser(int id, String policy_name, String available_vacants) {
		super();
		this.id = id;
		this.policy_name = policy_name;
		this.available_vacants = available_vacants;
	}
	public PolicyUser() {
		
	}
}