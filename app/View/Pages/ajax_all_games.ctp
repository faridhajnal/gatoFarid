<?php foreach($gatos as $gato){ ?>

	<?php
		echo $this->Gato->getGato($gato['Gato'])
	?>

<?php }?>