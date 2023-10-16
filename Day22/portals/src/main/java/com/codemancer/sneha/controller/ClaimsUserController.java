package com.codemancer.sneha.controller;

	

	import java.util.List;


	

	import org.springframework.beans.factory.annotation.Autowired;



	import org.springframework.web.bind.annotation.DeleteMapping;

	import org.springframework.web.bind.annotation.GetMapping;



	import org.springframework.web.bind.annotation.PostMapping;

	import org.springframework.web.bind.annotation.PutMapping;

	import org.springframework.web.bind.annotation.RequestBody;

	import org.springframework.web.bind.annotation.RequestMapping;

	import org.springframework.web.bind.annotation.RequestParam;

	import org.springframework.web.bind.annotation.RestController;

	

	import com.codemancer.sneha.model.*;
import com.codemancer.sneha.repository.ClaimsUserRepository;
import com.codemancer.sneha.repository.PolicyUserRepository;

	
	

	

	@RequestMapping("/api/claims")

	@RestController

	public class ClaimsUserController {

	@Autowired

	ClaimsUserRepository repo ;

	@PostMapping("/addEmployee")

	public ClaimsUser saveEmployee(@RequestBody ClaimsUser emp)

	{

	return repo.save(emp) ;

	}

	@GetMapping("/get")

	public List<ClaimsUser> getEmployee(ClaimsUser emp)

	{

		return repo.findAll() ;

	}

	@PutMapping("update")

	public ClaimsUser updateEmployee(@RequestBody ClaimsUser emp)

	{

	return repo.saveAndFlush(emp) ;

	}

	@DeleteMapping("/delete")

	public String delete(@RequestParam long id)

	{

		repo.deleteById(id) ;

		return "DELETED SUCCESSFULLY" ;

	}

	

	}

