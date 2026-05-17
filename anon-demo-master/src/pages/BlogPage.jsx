import React from 'react';
import { blogs } from '../data';
import { Link, useParams } from 'react-router-dom';

function BlogPage() {
  const { id } = useParams();
  
  if (id) {
    const post = blogs.find(b => b.id === parseInt(id));
    
    if (!post) {
      return (
        <main style={{ padding: '60px 0', textAlign: 'center' }}>
          <h2>Blog post not found</h2>
          <Link to="/blog" style={{marginTop: '20px', display: 'inline-block', color: 'var(--salmon-pink)'}}>Back to Blogs</Link>
        </main>
      );
    }
    
    return (
      <main style={{ padding: '60px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: 'var(--white)', padding: '30px', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', border: '1px solid var(--cultured)' }}>
            <Link to="/blog" style={{ color: 'var(--salmon-pink)', display: 'inline-flex', alignItems: 'center', gap: '5px', marginBottom: '20px', fontWeight: '500' }}>
              <ion-icon name="arrow-back-outline"></ion-icon> Back to Blogs
            </Link>
            
            <Link to="#" className="blog-category" style={{display: 'inline-block', marginBottom: '15px'}}>{post.category}</Link>
            <h1 className="title" style={{ marginBottom: '15px', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', lineHeight: '1.3', color: 'var(--eerie-black)' }}>{post.title}</h1>
            
            <div className="blog-meta" style={{ marginBottom: '30px', borderBottom: '1px solid var(--cultured)', paddingBottom: '20px', color: 'var(--sonic-silver)' }}>
              By <cite style={{fontWeight: 'bold', color: 'var(--eerie-black)'}}>Mr {post.author}</cite> / <time>{post.date}</time>
            </div>
            
            <img src={post.img} alt={post.title} style={{ width: '100%', borderRadius: '10px', marginBottom: '30px', objectFit: 'cover', maxHeight: '450px' }} />
            
            <div className="blog-body" style={{ color: 'var(--davys-gray)', fontSize: '1.1rem', lineHeight: '1.8' }}>
              {post.content ? (
                post.content.map((paragraph, idx) => (
                  <p key={idx} style={{ marginBottom: '20px' }}>{paragraph}</p>
                ))
              ) : (
                <p>Content coming soon...</p>
              )}
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main style={{ padding: '60px 0' }}>
      <div className="blog">
        <div className="container">
          <h2 className="title" style={{ marginBottom: '30px' }}>Our Blog</h2>
          <div className="blog-container has-scrollbar" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            {blogs.map(post => (
              <div className="blog-card" key={post.id} style={{ height: '100%' }}>
                <Link to={"/blog/"+post.id}>
                  <img src={post.img} alt={post.title} width="300" className="blog-banner" style={{objectFit: 'cover', height: '200px', width: '100%'}} />
                </Link>
                <div className="blog-content">
                  <Link to={"/blog/"+post.id} className="blog-category">{post.category}</Link>
                  <h3><Link to={"/blog/"+post.id} className="blog-title">{post.title}</Link></h3>
                  <p className="blog-meta">
                    By <cite>Mr {post.author}</cite> / <time>{post.date}</time>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default BlogPage;
