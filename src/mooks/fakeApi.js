//Array de obj
const products = [
    {id: 1, category:'Apple', precio:'100' , name:'Apple', description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", img:'https://outtec.com.ar/wp-content/uploads/2022/02/Apple-Watch-Series-7-41mm-Starlight-001.jpg', stock: 5},
    {id: 2, category:'Samsung', precio:'100' , name:'Samsung', description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", img:'https://static.kemikcdn.com/2021/10/SAMSUNG-SM-R870NZGALTA-1200X1200-6.jpg', stock: 15},
    {id: 3, category:'Xiaomi', precio:'100' , name:'Xiaomi', description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", img:'https://cf.shopee.com.ar/file/0f7bf6f3201d4e9049d9ce2c3d657e75', stock: 7},
    {id: 4, category:'Apple', precio:'100' , name:'Apple', description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", img:'https://outtec.com.ar/wp-content/uploads/2022/02/Apple-Watch-Series-7-41mm-Starlight-001.jpg', stock:3},
    {id: 5, category:'Apple', precio:'100' , name:'Apple', description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", img:'https://outtec.com.ar/wp-content/uploads/2022/02/Apple-Watch-Series-7-41mm-Starlight-001.jpg', stock:10},
    {id: 6, category:'Samsung', precio:'100' , name:'Samsung', description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", img:'https://static.kemikcdn.com/2021/10/SAMSUNG-SM-R870NZGALTA-1200X1200-6.jpg', stock:4},
    {id: 7, category:'Samsung', precio:'100' , name:'Samsung', description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", img:'https://static.kemikcdn.com/2021/10/SAMSUNG-SM-R870NZGALTA-1200X1200-6.jpg', stock:4},
    {id: 8, category:'Xiaomi', precio:'100' , name:'Xiaomi', description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", img:'https://cf.shopee.com.ar/file/0f7bf6f3201d4e9049d9ce2c3d657e75', stock:4}
  ]

  export const getProds = (categoryId) => {
    return new Promise((resolve, reject) => {
        const productosFiltrados = products.filter(
            (prod) => prod.category === categoryId
        );
        setTimeout(() => {
            categoryId ? resolve(productosFiltrados) : resolve(products);
        }, 1000);
    });
};

export const getProd = (id) => {
  return new Promise((resolve, reject) => {
      const productoEncontrado = products.find(
          (prod) => prod.id === Number(id)
      );
      setTimeout(() => {
          resolve(productoEncontrado);
      }, 1000);
  });
};

