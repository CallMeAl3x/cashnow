document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("upload-input");
  const preview = document.getElementById("upload-preview");
  if (!input || !preview) return;

  input.addEventListener("change", function () {
    const file = input.files[0];
    preview.innerHTML = "";
    if (file && file.type.startsWith("image/")) {
      const img = document.createElement("img");
      img.style.maxWidth = "300px";
      img.style.maxHeight = "300px";
      img.style.marginTop = "10px";
      img.src = URL.createObjectURL(file);
      preview.appendChild(img);
    } else if (file) {
      preview.textContent = "Selected file: " + file.name;
    }
  });
});