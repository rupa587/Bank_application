-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 20, 2021 at 07:13 AM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `loanapplication`
--

-- --------------------------------------------------------

--
-- Table structure for table `customerdata`
--

CREATE TABLE `customerdata` (
  `ID` int(255) NOT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `dob` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `email` varchar(500) DEFAULT NULL,
  `maritialstatus` varchar(20) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `state` varchar(30) DEFAULT NULL,
  `pincode` varchar(10) DEFAULT NULL,
  `country` varchar(30) DEFAULT NULL,
  `dependentstatus` varchar(30) DEFAULT NULL,
  `noofdependents` varchar(10) DEFAULT NULL,
  `coborrowerstatus` varchar(10) DEFAULT NULL,
  `comembername` varchar(50) DEFAULT NULL,
  `comemberage` varchar(50) DEFAULT NULL,
  `comemberincome` varchar(50) DEFAULT NULL,
  `loantype` varchar(10) DEFAULT NULL,
  `stateofhomeloan` varchar(25) DEFAULT NULL,
  `cityofhomeloan` varchar(25) DEFAULT NULL,
  `brandcarloan` varchar(20) DEFAULT NULL,
  `modelcarloan` varchar(20) DEFAULT NULL,
  `purchaseprice` varchar(10) DEFAULT NULL,
  `downpayment` varchar(10) DEFAULT NULL,
  `desiredamount` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customerdata`
--

INSERT INTO `customerdata` (`ID`, `firstname`, `lastname`, `dob`, `gender`, `phone`, `email`, `maritialstatus`, `address`, `state`, `pincode`, `country`, `dependentstatus`, `noofdependents`, `coborrowerstatus`, `comembername`, `comemberage`, `comemberincome`, `loantype`, `stateofhomeloan`, `cityofhomeloan`, `brandcarloan`, `modelcarloan`, `purchaseprice`, `downpayment`, `desiredamount`) VALUES
(13, 'Arunachal Pradesh', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(14, 'haran050403@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(15, '$firstname', '$lastname', '$dob', '$gender', '$phone', '$email', '$maritialstatus', '$address', '$state', '$pincode', '$country', '$dependentstatus', '$noofdepen', '$coborrowe', '$comembername', '$comemberage', '$comemberincome', '$loantype', '$stateofhomeloan', '$cityofhomeloan', '$brandcarloan', '$modelcarloan', '$purchasep', '$downpayme', '$desiredam'),
(16, 'hh', 'haran', '2021-07-20', 'female', '9535660302', 'haran050403@gmail.com', 'UnMarried', '12346', 'Arunachal Pradesh', '560016', 'AUT', 'true', '2', 'true', 'asas', '23', '5000000', 'home', 'Andhra Pradesh', 'delhi', 'Andhra Pradesh', 'delhi', '20000', '7.5', '200000');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customerdata`
--
ALTER TABLE `customerdata`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customerdata`
--
ALTER TABLE `customerdata`
  MODIFY `ID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
