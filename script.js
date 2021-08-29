let block = document.querySelector(".block");




let arr = [
    {
        page_title: "Licenses",

        plans: [
            {
                name: "Free",
                active: true,
                slug: "free_license",
            },
            {
                name: "Pro",
                active: false,
                slug: "pro_license",
            },
            {
                name: "VIP",
                active: false,
                slug: "vip_license",
            },
        ],
        tabs: [
            {
                title: "Subscription",
                data: {},
            },
            {
                title: "Outright",
                data: {},
            },
            {
                title: "Offline Activation",
                data: {
                    systems: [
                        {
                            system_name: "James-Main-Mackbook",
                            id: 91520,
                            created_date: "01 Jan 2019",
                            active_licenses: 2,
                        },
                        {
                            system_name: "James-Laptop",
                            id: 91518,
                            created_date: "15 Jan 2020",
                            active_licenses: 1,
                        },
                    ],
                    subsystems: [
                        {
                            system_id: 91520,
                            licenses: "Lightworks Pro",
                            expires: "Never",
                            cost: "30.00",
                        },
                        {
                            system_id: 91520,
                            licenses: "QScan Max",
                            expires: "29 Aug 2021",
                            cost: "26.00",
                        },
                        {
                            system_id: 91518,
                            licenses: "Lightworks Pro",
                            expires: "Never",
                            cost: "30.00",
                        },
                        {
                            system_id: 91518,
                            licenses: "QScan Max",
                            expires: "29 Jul 2021",
                            cost: "78.00",
                        },
                    ],
                },
            },
        ],
    },
];
console.log(arr);
let systems1 = document.querySelector(".systems1");
let systems2 = document.querySelector(".systems2");
let p = document.querySelector("p")

arr.forEach(item => {
    let x = document.createElement("div");
    x.innerHTML = `<h2>${item.page_title}</h2> `
    x.setAttribute("class", "title");
    let y = document.createElement("div");
    y.innerHTML = `<p>${item.plans[0].name}</p> <p>${item.plans[1].name}</p> <p>${item.plans[2].name}</p> <button>Upgrade Now</button>`;
    y.setAttribute("class", "plans");
    let z = document.createElement("div");
    z.innerHTML = `<span>${item.tabs[0].title}</span> <span>${item.tabs[1].title}</span> <span id="system">${item.tabs[2].title}</span>`;
    z.setAttribute("class", "tabs");
    console.log(item.tabs[2].data.systems[0]);

    block.append(x)
    x.append(y)
    block.append(z)
})


let block1 = document.querySelector(".block1");

arr.forEach(item1 => {
    let s = document.createElement("div");
    s.innerHTML = `<p>${item1.tabs[2].data.systems[0].system_name}</p> <p>${item1.tabs[2].data.systems[0].id}</p><p>${item1.tabs[2].data.systems[0].created_date}</p><p>${item1.tabs[2].data.systems[0].active_licenses}</p><button class = "btn1">Add License</button> <button class = "btnremove1">Remove</button>`
    s.setAttribute("class","systems1");
    let r = document.createElement("div");
    r.innerHTML = `<p>${item1.tabs[2].data.systems[1].system_name}</p><p class = "id2">${item1.tabs[2].data.systems[1].id}</p><p class = "created2">${item1.tabs[2].data.systems[1].created_date}</p><p class = "licenses2">${item1.tabs[2].data.systems[1].active_licenses}</p><button class = "btn1">Add License</button> <button class = "btnremove1">Remove</button>`
    r.setAttribute("class","systems2");
    block1.append(s)
    block1.append(r)
});