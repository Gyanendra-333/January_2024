(function () {

    const customerImage = document.querySelector("#customer-img");
    const customerName = document.querySelector("#customer-name");
    const customerText = document.querySelector("#customer-text");
    const btn = document.querySelectorAll(".btn");

    let index = 0;
    const customers = [];

    function Customer(img, name, text) {
        this.img = img;
        this.name = name;
        this.text = text;
    }
    function crateCustomer(img, name, text) {
        let Img = `./img/${img}.jpg`
        let customer = new Customer(Imgmg, name, text)

        customer.push(customer);
    }
    crateCustomer(0, "Jhon", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis rerum deleni quasi fuga dolorum sed quaerat reprehenderit eligendi natus aperiam ? Repellat dolor at quasi ducimus voluptatibus consectetur maxime perferendi voluptate.")

    crateCustomer(1, "Willium", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis rerum deleni quasi fuga dolorum sed quaerat reprehenderit eligendi natus aperiam ? Repellat dolor at quasi ducimus voluptatibus consectetur maxime perferendi voluptate.")

    crateCustomer(2, "Karley", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis rerum deleni quasi fuga dolorum sed quaerat reprehenderit eligendi natus aperiam ? Repellat dolor at quasi ducimus voluptatibus consectetur maxime perferendi voluptate.")

    crateCustomer(3, "Milley", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis rerum deleni quasi fuga dolorum sed quaerat reprehenderit eligendi natus aperiam ? Repellat dolor at quasi ducimus voluptatibus consectetur maxime perferendi voluptate.")

    crateCustomer(4, "Kelly", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis rerum deleni quasi fuga dolorum sed quaerat reprehenderit eligendi natus aperiam ? Repellat dolor at quasi ducimus voluptatibus consectetur maxime perferendi voluptate.")

    crateCustomer(5, "Wanda", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis rerum deleni quasi fuga dolorum sed quaerat reprehenderit eligendi natus aperiam ? Repellat dolor at quasi ducimus voluptatibus consectetur maxime perferendi voluptate.")

    btn.forEach(function (button) {
        button.addEventListener("click", function (e) {
            if (e.target.parentElement.classList.contains("prevBtn")) {
                if (index === 0) {
                    index = customers.length
                }
                index--;
                customerImage.src = customers[index].img;
                customerName.textContent = customers[index].name;
                customerText.textContent = customers[index].text;
            }
            if (e.target.parentElement.classList.contains("nextBtn")) {
                index++
                if (index === customers.length) {
                    index = 0
                }
                customerImage.src = customers[index].img;
                customerName.textContent = customers[index].name;
                customerText.textContent = customers[index].text;
            }
        })
    })

})()