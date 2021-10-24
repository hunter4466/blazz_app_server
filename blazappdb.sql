-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: blaz_app
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `business`
--

DROP TABLE IF EXISTS `business`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `business` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `phone` int DEFAULT NULL,
  `address` varchar(250) DEFAULT NULL,
  `description` varchar(300) DEFAULT NULL,
  `background_img` varchar(500) DEFAULT NULL,
  `logo_img` varchar(500) DEFAULT NULL,
  `users_id` int NOT NULL,
  `active` tinyint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_business_users1_idx` (`users_id`),
  CONSTRAINT `fk_business_users1` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `business`
--

LOCK TABLES `business` WRITE;
/*!40000 ALTER TABLE `business` DISABLE KEYS */;
INSERT INTO `business` VALUES (1,'Makit',94172125,'Av. La Molina 615, Int 202','Makis a domicilio',NULL,NULL,1,1);
/*!40000 ALTER TABLE `business` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `image` varchar(500) DEFAULT NULL,
  `business_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_category_business1_idx` (`business_id`),
  CONSTRAINT `fk_category_business1` FOREIGN KEY (`business_id`) REFERENCES `business` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Makis',NULL,1),(2,'Pizzas',NULL,1),(3,'Hamburguesas',NULL,1);
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `modifiers`
--

DROP TABLE IF EXISTS `modifiers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `modifiers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `description` varchar(300) DEFAULT NULL,
  `image` varchar(500) DEFAULT NULL,
  `business_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_modifiers_business1_idx` (`business_id`),
  CONSTRAINT `fk_modifiers_business1` FOREIGN KEY (`business_id`) REFERENCES `business` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `modifiers`
--

LOCK TABLES `modifiers` WRITE;
/*!40000 ALTER TABLE `modifiers` DISABLE KEYS */;
INSERT INTO `modifiers` VALUES (1,'makis','Sabores de Makis',NULL,1),(2,'bebidas','Sabores de bebidas',NULL,1),(3,'salsas','sabores de salsas',NULL,1),(4,'mediana','Pizza tamaño mediana',NULL,1),(5,'grande','Pizza tamaño grande',NULL,1),(6,'familiar','pizza tamaño familiar',NULL,1);
/*!40000 ALTER TABLE `modifiers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `modifiers_has_orders_has_products`
--

DROP TABLE IF EXISTS `modifiers_has_orders_has_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `modifiers_has_orders_has_products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `modifiers_id` int NOT NULL,
  `orders_has_products_id` int NOT NULL,
  `quantity` int DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`id`,`modifiers_id`,`orders_has_products_id`),
  KEY `fk_modifiers_has_orders_has_products_orders_has_products1_idx` (`orders_has_products_id`),
  KEY `fk_modifiers_has_orders_has_products_modifiers1_idx` (`modifiers_id`),
  CONSTRAINT `fk_modifiers_has_orders_has_products_modifiers1` FOREIGN KEY (`modifiers_id`) REFERENCES `modifiers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_modifiers_has_orders_has_products_orders_has_products1` FOREIGN KEY (`orders_has_products_id`) REFERENCES `orders_has_products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `modifiers_has_orders_has_products`
--

LOCK TABLES `modifiers_has_orders_has_products` WRITE;
/*!40000 ALTER TABLE `modifiers_has_orders_has_products` DISABLE KEYS */;
/*!40000 ALTER TABLE `modifiers_has_orders_has_products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `modifiers_has_products`
--

DROP TABLE IF EXISTS `modifiers_has_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `modifiers_has_products` (
  `modifiers_id` int NOT NULL,
  `products_id` int NOT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`modifiers_id`,`products_id`),
  KEY `fk_modifiers_has_products_products1_idx` (`products_id`),
  KEY `fk_modifiers_has_products_modifiers1_idx` (`modifiers_id`),
  CONSTRAINT `fk_modifiers_has_products_modifiers1` FOREIGN KEY (`modifiers_id`) REFERENCES `modifiers` (`id`),
  CONSTRAINT `fk_modifiers_has_products_products1` FOREIGN KEY (`products_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `modifiers_has_products`
--

