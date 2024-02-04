-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema events
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema events
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `events` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `events` ;

-- -----------------------------------------------------
-- Table `events`.`event_categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `events`.`event_categories` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `description` TEXT NULL DEFAULT NULL,
  `age_restriction` VARCHAR(20) NULL DEFAULT NULL,
  `target_demographic` VARCHAR(50) NULL DEFAULT NULL,
  `season` VARCHAR(50) NULL DEFAULT NULL,
  `extra_information` TEXT NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `events`.`events`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `events`.`events` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `description` TEXT NULL DEFAULT NULL,
  `location` VARCHAR(255) NULL DEFAULT NULL,
  `date` DATE NULL DEFAULT NULL,
  `start_time` TIME NULL DEFAULT NULL,
  `end_time` TIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `events`.`eventsdetails`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `events`.`eventsdetails` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `eventName` VARCHAR(255) NOT NULL,
  `description` TEXT NULL DEFAULT NULL,
  `date` DATE NULL DEFAULT NULL,
  `consumption` VARCHAR(50) NULL DEFAULT NULL,
  `location` VARCHAR(255) NULL DEFAULT NULL,
  `category` VARCHAR(50) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

-- -----------------------------------------------------
-- Table `events`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `events`.`users` (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`user_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

-- -----------------------------------------------------
-- Table `events`.`successstories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `events`.`successstories` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `eventName` VARCHAR(255) NOT NULL,
  `country` VARCHAR(255) NULL DEFAULT NULL,
  `date` VARCHAR(225) NULL DEFAULT NULL,
  `concept` TEXT NULL DEFAULT NULL,
  `image` VARCHAR(1000) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 12
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


INSERT INTO successStories (eventName, country, date, concept, image)
VALUES (
    'Coachella Valley Music and Arts Festival',
    'United States',
    'Annually in April',
    'Coachella is a music and arts festival featuring diverse musical genres, large-scale art installations, and a bohemian atmosphere. It has become a cultural phenomenon, attracting music enthusiasts and celebrities.',
    'https://media.pitchfork.com/photos/5df07bc086d8e90008993d22/2:1/w_2560%2Cc_limit/Coachella.jpg'
);


INSERT INTO successStories (eventName, country, date, concept, image)
VALUES (
    'Oktoberfest',
    'Germany',
    'Annually, typically from late September to the first weekend in October',
    'Oktoberfest is a traditional beer festival held in Munich, celebrating Bavarian culture with beer, traditional food, music, and parades. It has grown into the world\'s largest Volksfest (beer festival and traveling funfair).',
    'https://imagelecourrier.vnanet.vn/MediaUpload/Org/2023/10/04/113400-vna_potal_khai_mac_le_hoi_bia_oktoberfest_tai_duc_6984863.jpg'
);


INSERT INTO successStories (eventName, country, date, concept, image)
VALUES (
    'Diwali',
    'Primarily celebrated in India, but also observed by Hindus worldwide',
    'Annually, based on the Hindu lunar calendar, usually in October or November',
    'Diwali, or Deepavali, is the Festival of Lights, symbolizing the victory of light over darkness. It involves the lighting of lamps, fireworks, festive meals, and the exchange of gifts.',
    'https://people.com/thmb/-1Qzh0dM6aM1P03_JrZ1gmvPyG0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x99:751x101)/diwali-102022-3-05a455826c2f4a2b993740300f88f041.jpg'
);


INSERT INTO successStories (eventName, country, date, concept, image)
VALUES (
    'Rio Carnival',
    'Brazil',
    'Annually, typically held in February or March before the Lenten season',
    'The Rio Carnival is a vibrant and lively celebration with samba music, dance, colorful costumes, and elaborate floats. It is one of the largest and most famous carnivals in the world.',
    'https://www.veloso.com/media/1338662/8064-rio-carnival-2019-plan-your-visit.jpg?width=1200&height=630&mode=crop&anchor=%27center%27&format=jpg'
);



INSERT INTO successStories (eventName, country, date, concept, image)
VALUES (
    'Chinese New Year (Spring Festival)',
    'Celebrated in many countries with significant Chinese communities, including China, Singapore, Indonesia, Malaysia, and others',
    'The date varies each year, usually falling between January 21 and February 20',
    'Chinese New Year, also known as Spring Festival, marks the beginning of the lunar new year. It involves family reunions, traditional feasts, dragon and lion dances, lantern festivals, and the giving of red envelopes (hongbao) for good luck.',
    'https://cdn-almjc.nitrocdn.com/aZYyrACOqPKwqacflNAAVPArFRYGkpZe/assets/images/optimized/rev-5761f11/img-cdn-china-admissions.imgix.net/wp-content/uploads/2019/07/46d82e1a0b0100936591de3958f3408d.Chinese-Spring-Festival.jpg'
);


INSERT INTO successStories (eventName, country, date, concept, image)
VALUES (
    'Holi',
    'Primarily celebrated in India, but also observed in other countries with Hindu communities',
    'Annually, usually in March',
    'Holi is the festival of colors, celebrating the arrival of spring. It involves throwing colored powders and water at each other, symbolizing the triumph of good over evil and the joy of renewal.',
    'https://media.assettype.com/outlooktraveller/import/outlooktraveller/public/uploads/articles/see/Holi-celebrations-in-Ruse-City,-Bulgaria_.jpg?w=1200&h=675&auto=format%2Ccompress&fit=max&enlarge=true'
);

INSERT INTO successStories (eventName, country, date, concept, image)
VALUES (
    'Carnival of Venice (Carnevale di Venezia)',
    'Italy',
    'Annually, typically in February',
    'The Carnival of Venice is known for its elaborate masks, costumes, and masquerade balls. It is a celebration leading up to Lent, featuring parades, live performances, and various cultural events.',
    'https://images.squarespace-cdn.com/content/v1/5e68fa068806f444a3b6603b/1612532648324-P6ZRA7Q9ZZGRRT9TPFMP/Venice-Carnival.jpg'
);


INSERT INTO successStories (eventName, country, date, concept, image)
VALUES (
    'Running of the Bulls (San Fermín)',
    'Spain',
    'Annually from July 6 to July 14',
    'Held in the city of Pamplona, the Running of the Bulls is part of the San Fermín festival. Participants run ahead of a group of bulls through the city streets. It is a traditional event that has gained international attention.',
    'https://cdn.britannica.com/50/195850-050-65C7B726/People-bulls-street-San-Fermin-Pamplona-festival.jpg'
);

INSERT INTO successStories (eventName, country, date, concept, image)
VALUES (
    'La Tomatina',
    'Spain',
    'Annually on the last Wednesday in August',
    'La Tomatina is a unique festival where participants engage in a massive tomato fight. Thousands of people gather to throw overripe tomatoes at each other, creating a colorful and messy spectacle.',
    'https://myrepublica.nagariknetwork.com/uploads/media/latomatina_20200318122039.jpg'
);
