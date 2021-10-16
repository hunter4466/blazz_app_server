-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema blaz_app
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema blaz_app
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `blaz_app` DEFAULT CHARACTER SET utf8 ;
USE `blaz_app` ;

-- -----------------------------------------------------
-- Table `blaz_app`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `blaz_app`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `last_name` VARCHAR(45) NULL,
  `email` VARCHAR(100) NULL,
  `user` VARCHAR(45) NULL,
  `pass` VARCHAR(45) NULL,
  `phone` INT NULL,
  `date_of_birth` DATE NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `blaz_app`.`business`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `blaz_app`.`business` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `phone` INT NULL,
  `address` VARCHAR(250) NULL,
  `description` VARCHAR(300) NULL,
  `background_img` VARCHAR(500) NULL,
  `lego_img` VARCHAR(500) NULL,
  `users_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_business_users1_idx` (`users_id` ASC) VISIBLE,
  CONSTRAINT `fk_business_users1`
    FOREIGN KEY (`users_id`)
    REFERENCES `blaz_app`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `blaz_app`.`category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `blaz_app`.`category` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `image` VARCHAR(500) NULL,
  `business_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_category_business1_idx` (`business_id` ASC) VISIBLE,
  CONSTRAINT `fk_category_business1`
    FOREIGN KEY (`business_id`)
    REFERENCES `blaz_app`.`business` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `blaz_app`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `blaz_app`.`products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `image` VARCHAR(500) NULL,
  `description` VARCHAR(300) NULL,
  `price` DECIMAL(10,2) NULL,
  `business_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_products_business1_idx` (`business_id` ASC) VISIBLE,
  CONSTRAINT `fk_products_business1`
    FOREIGN KEY (`business_id`)
    REFERENCES `blaz_app`.`business` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `blaz_app`.`products_has_category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `blaz_app`.`products_has_category` (
  `products_id` INT NOT NULL,
  `category_id` INT NOT NULL,
  PRIMARY KEY (`products_id`, `category_id`),
  INDEX `fk_products_has_category_category1_idx` (`category_id` ASC) VISIBLE,
  INDEX `fk_products_has_category_products_idx` (`products_id` ASC) VISIBLE,
  CONSTRAINT `fk_products_has_category_products`
    FOREIGN KEY (`products_id`)
    REFERENCES `blaz_app`.`products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_products_has_category_category1`
    FOREIGN KEY (`category_id`)
    REFERENCES `blaz_app`.`category` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `blaz_app`.`modifiers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `blaz_app`.`modifiers` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `description` VARCHAR(300) NULL,
  `image` VARCHAR(500) NULL,
  `business_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_modifiers_business1_idx` (`business_id` ASC) VISIBLE,
  CONSTRAINT `fk_modifiers_business1`
    FOREIGN KEY (`business_id`)
    REFERENCES `blaz_app`.`business` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `blaz_app`.`sub_modifiers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `blaz_app`.`sub_modifiers` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `description` VARCHAR(300) NULL,
  `image` VARCHAR(500) NULL,
  `sub_modifierscol` VARCHAR(45) NULL,
  `business_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_sub_modifiers_business1_idx` (`business_id` ASC) VISIBLE,
  CONSTRAINT `fk_sub_modifiers_business1`
    FOREIGN KEY (`business_id`)
    REFERENCES `blaz_app`.`business` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `blaz_app`.`modifiers_has_products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `blaz_app`.`modifiers_has_products` (
  `modifiers_id` INT NOT NULL,
  `products_id` INT NOT NULL,
  `price` DECIMAL(10,2) NULL,
  PRIMARY KEY (`modifiers_id`, `products_id`),
  INDEX `fk_modifiers_has_products_products1_idx` (`products_id` ASC) VISIBLE,
  INDEX `fk_modifiers_has_products_modifiers1_idx` (`modifiers_id` ASC) VISIBLE,
  CONSTRAINT `fk_modifiers_has_products_modifiers1`
    FOREIGN KEY (`modifiers_id`)
    REFERENCES `blaz_app`.`modifiers` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_modifiers_has_products_products1`
    FOREIGN KEY (`products_id`)
    REFERENCES `blaz_app`.`products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `blaz_app`.`sub_modifiers_has_modifiers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `blaz_app`.`sub_modifiers_has_modifiers` (
  `sub_modifiers_id` INT NOT NULL,
  `modifiers_id` INT NOT NULL,
  `price` DECIMAL(10,2) NULL,
  PRIMARY KEY (`sub_modifiers_id`, `modifiers_id`),
  INDEX `fk_sub_modifiers_has_modifiers_modifiers1_idx` (`modifiers_id` ASC) VISIBLE,
  INDEX `fk_sub_modifiers_has_modifiers_sub_modifiers1_idx` (`sub_modifiers_id` ASC) VISIBLE,
  CONSTRAINT `fk_sub_modifiers_has_modifiers_sub_modifiers1`
    FOREIGN KEY (`sub_modifiers_id`)
    REFERENCES `blaz_app`.`sub_modifiers` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_sub_modifiers_has_modifiers_modifiers1`
    FOREIGN KEY (`modifiers_id`)
    REFERENCES `blaz_app`.`modifiers` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `blaz_app`.`orders`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `blaz_app`.`orders` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `active` TINYINT NULL DEFAULT 1,
  `comment` VARCHAR(225) NULL,
  `order_date` DATE NULL,
  `order_time` TIMESTAMP NULL,
  `client_name` VARCHAR(45) NULL,
  `customer_phone` INT NULL,
  `customer_address` VARCHAR(45) NULL,
  `deliver_state` TINYINT NULL,
  `deliver_price` DECIMAL(10,2) NULL,
  `order_total_price` DECIMAL(10,2) NULL,
  `business_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_orders_business1_idx` (`business_id` ASC) VISIBLE,
  CONSTRAINT `fk_orders_business1`
    FOREIGN KEY (`business_id`)
    REFERENCES `blaz_app`.`business` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `blaz_app`.`orders_has_products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `blaz_app`.`orders_has_products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `orders_id` INT NOT NULL,
  `products_id` INT NOT NULL,
  `quantity` INT NULL,
  `price` DECIMAL(10,2) NULL,
  PRIMARY KEY (`id`, `orders_id`, `products_id`),
  INDEX `fk_orders_has_products_products1_idx` (`products_id` ASC) VISIBLE,
  INDEX `fk_orders_has_products_orders1_idx` (`orders_id` ASC) VISIBLE,
  CONSTRAINT `fk_orders_has_products_orders1`
    FOREIGN KEY (`orders_id`)
    REFERENCES `blaz_app`.`orders` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_orders_has_products_products1`
    FOREIGN KEY (`products_id`)
    REFERENCES `blaz_app`.`products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `blaz_app`.`modifiers_has_orders_has_products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `blaz_app`.`modifiers_has_orders_has_products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `modifiers_id` INT NOT NULL,
  `orders_has_products_id` INT NOT NULL,
  `quantity` INT NULL,
  `price` DECIMAL(10,2) NULL,
  PRIMARY KEY (`id`, `modifiers_id`, `orders_has_products_id`),
  INDEX `fk_modifiers_has_orders_has_products_orders_has_products1_idx` (`orders_has_products_id` ASC) VISIBLE,
  INDEX `fk_modifiers_has_orders_has_products_modifiers1_idx` (`modifiers_id` ASC) VISIBLE,
  CONSTRAINT `fk_modifiers_has_orders_has_products_modifiers1`
    FOREIGN KEY (`modifiers_id`)
    REFERENCES `blaz_app`.`modifiers` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_modifiers_has_orders_has_products_orders_has_products1`
    FOREIGN KEY (`orders_has_products_id`)
    REFERENCES `blaz_app`.`orders_has_products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `blaz_app`.`sub_modifiers_has_modifiers_has_orders_has_products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `blaz_app`.`sub_modifiers_has_modifiers_has_orders_has_products` (
  `sub_modifiers_id` INT NOT NULL,
  `modifiers_has_orders_has_products_id` INT NOT NULL,
  PRIMARY KEY (`sub_modifiers_id`, `modifiers_has_orders_has_products_id`),
  INDEX `fk_sub_modifiers_has_modifiers_has_orders_has_products_modi_idx` (`modifiers_has_orders_has_products_id` ASC) VISIBLE,
  INDEX `fk_sub_modifiers_has_modifiers_has_orders_has_products_sub__idx` (`sub_modifiers_id` ASC) VISIBLE,
  CONSTRAINT `fk_sub_modifiers_has_modifiers_has_orders_has_products_sub_mo1`
    FOREIGN KEY (`sub_modifiers_id`)
    REFERENCES `blaz_app`.`sub_modifiers` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_sub_modifiers_has_modifiers_has_orders_has_products_modifi1`
    FOREIGN KEY (`modifiers_has_orders_has_products_id`)
    REFERENCES `blaz_app`.`modifiers_has_orders_has_products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
