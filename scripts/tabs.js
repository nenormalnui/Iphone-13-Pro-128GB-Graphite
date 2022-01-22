const TabsFunc = () => {
  const tabs = document.querySelectorAll(".card-detail__change");
  const TabsTitle = document.querySelector(".card-details__title");
  const TabsPrice = document.querySelector(".card-details__price");
  const TabsImage = document.querySelector(".card__image_item");
  const title = document.querySelector("title");

  const TabsOptions = [
    {
      name: "Graphite",
      memory: "128",
      price: 99990,
      image: "img/iPhone-graphite.webp",
    },
    {
      name: "Silver",
      memory: "256",
      price: 109990,
      image: "img/iPhone-silver.webp",
    },
    {
      name: "Sierra Blue",
      memory: "512",
      price: 129990,
      image: "img/iPhone-sierra_blue.webp",
    },
  ];

  const ChangeText = (index) => {
    TabsTitle.textContent = `Смартфон Apple iPhone 13 Pro ${TabsOptions[index].memory}GB ${TabsOptions[index].name}`;
    TabsPrice.textContent = `${TabsOptions[index].price}₽`;
    title.textContent = `Смартфон Apple iPhone 13 Pro ${TabsOptions[index].memory}GB ${TabsOptions[index].name}`;

    TabsImage.setAttribute("src", TabsOptions[index].image);
  };

  const ChangeActiveTabs = (indexClickedTab) => {
    tabs.forEach((tab, index) => {
      tab.classList.remove("active");

      if (index === indexClickedTab) {
        tab.classList.add("active");
      }
    });

    ChangeText(indexClickedTab);
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      ChangeActiveTabs(index);
    });
  });

  ChangeText(0);
};

TabsFunc()