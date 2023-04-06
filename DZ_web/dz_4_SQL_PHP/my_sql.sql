-- Создать файл my.sql, в котором должна создаваться таблица с
-- информацией об одногруппниках. В таблице должно быть четыре поля: 
-- id, name, age, address. Все поля в таблице обязательны для заполнения.
-- Необходимо добавить 5-10 одногруппников в данную таблицу.
-- Необходимо написать запрос на получение имен всех одногруппников 
-- (только имен, без всего остального), которые живут в Москве и их возраст 
-- находится в диапазоне [18, 30) лет. 18 входит, 30 не входит



CREATE TABLE classmate (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  name TEXT NOT NULL,
  age INTEGER NOT NULL,
  address TEXT NOT NULL
);

-- insert
INSERT INTO classmate (name, age, address) VALUES ('Andrey', 27, 'Moscow');
INSERT INTO classmate (name, age, address) VALUES ('Dave', 23, 'Kazan');
INSERT INTO classmate (name, age, address) VALUES ('Denis', 18, 'Omsk');
INSERT INTO classmate (name, age, address) VALUES ('Roman', 27, 'Kazan');
INSERT INTO classmate (name, age, address) VALUES ('Yana', 18, 'Moscow');
INSERT INTO classmate (name, age, address) VALUES ('Sergey', 31, 'Omsk');
INSERT INTO classmate (name, age, address) VALUES ('Irina', 30, 'Moscow');
INSERT INTO classmate (name, age, address) VALUES ('Tatyana', 43, 'Moscow');
INSERT INTO classmate (name, age, address) VALUES ('Victor', 19, 'Moscow');
INSERT INTO classmate (name, age, address) VALUES ('Vladimir', 40, 'Kazan');


-- fetch 
SELECT name as "ИМЯ" 
FROM classmate 
WHERE address = 'Moscow'
AND ((age <= 18) or (age < 30));
