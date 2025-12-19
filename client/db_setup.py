
import os
import psycopg2

def main():
    db_url = os.environ.get("DATABASE_URL")
    if not db_url:
        raise ValueError("DATABASE_URL environment variable not set.")

    # Add sslmode=require to the connection string if it's not already there
    if "sslmode" not in db_url:
        db_url += "?sslmode=require"

    conn = None
    try:
        print("Connecting to the database...")
        conn = psycopg2.connect(db_url)
        cur = conn.cursor()

        print("Reading schema.sql file...")
        with open("schema.sql", "r") as f:
            sql = f.read()

        print("Executing schema.sql...")
        cur.execute(sql)
        conn.commit()

        print("Database schema created successfully.")

        print("Verifying table creation...")
        cur.execute("\\dt")
        tables = cur.fetchall()
        print("Tables in database:")
        for table in tables:
            print(table[1])

        cur.close()
    except Exception as e:
        print(f"An error occurred: {e}")
    finally:
        if conn:
            conn.close()
            print("Database connection closed.")

if __name__ == "__main__":
    main()
