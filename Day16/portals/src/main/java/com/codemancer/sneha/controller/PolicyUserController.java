package com.codemancer.sneha.controller;



import java.util.List;


import java.util.Optional;



import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;

import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.DeleteMapping;

import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.PutMapping;

import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;


import com.codemancer.sneha.model.PolicyUser;

import com.codemancer.sneha.repository.PolicyUserRepository;





@RestController

@RequestMapping("/api/policy")

@CrossOrigin

public class PolicyUserController {

@Autowired


private PolicyUserRepository policyRepository ;




@PostMapping("/add")

public PolicyUser add(final @RequestBody PolicyUser policy)

{

return policyRepository.save(policy) ;


}

@GetMapping("/get")

public List<PolicyUser> getAllStudent()

{

return policyRepository.findAll() ;

}

@GetMapping("/gets/{id}")

public PolicyUser getAllStudents(@PathVariable int id)

{

return policyRepository.findById(id).orElse(null) ;

}
@PutMapping("/update/{id}")

public ResponseEntity<PolicyUser> updatePolicy(@RequestBody PolicyUser updatedPolicy, @PathVariable int id) {

    Optional<PolicyUser> policyOptional = policyRepository.findById(id);



    if (policyOptional.isPresent()) {

        PolicyUser existingPolicy = policyOptional.get();

        existingPolicy.setPolicy_name(updatedPolicy.getPolicy_name());

        existingPolicy.setAvailable_vacants(updatedPolicy.getAvailable_vacants());

        policyRepository.save(existingPolicy);

        return new ResponseEntity<>(existingPolicy, HttpStatus.OK);

    } else {

        return new ResponseEntity<>(HttpStatus.NOT_FOUND); // Return a 404 status if the policy with the given ID is not found.

    }

}

@DeleteMapping("/delete/{id}")

public String delete(@PathVariable int id)

{

policyRepository.deleteById(id) ;

return "Deleted Successfully" ;

}
}

