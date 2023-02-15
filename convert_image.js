const fileInput = document.getElementById('file-input');

fileInput.addEventListener('change', async () => {
  const file = fileInput.files[0];
  try {
    const base64String = await convertImageToBase64(file);
    console.log(base64String);
  } catch (error) {
    console.error(error);
  }
});