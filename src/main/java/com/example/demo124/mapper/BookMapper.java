package com.example.demo124.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.demo124.dto.BookDto;

@Mapper
public interface BookMapper {
    public List<BookDto> selectBookList();

    public BookDto selectBook(String book_no);
}
