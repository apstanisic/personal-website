<?php

class File {
	public static function path($path)
	{
		$stringPath = __DIR__ . '/' . $path;
		return $stringPath;
	}

	public static function get($path, $json_decode = false)
	{
		$file = file_get_contents(static::path($path));

		if ($json_decode) {
			$file = json_decode($file);
		}

		return $file;
	}

	public static function put($path, $data)
	{
		$path = static::path($path);
		file_put_contents($path, $data);
	}
}


function main(){

	echo "Started generating static pages...\n";

	$config = File::get('generator.config.json', true);
	$_langFiles = glob('lang/*.json');


	foreach ($_langFiles as $_langFile) {

		ob_get_clean();
		ob_start();
		// It gets an object, i need to convert it to array
		$_data = (array) File::get($_langFile, true);

		extract($_data);

		require File::path($config->entry);

		$html = ob_get_clean();

		if ($page->lang === $config->default->short) {
			$_oldFilePath = File::path($config->output . $page->lang . '.html');
			@unlink($_oldFilePath);

			File::put($config->output . 'index.html', $html);
		} else {
			File::put($config->output . $page->lang . '.html', $html);
		}

		echo "Successfully generated '$page->lang' html page.\n";
	}

	$alert = $config->selectedAlert;
	echo $config->alerts->$alert;
}

main();


// ====================================================================
//    ______                                       __              __
//   / ____/  ___    ____   ___    _____  ____ _  / /_  ___   ____/ /
//  / / __   / _ \  / __ \ / _ \  / ___/ / __ `/ / __/ / _ \ / __  /
// / /_/ /  /  __/ / / / //  __/ / /    / /_/ / / /_  /  __// /_/ /
// \____/   \___/ /_/ /_/ \___/ /_/     \__,_/  \__/  \___/ \__,_/

// ====================================================================
