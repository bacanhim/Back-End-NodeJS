const fs = require("fs");
const zlib = require("zlib");
// var str= " ";
// for (var i = 0; i < 999999; i++) {
//     str+="O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro. Este texto não só sobreviveu 5 séculos, mas também o salto para a tipografia electrónica, mantendo-se essencialmente inalterada. Foi popularizada nos anos 60 com a disponibilização das folhas de Letraset, que continham passagens com Lorem Ipsum, e mais recentemente com os programas de publicação como o Aldus PageMaker que incluem versões do Lorem Ipsum.";
// }

// var a = fs.writeFileSync("./lorem.txt",str); 
// console.log("a");

var readable = fs.createReadStream("lorem.txt");
var writeable = fs.createWriteStream("lorem_copy.txt");
readable.on('data',function(chunck){
    writeable.on(chunck);
});
readable.on('end',function(chunck){
    console.log("Completed stream");
});

readable.pipe(writeable);

var gzip = zlib.createGzip();
var compressed = fs.createWriteStream('lorem_copy.gz');

readable.pipe(gzip).pipe(compressed);
