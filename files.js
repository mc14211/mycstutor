const resourceList = document.getElementById('resourceList');

// Your manually listed files
const files = [
  { name: "example1.png", type: "image" },
  { name: "notes.pdf", type: "file" },
  { name: "code.zip", type: "file" }
];

files.forEach(file => {
  const item = document.createElement('div');
  item.className = 'resource-item';

  const fileUrl = `resources/${file.name}`;



  const link = document.createElement('a');
  link.href = fileUrl;
  link.target = '_blank';
  link.textContent = file.name;

  item.appendChild(link);
  resourceList.appendChild(item);
});
