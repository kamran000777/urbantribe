const products = [
  //mobiles
  {
    name: "realme 9 5G",
    imageUrl:"https://images.frandroid.com/wp-content/uploads/2022/01/realme-9-1.jpg",
    description:
      "The Dimensity 810 5G processor information is obtained from the MediaTek official website. 6GB RAM is provided, with up to 5GB Dynamic RAM expansion. 5000mAh is the typical value.",
    price: 15300,
    countInStock: 17,
    category: "mobile",
    latest: true,
  },
  {
    name: "Apple iPhone 13 Pro Max",
    imageUrl:"https://res.cloudinary.com/octopuscdn/image/upload/f_auto/istudio/images/products/styles/style_954/large_1631782144__0010_iPhone_13_Pro_Max_PDP_Position-1A_Color_Silver__SEA-1.jpg",
    description:
      "17 cm (6.7-inch) Super Retina XDR display with ProMotion for a faster, more responsive feel,12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording.",
    price: 129900,
    countInStock: 4,
    category: "mobile",
    latest: false,
  },
  {
    name: "OnePlus Nord 9RT 5G",
    imageUrl:"https://www.91-cdn.com/hub/wp-content/uploads/2021/11/OnePlus-9RT-feature.jpg",
    description:
      " 6.62 Inches; 120 Hz Fluid AMOLED. Qualcomm Snapdragon 888, 50MP Main Camera with Sony IMX 766 Lens (OIS enabled), 16MP Ultra-wide angle camera & 2MP Macro lens",
    price: 46450,
    countInStock: 12,
    category: "mobile",
    latest: true,
  },
  {
    name: "realme C35",
    imageUrl:"https://assets.mspimages.in/wp-content/uploads/2022/01/Realme-GT-2-MySmartPrice-696x365.jpeg",
    description:
      "Based on Android 11. USB Type-C Cable 18W Charge Adapter SIM Card Needle Screen Protect Film",
    price: 12999,
    countInStock: 10,
    category: "mobile",
    latest: false,
  },
  {
    name:"Mi 11 Ultra 5G",
    imageUrl:"https://tradingshenzhen.com/8922-large_default/xiaomi-mi-11-ultra-8gb256gb-ultimate-of-android.jpg",
    description:
      "5000mAh battery (typ) / 4900 mAh（min）2nd generation silicon anode 20MP in-display selfie camera Selfie Night mode Night mode 2.0 + Ultra Night Photo",
    price: 66945,
    countInStock: 23,
    category: "mobile",
    latest: false,
  },
  {
    name: "Samsung G A23",
    imageUrl:"https://www.91-cdn.com/hub/wp-content/uploads/2022/02/Samsung-Galaxy-A23-5G-feat.jpg",
    description:
      "50MP Quad Camera with OIS 165.4mm (6.6') FHD+ Infinity V 90Hz Smooth Display 6GB RAM, 128GB ROM ,Android 12.0 OS 5000 mAH long lasting Battery",
    price: 19490,
    countInStock: 7,
    category: "mobile",
    latest: false,
  },
  {
    name:"Redmi Note 11 Pro",
    imageUrl:"https://www.91-cdn.com/hub/wp-content/uploads/2022/01/Redmi_Note_10S.jpeg",
    description:
      "The 6.67' FHD+ 120Hz AMOLED display along with 360Hz touch sampling and 1200 nits peak brightness, The triple camera setup with flagship 108MP HM2 sensor, 8MP Ultra-Wide sensor and 2MP Macro sensor ensures flawless photography.",
    price: 22450,
    countInStock: 22,
    category: "mobile",
    latest: false,
  },
  {
    name: "Apple iPhone 12",
    imageUrl:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-purple-select-2021?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1617130317000",
    description:
      "15 cm (6.1-inch) Super Retina XDR display 12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording A15 Bionic chip for lightning-fast performance",
    price: 74950,
    countInStock: 7,
    category: "mobile",
    latest: true,
  },
  {
    name: "realme GT 2 Pro",
    imageUrl:"https://chinaplanet.sk/wp-content/uploads/2022/01/realme-gt-2-pro-predaj-cover.jpg",
    description:
      " The Dimensity 810 5G processor information is obtained from the MediaTek official website.6GB RAM is provided, with up to 5GB Dynamic RAM expansion. 5000mAh is the typical value.",
    price: 24950,
    countInStock: 25,
    category: "mobile",
    latest: false,
  },
  {
    name: "OnePlus Nord CE 2",
    imageUrl:"https://cdn.mos.cms.futurecdn.net/Rsr9dDWTxqMFmxVf7fHcVG.jpg",
    description:
      "65W SUPERVOOC Accelerated charge velocity shall rocket the 4500mAh battery to a day's power in 15 minutes 6.43 inch, 90Hz FHD+ AMOLED Display 64MP main sensor, 119° wide-angle and a 16MP selfie",
    price: 24950,
    countInStock: 7,
    category: "mobile",
    latest: false,
  },
  {
    name: "Vivo V21e 5G",
    imageUrl:"https://assets.mspimages.in/wp-content/uploads/2021/06/Vivo-V21e-5G.jpg",
    description:
      "64MP+8MP Rear Camera | 32MP Selfie Camera 16.35cm (6.44') AMOLED Display 44W flash charging with 4000mAh battery (Type-C) ",
    price: 42950,
    countInStock: 2,
    category: "mobile",
    latest: false,
  },
  {
    name: "Samsung Galaxy S21",
    imageUrl:"https://fdn.gsmarena.com/imgroot/news/20/12/samsung-galaxy-s21-renders/-1200/gsmarena_005.jpg",
    description:
      "Portrait Mode, Night Mode and 30X Space zoom. 12MP F1.8 Main Camera (Dual Pixel AF & OIS) + 12MP UltraWide Camera (123° FOV) + 8MP Telephoto Camera 4500 mAh battery with Super Fast Charging",
    price: 41450,
    countInStock: 3,
    category: "mobile",
    latest: false,
  },
  //headphones
  {
    name: "Hammer Bash Wireless",
    imageUrl:"https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/og-airpods-max-202011?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1603996970000",
    description:
      "Go wireless to wired in a few seconds with Hammer headphones as it supports aux connectivity along with the Bluetooth connectivity. Deep Bass,300 mAh battery that supports about 8 hours",
    price: 1500,
    countInStock: 25,
    category: "headphone",
    latest: false,
  },
  {
    name: "boAt Airdopes 121v2",
    imageUrl:"https://i.gadgets360cdn.com/large/boat_airdopes_131_1597990761121.jpg",
    description:
      "Playback- Airdopes 121v2 offers a nonstop playback of up to 3.5H with each charge and an additional 10.5H playtime with the included charging case",
    price: 1299,
    countInStock: 4,
    category: "headphone",
    latest: false,
  },
  {
    name: "Apple AirPods Pro",
    imageUrl: "https://m.media-amazon.com/images/I/71zny7BTRlL._SX522_.jpg",
    description:
      "Active noise cancellation for immersive sound The wireless charging case delivers more than 24 hours of battery life",
    price: 20450,
    countInStock: 5,
    category: "headphone",
    latest: false,
  },
  {
    name: "realme Buds Wireless Pro",
    imageUrl:"https://assets.mspimages.in/wp-content/uploads/2022/03/Realme-TechLife-Watch-S100-TechLife-Buds-N100-India-1.jpg",
    description:
      "Playback- Airdopes 121v2 offers a nonstop playback of up to 3.5H with each charge and an additional 10.5H playtime with the included charging case",
    price: 3999,
    countInStock: 10,
    category: "headphone",
    latest: false,
  },
  {
    name: "Boult Audio AirBass Propods",
    imageUrl:"https://images-na.ssl-images-amazon.com/images/I/31oxFFCs4LL.jpg",
    description:
      "The earbuds can be used separately after successful pairing. Not only listening to both earbuds in stereo mode, but also it can be used as monopods to enjoy the music & take calls",
    price: 4745,
    countInStock: 23,
    category: "headphone",
    latest: false,
  },
  {
    name:"Sony WH-XB910N Bass",
    imageUrl:"https://newsimg.giznext.com/mobile/production/news/wp-content/uploads/2022/02/28222043/sony-wireless-headphones-1200-size-2.jpg",
    description:
      "Active Noise Cancellation (ANC) lends a personalized, virtually soundproof experience at any situation  Quick charge for 10min charge for 4.5 hours play back",
    price: 17490,
    countInStock: 7,
    category: "headphone",
    latest: false,
  },
  {
    name: "realme Buds Q2 (Grey)",
    imageUrl:"https://images.hindustantimes.com/tech/img/2021/06/24/960x540/Screenshot_from_2021-06-24_13-12-22_1624521083354_1624521109685.png",
    description:
      "Active noise cancellation for immersive sound The wireless charging case delivers more than 24 hours of battery life",
    price: 2450,
    countInStock: 22,
    category: "headphone",
    latest: true,
  },
  {
    name: "JBL C115 TWS",
    imageUrl: "https://m.media-amazon.com/images/I/61UTor56XfL._SX425_.jpg",
    description:
      "Never run out of juice with 21 hours of playtime (6 hours on earbuds and 15 hours on charging case). Get upto 1Hr of playback with 15mins of charging",
    price: 4950,
    countInStock: 15,
    category: "headphone",
    latest: false,
  },
  {
    name: "Sony MDR-ZX110A Wired",
    imageUrl:"https://www.soundhouse.co.jp/images/shop/prod_img/s/sony_mdrzx110wa.jpg",
    description:
      "30mm dynamic driver unit for clear sound Pressure relieving earpads for extended comfort",
    price: 2950,
    countInStock: 20,
    category: "headphone",
    latest: false,
  },
  {
    name: "Noise Buds Solo",
    imageUrl:"https://static.hub.91mobiles.com/wp-content/uploads/2021/03/noise-buds-play.jpg",
    description:
      "Now enjoy undisrupted sound with the Hybrid Active Noise cancellation mode that cancels out the surrounding noise up tp -35dB and delivers pure sound.",
    price: 4450,
    countInStock: 13,
    category: "headphone",
    latest: true,
  },
  {
    name:"Riversong Air X3 Grey",
    imageUrl:"https://cdn.sharafdg.com/cdn-cgi/image/width=600,height=600,fit=pad/assets/0/c/d/7/0cd796ea9bcd8b30e7028c51a68fea4003c46190_33.JPG",
    description:
      "Voice Control (Google and Siri) 24 hours of battery life Noise Cancellation",
    price: 4950,
    countInStock: 12,
    category:"headphone",
    latest:false
  },
  {
    name:"Bose Sport Earbuds",
    imageUrl:"https://www.thephonetalks.com/wp-content/uploads/2021/04/bose-sport-earbuds-manual-1.jpg",
    description:
      "Wireless Bluetooth earbuds engineered by Bose for your best workout yet. 15 hours non-stop music",
    price: 17950,
    countInStock: 11,
    category:"headphone",
    latest:false
  },
  //smartwatches
  {
    name:"Noise ColorFit Pulse",
    imageUrl:"https://manuals.plus/wp-content/uploads/2021/05/Noise-Colorfit-Pro-2-SmartWatch-User-Manual-Featured-Image.jpg",
    description:
      "With a battery backup of 10 days, just concentrate on your game without stopping. 8 sports modes: Choose from 8 sports modes and give it your best",
    price: 1999,
    countInStock: 35,
    category: "watch",
    latest: false,
  },
  {
    name:"boAt Xtend Smartwatch",
    imageUrl:"https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2020/10/boat-storm-1603899370.jpg",
    description: "Alexa built-in Voice Assistant that sets reminders, alarms and answers questions from weather forecasts to live cricket scores at your command!",
    price: 3299,
    countInStock: 14,
    category: "watch",
    latest: false,
  },
  {
    name:"realme Watch 2 Series",
    imageUrl:"https://geekculture.co/wp-content/uploads/2021/06/realme-gt-watch-5.jpeg",
    description:
      "With a battery backup of 10 days, just concentrate on your game without stopping. 8 sports modes: Choose from 8 sports modes and give it your best",
    price: 3150,
    countInStock: 15,
    category: "watch",
    latest: true,
  },
  {
    name: "Fire-Boltt Beast",
    imageUrl:"https://www.reliancedigital.in/wp-content/uploads/2021/05/cover_Fire_boltt_smart_watch.jpg",
    description:
      "Fire-Boltt Beast Pro enables you to make and receive calls directly from your watch via the built-in speaker and microphone.",
    price: 3299,
    countInStock: 10,
    category: "watch",
    latest: true,
  },
  {
    name: "Amazfit GTR 3 Pro",
    imageUrl: "https://www.penguin.com.bd/wp-content/uploads/2021/10/Amazfit-GTR-3-Pro-Smart-Watch-1.jpg",
    description:
      "Easy-to-read Ultra HD AMOLED Display - With unprecedented visual clarity that reaches 331 ppi, the large 1.45-inch screen of the Amazfit GTR 3 Pro",
    price: 18745,
    countInStock: 8,
    category: "watch",
    latest: false,
  },
  {
    name: "RiverSong Watch Series 7",
    imageUrl:"https://www.pcquest.com/wp-content/uploads/2020/08/Riversong-Wave-S-Side-Fitness-Band.jpg",
    description:
      "With a battery backup of 10 days, just concentrate on your game without stopping. 8 sports modes: Choose from 8 sports modes and give it your best",
    price: 12490,
    countInStock: 7,
    category: "watch",
    latest: false,
  },
  {
    name: "realme Watch 2 Pro",
    imageUrl: "https://image01.realme.net/general/20211110/1636519103831.jpg",
    description:
      "Easy-to-read Ultra HD AMOLED Display - With unprecedented visual clarity that reaches 331 ppi, the large 1.45-inch With a battery backup of 10 days, just concentrate on your game without stopping. 8 sports modes: Choose from 8 sports modes and give it your best",
    price: 4550,
    countInStock: 22,
    category: "watch",
    latest: true,
  },
  {
    name: "Riversong Motive",
    imageUrl:"https://cdn.shopify.com/s/files/1/0557/7909/8830/products/Motive-2C-SW10-2_grande.png?v=1629286862",
    description:
      "Voice Control (Google and Siri) 24 hours of battery life Noise Cancellation  With a battery backup of 10 days, just concentrate on your game without stopping. 8 sports modes: Choose from 8 sports modes and give it your best",
    price: 4950,
    countInStock: 12,
    category: "watch",
    latest: false,
  },
  {
    name: "mi Smart Watch",
    imageUrl:"https://www.gizmochina.com/wp-content/uploads/2019/11/Mi-Watch-1.jpeg",
    description:
      " See Calls & Messages on Your Wrist: Receive/Rejection call, calendar, SMS and SNS (Facebook, WhatsApp, LinkedIn, Instagram, and Twitter) notifications on display, fitness tracker band",
    price: 1950,
    countInStock: 18,
    category: "watch",
    latest: true,
  },
  {
    name: "Noise ColorFit Ultra",
    imageUrl: "https://www.91-cdn.com/hub/wp-content/uploads/2021/12/Noise_Colorfit_Ultra_2.jpg",
    description:
      "See the clear, bigger picture on the 1.75 touch screen with 320*385 pixels Crafted from Grade 6061 aluminium, ColorFit Ultra can withstand daily rough use with ease.",
    price: 3950,
    countInStock: 15,
    category: "watch",
    latest: true,
  },
  {
    name: "boAt Storm Lite",
    imageUrl: "https://cdn.mos.cms.futurecdn.net/9khiTQfxamcHJxwA5KWgkB-1200-80.jpg",
    description:
      "The 1.69 inch HD full touch display with 500 nits of brightness will bring every detail to life! The watch supports Google and Apple Fit to seamlessly monitor your health.",
    price: 3950,
    countInStock: 24,
    category: "watch",
    latest: false,
  },
  {
    name: "RiverSong Wave 03",
    imageUrl:
      "https://abedtahan.com/media/catalog/product/cache/1/image/600x600/9df78eab33525d08d6e5fb8d27136e95/w/a/watc-rivr-wave_03-01.jpg",
    description:
      "Easy-to-read Ultra HD AMOLED Display - With unprecedented visual clarity that reaches 331 ppi, the large 1.45-inch screen of the Wave 3.",
    price: 14450,
    countInStock: 13,
    category: "watch",
    latest: false,
  },
  //gaming
  {
    name: "New World PS5",
    imageUrl: "https://kingplaystation.com/wp-content/uploads/2017/06/ps3.jpg",
    description:
      "All-In-One for PS5/PS5 Digital Edition Console Vertical stand, Storage Playstation 5 console with cooling fan, dual wireless controller",
    price: 45500,
    countInStock: 5,
    category: "game",
    latest: false,
  },
  {
    name: "Mortal Kombat 11: Ultimate",
    imageUrl: "https://media.4rgos.it/i/Argos/7835924_R_Z001A?w=750&h=440&qlt=70",
    description:
      "Includes mortal kombat 11, kombat pack 1, Mk11: aftermath & kombat pack 2",
    price: 1999,
    countInStock: 40,
    category: "game",
    latest: false,
  },
  {
    name: "Xbox One X 1TB",
    imageUrl: "https://m.media-amazon.com/images/I/71ZP6Q-cM3L._SX679_.jpg",
    description:
      "Bring the gears universe to life: laser-etched cracks appear across the console's icy top surface and snow drifts across a golden locust symbol on the back",
    price: 35450,
    countInStock: 7,
    category: "game",
    latest: false,
  },
  {
    name: "PS5 RETURNAL",
    imageUrl: "https://media.direct.playstation.com/is/image/sierialto/returnal-ps5-game-box-front",
    description:
      "Intense combat: fight to survive in this third-person roguelike shooter, take on ruthless enemies in explosive, bullet hell-fuelled combat",
    price: 3199,
    countInStock: 24,
    category: "game",
    latest: true,
  },
  {
    name: "G29 Driving Force",
    imageUrl: "https://m.media-amazon.com/images/I/61IYYoZ66VL._SX425_.jpg",
    description:
      "Wheel rotation: 900 degrees lock-to-lock, hall-effect steering sensor, dual-motor force feedback and overheat safeguard. Interface: Wired",
    price: 26745,
    countInStock: 3,
    category: "game",
    latest: false,
  },
  {
    name: "Nintendo -V2 Switch",
    imageUrl: "https://images.squarespace-cdn.com/content/v1/565db180e4b0987eb9f3b952/1495028961939-FM26TPTZ0RINYQIL1UJA/bundle_color_console.jpg",
    description:
      "Play your way with the Nintendo Switch gaming system. Whether youre at home or on-the-go, solo or with friends, the Nintendo Switch",
    price: 27490,
    countInStock: 7,
    category: "game",
    latest: false,
  },
  {
    name: "FIFA 22 (PS4)",
    imageUrl: "https://www.addmecart.com/wp-content/uploads/2021/09/f.jpg",
    description:
      "FIFA 22 Standard Edition and receive: Team of the Week 1 Player, Kylian Mbappé Loan Item, for 5 FUT matches, FUT Ambassador Loan Player Pick",
    price: 2450,
    countInStock: 22,
    category: "game",
    latest: false,
  },
  {
    name: "Smack Down Pain Pc",
    imageUrl: "https://i5.walmartimages.com/asr/4993b487-0437-4fd0-b068-3af22eadd40d.2bf3657ce1b23fd83dcdb2c7d85a1f72.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    description: "Action Games, Adventure Games, Arcade Games, Wrestling Games",
    price: 4950,
    countInStock: 12,
    category: "game",
    latest: false,
  },
  {
    name: "PS4 Wireless Controller",
    imageUrl: "https://d3fa68hw0m2vcc.cloudfront.net/9b5/115544273.jpeg",
    description:
      "As a top gamer, you need high-tech and performant gadgets so that you can become the absolute best.",
    price: 2150,
    countInStock: 18,
    category: "game",
    latest: false,
  },
  {
    name: "WB Games Hitman 2 (PS4)",
    imageUrl: "https://www.kroger.com/product/images/large/front/0088392963917",
    description:
      "Travel the globe and track your targets across exotic sandbox locations in hitman. From sun-drenched streets to dark and dangerous rainforests.",
    price: 3950,
    countInStock: 25,
    category: "game",
    latest: false,
  },
  {
    name: "Far Cry Yara Edition",
    imageUrl: "https://www.pricerunner.com/product/1200x630/3002466186/Far-Cry-6-Yara-Edition.jpg",
    description:
      "The yara Edition of far Cry 6 includes: base game; the croc Hunter pack - croc Hunter outfit, the 45/70 Rifle",
    price: 3740,
    countInStock: 20,
    category: "game",
    latest: true,
  },
  {
    name: "Customized PS5",
    imageUrl:
      "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/ps5_3_1.jpg",
    description:
      "Bring the gears universe to life: laser-etched cracks appear across the console's icy top surface and snow drifts across a golden locust symbol on the back",
    price: 44950,
    countInStock: 2,
    category: "game",
    latest: false,
  },
];

module.exports = products;
