<?php


App::uses('AppController', 'Controller');


class PagesController extends AppController {
	public $helpers = array('Gato');//importando

	public function gato(  ){

		
	}

	public function api_set_save_game() {
		//pr($_REQUEST); //pr imrpime arreglos
		$rojo = explode("-", $_REQUEST["rojo"]);
		$verde = explode("-", $_REQUEST["verde"]);

		$data=$_REQUEST;
		$data["rojo"]=json_encode($rojo);
		$data["verde"]=json_encode($verde);
		//pr($data);

		$this->loadModel("Gato");
		$this->Gato->save($data);


		die($this->Gato->id);

	}

	public function ajax_last_game_played($id=null) {
		if(!$id){
			throw new NotFoundException('Could not find that gato');
		}
		$this->loadModel("Gato");
		$gato=$this->Gato->find('first',array(
			'conditions'=> array('Gato.id'=>$id),
			));
		if(!$gato){
			throw new NotFoundException('Could not find that gato');
		}

		

		//die(pr($gato));
		$this->set('gato',$gato);
	}

	public function ajax_all_games() {
			
		$this->loadModel("Gato");
		$gatos=$this->Gato->find('all',array(
			'order'=> array('Gato.created DESC'),
			));

		//die(pr($gatos));
		$this->set('gatos',$gatos);
	}

	public function api_database_consult() {
		pr($_REQUEST);
		$rojo = explode("-", $_REQUEST["rojo"]);
		$verde = explode("-", $_REQUEST["verde"]);
		$data=$_REQUEST;
		//$data["rojo"]=json_encode($rojo)."%";
		$data["verde"]=json_encode($verde);

		pr($data);

		$this->loadModel("Gato");
		$gato=$this->Gato->find('first',array(
			'conditions'=> array('Gato.rojo LIKE'=>$data["rojo"]."%"),
			));
		pr($gato);

		die();
	}


}
