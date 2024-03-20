let make_sandwich=(...items:string[])=>{
    console.log("We makes Your choice.!");
    items.forEach(items=>{
        console.log("-> " + items);
    }); console.log("Enjoy your Sandwich\n");
};
make_sandwich("Tomato","Meyonise","katchup");
make_sandwich("Cucumber","onion","meyonise");
make_sandwich("jam","jelly");