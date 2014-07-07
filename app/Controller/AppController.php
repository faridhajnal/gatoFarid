<?php


App::uses('Controller', 'Controller');


class AppController extends Controller {

	public function beforeFilter(){
		if(str_replace('ajax', ' ', $this->action)!=$this->action){

			$this->layout="ajax";
		}
	}

}
