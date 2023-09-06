-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Sep 06, 2023 at 04:46 AM
-- Server version: 10.5.20-MariaDB
-- PHP Version: 7.3.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `id20677174_banashi_project`
--

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(4, '2023_04_04_061817_add_notes_to_users_table', 2),
(5, '2023_04_14_030207_add_points_to_users_table', 3);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `password_resets`
--

INSERT INTO `password_resets` (`email`, `token`, `created_at`) VALUES
('elaine@student.umn.ac.id', '$2y$10$4Qy3tRVOuSTONLjboEz6/OJU5jYuPm67bkeBYeLWNue84YtGSbHQq', '2023-05-04 03:56:55');

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `notes1` varchar(5) DEFAULT NULL,
  `notes2` varchar(5) DEFAULT NULL,
  `notes3` varchar(5) DEFAULT NULL,
  `points_ch1` varchar(255) DEFAULT NULL,
  `points_ch2` varchar(255) DEFAULT NULL,
  `points_ch3` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `created_at`, `updated_at`, `notes1`, `notes2`, `notes3`, `points_ch1`, `points_ch2`, `points_ch3`) VALUES
(1, 'Admin', 'admin@admin.com', '$2y$10$x6WB1d2vw6k3JN6or0nYReoj167oFJEG.xi9O5G6EEN3E2wi5rc2y', '2023-03-30 20:31:30', '2023-06-26 01:58:12', '1', '1', '1', '700', '640', NULL),
(7, 'Pompom', 'jeonhyj97@gmail.com', '$2y$10$vrc61uvJzprctdjgR.CGVuwQWbofzPEyRoPsCAli7Nl3vLoNAgjAe', '2023-05-02 03:21:08', '2023-05-05 01:58:57', '1', '1', '1', '1000', '1000', '1000'),
(9, 'MauWelkinJoce', 'Mau@welkin.joce', '$2y$10$lYFffwPGUskiBCxIt3PR5OaNBFtYvS7Ve91j.Ixxcb7izWLMhCx9S', '2023-05-04 03:55:59', '2023-05-04 04:06:27', '1', NULL, NULL, '840', NULL, NULL),
(10, 'bukanelaine', 'elaine@student.umn.ac.id', '$2y$10$VJ46zeekrGzrYe2zT.bZ6u1W9f.0h3RTST89kGZ3xAeUahkBPGR9y', '2023-05-04 03:56:44', '2023-05-04 04:01:11', '1', NULL, NULL, NULL, NULL, NULL),
(11, 'Venus', 'hadisw011001@gmail.com', '$2y$10$xBrPh2PJAqkjFX/ICSDrXO.ORd8OEGMUvoXi35OIudegbOWDksMyS', '2023-05-04 04:07:21', '2023-05-04 04:07:21', NULL, NULL, NULL, NULL, NULL, NULL),
(12, 'Ferry', 'ferry@student.umn.ac.id', '$2y$10$j/NikX/bKJlieSUl18hdCOfraAfeDmO998LSPRw3AfK9Sqwch1v9C', '2023-05-04 04:31:36', '2023-05-04 04:33:23', '1', NULL, NULL, NULL, NULL, NULL),
(13, 'CheeseFrog', 'jovantobias12@gmail.com', '$2y$10$/yjU5gysBZu2DaHFBQQZKOCuOQ9ab5UsjqQvBsRNESj3/QmIhB5zy', '2023-05-04 04:32:19', '2023-05-04 04:34:15', '1', NULL, NULL, '680', NULL, NULL),
(14, 'Lathifa', 'lathifaitqon@gmail.com', '$2y$10$jbiRdSoH7g4hMT3AMKTnDu1MzcgiPRVT8ANO/r1.rN.gKp3nA4S12', '2023-05-04 04:49:07', '2023-05-04 11:28:21', '1', NULL, NULL, '820', NULL, NULL),
(15, 'cihyi', 'cihyi@gmail.com', '$2y$10$dL4EedIIq5cNDs0yKCd.pu82RPkvm2MRF.mgd6nsqKFvE6NHQzhG.', '2023-05-04 05:04:06', '2023-05-04 05:19:09', '1', '1', '1', NULL, NULL, '560'),
(16, 'Beelzebub', 'osamudazai349@gmail.com', '$2y$10$k5q2l5iZzARrrE9WQVCByumMsPHDqXscxSUK/v3kq5xEQK2WGb9Ja', '2023-05-04 05:27:12', '2023-05-04 05:29:49', '1', NULL, NULL, NULL, NULL, NULL),
(17, 'abc', 'a@b.c', '$2y$10$dye8yrhJ44jQ8bD2GJpFx.X8brDJjwH/akSpJogc0MyTZnH2pv8r.', '2023-05-04 05:38:28', '2023-05-04 05:38:28', NULL, NULL, NULL, NULL, NULL, NULL),
(18, 'MyraRe', 'mraihan.ramadhana@gmail.com', '$2y$10$pOJZIDiGhiwcoHhSH1H5q.sF92tSyKV4hXvsBev3hjGbkP3BU4Jmy', '2023-05-04 05:51:11', '2023-05-04 05:57:33', '1', NULL, NULL, '920', NULL, NULL),
(19, 'Yi', 'tes@tes.com', '$2y$10$XLQH.ryWuH3upEkJjG1FkeNnYJSs4roVRy6FXHeAIjkGKmBlX4lYS', '2023-05-04 07:10:01', '2023-05-04 07:16:36', '1', NULL, NULL, '940', NULL, NULL),
(20, 'bulbull', 'halo@saya.com', '$2y$10$rU8zdbLVLBP4a1zu6ykQcOrhW9QO3BWVdtVXhrju0Y.kj/2JWIJZe', '2023-05-04 07:45:55', '2023-05-04 07:50:30', '1', NULL, NULL, '940', NULL, NULL),
(21, 'fxdros', 'mail@gmail.com', '$2y$10$6nVMmb/oqMWU3IEIPwAtQep0ncekmCNroQwVDb.HoVe2XNLU.fktu', '2023-05-04 07:57:29', '2023-05-04 07:58:46', '1', NULL, NULL, NULL, NULL, NULL),
(22, 'Glo', 'gloriam3424@gmail.com', '$2y$10$iN6i6i3Cdzq9ihuN5P7JW.QBwssRPEIZyxh780uOmD/hQgF4ubFEW', '2023-05-04 08:31:48', '2023-05-04 08:31:48', NULL, NULL, NULL, NULL, NULL, NULL),
(23, 'Serena', 'serenagloria62@gmail.com', '$2y$10$0nEiopf2/D408Gk1gllOJOlspaU8XTzAcVs/9AxnsF7lhtsUuBxGu', '2023-05-04 10:50:18', '2023-05-04 11:54:39', '1', NULL, NULL, '880', NULL, NULL),
(24, 'avei', 'cloudred87@gmail.com', '$2y$10$gOyluxXS3AWlHSeOWhCc2u3xaRtq/O0akf8bTzf9sUlFE0YFcXryq', '2023-05-04 12:30:49', '2023-05-04 12:30:49', NULL, NULL, NULL, NULL, NULL, NULL),
(25, 'velbyrne', 'zeonplamo@gmail.com', '$2y$10$7kt4QNLT0Ce6dvZV5ff2Bubnnfseg6zSSpaLRM.8T.PQcAW1/ZFQW', '2023-05-05 01:32:18', '2023-05-05 01:32:18', NULL, NULL, NULL, NULL, NULL, NULL),
(26, 'SaltYHUnt?R', 'brucewong683@gmail.com', '$2y$10$5ZOJ/0GMC1do06qreWU/hunp4M5sFDFlIPpE2aVsbs/aWMHyvUYpi', '2023-05-05 01:58:33', '2023-05-05 02:16:18', '1', NULL, '1', '860', NULL, NULL),
(27, 'Dina', 'rahmadina.ika@student.umn.ac.id', '$2y$10$KBwiogTzDMajOE2iBFOHj.dWPFAvZjegupJ0Q/kCucUNrSZtAs55.', '2023-05-05 02:48:40', '2023-05-05 02:55:06', '1', NULL, NULL, '780', NULL, NULL),
(28, 'Gita', 'sagitasasmita@gmail.com', '$2y$10$HRNzbvfiwSbjDaLJhggGZ.DR0/TakNk8ozQyZbKnIESkmdllopr/u', '2023-05-06 07:29:19', '2023-05-06 07:37:36', '1', NULL, NULL, '940', NULL, NULL),
(29, 'AlbinVowen', 'alvinbowen1711@student.ub.ac.id', '$2y$10$McKt4NJrlqTB1auyThi.fuRsPvK1Dk.LyTCx2Hkr88I.UhQmhuJMm', '2023-05-06 07:30:18', '2023-05-06 07:35:37', '1', NULL, NULL, NULL, NULL, NULL),
(30, 'dev', 'devina@gmail.com', '$2y$10$yyea14sMfajB2Ng4Ypk8buMal/I1oU3MTGQlmCdDR925iDjvJBMia', '2023-05-06 13:22:37', '2023-05-06 13:24:32', '1', NULL, NULL, NULL, NULL, NULL),
(31, 'carlos', 'carlos.maximilliano@student.umn.ac.id', '$2y$10$oVWky3P9u3oHN9T53xiHyOjDQ8l1UHS.ddLEEu56c4aSY/GHpboTq', '2023-05-06 16:46:35', '2023-05-06 16:48:23', '1', NULL, NULL, '540', NULL, NULL),
(32, 'Clarabel', 'salsabila.elyandra@student.umn.ac.id', '$2y$10$vbvDV.UMFBq0/gfgJdDG..6ZHt6Aja5PFZzSyz8beKTS8i4l/2Scm', '2023-05-08 11:21:48', '2023-05-08 11:35:35', '1', NULL, NULL, '860', NULL, NULL),
(33, 'MixsTan', 'mixstan@email.com', '$2y$10$V8YV1R3MCqz13SyjI4CtZ.TgBBd8LsRWC.DjjblR18yrYkl78E32u', '2023-05-09 03:01:15', '2023-05-09 03:03:06', '1', NULL, NULL, NULL, NULL, NULL),
(34, 'Banashi', 'banashi@gmail.com', '$2y$10$skL5XcDPkF9AXtP0tu48dOhysVz3ryNCiFCqsQQ3dE8Stz91qKwK.', '2023-05-13 04:23:39', '2023-05-13 04:24:05', '1', NULL, NULL, NULL, NULL, NULL),
(35, 'Deemo', 'deemo@deemo.com', '$2y$10$aLCBYZ9bmCMbr7RU2foPV.sU2UQbUs/sNHSngbezmHNH1Ddbg9YuK', '2023-06-24 14:16:59', '2023-06-24 14:16:59', NULL, NULL, NULL, NULL, NULL, NULL),
(36, 'Jocelyn', 'joce.widjaja@gmail.com', '$2y$10$FHlCvF4dK7U9qu7Bp29VOeaR/ARa284zDenvkxC7g6rSA3nQ.joWi', '2023-06-26 03:25:04', '2023-06-26 03:30:33', '1', NULL, NULL, '560', NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_username_unique` (`username`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
