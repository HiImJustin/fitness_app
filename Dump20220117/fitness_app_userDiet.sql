-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: fitness_app
-- ------------------------------------------------------
-- Server version	8.0.27

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
-- Table structure for table `userDiet`
--

DROP TABLE IF EXISTS `userDiet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `userDiet` (
  `userDietID` int NOT NULL AUTO_INCREMENT,
  `foodID` int DEFAULT NULL,
  `customMealID` int DEFAULT NULL,
  `userID` int DEFAULT NULL,
  `calories` int DEFAULT NULL,
  `protien` int DEFAULT NULL,
  `carbs` int DEFAULT NULL,
  `fat` int DEFAULT NULL,
  `dateAdded` datetime DEFAULT NULL,
  PRIMARY KEY (`userDietID`),
  KEY `foodID` (`foodID`),
  KEY `customMealID` (`customMealID`),
  KEY `userID` (`userID`),
  CONSTRAINT `userDiet_ibfk_1` FOREIGN KEY (`foodID`) REFERENCES `food` (`foodID`),
  CONSTRAINT `userDiet_ibfk_2` FOREIGN KEY (`customMealID`) REFERENCES `customMeals` (`customMealID`),
  CONSTRAINT `userDiet_ibfk_3` FOREIGN KEY (`userID`) REFERENCES `users` (`userID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userDiet`
--

LOCK TABLES `userDiet` WRITE;
/*!40000 ALTER TABLE `userDiet` DISABLE KEYS */;
INSERT INTO `userDiet` VALUES (1,NULL,1,NULL,100,20,10,10,'2022-01-14 00:42:50'),(2,NULL,1,NULL,100,20,10,10,'2022-01-14 00:44:23');
/*!40000 ALTER TABLE `userDiet` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-17 12:19:47
