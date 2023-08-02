window.onload = () => {
    loadBookList();

    loadBookMap();
};

const bookList = new Array();
bookList.push({
    bookName: "도레미파솔라시도",
    author: "q3",
    publisher: "나무북스"
});
bookList.push({
    bookName: "qw12",
    author: "q3",
    publisher: "zxcv"
});
bookList.push({
    bookName: "qw23",
    author: "q4",
    publisher: "zxcv"
});
bookList.push({
    bookName: "qw45",
    author: "q5",
    publisher: "zxcv"
});
bookList.push({
    bookName: "qw56",
    author: "q6",
    publisher: "zxcv"
});

const loadBookList = () => {
    const bookListOl = document.querySelector(".book-list");

    for(let i = 0; i < bookList.length; i++) {
        bookListOl.innerHTML += `
            <li>
                <span>${bookList[i].bookName}</span> |
                <span>${bookList[i].author}</span> |
                <span>${bookList[i].publisher}</span>
            </li>
        `
    }
};

// react에서 많이 사용
const loadBookMap = () => {
    const bookMapOl = document.querySelector(".book-list-map");

    // 중복?되는 변수명을 모두 없애기
    bookMapOl.innerHTML = bookList.map((book) => {
        return `
            <li>
                <span>${book.bookName} /</span> |
                <span>${book.author} /</span> |
                <span>${book.publisher}</span>
            </li>
        `
    }).join("");
};

const addBookOnClickHandler = () => {
    const book = {
        bookName: document.querySelector(".book-name-input").value,
        author: document.querySelector(".book-author-input").value,
        publisher: document.querySelector(".book-publisher-input").value
    }
    bookList.push(book);
    loadBookMap();
    
}




