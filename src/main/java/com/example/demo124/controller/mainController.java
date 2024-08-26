package com.example.demo124.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@Controller
public class mainController {
    @GetMapping("/")
    public String mainMenu() {
        return "/index";
    }
    
}
