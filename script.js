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

let p = document.querySelector("p")

arr.forEach(item => {
    let x = document.createElement("div");
    x.innerHTML = `<h2>${item.page_title}</h2> `
    x.setAttribute("class", "title");
    let y = document.createElement("div");
    y.innerHTML = `<p>${item.plans[0].name}</p> <p>${item.plans[1].name}</p> <p>${item.plans[2].name}</p> <button>Upgrade Now</button>`;
    y.setAttribute("class", "plans");
    let z = document.createElement("div");
    z.innerHTML = `<span>${item.tabs[0].title}</span> <span>${item.tabs[1].title}</span> <span >${item.tabs[2].title}</span>`;
    z.setAttribute("class", "tabs");

    block.append(x)
    x.append(y)
    block.append(z)

})


let block1 = document.querySelector(".block1");

arr.forEach(item1 => {
    let s = document.createElement("div");
    let sys0 = item1.tabs[2].data.systems[0];
    s.innerHTML = `<a id =iconb onclick = "btn" ><i class="fas fa-angle-right"></i> </a> <p>${sys0.system_name}</p> <p>${sys0.id}</p><p>${sys0.created_date}</p><p>${sys0.active_licenses}</p><button class = "btn1">Add License</button> <button class = "btnremove1">Remove</button>`
    s.setAttribute("class", "systems1");
    let r = document.createElement("div");
    let sys1 = item1.tabs[2].data.systems[1];
    r.setAttribute("class", "systems2");
    r.innerHTML = `<a id =iconb1 onclick = "btn1" ><i class="fas fa-angle-right"></i> </a> <p>${sys1.system_name}</p><p class = "id2">${sys1.id}</p><p class = "created2">${sys1.created_date}</p><p class = "licenses2">${sys1.active_licenses}</p><button class = "btn1">Add License</button> <button class = "btnremove1">Remove</button>`
    

    let h = document.createElement("div")
    h.setAttribute("id", "systems3")
    let subsys0 = item1.tabs[2].data.subsystems[0]
    h.innerHTML = `<p>${subsys0.licenses}</p> <p>${subsys0.system_id}</p> <p>${subsys0.expires}</p> <p>${subsys0.cost}</p> <p>Download</p>`

    let t = document.createElement("div")
    t.setAttribute("id", "systems4")
    let subsys1 = item1.tabs[2].data.subsystems[1]
    t.innerHTML = `  <p>${subsys1.licenses}</p> <p>${subsys1.system_id}</p> <p>${subsys1.expires}</p> <p>${subsys1.cost}</p> <p>Download</p>`

    let f = document.createElement("div")
    f.setAttribute("id", "systems5")
    let subsys2 = item1.tabs[2].data.subsystems[2]
    f.innerHTML = `  <p>${subsys2.licenses}</p> <p>${subsys2.system_id}</p> <p>${subsys2.expires}</p> <p>${subsys2.cost}</p> <p>Download</p>`

    let q = document.createElement("div")
    q.setAttribute("id", "systems6")
    let subsys3 = item1.tabs[2].data.subsystems[3]
    q.innerHTML = `  <p>${subsys3.licenses}</p> <p>${subsys3.system_id}</p> <p>${subsys3.expires}</p> <p>${subsys3.cost}</p> <p>Download</p>`


    document.onclick = btn;

    function btn() {
        systems3.style = "Display: flex; transform: translateY(0px)";
        iconb.style = "transform: rotate(90deg)";
        systems4.style = "Display: flex; transform: translateY(0px)";
        systems5.style = "Display: flex; transform: translateY(0px)";
        systems6.style = "Display: flex; transform: translateY(0px)";
    }
    

    block1.append(s)

    block1.append(h)
    block1.append(t)
    block1.append(f)
    block1.append(q)
    block1.append(r)
});