const modal = document.getElementById("modal");
const modalBody = document.getElementById("modal-body");
const modalCloseBtn = document.getElementById("modal-close-btn");
modalCloseBtn.addEventListener("click", (e) => 
{
	e.preventDefault();
	modal.close();
});
const modalOpen = async (msg = null, type = null) =>
{
	if (msg) modalBody.innerHTML = msg;
	if (type) modal.classList.add(type);	
	modal.showModal();
}
const modalClose = async () =>
{
	modal.close();
}
modal.addEventListener("close", (e) => 
{
	[
		"text--primary",
		"text--info",
		"text--secondary",
		"text--dark",
		"text--danger",
		"text--warning",
		"text--success",
		"splash"
	].forEach((e) => modal.classList.remove(e));
});
modalCloseBtn.onclick = modalClose;
// window.onload = modalOpen("Opened without navigation options", "text--danger");