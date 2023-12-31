-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 27, 2023 at 08:50 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tezeract`
--

-- --------------------------------------------------------

--
-- Table structure for table `employees`
--

CREATE TABLE `employees` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `position` varchar(255) NOT NULL,
  `salary` int(11) NOT NULL,
  `joiningDate` datetime NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `employees`
--

INSERT INTO `employees` (`id`, `name`, `position`, `salary`, `joiningDate`, `createdAt`, `updatedAt`) VALUES
(1, 'John', 'Data Scientist', 100000, '2022-01-15 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'Jane', 'Project Manager', 110000, '2021-05-20 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 'Bob', 'Frontend Developer', 95000, '2020-03-10 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 'Johnson', 'Backend Developer', 105000, '2020-12-05 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 'Alice', 'Frontend Developer', 85000, '2019-08-22 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, 'Williams', 'Data Scientist', 120000, '2018-06-15 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(7, 'Charlie', 'Project Manager', 90000, '2021-02-10 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(8, 'Brown', 'Backend Developer', 95000, '2022-09-30 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(9, 'Eva', 'Frontend Developer', 95000, '2019-12-15 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(10, 'Martinez', 'Data Scientist', 88000, '2020-08-05 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `employees`
--
ALTER TABLE `employees`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
