let htmlContent='';

htmlContent +=`input your html in here`;

/* To showing your html in sweetalert: */
Swal.fire({
    icon: false,
    title: false,
    html: htmlContent,
    draggable:true,
    confirmButtonText: 'Tutup',
    customClass: {
        popup: 'custom-popup'
    }
  });
  const style = document.createElement('style');
  style.innerHTML = `
    .custom-popup {
        width: 80%;  /* Atur lebar */
        max-width: 1000px; /* Batasi lebar maksimal */
        height: auto;  /* Atur tinggi */
        max-height: 80% /* Batasi tinggi maksimal */
        overflow: auto; /* Untuk scroll jika konten melebihi ukuran */
    }
  `;
  document.head.appendChild(style);

/* Custom your width and height */
