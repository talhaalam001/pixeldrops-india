document.addEventListener("DOMContentLoaded", () => {
  const uploadForm = document.getElementById("uploadForm");

  uploadForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(uploadForm);
    fetch("/upload", {
      method: "POST",
      body: formData,
    })
    .then((response) => response.json())
    .then((data) => {
      alert("File uploaded successfully!");
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("File upload failed!");
    });
  });
});