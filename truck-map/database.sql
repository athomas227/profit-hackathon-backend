\c swiftswirl

CREATE SEQUENCE driver_id_seq START 1;
CREATE SEQUENCE location_id_seq START 1000;

CREATE TABLE drivers (
    driver_id  SERIAL PRIMARY KEY DEFAULT nextval('driver_id_seq'),
    firstname VARCHAR(100) NOT NULL,
    lastname
     VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL
);

CREATE TABLE locations (
    location_id SERIAL PRIMARY KEY DEFAULT nextval('location_id_seq'),
    driver_id INT REFERENCES drivers(driver_id),
    latitude DECIMAL(9, 6) NOT NULL,
    longitude DECIMAL(9, 6) NOT NULL,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


INSERT INTO drivers (firstname, lastname, email)
VALUES
    ('John', 'Garcia', 'jgarcia@gmail.com'),
    ('Alex', 'Grey', 'agrey@gmail.com'),
    ('Zoe', 'Bryant', 'zoebryant@aol.com'),
    ('Brianna', 'Lafontaine', 'brianna_l18@hotmail.com'),
    ('Cory', 'Vasquez', 'cvasquez@gmail.com'),
    ('Chase', 'Sergey', 'csergey1@gmail.com'),
    ('Ciara', 'Laurent', 'ciaralaurent@gmail.com'),
    ('Bryan', 'Green', 'bryangreen@gmail.com');


INSERT INTO locations (driver_id, latitude, longitude)
VALUES
    (1, 40.6782, -73.9442),  -- Brooklyn Heights
    (2, 40.6501, -73.9496),  -- Flatbush
    (3, 40.6622, -73.9851),  -- Park Slope
    (4, 40.6842, -73.9653),  -- Williamsburg
    (5, 40.6310, -74.0300),  -- Bay Ridge
    (6, 40.6262, -74.0307),  -- Sunset Park
    (7, 40.7056, -73.9787),  -- Downtown Brooklyn
    (8, 40.6786, -73.9771);  -- Brooklyn Navy Yard