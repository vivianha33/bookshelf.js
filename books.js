var book = [
    {
        title: "The Giver",
        author: "N/A", 
        stars: 4,
        color: color(255, 0, 0)
    },
    {
        title: "Percy Jackson",
        author: "Rick Riordan",
        stars:5,
        color: color(9, 0, 255)
    },
    {
        title: "Harry Potter", 
        author: "Rowling", 
        stars:5,
        color: color(235, 101, 12)
    }
];

// draw shelf
fill(173, 117, 33);
rect(0, 120, width, 10);


for(var i = 0; i < book.length; i++){
    fill(book[i].color);
    rect(i * 100, 20, 90, 100);
    fill(0, 0, 0);
    text(book[i].title, i * 100 + 10, 29, 70, 100);
    text(book[i].author, i* 100 + 10, 80, 70, 100);
}


for (var i = 0; i < book.length; i++) {
    image(getImage("cute/Star"), 13 + i * 20, 90, 20, 30);
}

