<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>
		<?php echo $title_for_layout; ?>
	</title>
	<?php
		echo $this->Html->meta('icon');


		echo $this->fetch('meta');
		echo $this->fetch('css');
		echo $this->fetch('script');
	?>

	<?php echo $this->Html->css('bootstrap') ?>
	<?php echo $this->Html->css('jquery.jgrowl') ?>
	<?php echo $this->Html->css('style') ?>

	<?php echo $this->Html->script('jq') ?>
	<?php echo $this->Html->script('jquery.jgrowl') ?>
	<?php echo $this->Html->script('bootstrap') ?>
	<?php echo $this->Html->script('script') ?>


</head>
<body>
	<div id="container">
		<div id="header">
			<h1>Gato</h1>
		</div>
		<div id="content">

			<?php echo $this->Session->flash(); ?>

			<?php echo $this->fetch('content'); ?>
		</div>
		<div id="footer">

		</div>
	</div>
	<?php echo $this->element('sql_dump'); ?>
</body>
</html>
