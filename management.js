let daftarProduct = [];

function tambahProduct() {
  const nama = document.getElementById('nama-product').value.trim();
  const harga = parseFloat(document.getElementById('harga-product').value);

  if (nama === '' || isNaN(harga) || harga <= 0) {
    alert('Isi nama product dan harga dengan benar');
    return;
  }

  daftarProduct.push({ nama, harga });
  tampilkanProduct();
  kosongkanInput();
}

function tampilkanProduct() {
  const isiProduct = document.getElementById('isi-product');
  isiProduct.innerHTML = '';

  let total = 0;
  daftarProduct.forEach((product, index) => {
    total += product.harga;

    const baris = `
            <tr>
                <td>${index + 1}</td>
                <td>${product.nama}</td>
                <td>${product.harga.toLocaleString()}</td>
                <td><button class="hapus-product" onclick="hapusProduct(${index})">Hapus</button></td>
            </tr>
        `;

    isiProduct.innerHTML += baris;
  });
  document.getElementById('total-harga').textContent = 'Total Harga: Rp ' + total.toLocaleString();
}
function kosongkanInput() {
  document.getElementById('nama-product').value = '';
  document.getElementById('harga-product').value = '';
}

function hapusProduct(index) {
  daftarProduct.splice(index, 1);
  tampilkanProduct();
}
