-- Database Schema for Cluster Blog Ecosystem

CREATE TABLE blogs (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL UNIQUE,
    meta_description VARCHAR(255),
    awareness_stage VARCHAR(50),
    keywords TEXT[],
    is_pillar BOOLEAN DEFAULT false,
    word_count INTEGER,
    content_html TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE links (
    id SERIAL PRIMARY KEY,
    source_blog_id INTEGER REFERENCES blogs(id) ON DELETE CASCADE,
    target_blog_id INTEGER REFERENCES blogs(id) ON DELETE CASCADE,
    anchor_text VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_blogs_slug ON blogs(slug);
CREATE INDEX idx_links_source_blog_id ON links(source_blog_id);
CREATE INDEX idx_links_target_blog_id ON links(target_blog_id);
