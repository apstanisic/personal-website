<!DOCTYPE html>
<html lang="<?= $page->lang; ?>">
	<head>
		<?php include __DIR__ . '/head.php'; ?>
	</head>
	<body>
	    <?php include __DIR__ . '/problem.php'; ?>
	    <?php include __DIR__ . '/spinner.php'; ?>
		<div id="app" class="app d-block">
		    <?php
		    include __DIR__ . '/nav.php';
		    include __DIR__ . '/header.php';
		    include __DIR__ . '/about.php';
		    include __DIR__ . '/skills.php';
		    include __DIR__ . '/work.php';
		    include __DIR__ . '/contact.php';
		    include __DIR__ . '/social.php';
		    ?>
		</div>
		<?php include __DIR__ . '/scripts.php'; ?>
	</body>
</html>