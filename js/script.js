document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const formMessages = document.getElementById("form-messages");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        try {
            const response = await fetch("contact.php", {
                method: "POST",
                body: formData,
            });
            const result = await response.text();
            formMessages.textContent = result;
            formMessages.style.color = "green";
        } catch (error) {
            formMessages.textContent = "An error occurred. Please try again.";
            formMessages.style.color = "red";
        }
    });
});