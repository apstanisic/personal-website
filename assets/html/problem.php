<noscript>
	<!-- redirect if user doesn't have JavaScript enabled -->
	<!-- <meta http-equiv="refresh" content="7; url=basic.html" /> -->
	<div class="browser-problem danger">
		<p>
			<?= $problem->noscript; ?>
		</p>
	</div>
</noscript>

<!--[if lt IE 10]>
<div class="danger browser-problem">
	<p>
		<?= $problem->oldIE; ?>
	</p>
</div>
<![endif]-->