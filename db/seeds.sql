INSERT INTO departments (name, Id)
VALUES
    ('Finance'),
    ('Legal'),
    ('Quality Assurance');
    

INSERT INTO roles (title, salary, departmentId)
VALUES
    ('Artist', 62000, 1),
    ('Editor', 25000, 1),
    ('Cameraman', 36000, 2),
    ('Tech Support', 65000, 2),
    ('Director', 80000, 3),
    ('Screenwriter', 25000, 3);

INSERT INTO employees (firstName,lastName,roleId)
VALUES
    ('Bam', 'Baram', 1),
    ('Woah', 'Black', 2),
    ('Betty', 'Stop', 3);

INSERT INTO employees (firstName, lastName, roleId, managerId)
VALUES
    ('Jerry', 'Stone', 1, 12),
    ('Tom', 'Ridges', 1, 12),
    ('Aaron', 'Copen', 3, 13),
    ('Sandra', 'Arnold', 3, 14),
    ('Jon', 'Doe', 2, 12);
   