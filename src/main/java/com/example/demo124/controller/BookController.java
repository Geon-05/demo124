package com.example.demo124.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;

import com.example.demo124.dto.BookDto;
import com.example.demo124.service.BookService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@Controller
public class BookController {
    @Autowired
    BookService service;

    @GetMapping("/book/bookList")
    public String getMethodName(Model model) {
        List<BookDto> list = service.selectBookList();
        model.addAttribute("bookList", list);
        return "book/bookList";
    }
    
    @GetMapping("/book/bookDetail")
    public String getMethodName(@RequestParam(required = false, name = "book_no") String no
    , Model model) {
        BookDto book = service.selectBook(no);
        model.addAttribute("book", book);
        return "book/bookDetail";
    }
    
}
