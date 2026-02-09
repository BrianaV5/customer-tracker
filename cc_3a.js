//step 2: Create Customer Records
let customers = [
    {
        name: "Brandon Smith",
        email: "BrandonSmith5@gmail.com",
        purchases: ["Camera","Phone","Book"]
    },
    {
        name: "David Brown",
        email: "DavidB@gmail.com",
        purchases: ["Hat","Pen","Umbrella"]
    },
    {
        name: "Briana Jones",
        email: "BriJones@gmail.com",
        purchases: ["Laptop","Purse","Charger"]
    }

    
];
//step 3: Add and Remove Data
customers.push({
    name: "Bob Miller",
    email: "BobMiller2@gmail.com",
    purchases: ["Ipad","Headphones","Notebook"]
});

customers.shift();//remove first customer 

console.log(customers);//check

//Step 4: Update Customer Info
customers[1].email = "BrianaJones@gmail.com";

customers[2].purchases.push("Mug");

//step 5
customers.forEach(function(customer){
    console.log(
        `name: ${customer.name}, Email: ${customer.email},total purchases: ${customer.purchases.length}`
    )
});
