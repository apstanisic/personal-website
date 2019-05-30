<section class="contact container o-hidden" id="contact">

	<div class="row relative">
		<form id="contactForm" method="post" class="contact-form animated" action="https://formspree.io/apstanisic@gmail.com">
			<h2 class="subtitle w-100 row"><?= "$contact->header"; ?></h2>
			<div class="shrink form-group">
				<label for="contactName"><?= "$contact->name"; ?></label>
				<input type="text" class="input" id="contactName" name="name" autocomplete="on" required>
			</div>
			<div class="shrink form-group">
				<label for="contactEmail">Email</label>
				<input type="email" class="input" id="contactEmail" autocomplete="on" name="email"  required><!-- chrome boji autocomple polje u zuto  -->
			</div>
			<div class="form-group">
				<label for="contactMessage" ><?= "$contact->message"; ?></label>
				<textarea id="contactMessage" name="message" required></textarea>
			</div>
			<div class="form-group row"><!-- ie fix -->
				<button type="submit" id="contactSubmit" class="contact-submit button" disabled="true"><?= "$contact->button"; ?></button>
			</div>
		</form>
		<span id="contactFormSuccess" class="row hidden animated delay bounceInLeft contact-form-success"><?= "$contact->success"; ?></span>
	</div>

</section>
