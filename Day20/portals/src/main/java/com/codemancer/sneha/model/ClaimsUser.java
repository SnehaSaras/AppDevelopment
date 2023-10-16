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

@Table(name = "__claims")

public class ClaimsUser {

	@Id

    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;
	private String customer_name;
	private String customer_email;
	private String status;
	@Override
	public String toString() {
		return "ClaimsUser [id=" + id + ", customer_name=" + customer_name + ", customer_email=" + customer_email
				+ ", status=" + status + ", getId()=" + getId() + ", getCustomer_name()=" + getCustomer_name()
				+ ", getCustomer_email()=" + getCustomer_email() + ", getStatus()=" + getStatus() + ", getClass()="
				+ getClass() + ", hashCode()=" + hashCode() + ", toString()=" + super.toString() + "]";
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getCustomer_name() {
		return customer_name;
	}
	public void setCustomer_name(String customer_name) {
		this.customer_name = customer_name;
	}
	public String getCustomer_email() {
		return customer_email;
	}
	public void setCustomer_email(String customer_email) {
		this.customer_email = customer_email;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
}