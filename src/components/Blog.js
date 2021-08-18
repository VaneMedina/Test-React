import React from 'react'
import Cards from './Cards'
import "../styles/Blog.css"


function Blog() {
    return (
        <>
            <section id="blog" className="blog">
                    <h3>
                        <span className="blog-title">Blog  / </span>
                        <span className="featured">Novedades </span>
                    </h3>
                    <Cards/>
                    <div className="text-center">
                        <a className="btn">Ver todas las novedades</a>
                    </div>
            </section>
        </>
    )
}

export default Blog
