<?php
App::uses('AppHelper', 'View/Helper');

class GatoHelper extends AppHelper {
    public function hasDuplicate($verde,$rojo) {
       if(count($verde)>count($rojo)){
       		foreach($verde as $b){
       			if(in_array($b, $rojo)){
       				return true;
       			}
       		}
       }
       else{
       	foreach($rojo as $a){
       			if(in_array($a, $verde)){
       				return true;
       			}
       		}
       }

       return false;
    }

    public function getGato($gato){ //será lo que regresó la base de datos

    	if($this->hasDuplicate($gato['rojo'],$gato['verde'])){	
    		return '<h2>error de duplicado </h2>';
    	}

    	$html = '<div class="row-fluid gato-small-main">';
    	$html .= '<div class="row-fluid">';

    	$html .= $this->something(0,$gato);

    	$html .= '</div>';
    	$html .= '<div class="row-fluid">';

    	$html .= $this->something(3,$gato);

    	$html .= '</div>';
    	$html .= '<div class="row-fluid">';

    	$html .= $this->something(6,$gato);

    	$html .= '</div>';

    	$html .= '<h2>Juego # : '.$gato['id'].'</h2>';

    	$html .= '<h3>Ganador : '.$gato['ganador'].'</h3>';

    	$html .= '<h3>Empezó : '.$gato['empieza'].'</h3>';

    	$html .= '</div>';

    	return $html;
    }

    public function something($y,$gato){
    	$html ='';
    	for ($x=0 + $y; $x<3+$y; $x++) {
    		if(in_array($x+1,$gato['rojo'])||in_array($x+1, $gato['verde'])){
    			if(in_array($x+1, $gato['rojo'])){
    				$html .= '<div class="col-md-4 rojo-small"></div>';
    			}
    			else{
    				$html .= '<div class="col-md-4 verde-small"></div>';
    			}
    		}
    		else{
    			$html .= '<div class="col-md-4"></div>';
    		}
    	}
    	return $html;
    }

}