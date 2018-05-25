document.querySelector("#logo").innerHTML = "<img>"
fetch('/cockpit/api/regions/data/logo?token=35c6326d55d13166a970dcfcc8836a')
.then(region => region.json())
.then(region => document.querySelector("#logo img").setAttribute("src",region.image.path));
buildmenu("top");
fetch('/cockpit/api/regions/data/start?token=35c6326d55d13166a970dcfcc8836a')
    .then(data => data.json())
    .then(data => getPage(data.id));
function buildmenu(string) {
    fetch('/cockpit/api/collections/get/menu_items?token=35c6326d55d13166a970dcfcc8836a', {
        method:"post",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
            filter: {title:string},
            populate:true
        })
    })
    .then(collections => collections.json())
    .then(collections => {document.querySelector("#menu").innerHTML = buildMenu(collections);$(document).foundation();});
}
function buildMenu(collections) {
    var returnstring = "";
    for(var i=0;i<collections.entries[0].children[0].value.length;i++) {
        returnstring += buildSubmenu(collections.entries[0].children[0].value[i]);
    }
    return returnstring;
}
function buildSubmenu(entry) {
    if(entry.children.length == 0) {
        return '<li><a onclick="javascript:getPage('+entry.link_href+')" href="#">'+entry.title+'</a></li>';
    } else {
        var childrenstring = "";
        for(var i=0;i<entry.children[0].value.length;i++) {
            childrenstring += buildSubmenu(entry.children[0].value[i]);
        }
        return `<li>
            <a href="#">`+entry.title+`</a>
            <ul class="menu vertical nested">
                `+childrenstring+`
            </ul>
        </li>`
    }
}
function getPage(string) {
    fetch('/cockpit/api/collections/get/pages?token=35c6326d55d13166a970dcfcc8836a', {
        method:"post",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
            filter: {id:string},
        })
    })
    .then(collections => collections.json())
    .then(collections => setPage(collections));
    try {
        $('.off-canvas').foundation('close');
    } catch(e) {}
}
function setPage(collection) {
    var entry = collection.entries[0];
    console.log(entry);
    var date = new Date(entry._created * 1000);
    document.querySelector(".created").innerHTML = "Erstellt am "+("0"+date.getDate()).slice(-2)+"."+("0"+(date.getMonth()+1)).slice(-2)+"."+date.getFullYear()+" um "+("0"+date.getHours()).slice(-2)+":"+("0"+date.getMinutes()).slice(-2)+" Uhr";
    document.querySelector(".page_main_content h1").innerHTML = entry.heading.toUpperCase();
    document.querySelector(".orbit-container").innerHTML = "";
    document.querySelector(".orbit-controls").style.display = "block";
    if(entry.pictures.length < 2) {
        document.querySelector(".orbit-controls").style.display = "none";
    }
    for(var i=0;i<entry.pictures.length;i++) {
        document.querySelector(".orbit-container").innerHTML += `<li class="orbit-slide">
            <figure class="orbit-figure">
                <img class="orbit-image" src="`+entry.pictures[i].path+`" alt="Bild">
                <figcaption class="orbit-caption">`+entry.pictures[i].meta.title+`</figcaption>
            </figure>
        </li>`;
    }
    setTimeout(function(){
        Foundation.reInit($('.orbit'));
    })
    document.querySelector(".page_main_content .text").innerHTML = entry.text;
    document.title = entry.title;
}