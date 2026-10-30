function show_ohk() {
    document.getElementById("ohk-main-grid-display").style.display = "grid";
    document.getElementById("half-knot-main-grid-display").style.display = "none";
    document.getElementById("reef-knot-main-grid-display").style.display = "none";
    document.getElementById("sheet-bend-main-grid-display").style.display = "none";
    document.getElementById("slip-knot-main-grid-display").style.display = "none";

    document.getElementById("ohk-button").style.background = "hsl(182, 80%, 38%)";
    document.getElementById("hk-button").style.background = "hsl(182, 80%, 45%)"; 
    document.getElementById("rk-button").style.background = "hsl(182, 80%, 45%)"; 
    document.getElementById("sb-button").style.background = "hsl(182, 80%, 45%)"; 
    document.getElementById("sk-button").style.background = "hsl(182, 80%, 45%)"; 

    let root = document.querySelector(":root");
    root.style.setProperty("--height-backgroundHeight","2000px")
}

function show_half_knot() {
    document.getElementById("ohk-main-grid-display").style.display = "none";
    document.getElementById("half-knot-main-grid-display").style.display = "grid";
    document.getElementById("reef-knot-main-grid-display").style.display = "none";
    document.getElementById("sheet-bend-main-grid-display").style.display = "none";
    document.getElementById("slip-knot-main-grid-display").style.display = "none";

    document.getElementById("ohk-button").style.background = "hsl(182, 80%, 45%)"; 
    document.getElementById("hk-button").style.background = "hsl(182, 80%, 38%)"; 
    document.getElementById("rk-button").style.background = "hsl(182, 80%, 45%)"; 
    document.getElementById("sb-button").style.background = "hsl(182, 80%, 45%)"; 
    document.getElementById("sk-button").style.background = "hsl(182, 80%, 45%)"; 

    let root = document.querySelector(":root");
    root.style.setProperty("--height-backgroundHeight","2000px")
}

function show_reef_knot() {
    document.getElementById("ohk-main-grid-display").style.display = "none";
    document.getElementById("half-knot-main-grid-display").style.display = "none";
    document.getElementById("reef-knot-main-grid-display").style.display = "grid";
    document.getElementById("sheet-bend-main-grid-display").style.display = "none";
    document.getElementById("slip-knot-main-grid-display").style.display = "none";

    document.getElementById("ohk-button").style.background = "hsl(182, 80%, 45%)"; 
    document.getElementById("hk-button").style.background = "hsl(182, 80%, 45%)"; 
    document.getElementById("rk-button").style.background = "hsl(182, 80%, 38%)"; 
    document.getElementById("sb-button").style.background = "hsl(182, 80%, 45%)"; 
    document.getElementById("sk-button").style.background = "hsl(182, 80%, 45%)"; 

    let root = document.querySelector(":root");
    root.style.setProperty("--height-backgroundHeight","2300px")
}

function show_sheet_bend() {
    document.getElementById("ohk-main-grid-display").style.display = "none";
    document.getElementById("half-knot-main-grid-display").style.display = "none";
    document.getElementById("reef-knot-main-grid-display").style.display = "none";
    document.getElementById("sheet-bend-main-grid-display").style.display = "grid";
    document.getElementById("slip-knot-main-grid-display").style.display = "none";

    document.getElementById("ohk-button").style.background = "hsl(182, 80%, 45%)"; 
    document.getElementById("hk-button").style.background = "hsl(182, 80%, 45%)"; 
    document.getElementById("rk-button").style.background = "hsl(182, 80%, 45%)"; 
    document.getElementById("sb-button").style.background = "hsl(182, 80%, 38%)";
    document.getElementById("sk-button").style.background = "hsl(182, 80%, 45%)";

    let root = document.querySelector(":root");
    root.style.setProperty("--height-backgroundHeight","2600px")
}

function show_slip_knot() {
    document.getElementById("ohk-main-grid-display").style.display = "none";
    document.getElementById("half-knot-main-grid-display").style.display = "none";
    document.getElementById("reef-knot-main-grid-display").style.display = "none";
    document.getElementById("sheet-bend-main-grid-display").style.display = "none";
    document.getElementById("slip-knot-main-grid-display").style.display = "grid";

    document.getElementById("ohk-button").style.background = "hsl(182, 80%, 45%)";
    document.getElementById("hk-button").style.background = "hsl(182, 80%, 45%)" ;
    document.getElementById("rk-button").style.background = "hsl(182, 80%, 45%)" ;
    document.getElementById("sb-button").style.background = "hsl(182, 80%, 45%)" ;
    document.getElementById("sk-button").style.background = "hsl(182, 80%, 38%)" ;

    let root = document.querySelector(":root");
    root.style.setProperty("--height-backgroundHeight","2600px")
}

