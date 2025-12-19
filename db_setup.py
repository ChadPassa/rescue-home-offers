
import os
import psycopg2

# Get the database connection URL from the environment variable
DATABASE_URL = os.environ.get("DATABASE_URL")

# Connect to the database
conn = psycopg2.connect(DATABASE_URL)
cur = conn.cursor()

# Create the blogs table
cur.execute("""
    CREATE TABLE IF NOT EXISTS blogs (
        id SERIAL PRIMARY KEY,
        title TEXT NOT NULL,
        content TEXT NOT NULL,
        meta_description TEXT,
        slug TEXT NOT NULL UNIQUE,
        category TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
""")

# Create the links table
cur.execute("""
    CREATE TABLE IF NOT EXISTS links (
        id SERIAL PRIMARY KEY,
        source_blog_id INTEGER REFERENCES blogs(id),
        target_blog_id INTEGER REFERENCES blogs(id),
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
""")

# Commit the changes and close the connection
conn.commit()
cur.close()
conn.close()

print("Database schema created successfully.")

import subprocess

# Run the SQL script to insert the blog posts
subprocess.run(["psql", os.environ["DATABASE_URL"], "-f", "/home/ubuntu/rescue-home-offers/insert_blog_posts.sql"])
