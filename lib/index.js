import Product from './models/Product';
import Checkout from './services/Checkout';
import PricingRules from './services/PricingRule';

const productList = []
const ipd = new Product('ipd', 'Super iPad', 549.99);
const mbp = new Product('mbp', 'MacBook Pro', 1399.99);
const atv = new Product('atv', 'Apple TV	', 109.50);
const vga = new Product('vga', 'VGA adapter	', 30.00);

productList.push(ipd, mbp, atv, vga)

const pricingRules = new PricingRules()
const checkout = new Checkout(pricingRules)

// const input = 'atv, atv, atv, vga' // $249.00
// const input = 'atv, ipd, ipd, atv, ipd, ipd, ipd ' // $2718.95
const input = 'mbp, vga, ipd ' // $1949.98

const inputAsList = input.trim().split(/\s*,\s*/)

inputAsList.map((productSku) => {
 const product = productList.filter(product => product.sku === productSku)[0]
 checkout.scan(product)
})

const total  = checkout.getFinalPrice()
console.log('finalPrice', total)
