import React from 'react';
import '../components/blog/blog.css';
import { BlogArea } from '../components/blog/BlogArea';
import { CategoriesBlog } from '../components/blog/CategoriesBlog';
import HeaderBlog from '../components/blog/HeaderBlog';

export default function Blog() {
  return (
    <>
      <div className="blog-container mb-blog-container">
        <HeaderBlog />
        <div className="blog-body mb-blog-body">
          <CategoriesBlog />
          <BlogArea />
        </div>
      </div>
    </>
  );
}
