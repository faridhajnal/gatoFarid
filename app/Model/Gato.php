<?php
class Gato extends AppModel{
	public function afterFind($results, $primary = false){
		
		if(!$results){
			return $results;
		}

		if(isset($results[0])){
			foreach ($results as $key => $value) {
				$results[$key]['Gato']['rojo']=json_decode($results[$key]['Gato']['rojo']);
				$results[$key]['Gato']['verde']=json_decode($results[$key]['Gato']['verde']);
			}
		}

		else{
			$results['Gato']['rojo']=json_decode($gato['Gato']['rojo']);
			$results['Gato']['verde']=json_decode($gato['Gato']['verde']);

		}

		return $results;
		die(pr($results));

	}
}