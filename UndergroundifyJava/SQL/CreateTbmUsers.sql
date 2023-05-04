create table barbier09schema.tbm_users(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(50) NOT NULL,
last_name VARCHAR(50) NOT NULL,
DOB date NOT NULL,
email VARCHAR(100) NOT NULL
);