package com.example.demo124.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo124.dto.BookDto;
import com.example.demo124.mapper.BookMapper;

@Service
public class BookService {
    @Autowired
    BookMapper mapper;

    public List<BookDto> selectBookList(){
        return mapper.selectBookList();
    }

    public BookDto selectBook(String book_no){
        return mapper.selectBook(book_no);
    }
    
}
