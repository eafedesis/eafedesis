const http = require("http");
const rupiah = require("rupiah-format");
const host = "127.0.0.1";
const port = 3002;

const server = http.createServer(function (request, response) {
  const nama = "EAFEDESIS";
  let uang = 500000;
  let jajan = 150000;
  let sisa = uang - jajan;

  uang = rupiah.convert(uang);
  jajan = rupiah.convert(jajan);
  sisa = rupiah.convert(sisa);
  // console.log();('sisa rupiah',sisaRupiah);

  const hasil = `
  <head>
    <title>${nama}</title>
  </head>
  <body>
  <h1 style='background: black; color: white; padding: 20px; text-align: center'> HARGA RUPIAH</h1>
  <p> halo nama saya ${nama}.saya jajan sebanyak ${jajan},
  uang saya tadinya ${uang} sekarang menjadi ${sisa}. hahahaha </p>
</body>`;

  response.statusCode = 203;
  response.end(hasil);
});

server.listen(port, host, "", function () {
  console.log(`server berhasil di ${host}:${port}`);
});
