let books=[]

for (let i=1;i<=10;i++){
    books.push({
        title:"kitap",price:20.99,author:"Yaser huseyin",image:`image/book-${i}.png`,discount_percentage:0,pages:3343,isOnDiscount:false
    })
}

const booksJSON=JSON.stringify(books)
console.log({booksJSON})