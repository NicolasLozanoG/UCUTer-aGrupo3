const PRODUCTS = [
{ id: "c1", name: "Espresso", price: 120, category: "Café", img: "☕️", desc: "Corto e intenso." },
{ id: "c2", name: "Latte", price: 180, category: "Café", img: "🥛☕️", desc: "Con leche espumada." },
{ id: "t1", name: "Té Verde", price: 140, category: "Té", img: "🍵", desc: "Suave y herbal." },
{ id: "t2", name: "Té Chai", price: 160, category: "Té", img: "🫖", desc: "Especias aromáticas." },
{ id: "p1", name: "Medialuna", price: 90, category: "Pastelería", img: "🥐", desc: "Mantecosas y doradas." },
{ id: "p2", name: "Torta Choc", price: 220, category: "Pastelería", img: "🍰", desc: "Fudge intenso." },
{ id: "s1", name: "Sándwich Jamón",price: 260, category: "Sándwiches", img: "🥪", desc: "Clásico de la casa." },
{ id: "s2", name: "Veggie Grill", price: 280, category: "Sándwiches", img: "🥗", desc: "Verduras asadas." }
];

let categoryFilter = "All"; //para filtrar por té, café, sándwiches, por defecto todos.

function renderProductList(filter=""){
    const list = document.getElementById("product-list");
    list.innerHTML = "";
    let products = PRODUCTS.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()));

    if (categoryFilter !== "All") { //se agrega un filtrado extra por cateoría
        products = products.filter(p => p.category === categoryFilter);
    } 

    const orderCriteria = document.getElementById("orderCriteria").value;

    if(orderCriteria === "price-asc") products.sort((a,b) => a.price - b.price);
    if(orderCriteria === "price-desc") products.sort((a,b) => b.price - a.price);
    if(orderCriteria === "name-asc") products.sort((a,b) => a.name.localeCompare(b.name));
    if(orderCriteria === "name-desc") products.sort((a,b) => b.name.localeCompare(a.name));

    products.forEach(p => {
        const li = document.createElement("li");
        li.innerHTML = `
      <h3>${p.img} ${p.name}</h3>
      <p>${p.desc}</p>
      <p><strong>$${p.price}</strong></p>
      <button>Añadir al carrito</button> ` //onclick='agregarAlCarrito("${p.id}")' para cuando agreguemos la funcion 
    ;
        list.appendChild(li);
    });
}






renderProductList();

document.getElementById("orderCriteria").addEventListener("change", () => renderProductList());// para que se re renderice al cambiar el filtro.