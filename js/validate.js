function validate() {
    if (Boolean(document.querySelector("#message").value)) {
        let form = document.querySelector("form");
        form.submit();
        form.innerHTML = "<h1 style='text-align:center;'>Sending...</h1>";
    }ß
}