const data = [
  {
    id: 1,
    title: "Napoleon",
    image: "images/napoleon.jpg",
    description:
      "Bu tort yupqa xamir qatlamlari va qaymoqli kremdan iborat. Har bir qatlam mayin va krem bilan singdirilgan bo‘ladi. Mazasi yumshoq va og‘izda eriydigan darajada mazali.",
    price: "10",
    category: "tortlar",
  },
  {
    id: 2,
    title: "Medovik (Asalli tort)",
    image: "images/medovik.jpg",
    description:
      "Asalning xushbo‘y hidi va shirinligi tortga o‘ziga xos mazmun bag‘ishlaydi. Qatlamlar orasidagi qaymoq tortni yumshoq va mazali qiladi. U an’anaviy va bayramlar uchun mos desert hisoblanadi.",
    price: "15",
    category: "tortlar",
  },
  {
    id: 3,
    title: "Ptichye Moloko",
    image: "images/ptichye-moloko.webp",
    description:
      "Bu tort yengil va havodor sufle kremidan tashkil topgan. Ustidan quyilgan shokolad qatlami tortga boy va jozibali ko‘rinish beradi. Qayta-qayta iste’mol qilishni xohlashga sabab bo‘ladi.",
    price: "17",
    category: "tortlar",
  },
  {
    id: 4,
    title: "Shokoladli tort",
    image: "images/shokoladli-tort.jpg",
    description:
      " Boy shokolad ta’mi bu tortning asosiy xususiyatidir. U nam biskvit va qaymoqli shokoladli kremlardan tayyorlanadi. Har qanday shirinlik sevuvchining sevimli desertiga aylanishi mumkin.",
    price: "20",
    category: "tortlar",
  },
  {
    id: 5,
    title: "Smetannik",
    image: "images/smetannik.webp",
    description:
      "Smetana asosidagi krem tortga mayin va qisman nordonlik qo‘shadi. Bu tortning qatlamlari o‘zaro juda yaxshi uyg‘unlashgan. Uy sharoitida ham tez-tez tayyorlanadigan oddiy va mazali shirinliklardan biridir.",
    price: "12",
    category: "tortlar",
  },
  {
    id: 6,
    title: "Qora choy",
    image: "images/qora-choy.jpg",
    description: `O‘zbeklarning sevimli ichimligi, ko‘pincha shakar yoki qaymoq bilan ichiladi. Yashil choy: Sog‘liq uchun foydali, engil va tetiklantiruvchi ichimlik.`,
    price: "4",
    category: "ichimliklar",
  },
  {
    id: 7,
    title: "Ayran",
    image: "images/ayran.jpg",
    description: `Yogurt, suv va tuzdan tayyorlanadigan sovuq ichimlik. Issiq havoda juda ma’qul.`,
    price: "5",
    category: "ichimliklar",
  },

  {
    id: 8,
    title: "Kompot",
    image: "images/kompot.webp",
    description: `Tabiiy meva sharbatidan tayyorlanadi, yozda sovuq holda ichiladi.`,
    price: "4",
    category: "ichimliklar",
  },

  {
    id: 9,
    title: "Yashil choy",
    image: "images/yashil-choy.jpg",
    description: `Sog‘liq uchun foydali, engil va tetiklantiruvchi ichimlik.`,
    price: "6",
    category: "ichimliklar",
  },
  {
    id: 10,
    title: "Sharbat",
    image: "images/sharbat.webp",
    description: `Meva yoki sabzavotlardan tayyorlanadigan ichimliklar, ayniqsa, apelsin yoki olma sharbatlari mashhur.`,
    price: "8",
    category: "ichimliklar",
  },
  {
    id: 11,
    title: "Palov (O‘zbek plovi)",
    image: "images/palov.webp",
    description: `Guruch, sabzi, go‘sht (qo‘y yoki mol go‘shti), piyoz va ziravorlardan tayyorlanadigan, O‘zbek oshxonasining eng mashhur taomi.`,
    price: "3",
    category: "taomlar",
  },

  {
    id: 12,
    title: "Lag‘mon",
    image: "images/lag‘mon.webp",
    description: `Qo‘lda cho‘zilgan makaron, go‘sht va sabzavotlar bilan tayyorlanadi. Shuningdek, lag‘mon sho‘rvasini ham tayyorlash mumkin.`,
    price: "2",
    category: "taomlar",
  },
  {
    id: 13,
    title: "Shashlik (kabob)",
    image: "images/shashlik.webp",
    description: `Go‘sht (qo‘y, mol go‘shti yoki tovuq) va sabzavotlar yog‘och skovorodkada yoki olovda qovuriladi. Tabiiy tarzda tayyorlanadi va juda mazali.`,
    price: "6",
    category: "taomlar",
  },
  {
    id: 14,
    title: "Somsa",
    image: "images/somsa.png",
    description: `Yengil qovurilgan yoki tandirda pishirilgan, ichida go‘sht, qovoq yoki kartoshka bo‘lgan pishiriq.`,
    price: "3",
    category: "taomlar",
  },
  {
    id: 15,
    title: "Manti",
    image: "images/manti.jpg",
    description: `Katta pishirilgan xamir ichida go‘sht va piyozdan tayyorlangan, qovurilgan yoki bug‘da pishirilgan taom.`,
    price: "4",
    category: "taomlar",
  },
];

// html elements
const categoryBtns = document.querySelectorAll(".category button");
const contentList = document.querySelector(".content-list");

let selectedCategory = "barchasi";

categoryBtns.forEach((item) => {
  item.addEventListener("click", (e) => {
    selectedCategory = e.target.textContent;

    // show all products
    if (selectedCategory.toLowerCase() === "barchasi") {
      showAllProducts(data);
    }

    // show all cakes
    if (selectedCategory.toLowerCase() === "tortlar") {
      let cakes = data.filter((itemData) => itemData.category === "tortlar");
      showAllProducts(cakes);
    }

    // show all drinkings
    if (selectedCategory.toLowerCase() === "ichimliklar") {
      let drinkings = data.filter(
        (itemData) => itemData.category === "ichimliklar"
      );
      showAllProducts(drinkings);
    }

    // show all meals
    if (selectedCategory.toLowerCase() === "taomlar") {
      let meals = data.filter((itemData) => itemData.category === "taomlar");
      showAllProducts(meals);
    }
  });
});

// show all content
function showAllProducts(products) {
  contentList.innerHTML = "";
  products.forEach((item) => {
    contentList.innerHTML += `
    <div class="content">
      <img src="${item.image}" alt="${item.title}" />
      <div class="content-body">
        <div class="content-body-top">
          <h2>${item.title}</h2>
          <h3>$${item.price}</h3>
        </div>
        <p>${item.description}</p>
      </div>
    </div>
  `;
  });
}

showAllProducts(data);
