let receipt = {
  name: "Mayara",
  cpf: "123.456.789-00",
  products: {
    0: ["Amendoin Japones", 5],
    1: ["Jujuba", 8.4],
    2: ["Chá", 4.12],
    3: ["Vitamina", 8.97]
  },
  taxes: 10,
};

generateReceipt(receipt);

function generateReceipt(receipt) {
  console.log(`Comprador: ${receipt.name}`);
  console.log(`CPF: ${receipt.cpf}`);
  console.log(`Qtde de Produtos: ${qtdeProdutos()}`);

  console.log("-----------");

  for (let i in receipt.products) {
    let [productName, productPrice] = receipt.products[i];
    console.log(`- ${productName}: R$ ${productPrice.toFixed(2)}`);
  }

  console.log("-----------");
  console.log(`Taxas: ${receipt.taxes}%`);

  console.log("-----------");
  console.log(`Sub-total: R$ ${subTotalReceipt()}`);

  console.log("-----------");
  console.log(`TOTAL R$ ${totalReceipt()}`);
}

function qtdeProdutos(){
  let quantidade = 0

  for (let i in receipt.products){
    quantidade += 1;
  }

  return quantidade;
}

function subTotalReceipt() {
  let subTotal = 0;

  for (let i in receipt.products) {
    let productPrice = receipt.products[i][1];
    subTotal += productPrice;
  }
  
  return subTotal.toFixed(2);
}

function totalReceipt() {
  let subTotal = subTotalReceipt();
  let total = parseFloat(subTotal) + parseFloat(subTotal) * (receipt.taxes/100);
  
  return total.toFixed(2);
}

