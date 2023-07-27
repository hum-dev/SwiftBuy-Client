const productImages = {
 'MacBook Pro': 'https://www.google.com/aclk?sa=l&ai=DChcSEwj45_v686mAAxXmS0ECHUz1CG8YABANGgJ3cw&ase=2&sig=AOD64_21v0Gd3tmzgL991JDQX6VVGhSxXA&ctype=5&nis=5&adurl&ved=2ahUKEwi5tOz686mAAxXDmicCHZSRAQoQvhd6BQgBEJcB',
 'Google Pixel 6': 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fm-cdn.phonearena.com%2Fimages%2Freviews%2F238921-image%2FGoogle-Pixel-6-Pro-Review-011.jpg&tbnid=tuJxeEZu9jh2zM&vet=12ahUKEwiDrv3O9KmAAxXksEwKHSi3DmQQMygMegUIARCEAg..i&imgrefurl=https%3A%2F%2Fwww.phonearena.com%2Freviews%2FGoogle-Pixel-6-Pro-review_id5263&docid=nWVzlAjIE6b0nM&w=1600&h=1067&q=Google%20Pixel%206&ved=2ahUKEwiDrv3O9KmAAxXksEwKHSi3DmQQMygMegUIARCEAg',
   'Adidas Ultraboost': 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.ebayimg.com%2Fimages%2Fg%2FSXAAAOSwHGxcDtoM%2Fs-l1600.jpg&tbnid=fmyd9J0pd5oIKM&vet=12ahUKEwisjI3E9amAAxWCrEwKHcPiCcgQMygSegUIARCdAg..i&imgrefurl=https%3A%2F%2Fwww.ebay.com%2Fb%2Fadidas-UltraBoost-Sneakers-for-Women%2F95672%2Fbn_87845965&docid=DISNiiIysVUTaM&w=375&h=375&q=Adidas%20Ultraboost&ved=2ahUKEwisjI3E9amAAxWCrEwKHcPiCcgQMygSegUIARCdAg',
   'KitchenAid Stand Mixer': '',
   'The Great Gatsby': '',
   'Dell XPS 15': '',
   'Sony PlayStation 5': '',
   'Fitbit Charge 4': '',
   'Cuisinart Coffee Maker': '',
   'To Kill a Mockingbird': '',
   'iPad Air': '',
   'OnePlus 9 Pro': '',
   'New Balance Fresh Foam': '',
   'Vitamix Blender': '',
   'The Lord of the Rings': '',
   'Surface Laptop 4': '',
   'Sony WH-1000XM4': '',
   'Instant Pot Air Fryer Lid': '',
   '1984': '',
   'GoPro HERO9 Black': '',

  };

  export default function getProductImage(productName) {
    return productImages[productName];
}
