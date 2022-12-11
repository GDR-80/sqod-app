-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 11, 2022 at 11:37 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.1.12

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
  `team_id` int(11) NOT NULL,
  `entry_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `addresses`
--

INSERT INTO `addresses` (`id`, `line1`, `line2`, `city`, `county`, `country`, `postcode`, `team_id`, `entry_date`) VALUES
(1, 'Hell Wath', '', 'Ripon', 'North Yorkshire', 'United Kingdom', 'HG4 1SE', 1, '2022-11-02 18:22:12'),
(2, 'Rhodes Lane', 'Clifford', 'Wetherby', 'North Yorkshire', 'United Kingdom', 'LS23 6LQ', 2, '2022-11-02 18:31:21'),
(3, 'LeedsRoad', 'Pannal', 'Harrogate', 'North Yorkshire', 'United Kingdom', 'HG2 6RH', 3, '2022-11-02 18:33:27');

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
  `team_id` int(11) NOT NULL,
  `approved` tinyint(1) NOT NULL COMMENT '0=not approved 1=approved',
  `entry_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `children`
--

INSERT INTO `children` (`id`, `name`, `age`, `age_group`, `user_id`, `team_id`, `approved`, `entry_date`) VALUES
(1, 'Freddy Jones', 12, 'U13', 3, 1, 1, '2022-11-02 18:18:35'),
(2, 'George Smith', 13, 'U13', 4, 2, 0, '2022-11-02 18:19:24'),
(3, 'Charlie Rodgers', 12, 'U13', 5, 3, 0, '2022-11-02 18:20:10'),
(4, 'Isaac', 13, 'U13', 39, 1, 1, '2022-12-06 20:22:57'),
(5, 'Isaac', 13, 'U13', 39, 2, 0, '2022-12-06 20:24:02'),
(6, 'eddie', 13, 'U13', 39, 2, 0, '2022-12-06 20:24:02');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fixtures`
--

INSERT INTO `fixtures` (`id`, `meet_time`, `kick_off_time`, `home_team_id`, `away_team_id`, `entry_date`) VALUES
(1, '2022-11-13 09:00:00', '2022-11-13 10:00:00', 1, 2, '2022-11-02 18:39:48'),
(2, '2022-11-20 12:00:00', '2022-11-20 13:00:00', 3, 1, '2022-11-02 18:41:29'),
(3, '2022-11-27 10:00:00', '2022-11-27 11:00:00', 2, 3, '2022-11-02 18:42:29'),
(16, '2023-03-30 10:00:00', '2023-03-30 11:00:00', 2, 1, '2022-12-11 07:55:20'),
(21, '2023-02-01 11:00:00', '2023-02-01 13:00:00', 3, 1, '2022-12-11 08:34:13');

-- --------------------------------------------------------

--
-- Table structure for table `logins`
--

CREATE TABLE `logins` (
  `id` int(11) NOT NULL,
  `token` varchar(128) NOT NULL,
  `entry_date` timestamp NOT NULL DEFAULT current_timestamp(),
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `logins`
--

INSERT INTO `logins` (`id`, `token`, `entry_date`, `user_id`) VALUES
(5, 'ea057e9f-eeb0-4541-809f-4b58b1c64223', '2022-12-06 15:29:57', 3),
(6, 'b891a5a5-d217-4459-b062-2ad1a6c40cf9', '2022-12-06 15:30:39', 3),
(7, '6f6f8b4a-0bd5-41dd-b666-6c1ff5e49fc6', '2022-12-06 15:47:22', 3),
(8, 'b94f7269-82c1-4d06-8b61-89651b8fa865', '2022-12-06 15:48:49', 3),
(17, '032f980c-66d5-442c-bd9d-ff022e31a9e7', '2022-12-06 16:25:31', 3),
(19, '85185659-409a-4c22-8e31-562a654dc920', '2022-12-06 16:42:58', 1),
(22, '197c034d-62e2-4c5b-856e-01cc2056b163', '2022-12-06 16:47:34', 1),
(34, 'ca450953-bb32-444d-8de4-8a0cdf734920', '2022-12-06 17:28:45', 1),
(35, '8306d6f9-06a3-461f-bf58-100a4696faee', '2022-12-06 17:30:50', 1),
(37, '21d1451a-d5f7-4cbb-9067-07d240fe6f38', '2022-12-06 17:34:47', 1),
(46, 'c4b600e6-8bb7-4d19-91a2-4a26cde47531', '2022-12-06 20:00:12', 3),
(52, 'eae967b7-91eb-405f-a606-90c6c19e304c', '2022-12-07 19:20:33', 1),
(53, '64ce0390-6924-4b64-a8b8-336b002645bb', '2022-12-07 19:27:41', 1),
(54, '94b59b40-e45f-47da-a907-e9e408c56f81', '2022-12-07 20:45:54', 1),
(58, 'e0e854e7-ed11-4ee0-8193-5dd14dc0cc3f', '2022-12-07 21:07:45', 39),
(62, 'e5609abf-e4c1-46b1-be1f-b2f3899360fd', '2022-12-08 15:32:46', 39),
(64, 'f1fceb15-cb66-4a28-b3bb-be0f62d99685', '2022-12-08 15:34:31', 1),
(67, '0c3f4d30-3d1b-4ec4-91dc-9476421a99b6', '2022-12-08 15:36:17', 40),
(68, '0422418e-711c-4795-a789-174412666c3c', '2022-12-08 15:38:21', 40),
(69, '60e0ed38-e4ff-4abc-9c1d-795daa72349d', '2022-12-08 15:44:00', 40),
(71, '825e1228-3905-4c1d-a057-a5e422cc566d', '2022-12-08 15:49:53', 1),
(73, '45dfeca9-7fc0-4509-bd94-0a1adaf8de2f', '2022-12-11 07:40:26', 1),
(74, 'a7cb27c7-6d2d-4714-9457-94eef2dbed00', '2022-12-11 07:54:40', 1);

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `teams`
--

INSERT INTO `teams` (`id`, `name`, `age_group`, `team_badge`, `address_id`, `user_id`, `entry_date`) VALUES
(1, 'Ripon City Panthers AFC', 'U13', '', 1, 1, '2022-11-02 18:34:54'),
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
  `password` varchar(128) NOT NULL,
  `user_type` tinyint(1) NOT NULL COMMENT '0 = manager 1 = parent',
  `entry_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `phone`, `password`, `user_type`, `entry_date`) VALUES
