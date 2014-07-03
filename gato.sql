-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 04-07-2014 a las 00:42:11
-- Versión del servidor: 5.6.17
-- Versión de PHP: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `gato`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `gatos`
--

CREATE TABLE IF NOT EXISTS `gatos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ganador` varchar(45) NOT NULL,
  `empieza` varchar(45) NOT NULL,
  `rojo` text NOT NULL,
  `verde` text NOT NULL,
  `created` datetime NOT NULL,
  `modified` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=20 ;

--
-- Volcado de datos para la tabla `gatos`
--

INSERT INTO `gatos` (`id`, `ganador`, `empieza`, `rojo`, `verde`, `created`, `modified`) VALUES
(3, 'rojo', 'rojo', '["1","2","3"]', '["5","7"]', '2014-07-03 23:23:19', '2014-07-03 23:23:19'),
(4, 'rojo', 'verde', '["5","3","7"]', '["1","9","8"]', '2014-07-03 23:23:53', '2014-07-03 23:23:53'),
(5, 'rojo', 'rojo', '["1","2","3"]', '["5","7"]', '2014-07-03 23:26:26', '2014-07-03 23:26:26'),
(6, 'rojo', 'rojo', '["7","5","3"]', '["8","9"]', '2014-07-03 23:26:36', '2014-07-03 23:26:36'),
(7, 'rojo', 'verde', '["8","7","9"]', '["6","5"]', '2014-07-04 00:29:11', '2014-07-04 00:29:11'),
(8, 'rojo', 'rojo', '["6","9","8","7"]', '["4","1","5"]', '2014-07-04 00:34:46', '2014-07-04 00:34:46'),
(9, 'rojo', 'rojo', '["5","9"]', '["7","4","1"]', '2014-07-04 00:34:57', '2014-07-04 00:34:57'),
(10, 'verde', 'verde', '["7","1"]', '["9","5","1"]', '2014-07-04 00:35:08', '2014-07-04 00:35:08'),
(11, 'verde', 'verde', '["7","6","2"]', '["5","4","3","5"]', '2014-07-04 00:35:18', '2014-07-04 00:35:18'),
(12, 'rojo', 'rojo', '["7","8","9"]', '["2","1"]', '2014-07-04 00:35:46', '2014-07-04 00:35:46'),
(13, 'verde', 'verde', '["5","8"]', '["3","2","1"]', '2014-07-04 00:35:53', '2014-07-04 00:35:53'),
(14, 'rojo', 'rojo', '["7","4","1"]', '["8","5"]', '2014-07-04 00:36:04', '2014-07-04 00:36:04'),
(15, 'rojo', 'verde', '["5"]', '["3","2","1"]', '2014-07-04 00:36:08', '2014-07-04 00:36:08'),
(16, 'rojo', 'rojo', '["7","9","3","6"]', '["5","2","1"]', '2014-07-04 00:36:22', '2014-07-04 00:36:22'),
(17, 'verde', 'rojo', '["7","9","8"]', '["6","5","2"]', '2014-07-04 00:36:27', '2014-07-04 00:36:27'),
(18, 'rojo', 'verde', '["5","7"]', '["4","3","2","1"]', '2014-07-04 00:36:34', '2014-07-04 00:36:34'),
(19, 'verde', 'verde', '["7","6","2","1"]', '["5","4","3","2","1"]', '2014-07-04 00:38:20', '2014-07-04 00:38:20');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
