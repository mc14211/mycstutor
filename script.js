


// Load navbar
fetch("/navbar.html")
  .then(res => res.text())
  .then(data => {
    const placeholder = document.getElementById("navbar-placeholder");
    if (placeholder) {
      placeholder.innerHTML = data;
    }
  })
  .catch(err => console.error("Navbar load error:", err));

// File upload logic (only runs if elements exist)
const fileInput = document.getElementById('fileInput');
const fileList = document.getElementById('fileList');

if (fileInput && fileList) {
  fileInput.addEventListener('change', () => {
    fileList.innerHTML = ''; // Clear previous list
    Array.from(fileInput.files).forEach(file => {
      const listItem = document.createElement('li');
      const downloadLink = document.createElement('a');

      downloadLink.href = URL.createObjectURL(file);
      downloadLink.download = file.name;
      downloadLink.textContent = `Download ${file.name}`;
      downloadLink.style.textDecoration = 'none';
      downloadLink.style.color = '#2c3e50';

      listItem.appendChild(downloadLink);
      fileList.appendChild(listItem);
    });
  });



}
