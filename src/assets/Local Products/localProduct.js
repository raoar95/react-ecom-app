const localProducts = [
    {
      id: 21,
      image: "https://images-na.ssl-images-amazon.com/images/I/71QRh08zV2L._AC_SL1500_.jpg",
      title: "Sony TV (Black)",
      salePrice: 7899,
      price: 9999,
      sellerName: "Seller Name",
      category: "electronics",
      description: "Experience stunning visuals with Sony's state-of-the-art TV technology. This sleek black TV offers superior picture quality and vibrant colors for an immersive viewing experience.",
      rating: {
        rate: 4.5,
        count: 200
      }
    },
    {
      id: 22,
      image: "https://rukminim1.flixcart.com/image/612/612/k20r8nk0/headphone/7/w/c/realme-buds-2-original-imafhgrckbygsyrk.jpeg?q=70",
      title: "Realme Earphone",
      salePrice: 1499,
      price: 1999,
      sellerName: "Seller Name",
      category: "accessories",
      description: "Enjoy high-quality sound with Realme Earphones. These stylish and comfortable earphones are perfect for music lovers and on-the-go use.",
      rating: {
        rate: 4.0,
        count: 150
      }
    },
    {
      id: 23,
      image: "https://images-na.ssl-images-amazon.com/images/I/71nFNnKNt7L._AC_SL1500_.jpg",
      title: "Samsung Smart TV (Black)",
      salePrice: 8999,
      price: 10999,
      sellerName: "Seller Name",
      category: "electronics",
      description: "Upgrade your entertainment with Samsung's Smart TV. This sleek black TV offers smart features, allowing you to stream your favorite shows and movies with ease.",
      rating: {
        rate: 4.3,
        count: 180
      }
    },
    {
      id: 24,
      image: "https://rukminim2.flixcart.com/image/416/416/xif0q/computer/q/e/z/-original-imagpxgqesgrthks.jpeg?q=70",
      title: "ASUS Vivobook",
      salePrice: 25999,
      price: 32999,
      sellerName: "Seller Name",
      category: "electronics",
      description: "The ASUS Vivobook offers powerful performance in a sleek and portable design. Perfect for both work and play, this laptop is a great addition to your tech collection.",
      rating: {
        rate: 4.2,
        count: 140
      }
    },
    {
      id: 25,
      image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/9/e/e/-original-imaghx9q5rvcdghy.jpeg?q=70",
      title: "iPhone 12 Pro",
      salePrice: 85999,
      price: 99999,
      sellerName: "Seller Name",
      category: "mobile-phone",
      description: "Experience the best of Apple with the iPhone 12 Pro. This powerful smartphone offers advanced features and a sleek design, making it a must-have for tech enthusiasts.",
      rating: {
        rate: 4.8,
        count: 250
      }
    },
    {
      id: 26,
      image: "https://rukminim1.flixcart.com/image/416/416/kmccosw0/headphone/p/z/b/airdopes-131-boat-original-imagf9n3mcafuhha.jpeg?q=70",
      title: "Boat Earbuds",
      salePrice: 1999,
      price: 2499,
      sellerName: "Seller Name",
      category: "accessories",
      description: "Experience wireless freedom with Boat Earbuds. These stylish and compact earbuds deliver excellent sound quality and long battery life.",
      rating: {
        rate: 4.1,
        count: 170
      }
    },
    {
      id: 27,
      image: "https://rukminim1.flixcart.com/image/416/416/ki3gknk0/memory-card/microsdxc/n/y/f/sandisk-sdsqua4-512g-gn6mn-original-imafxyzvfggwwfvt.jpeg?q=70",
      title: "Sandisk Memory Card (512GB)",
      salePrice: 4999,
      price: 5999,
      sellerName: "Seller Name",
      category: "accessories",
      description: "Expand your storage with the Sandisk 512GB Memory Card. Perfect for storing high-resolution photos, videos, and other large files.",
      rating: {
        rate: 4.4,
        count: 220
      }
    },
    {
      id: 28,
      image: "https://rukminim1.flixcart.com/image/416/416/kactpjk0/power-bank/e/r/g/power-bank-ram138-10000-realme-original-imafrxdgbm9qvfnf.jpeg?q=70",
      title: "Realme Power Bank",
      salePrice: 1499,
      price: 1999,
      sellerName: "Seller Name",
      category: "accessories",
      description: "Keep your devices charged on the go with the Realme Power Bank. This compact and portable power bank offers high capacity and fast charging.",
      rating: {
        rate: 4.2,
        count: 160
      }
    },
    {
      id: 29,
      image: "https://rukminim1.flixcart.com/image/416/416/kgqvlow0/battery-charger/d/a/7/apple-mhjd3hn-a-original-imafwwwfg5xgcctm.jpeg?q=70",
      title: "Smartphone Speed Charger",
      salePrice: 1299,
      price: 1599,
      sellerName: "Seller Name",
      category: "accessories",
      description: "Charge your devices quickly and efficiently with the Smartphone Speed Charger. Compatible with a wide range of devices, this charger is a must-have.",
      rating: {
        rate: 4.6,
        count: 210
      }
    },
    {
      id: 30,
      image: "https://rukminim1.flixcart.com/image/416/416/kh2b4i80/smartwatch/6/g/2/w8-android-ios-aqfit-original-imafx5wqvbjddhnf.jpeg?q=70",
      title: "Apple Smartwatch",
      salePrice: 29999,
      price: 34999,
      sellerName: "Seller Name",
      category: "accessories",
      description: "Stay connected and track your fitness with the Apple Smartwatch. This stylish and functional watch offers a variety of features to enhance your daily life.",
      rating: {
        rate: 4.7,
        count: 230
      }
    },
    {
      id: 31,
      image: "https://images-na.ssl-images-amazon.com/images/I/31O8bYv1zdL._AC_.jpg",
      title: "Sony Laptop (Black)",
      salePrice: 49999,
      price: 59999,
      sellerName: "Seller Name",
      category: "electronics",
      description: "Work and play with the Sony Laptop. This powerful laptop offers high performance and a sleek design, making it perfect for all your computing needs.",
      rating: {
        rate: 4.3,
        count: 190
      }
    },
    {
      id: 32,
      image: "https://rukminim1.flixcart.com/image/416/416/kc29n680/speaker/home-theatre/r/u/y/mt150-ht51-motorola-original-imaft9z2h6uwdgrn.jpeg?q=70",
      title: "JBL Home Theatre 5.1",
      salePrice: 15999,
      price: 19999,
      sellerName: "Seller Name",
      category: "electronics",
      description: "Transform your home entertainment with the JBL Home Theatre 5.1. Enjoy cinematic sound quality and immersive audio experiences.",
      rating: {
        rate: 4.5,
        count: 240
      }
    },
    {
      id: 33,
      image: "https://rukminim1.flixcart.com/image/416/416/jfsknm80/smart-assistant/b/h/m/home-ghome-google-original-imaf46b7mrhmpzdg.jpeg?q=70",
      title: "Google Smart Assistant",
      salePrice: 2999,
      price: 3999,
      sellerName: "Seller Name",
      category: "accessories",
      description: "Make your home smarter with Google Smart Assistant. Control your devices, get information, and manage your schedule with voice commands.",
      rating: {
        rate: 4.6,
        count: 260
      }
    },
    {
      id: 34,
      image: "https://rukminim1.flixcart.com/image/416/416/jjx6g7k0/speaker/home-audio-speaker/8/5/g/saregama-carvaan-marathi-original-imaf75kypazr6fym.jpeg?q=70",
      title: "Saregama Carvaan",
      salePrice: 4999,
      price: 5999,
      sellerName: "Seller Name",
      category: "accessories",
      description: "Relive the golden era of music with the Saregama Carvaan. This portable music player comes pre-loaded with classic songs and features modern connectivity options.",
      rating: {
        rate: 4.3,
        count: 200
      }
    },
    {
      id: 35,
      image: "https://rukminim1.flixcart.com/image/416/416/k33c4nk0/speaker/mobile-tablet-speaker/s/r/v/jbl-jblcharge4blk-original-imafjjwyef333veh.jpeg?q=70",
      title: "JBL Bluetooth Speaker",
      salePrice: 3999,
      price: 4999,
      sellerName: "Seller Name",
      category: "accessories",
      description: "Take your music anywhere with the JBL Bluetooth Speaker. This portable speaker delivers powerful sound and long battery life for all your adventures.",
      rating: {
        rate: 4.4,
        count: 220
      }
    },
    {
      id: 36,
      image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/6/x/2/-original-imagz6tzewyqpgtz.jpeg?q=70&crop=false",
      title: "vivo T3 5G (Crystal Flake, 256 GB)  (8 GB RAM)",
      salePrice: 24999,
      price: 21999,
      sellerName: "Seller Name",
      category: "mobile-phone",
      description: "Experience the best of Apple with the iPhone 12 Pro. This powerful smartphone offers advanced features and a sleek design, making it a must-have for tech enthusiasts.",
      rating: {
        rate: 4.8,
        count: 250
      }
    },
    {
      id: 37,
      image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/d/o/c/-original-imagtnqjmfqxxbj2.jpeg?q=70&crop=false",
      title: "Samsung Galaxy S21 FE 5G (Graphite, 128 GB)  (8 GB RAM)",
      salePrice: 54999,
      price: 49999,
      sellerName: "Top Seller",
      category: "mobile-phone",
      description: "The Samsung Galaxy S21 FE 5G features a stunning display and powerful performance with its 128 GB storage and 8 GB RAM. Perfect for all your entertainment and productivity needs.",
      rating: {
        rate: 4.5,
        count: 180
      }
    },
    {
      id: 38,
      image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/7/h/k/-original-imagawn2gggtuvwd.jpeg?q=70&crop=false",
      title: "OnePlus 9R 5G (Carbon Black, 128 GB)  (8 GB RAM)",
      salePrice: 39999,
      price: 37999,
      sellerName: "Best Seller",
      category: "mobile-phone",
      description: "OnePlus 9R 5G delivers flagship-level performance with its powerful Snapdragon 870 processor, 8 GB RAM, and 128 GB storage. Enjoy seamless gaming and multitasking.",
      rating: {
        rate: 4.7,
        count: 300
      }
    },
    {
      id: 39,
      image: "https://rukminim2.flixcart.com/image/416/416/ktketu80/mobile/s/l/c/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=70&crop=false",
      title: "Apple iPhone 13 (Midnight, 128 GB)",
      salePrice: 79999,
      price: 74999,
      sellerName: "Apple Store",
      category: "mobile-phone",
      description: "Apple iPhone 13 comes with the powerful A15 Bionic chip and an advanced dual-camera system, providing exceptional performance and stunning photography capabilities.",
      rating: {
        rate: 4.9,
        count: 500
      }
    },
    {
      id: 40,
      image: "https://rukminim2.flixcart.com/image/416/416/l3rmzrk0/mobile/p/b/o/-original-imagetme8brtujft.jpeg?q=70&crop=false",
      title: "Realme GT Master Edition 5G (Voyager Grey, 128 GB)  (8 GB RAM)",
      salePrice: 29999,
      price: 26999,
      sellerName: "Realme Official",
      category: "mobile-phone",
      description: "Realme GT Master Edition 5G is designed for ultimate performance and style. With 128 GB storage, 8 GB RAM, and a unique design, this phone is a masterpiece in your hands.",
      rating: {
        rate: 4.6,
        count: 220
      }
    },
    {
      id: 41,
      image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/s/y/0/-original-imaggbrbxkqr3v3u.jpeg?q=70&crop=false",
      title: "Google Pixel 6 (Stormy Black, 128 GB)  (8 GB RAM)",
      salePrice: 59999,
      price: 54999,
      sellerName: "Google Store",
      category: "mobile-phone",
      description: "Google Pixel 6 offers an exceptional Android experience with its 8 GB RAM, 128 GB storage, and advanced AI features. Capture stunning photos with its superior camera system.",
      rating: {
        rate: 4.7,
        count: 280
      }
    },
    {
      id: 42,
      image: "https://rukminim2.flixcart.com/image/416/416/kr2e3680/mobile/l/p/k/reno6-pro-5g-cph2249-oppo-original-imag4xpc6mc62mzq.jpeg?q=70&crop=false",
      title: "Oppo Reno6 Pro 5G (Aurora, 256 GB)  (12 GB RAM)",
      salePrice: 44999,
      price: 41999,
      sellerName: "Oppo Official",
      category: "mobile-phone",
      description: "Oppo Reno6 Pro 5G stands out with its sleek design, 256 GB storage, and 12 GB RAM. Enjoy a seamless user experience and high-quality photos with its advanced camera.",
      rating: {
        rate: 4.6,
        count: 200
      }
    },
    {
      id: 43,
      image: "https://rukminim2.flixcart.com/image/312/312/kq6yefk0/mobile/i/w/m/11-lite-m2101k9ai-mi-original-imag496gkgqjrvvg.jpeg?q=70",
      title: "Xiaomi Mi 11X Pro 5G (Lunar White, 128 GB)  (8 GB RAM)",
      salePrice: 39999,
      price: 37999,
      sellerName: "Mi Store",
      category: "mobile-phone",
      description: "Xiaomi Mi 11X Pro 5G offers a flagship experience with its 8 GB RAM, 128 GB storage, and powerful Snapdragon 888 processor. Ideal for gaming and high-performance tasks.",
      rating: {
        rate: 4.5,
        count: 260
      }
    },
    {
      id: 44,
      image: "https://rukminim2.flixcart.com/image/312/312/ksez24w0/mobile/l/s/h/edge-20-fusion-parf0001in-motorola-original-imag5yvduvn87zqc.jpeg?q=70",
      title: "Motorola Edge 20 Fusion 5G (Cyber Teal, 128 GB)  (6 GB RAM)",
      salePrice: 25999,
      price: 23999,
      sellerName: "Motorola",
      category: "mobile-phone",
      description: "Motorola Edge 20 Fusion 5G features a 108 MP camera, 6 GB RAM, and 128 GB storage. Experience smooth performance and excellent camera quality with this smartphone.",
      rating: {
        rate: 4.4,
        count: 210
      }
    },
    {
      id: 45,
      image: "https://rukminim2.flixcart.com/image/312/312/ktizdzk0/mobile/y/4/i/g20-ta-1365-nokia-original-imag6uttggksgjtf.jpeg?q=70",
      title: "Nokia G20 (Night, 128 GB)  (4 GB RAM)",
      salePrice: 12999,
      price: 11999,
      sellerName: "Nokia Store",
      category: "mobile-phone",
      description: "Nokia G20 is a reliable and affordable smartphone with 4 GB RAM and 128 GB storage. Enjoy a smooth user experience and long battery life with this device.",
      rating: {
        rate: 4.3,
        count: 150
      }
    }
  ];
  
  export default localProducts;
  