LOCK TABLES `modifiers_has_products` WRITE;
/*!40000 ALTER TABLE `modifiers_has_products` DISABLE KEYS */;
/*!40000 ALTER TABLE `modifiers_has_products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `active` tinyint DEFAULT '1',
  `comment` varchar(225) DEFAULT NULL,
  `order_date` date DEFAULT NULL,
  `order_time` timestamp NULL DEFAULT NULL,
  `client_name` varchar(45) DEFAULT NULL,
  `customer_phone` int DEFAULT NULL,
  `customer_address` varchar(45) DEFAULT NULL,
  `deliver_state` tinyint DEFAULT NULL,
  `deliver_price` decimal(10,2) DEFAULT NULL,
  `order_total_price` decimal(10,2) DEFAULT NULL,
  `business_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_orders_business1_idx` (`business_id`),
  CONSTRAINT `fk_orders_business1` FOREIGN KEY (`business_id`) REFERENCES `business` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders_has_products`
--

DROP TABLE IF EXISTS `orders_has_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders_has_products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `orders_id` int NOT NULL,
  `products_id` int NOT NULL,
  `quantity` int DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`id`,`orders_id`,`products_id`),
  KEY `fk_orders_has_products_products1_idx` (`products_id`),
  KEY `fk_orders_has_products_orders1_idx` (`orders_id`),
  CONSTRAINT `fk_orders_has_products_orders1` FOREIGN KEY (`orders_id`) REFERENCES `orders` (`id`),
  CONSTRAINT `fk_orders_has_products_products1` FOREIGN KEY (`products_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders_has_products`
--

LOCK TABLES `orders_has_products` WRITE;
/*!40000 ALTER TABLE `orders_has_products` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders_has_products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `image` varchar(500) DEFAULT NULL,
  `description` varchar(300) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `business_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_products_business1_idx` (`business_id`),
  CONSTRAINT `fk_products_business1` FOREIGN KEY (`business_id`) REFERENCES `business` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Combo trío',NULL,'Descripcion de combo dúo',41.90,1),(2,'Combo dúo',NULL,'Descripción de combo dúo',31.90,1),(3,'hawaiana',NULL,'Descripción de hawaiana',0.00,1),(4,'pepperoni',NULL,'Descripción de pepperoni',0.00,1),(5,'parrillera standard',NULL,'Descripción de  parrillera',15.90,1),(6,'carretillera sandard',NULL,'Descripción de carretillera',13.90,1);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products_has_category`
--

DROP TABLE IF EXISTS `products_has_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products_has_category` (
  `products_id` int NOT NULL,
  `category_id` int NOT NULL,
  PRIMARY KEY (`products_id`,`category_id`),
  KEY `fk_products_has_category_category1_idx` (`category_id`),
  KEY `fk_products_has_category_products_idx` (`products_id`),
  CONSTRAINT `fk_products_has_category_category1` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`),
  CONSTRAINT `fk_products_has_category_products` FOREIGN KEY (`products_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products_has_category`
--

LOCK TABLES `products_has_category` WRITE;
/*!40000 ALTER TABLE `products_has_category` DISABLE KEYS */;
INSERT INTO `products_has_category` VALUES (1,1),(2,1),(3,2),(4,2),(5,3),(6,3);
/*!40000 ALTER TABLE `products_has_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sub_modifiers`
--

DROP TABLE IF EXISTS `sub_modifiers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sub_modifiers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `description` varchar(300) DEFAULT NULL,
  `image` varchar(500) DEFAULT NULL,
  `sub_modifierscol` varchar(45) DEFAULT NULL,
  `business_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_sub_modifiers_business1_idx` (`business_id`),
  CONSTRAINT `fk_sub_modifiers_business1` FOREIGN KEY (`business_id`) REFERENCES `business` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sub_modifiers`
--

LOCK TABLES `sub_modifiers` WRITE;
/*!40000 ALTER TABLE `sub_modifiers` DISABLE KEYS */;
/*!40000 ALTER TABLE `sub_modifiers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sub_modifiers_has_modifiers`
--

DROP TABLE IF EXISTS `sub_modifiers_has_modifiers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sub_modifiers_has_modifiers` (
  `sub_modifiers_id` int NOT NULL,
  `modifiers_id` int NOT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`sub_modifiers_id`,`modifiers_id`),
  KEY `fk_sub_modifiers_has_modifiers_modifiers1_idx` (`modifiers_id`),
  KEY `fk_sub_modifiers_has_modifiers_sub_modifiers1_idx` (`sub_modifiers_id`),
  CONSTRAINT `fk_sub_modifiers_has_modifiers_modifiers1` FOREIGN KEY (`modifiers_id`) REFERENCES `modifiers` (`id`),
  CONSTRAINT `fk_sub_modifiers_has_modifiers_sub_modifiers1` FOREIGN KEY (`sub_modifiers_id`) REFERENCES `sub_modifiers` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sub_modifiers_has_modifiers`
--

LOCK TABLES `sub_modifiers_has_modifiers` WRITE;
/*!40000 ALTER TABLE `sub_modifiers_has_modifiers` DISABLE KEYS */;
/*!40000 ALTER TABLE `sub_modifiers_has_modifiers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sub_modifiers_has_modifiers_has_orders_has_products`
--

DROP TABLE IF EXISTS `sub_modifiers_has_modifiers_has_orders_has_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sub_modifiers_has_modifiers_has_orders_has_products` (
  `sub_modifiers_id` int NOT NULL,
  `modifiers_has_orders_has_products_id` int NOT NULL,
  PRIMARY KEY (`sub_modifiers_id`,`modifiers_has_orders_has_products_id`),
  KEY `fk_sub_modifiers_has_modifiers_has_orders_has_products_modi_idx` (`modifiers_has_orders_has_products_id`),
  KEY `fk_sub_modifiers_has_modifiers_has_orders_has_products_sub__idx` (`sub_modifiers_id`),
  CONSTRAINT `fk_sub_modifiers_has_modifiers_has_orders_has_products_modifi1` FOREIGN KEY (`modifiers_has_orders_has_products_id`) REFERENCES `modifiers_has_orders_has_products` (`id`),
  CONSTRAINT `fk_sub_modifiers_has_modifiers_has_orders_has_products_sub_mo1` FOREIGN KEY (`sub_modifiers_id`) REFERENCES `sub_modifiers` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sub_modifiers_has_modifiers_has_orders_has_products`
--

LOCK TABLES `sub_modifiers_has_modifiers_has_orders_has_products` WRITE;
/*!40000 ALTER TABLE `sub_modifiers_has_modifiers_has_orders_has_products` DISABLE KEYS */;
/*!40000 ALTER TABLE `sub_modifiers_has_modifiers_has_orders_has_products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `user` varchar(45) DEFAULT NULL,
  `pass` varchar(45) DEFAULT NULL,
  `phone` int DEFAULT NULL,
  `date_of_birth` date DEFAULT NULL,
  `access_token` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Mario','Chois','mario.chois.navarro@gmail.com','hunter4466','jf7l2p93li',993962231,'1989-12-29','6789sdfg687dsfg7yh34nasubrvyc823719hcbhbisf');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-10-22 19:43:00
