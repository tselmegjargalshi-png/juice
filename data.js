/* FreshBlend varsayılan menü verisi (tamamı Türkçe) */
window.FB_DEFAULTS = {
  settings: {
    brand: "FreshBlend",
    tagline: "Meyve Suyu ve Smoothie Bar",
    slogan: "Taze Karıştır, Mutlu Yudumla",
    subslogan: "Her yudumda gerçek meyve, sıfır katkı, bol neşe.",
    address: "Atatürk Bulvarı No: 24, Bodrum / Muğla",
    phone: "+90 252 555 01 23",
    instagram: "freshblendbar",
    hours: "Her gün 08:00 ile 23:00 arası",
    notice: "Siparişinizi kasada verebilirsiniz",
    heroImage: "",
    showImages: true,
    pin: "blend2026"
  },
  categories: [
    { id: "smoothie", name: "Smoothieler", icon: "🍓", desc: "Kremsi, yoğun ve tam kıvamında karışımlar" },
    { id: "taze", name: "Taze Sıkılmışlar", icon: "🍊", desc: "Siparişle sıkılır, anında servis edilir" },
    { id: "detoks", name: "Detoks ve Shot", icon: "🌿", desc: "Küçük bardak, büyük enerji" },
    { id: "protein", name: "Protein Shake", icon: "💪", desc: "Antrenman öncesi ve sonrası için" },
    { id: "kase", name: "Kaseler", icon: "🥣", desc: "Kaşıkla yenen rengarenk mutluluk" },
    { id: "atistirma", name: "Atıştırmalıklar", icon: "🍯", desc: "Yanına en yakışan lezzetler" }
  ],
  allergens: [
    { id: "fistik", name: "Yer fıstığı", color: "#f2b84b",
      svg: '<circle cx="12" cy="7.8" r="4.6"/><circle cx="12" cy="16.2" r="4.6"/>' },
    { id: "kuruyemis", name: "Sert kabuklu yemişler", color: "#ee9a43",
      svg: '<path d="M5.5 10a6.5 5 0 0 1 13 0z"/><path d="M6.5 11.5h11c0 5-2.5 8.5-5.5 8.5s-5.5-3.500-5.500-8.500z"/><rect x="11" y="2.500" width="2" height="3"/>' },
    { id: "kabuklu", name: "Kabuklu deniz ürünleri", color: "#2f74c9",
      svg: '<ellipse cx="12" cy="13" rx="6" ry="4.5"/><path d="M3 8l3 3M21 8l-3 3M4 18l3-2M20 18l-3-2" stroke="#fff" stroke-width="1.800" stroke-linecap="round" fill="none"/>' },
    { id: "yumusakca", name: "Yumuşakçalar", color: "#37b3a5",
      svg: '<path d="M12 20.500L3.500 10a9.500 9.500 0 0 1 17 0z"/><rect x="9.500" y="19" width="5" height="2" rx="1"/>' },
    { id: "balik", name: "Balık", color: "#1f9fe0",
      svg: '<path d="M2.500 12c4-6.500 11-6.500 14.500 0-3.500 6.500-10.500 6.500-14.500 0z"/><path d="M16.500 12l5-4.500v9z"/>' },
    { id: "yumurta", name: "Yumurta", color: "#e8cf14",
      svg: '<circle cx="12" cy="12" r="8.500"/><circle cx="12" cy="12" r="3.500" style="fill:var(--c)"/>' },
    { id: "sut", name: "Süt", color: "#d8a1cc",
      svg: '<rect x="7.500" y="2.500" width="5" height="4" rx="1"/><path d="M6.500 8h7v11.500a1.500 1.500 0 0 1-1.500 1.500H8a1.500 1.500 0 0 1-1.500-1.500z"/><rect x="15" y="12" width="4.500" height="9" rx="1"/>' },
    { id: "gluten", name: "Gluten", color: "#a9552e",
      svg: '<path d="M12 22V6" stroke="#fff" stroke-width="1.800" stroke-linecap="round" fill="none"/><ellipse cx="8.800" cy="9" rx="2" ry="3.400" transform="rotate(-35 8.800 9)"/><ellipse cx="15.200" cy="9" rx="2" ry="3.400" transform="rotate(35 15.200 9)"/><ellipse cx="8.800" cy="15" rx="2" ry="3.400" transform="rotate(-35 8.800 15)"/><ellipse cx="15.200" cy="15" rx="2" ry="3.400" transform="rotate(35 15.200 15)"/><ellipse cx="12" cy="4.500" rx="1.700" ry="2.800"/>' },
    { id: "soya", name: "Soya", color: "#2ea84a",
      svg: '<path d="M3.500 15.500C3.500 8 11.500 3.500 20.500 4.500c1 8.500-5.500 16-17 11z"/><circle cx="9" cy="12" r="1.600" style="fill:var(--c)"/><circle cx="13" cy="9.800" r="1.600" style="fill:var(--c)"/><circle cx="16.200" cy="7.600" r="1.300" style="fill:var(--c)"/>' },
    { id: "susam", name: "Susam", color: "#ef8a2a",
      svg: '<ellipse cx="8" cy="8" rx="2" ry="3" transform="rotate(-30 8 8)"/><ellipse cx="16" cy="8" rx="2" ry="3" transform="rotate(30 16 8)"/><ellipse cx="12" cy="14" rx="2" ry="3"/><ellipse cx="6.500" cy="16.500" rx="1.700" ry="2.600" transform="rotate(-50 6.500 16.500)"/><ellipse cx="17.500" cy="16.500" rx="1.700" ry="2.600" transform="rotate(50 17.500 16.500)"/>' },
    { id: "kereviz", name: "Kereviz", color: "#8fcc7a",
      svg: '<rect x="5" y="4" width="3.600" height="17" rx="1.800" transform="rotate(-12 5 4)"/><rect x="10.200" y="3" width="3.600" height="18" rx="1.800"/><rect x="15.500" y="4" width="3.600" height="17" rx="1.800" transform="rotate(12 15.500 4)"/>' },
    { id: "hardal", name: "Hardal", color: "#c99a45",
      svg: '<rect x="8.500" y="2.500" width="7" height="3.500" rx="1"/><path d="M7 7.500h10v11a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2z"/><circle cx="12" cy="14" r="2.200" style="fill:var(--c)"/>' },
    { id: "lupin", name: "Acı bakla (Lüpen)", color: "#9b86c9",
      svg: '<path d="M12 22V4" stroke="#fff" stroke-width="1.800" stroke-linecap="round" fill="none"/><circle cx="12" cy="4.500" r="1.800"/><circle cx="9" cy="8.500" r="2"/><circle cx="15" cy="8.500" r="2"/><circle cx="8.500" cy="13" r="2"/><circle cx="15.500" cy="13" r="2"/><circle cx="9.500" cy="17.500" r="1.800"/><circle cx="14.500" cy="17.500" r="1.800"/>' },
    { id: "sulfit", name: "Sülfit", color: "#8e1c27",
      svg: '<path d="M6.500 3h11c0 6.500-2 9.500-5.500 9.500S6.500 9.500 6.500 3z"/><rect x="11" y="12" width="2" height="7"/><rect x="7.500" y="19" width="9" height="2" rx="1"/>' }
  ],
  items: [
    /* SMOOTHIELER */
    { id: "s1", cat: "smoothie", name: "Çilek Rüzgârı", desc: "Çilek, olgun muz, süzme yoğurt ve bir kaşık çiçek balı", kcal: 235, price: 175, allergens: ["sut"], badge: "", image: "" },
    { id: "s2", cat: "smoothie", name: "Orman Meyveli Bulut", desc: "Yaban mersini, böğürtlen, ahududu ve kremsi yoğurt", kcal: 260, price: 195, allergens: ["sut"], badge: "İmza", image: "" },
    { id: "s3", cat: "smoothie", name: "Mango Güneşi", desc: "Mango, ananas ve taze portakal suyu, yepyeni bir güne başlangıç", kcal: 220, price: 185, allergens: [], badge: "Vegan", image: "" },
    { id: "s4", cat: "smoothie", name: "Tropik Esinti", desc: "Muz, ananas, hindistan cevizi sütü ve bir tutam limon kabuğu", kcal: 290, price: 190, allergens: ["kuruyemis"], badge: "", image: "" },
    { id: "s5", cat: "smoothie", name: "Yeşil Enerji", desc: "Ispanak, yeşil elma, salatalık, zencefil ve limon", kcal: 140, price: 170, allergens: [], badge: "Vegan", image: "" },
    { id: "s6", cat: "smoothie", name: "Nar Şöleni", desc: "Nar, çilek ve kırmızı üzüm, ferah ve canlandırıcı", kcal: 205, price: 180, allergens: ["sulfit"], badge: "", image: "" },
    { id: "s7", cat: "smoothie", name: "Bademli Hurma", desc: "Badem sütü, Medjool hurma, muz ve tarçın", kcal: 310, price: 195, allergens: ["kuruyemis"], badge: "Yeni", image: "" },

    /* TAZE SIKILMIŞLAR */
    { id: "t1", cat: "taze", name: "Portakal Neşesi", desc: "Bol sulu portakalın saf hali, şekersiz", kcal: 125, price: 120, allergens: [], badge: "Vegan", image: "" },
    { id: "t2", cat: "taze", name: "Havuç Zencefil", desc: "Tatlı havuç ve acı zencefilin enerjik dansı", kcal: 110, price: 125, allergens: [], badge: "Vegan", image: "" },
    { id: "t3", cat: "taze", name: "Karpuz Nane", desc: "Buz gibi karpuz ve taze nane yaprakları", kcal: 95, price: 115, allergens: [], badge: "Vegan", image: "" },
    { id: "t4", cat: "taze", name: "Elma Salatalık Nane", desc: "Hafif, ferah ve yeşil bir mola", kcal: 85, price: 120, allergens: [], badge: "", image: "" },
    { id: "t5", cat: "taze", name: "Greyfurt Limonata", desc: "Pembe greyfurt, limon ve bir damla akçaağaç şurubu", kcal: 105, price: 125, allergens: [], badge: "Yeni", image: "" },

    /* DETOKS VE SHOT */
    { id: "d1", cat: "detoks", name: "Zencefil Ateşi Shot", desc: "Taze zencefil, limon ve karabiber", kcal: 25, price: 70, allergens: [], badge: "Vegan", image: "" },
    { id: "d2", cat: "detoks", name: "Zerdeçal Bal Shot", desc: "Zerdeçal, bal, limon ve bir tutam karabiber", kcal: 45, price: 75, allergens: [], badge: "", image: "" },
    { id: "d3", cat: "detoks", name: "Kereviz Detoks", desc: "Kereviz sapı, yeşil elma, salatalık ve maydanoz", kcal: 75, price: 135, allergens: ["kereviz"], badge: "", image: "" },
    { id: "d4", cat: "detoks", name: "Yeşil Arınma", desc: "Ispanak, spirulina, ananas ve limon", kcal: 95, price: 145, allergens: [], badge: "Vegan", image: "" },

    /* PROTEİN SHAKE */
    { id: "p1", cat: "protein", name: "Fıstık Ezmeli Muz", desc: "Süt, muz, yer fıstığı ezmesi ve yulaf ezmesi", kcal: 420, price: 215, allergens: ["fistik", "sut", "gluten"], badge: "İmza", image: "" },
    { id: "p2", cat: "protein", name: "Kakaolu Yulaf", desc: "Süt, yulaf, ham kakao ve protein tozu", kcal: 380, price: 210, allergens: ["sut", "gluten", "soya"], badge: "", image: "" },
    { id: "p3", cat: "protein", name: "Tahin Hurma", desc: "Süt, tahin, hurma ve bir tutam tarçın", kcal: 395, price: 205, allergens: ["susam", "sut"], badge: "Yeni", image: "" },

    /* KASELER */
    { id: "k1", cat: "kase", name: "Açai Kasesi", desc: "Açai püresi, muz, granola, taze meyve ve hindistan cevizi", kcal: 460, price: 245, allergens: ["gluten", "kuruyemis"], badge: "İmza", image: "" },
    { id: "k2", cat: "kase", name: "Pitaya Kasesi", desc: "Pembe pitaya, mango, çilek ve çiğ badem parçaları", kcal: 410, price: 245, allergens: ["kuruyemis"], badge: "", image: "" },
    { id: "k3", cat: "kase", name: "Granola Yoğurt Kasesi", desc: "Süzme yoğurt, ev yapımı granola, bal ve mevsim meyveleri", kcal: 440, price: 220, allergens: ["sut", "gluten", "kuruyemis"], badge: "", image: "" },

    /* ATIŞTIRMALIKLAR */
    { id: "a1", cat: "atistirma", name: "Enerji Topları", desc: "Hurma, badem, susam ve kakao, üçlü paket", kcal: 280, price: 110, allergens: ["kuruyemis", "susam"], badge: "", image: "" },
    { id: "a2", cat: "atistirma", name: "Mevsim Meyve Tabağı", desc: "Günün en taze meyveleri, ferah bir tabakta", kcal: 160, price: 140, allergens: [], badge: "Vegan", image: "" },
    { id: "a3", cat: "atistirma", name: "Yulaflı Bar", desc: "Yulaf, bal, fındık ve kuru üzüm ile fırınlanmış", kcal: 240, price: 95, allergens: ["gluten", "kuruyemis", "sulfit"], badge: "", image: "" }
  ]
};
