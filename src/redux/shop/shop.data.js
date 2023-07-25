const SHOP_DATA ={ 
    hats:{
        id: 1,
        title: 'Hats',
        routeName: 'hats',
        items: [
          {
            id: 1,
            name: 'Brown Brim',
            imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
            price: 25
          },
          {
            id: 2,
            name: 'Blue Beanie',
            imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
            price: 18
          },
          {
            id: 3,
            name: 'Brown Cowboy',
            imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
            price: 35
          },
          {
            id: 4,
            name: 'Grey Brim',
            imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
            price: 25
          },
          {
            id: 5,
            name: 'Green Beanie',
            imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
            price: 18
          },
          {
            id: 6,
            name: 'Palm Tree Cap',
            imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
            price: 14
          },
          {
            id: 7,
            name: 'Red Beanie',
            imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
            price: 18
          },
          {
            id: 8,
            name: 'Wolf Cap',
            imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
            price: 14
          },
          {
            id: 9,
            name: 'Blue Snapback',
            imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
            price: 16
          },
          {
            id: 10,
            name: ' Beanie Hat',
            imageUrl: 'https://rugdlife.com/cdn/shop/products/RUGDBeanie_2_e28315e7-cabc-4b0f-8103-4e38c91d18dd_1800x1800.png?v=1675357935',
            price: 14.99
          },
          {
            id: 11,
            name: 'Bucket Hat',
            imageUrl: 'https://favoriteusa.com/cdn/shop/products/HAT_0012_favtan_red_blkbucket_1800x1800.jpg?v=1669056611',
            price: 19.99
          },
          {
            id: 12,
            name: 'Penman Hat',
            imageUrl: 'data:image/jpeg;base64,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',
            price: 16
          }
        ]
      },
     sneakers: {
        id: 2,
        title: 'Sneakers',
        routeName: 'sneakers',
        items: [
          {
            id: 1,
            name: 'Adidas NMD',
            imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
            price: 220
          },
          {
            id: 2,
            name: 'Adidas Yeezy',
            imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
            price: 280
          },
          {
            id: 3,
            name: 'Black Converse',
            imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
            price: 110
          },
          {
            id: 4,
            name: 'Nike White AirForce',
            imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
            price: 160
          },
          {
            id: 5,
            name: 'Nike Red High Tops',
            imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
            price: 160
          },
          {
            id: 6,
            name: 'Nike Brown High Tops',
            imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
            price: 160
          },
          {
            id: 7,
            name: 'Air Jordan Limited',
            imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
            price: 190
          },
          {
            id: 8,
            name: 'Timberlands',
            imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
            price: 200
          },
          {
            id: 9,
            name: 'Air Force 1',
            imageUrl: 'https://images.lifestyleasia.com/wp-content/uploads/sites/6/2021/06/25124207/louis-vuitton-nike-air-force-1-sneakers-hero.jpeg',
            price: 190
          },
          {
            id: 10,
            name: 'Nike Air Max 90',
            imageUrl: 'https://sneakernews.com/wp-content/uploads/2023/07/nike-air-max-90-photon-dust-light-iron-ore-dz3522-003-5.jpg?w=540&h=380&crop=1',
            price: 120
          },
          {
            id: 11,
            name: 'Puma RS-X',
            imageUrl: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/390776/02/mod01/fnd/THA/fmt/png/RS-X-Efekt-PRM-Sneakers',
            price: 100
          },
          {
            id: 12,
            name: 'Converse Chuck Taylor All Star',
            imageUrl: 'https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dw8b606bf4/images/k_08/1J793_K_08X1.jpg?sw=406',
            price: 60
          }
        ]
      },
      jackets:{
        id: 3,
        title: 'Jackets',
        routeName: 'jackets',
        items: [
          {
            id: 1,
            name: 'Black Jean Shearling',
            imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
            price: 125
          },
          {
            id: 2,
            name: 'Blue Jean Jacket',
            imageUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
            price: 90
          },
          {
            id: 3,
            name: 'Grey Jean Jacket',
            imageUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
            price: 90
          },
          {
            id: 4,
            name: 'Brown Shearling',
            imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
            price: 165
          },
          {
            id: 5,
            name: 'Tan Trench',
            imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
            price: 185
          },
          {
            id: 6,
            name: 'Faux-fur Jacket',
            imageUrl: 'https://photo.venus.com/im/22050678.jpg?preset=xl_70',
            price: 79
          },
          {
            id: 7,
            name: 'Ferrari Jacket',
            imageUrl: 'https://i.etsystatic.com/23964418/r/il/d20e1b/3724875822/il_570xN.3724875822_7zza.jpg',
            price: 63.88
          },
          {
            id: 8,
            name: 'Louis Vuitton jacket',
            imageUrl: 'https://www.ghpage.com/wp-content/uploads/2022/05/sarkodie-Louis-Vuitton-Virgil-Abloh-Iridescent-SS19-Transparent-Windbreaker-Jacket-1.jpg',
            price: 87.84
          },
          {
            id: 9,
            name: 'Tommy Hilfiger  Puffer Jacket',
            imageUrl: 'https://m.media-amazon.com/images/I/81lJZLvDY3L._AC_UX522_.jpg',
            price: 70
          },
          {
            id: 10,
            name: 'Trench Coat',
            imageUrl: 'https://johnlewis.scene7.com/is/image/JohnLewis/006479532?$rsp-pdp-port-640$',
            price: 155
          },
          {
            id: 11,
            name: 'Heritage Liddesdale Quilted Jacket',
            imageUrl: 'https://n.nordstrommedia.com/id/sr3/356ecdb4-b59b-4f1c-ac55-e81545d5ab4a.jpeg?h=365&w=240&dpr=2',
            price: 220
          },
          {
            id: 12,
            name: ' Bassett Bomber Jacket',
            imageUrl: 'https://n.nordstrommedia.com/id/sr3/871feb49-d3d1-4fae-92a3-44d353a77450.jpeg?h=365&w=240&dpr=2',
            price: 249
          }
        ]
      },
      womens:{
        id: 4,
        title: "Women's",
        routeName: 'womens',
        items: [
          {
            id: 1,
            name: 'Blue Tanktop',
            imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
            price: 25
          },
          {
            id: 2,
            name: 'Floral Blouse',
            imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
            price: 20
          },
          {
            id: 3,
            name: 'Floral Dress',
            imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
            price: 80
          },
          {
            id: 4,
            name: 'Red Dots Dress',
            imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
            price: 80
          },
          {
            id: 5,
            name: 'Striped Sweater',
            imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
            price: 45
          },
          {
            id: 6,
            name: 'Yellow Track Suit',
            imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
            price: 135
          },
          {
            id: 7,
            name: 'White Blouse',
            imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
            price: 20
          },
          {
            id: 8,
            name: 'Silk Dress Ladies',
            imageUrl: 'https://image.made-in-china.com/201f0j00ZkoqgMNySTce/High-Quality-100-Silk-Dress-Ladies-Luxury-Backless-Solid-Color-Sexy-Slip-Dress.webp',
            price: 59.36
          },
          {
            id: 9,
            name: 'Tube Dress',
            imageUrl: 'https://image.made-in-china.com/318f0j00rETUYazwoVqR/video.webp',
            price: 35
          },
          {
            id: 10,
            name: 'African Traditional Dress',
            imageUrl: 'https://i.pinimg.com/originals/90/af/b2/90afb20759aec2d0a2a613f5cd5ccbaa.jpg',
            price: 40
          },
          {
            id: 11,
            name: 'Lace Up Runched Bandage Tie Dye',
            imageUrl: 'https://m.media-amazon.com/images/I/61sTDrLlbVL._AC_UX522_.jpg',
            price: 159
          },
          {
            id: 12,
            name: 'Green gown',
            imageUrl: 'https://ocdn.eu/pulscms-transforms/1/mdxk9kpTURBXy80MjZhZWZhMTUwNGZjZjRjMDk4NTkzMmFiMjY3ZTQzOC5qcGeRlQLNAoDNAyDCw94AAaEwBQ',
            price: 130
          }
        ]
      },
      mens:{
        id: 5,
        title: "Men's",
        routeName: 'mens',
        items: [
          {
            id: 1,
            name: 'Camo Down Vest',
            imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
            price: 325
          },
          {
            id: 2,
            name: 'Floral T-shirt',
            imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
            price: 20
          },
          {
            id: 3,
            name: 'Black & White Longsleeve',
            imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
            price: 25
          },
          {
            id: 4,
            name: 'Pink T-shirt',
            imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
            price: 25
          },
          {
            id: 5,
            name: 'Jean Long Sleeve',
            imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
            price: 40
          },
          {
            id: 6,
            name: 'Burgundy T-shirt',
            imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
            price: 25
          },
          {
            id: 7,
            name: 'FlyDay Hi Relax Shirt',
            imageUrl: 'https://i.pinimg.com/564x/a0/6b/70/a06b708becbefa5d642392d7bf805429.jpg',
            price: 45
          },
          {
            id: 8,
            name: 'Mens Knitted',
            imageUrl: 'https://i.pinimg.com/236x/cc/54/b0/cc54b0565aac2ba48d6376e1658fffaa.jpg',
            price: 55
          },
          {
            id: 9,
            name: 'Husky mens fashion',
            imageUrl: 'https://i.pinimg.com/474x/b8/ca/3e/b8ca3ee1c5cbb5d7999027eae9fe92d8.jpg',
            price: 60
          },
          {
            id: 10,
            name: 'Men Suits Blue',
            imageUrl: 'https://i.pinimg.com/564x/ad/7d/ba/ad7dbac8d33846fdebbd262a10a67b5c.jpg',
            price: 100
          },
          {
            id: 11,
            name: 'Casablanca',
            imageUrl: 'https://ocdn.eu/pulscms-transforms/1/ZdCk9kpTURBXy8yYjFiMWUzM2JjN2M2MzY5NDhhMTI0ZjA4YTI1NDhjNy5qcGeRlQLNAoDNAvHCw94AAqEwBaExAQ',
            price: 1319
          },
          {
            id: 12,
            name: 'Loius Vuiton',
            imageUrl: 'https://i0.wp.com/www.ghanacelebrities.com/wp-content/uploads/2022/07/King-Promise-.jpg?fit=700%2C544&ssl=1',
            price: 120
          }
        ]
    }
};
    
 export default SHOP_DATA;   

 