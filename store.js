function addItem(e) {
    var item = e.id;
    var cart = document.getElementById("cart");
    var bool = false; //true if chil already exists
    var change = null;

    for(i = 0; i < cart.children.length && !bool; i++){
        if(cart.children[i].id == item) {
            bool = true;
            change = cart.children[i];
        }
    }

    if(!bool){
        var li = document.createElement('li');
        li.value = 1;
        li.className = "list-group-item border-0";
        li.id = item;
        li.innerHTML = "<span class='badge badge-pill badge-info'>" + li.value + "</span> " + item;
        cart.appendChild(li);
    } else {
        change.value++;
        change.innerHTML = "<span class='badge badge-pill badge-info'>" + change.value + "</span> " + change.id;
    }
}