(1, 'Garon Ross', 'garon@garon.com', '07976387640', 'f8f53eed4f845194c6d1cc42e2b6993e0c76359612c0afa9879346fbaea805c9', 0, '2022-11-02 18:03:39'),
(2, 'David Myers', 'dave.m@gmail.com', '07452127856', 'f8f53eed4f845194c6d1cc42e2b6993e0c76359612c0afa9879346fbaea805c9', 0, '2022-11-02 18:05:09'),
(3, 'Sally Jones', 'sally@sllycom', '07487587656', 'f8f53eed4f845194c6d1cc42e2b6993e0c76359612c0afa9879346fbaea805c9', 1, '2022-11-02 18:06:25'),
(4, 'Robert Smith', 'robsmith@rob.com', '09756345666', 'f8f53eed4f845194c6d1cc42e2b6993e0c76359612c0afa9879346fbaea805c9', 1, '2022-11-02 18:07:43'),
(5, 'Jane Rodgers', 'janerodgers@janerodgers.com', '07756356666', 'f8f53eed4f845194c6d1cc42e2b6993e0c76359612c0afa9879346fbaea805c9', 1, '2022-11-02 18:08:44'),
(6, 'Karen Hunter', 'kazza@Hunters.com', '07865323433', 'f8f53eed4f845194c6d1cc42e2b6993e0c76359612c0afa9879346fbaea805c9', 0, '2022-11-02 18:10:07'),
(16, 'david brown', 'brown@b.com', '07976387640', 'f8f53eed4f845194c6d1cc42e2b6993e0c76359612c0afa9879346fbaea805c9', 1, '2022-12-06 16:15:10'),
(39, 'Debbie', 'd@d.com', '07634569043', 'f8f53eed4f845194c6d1cc42e2b6993e0c76359612c0afa9879346fbaea805c9', 1, '2022-12-06 20:01:07');

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
-- Indexes for table `logins`
--
ALTER TABLE `logins`
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
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `addresses`
--
ALTER TABLE `addresses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `children`
--
ALTER TABLE `children`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `fixtures`
--
ALTER TABLE `fixtures`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `logins`
--
ALTER TABLE `logins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=75;

--
-- AUTO_INCREMENT for table `teams`
--
ALTER TABLE `teams`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
