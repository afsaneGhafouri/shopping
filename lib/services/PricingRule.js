import Product from "../models/Product"
import Item from "../models/Item"

export default class PricingRule {

 appleTvRules(appleTvItems) {
  const itemsCount = appleTvItems.length
  const division = Math.floor(itemsCount / 3)
  for (let i = 0; i < division; i++) {
   appleTvItems[i].finalPrice = 0.0
  }
  return appleTvItems
 }

 superiPadRules(superiPadItems) {
  const itemsCount = superiPadItems.length
  if (itemsCount > 4) {
   for (let i = 0; i < itemsCount; i++) {
    superiPadItems[i].finalPrice = 499.99;
   }
   return superiPadItems
  } else {
   return superiPadItems
  }
 }

 macBookProRules(macBookProItems, vgaIAdaptortems) {
  const vga = new Product('vga', 'VGA adapter	', 30.00);
  const vgaList = [];
  let result = [...macBookProItems]
  const addedVgaItems = macBookProItems.length - vgaIAdaptortems.length
  for (let i = 0; i < addedVgaItems; i++) {
   const item = new Item(vga);
   item.finalPrice = 0.0;
   vgaList.push(item)
  }
  for (let i = 0; i < vgaIAdaptortems.length; i++) {
   const item = new Item(vga);
   item.finalPrice = 0.0;
   vgaList.push(item)
  }

  return [
   ...vgaList,
   ...result
  ]
 }

 vgaAdaptorRules(vgaIAdaptortems, macBookProItems) {
  const freeVgaIdaptors = macBookProItems ?.length ? macBookProItems.length : 0
  for (let i = 0; i < freeVgaIdaptors; i++) {
   vgaIAdaptortems[i].finalPrice = 0.0
  }
   return vgaIAdaptortems
 }

 updateCart(cart) {
  let result = []
  const superiPadItems = cart.filter(item => item.sku === 'ipd')
  const appleTvsItems = cart.filter(item => item.sku === 'atv')
  const macBookProItmes = cart.filter(item => item.sku === 'mbp')
  const vgaIAdaptortems = cart.filter(item => item.sku === 'vga')
  const newSuperipadItems = superiPadItems ?.length > 0 ? this.superiPadRules(superiPadItems) : []
  const newAppleTvs = appleTvsItems ?.length > 0 ? this.appleTvRules(appleTvsItems) : []
  const newMacBookPros = macBookProItmes ?.length > 0 ? this.macBookProRules(macBookProItmes, vgaIAdaptortems) : []
  const newVgaAdaptors = vgaIAdaptortems ?.length > 0 ? this.vgaAdaptorRules(vgaIAdaptortems, macBookProItmes) : []

  result = [
   ...newAppleTvs,
   ...newSuperipadItems,
   ...newMacBookPros,
   ...newVgaAdaptors
  ]
  return result
 }

}



