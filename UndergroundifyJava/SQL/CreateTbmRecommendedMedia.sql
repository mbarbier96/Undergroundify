create table barbier09schema.tbm_recommended_media(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
spotifyId VARCHAR(50) NOT NULL,
mediaType VARCHAR(50) NOT NULL,
recommendedBy VARCHAR(50) NOT NULL,
recommendedDate date NOT NULL,
likes INT
);