-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 02, 2022 at 08:57 PM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sqod`
--

-- --------------------------------------------------------

--
-- Table structure for table `addresses`
--

CREATE TABLE `addresses` (
  `id` int(11) NOT NULL,
  `line1` varchar(64) NOT NULL,
  `line2` varchar(64) NOT NULL,
  `city` varchar(64) NOT NULL,
  `county` varchar(64) NOT NULL,
  `country` varchar(64) NOT NULL,
  `postcode` varchar(12) NOT NULL,
  `entry_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `addresses`
--

INSERT INTO `addresses` (`id`, `line1`, `line2`, `city`, `county`, `country`, `postcode`, `entry_date`) VALUES
(1, 'Hell Wath', 'Hell Wath Lane', 'Ripon', 'North Yorkshire', 'United Kingdom', 'HG4 1SE', '2022-11-02 18:22:12'),
(2, 'Rhodes Lane', 'Clifford', 'Wetherby', 'North Yorkshire', 'United Kingdom', 'LS23 6LQ', '2022-11-02 18:31:21'),
(3, 'LeedsRoad', 'Pannal', 'Harrogate', 'North Yorkshire', 'United Kingdom', 'HG2 6RH', '2022-11-02 18:33:27');

-- --------------------------------------------------------

--
-- Table structure for table `children`
--

CREATE TABLE `children` (
  `id` int(11) NOT NULL,
  `name` varchar(64) NOT NULL,
  `age` int(3) NOT NULL,
  `age_group` varchar(3) NOT NULL,
  `user_id` int(11) NOT NULL,
  `approved` tinyint(1) NOT NULL COMMENT '0=not approved 1=approved',
  `entry_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `children`
--

INSERT INTO `children` (`id`, `name`, `age`, `age_group`, `user_id`, `approved`, `entry_date`) VALUES
(1, 'Freddy Jones', 12, 'U13', 3, 0, '2022-11-02 18:18:35'),
(2, 'George Smith', 13, 'U13', 4, 0, '2022-11-02 18:19:24'),
(3, 'Charlie Rodgers', 12, 'U13', 5, 0, '2022-11-02 18:20:10');

-- --------------------------------------------------------

--
-- Table structure for table `fixtures`
--

CREATE TABLE `fixtures` (
  `id` int(11) NOT NULL,
  `meet_time` timestamp NULL DEFAULT NULL,
  `kick_off_time` timestamp NULL DEFAULT NULL,
  `home_team_id` int(11) NOT NULL,
  `away_team_id` int(11) NOT NULL,
  `entry_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fixtures`
--

INSERT INTO `fixtures` (`id`, `meet_time`, `kick_off_time`, `home_team_id`, `away_team_id`, `entry_date`) VALUES
(1, '2022-11-13 09:00:00', '2022-11-13 10:00:00', 1, 2, '2022-11-02 18:39:48'),
(2, '2022-11-20 12:00:00', '2022-11-20 13:00:00', 3, 1, '2022-11-02 18:41:29'),
(3, '2022-11-27 10:00:00', '2022-11-27 11:00:00', 2, 3, '2022-11-02 18:42:29');

-- --------------------------------------------------------

--
-- Table structure for table `teams`
--

CREATE TABLE `teams` (
  `id` int(11) NOT NULL,
  `name` varchar(64) NOT NULL,
  `age_group` varchar(3) NOT NULL,
  `team_badge` varchar(128) NOT NULL,
  `address_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `entry_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `teams`
--

INSERT INTO `teams` (`id`, `name`, `age_group`, `team_badge`, `address_id`, `user_id`, `entry_date`) VALUES
(1, 'Ripon City Panthers', 'U13', '', 1, 1, '2022-11-02 18:34:54'),
(2, 'Clifford Juniors', 'U13', '', 2, 2, '2022-11-02 18:35:45'),
(3, 'Pannal', 'U13', '', 3, 6, '2022-11-02 18:36:23');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(64) NOT NULL,
  `email` varchar(331) NOT NULL,
  `phone` varchar(24) NOT NULL,
  `password` varchar(64) NOT NULL,
  `user_type` tinyint(1) NOT NULL COMMENT '0 = manager 1 = parent',
  `entry_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `phone`, `password`, `user_type`, `entry_date`) VALUES
(1, 'Garon Ross', 'garon@garon.com', '07976387640', 'password123', 0, '2022-11-02 18:03:39'),
(2, 'David Myers', 'dave.m@gmail.com', '07452127856', 'password123', 0, '2022-11-02 18:05:09'),
(3, 'Sally Jones', 'sally@sllycom', '07487587656', 'password123', 1, '2022-11-02 18:06:25'),
(4, 'Robert Smith', 'robsmith@rob.com', '09756345666', 'password123', 1, '2022-11-02 18:07:43'),
(5, 'Jane Rodgers', 'janerodgers@janerodgers.com', '07756356666', 'password123', 1, '2022-11-02 18:08:44'),
(6, 'Karen Hunter', 'kazza@Hunters.com', '07865323433', 'password123', 0, '2022-11-02 18:10:07');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `addresses`
--
ALTER TABLE `addresses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `children`
--
ALTER TABLE `children`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `fixtures`
--
ALTER TABLE `fixtures`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `teams`
--
ALTER TABLE `teams`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `addresses`
--
ALTER TABLE `addresses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `children`
--
ALTER TABLE `children`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `fixtures`
--
ALTER TABLE `fixtures`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `teams`
--
ALTER TABLE `teams`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
