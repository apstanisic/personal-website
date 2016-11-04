<section class="contact" id="contact">


	<form method="post" class="contact-form">
		<h3>Posaljite poruku</h3>
		<div>
			<label for="contact-ime">Ime</label>
			<input type="text" id="contact-ime" name="ime" placeholder="Nikola" autocomplete="on" required>
		</div>
		<div>
			<label for="contact-email">E-mail</label>
			<input type="email" id="contact-email"  name="mejl" placeholder="nikola@example.com" autocomplete="on" required>
		</div>
		<div>
			<label for="contact-sadrzaj" >Sadrzaj</label>
			<textarea id="contact-sadrzaj" placeholder="Sadrzaj poruke..." required></textarea>
		</div>
		<div>
			<button type="submit" name="contact-submit" >Posalji</button>
		</div>

	</form>
	
</section>