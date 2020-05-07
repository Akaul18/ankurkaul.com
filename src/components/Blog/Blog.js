import React, { useEffect } from 'react'
import './Blog.scss'

const Blog = ({ handleActiveLink }) => {

    useEffect(() => {
        handleActiveLink(window.location.pathname)
    }, [handleActiveLink])

    return (
        <div>
            <main className="blog__main">
                <div>
                    <h1>Blog Component</h1>
                </div>
            </main>
        </div>
    )
}

export default Blog
