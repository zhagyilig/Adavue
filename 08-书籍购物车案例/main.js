// css

const app = new Vue({
  el: "#app",
  data: {
    books: [
      {
        id: 1,
        name: "《现代操作系统》",
        data: "2017",
        price: 88.00,
        count: 1
      },
      {
        id: 2,
        name: "《GO并发编程》",
        data: "2015",
        price: 78.00,
        count: 1
      },
      {
        id: 3,
        name: "《python cookbook》",
        data: "2018",
        price: 68.00,
        count: 1
      },
      {
        id: 1,
        name: "《innodb存储引擎》",
        data: "2007",
        price: 88.00,
        count: 1
      },
    ]
  },
  fliter: {
    showPrice(price){
      return "$" + price.toFixed(2)
    }
  }
});