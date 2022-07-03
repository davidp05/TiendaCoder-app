//Array de obj
const products = [
    {id:'01', category:'Apple', precio:'100' , name:'random1', description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", img:'https://outtec.com.ar/wp-content/uploads/2022/02/Apple-Watch-Series-7-41mm-Starlight-001.jpg', stock:5},
    {id:'02', category:'Apple', precio:'100' , name:'random2', description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", img:'https://outtec.com.ar/wp-content/uploads/2022/02/Apple-Watch-Series-7-41mm-Starlight-001.jpg', stock:15},
    {id:'03', category:'Apple', precio:'100' , name:'random3', description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", img:'https://outtec.com.ar/wp-content/uploads/2022/02/Apple-Watch-Series-7-41mm-Starlight-001.jpg', stock:7},
    {id:'04', category:'Apple', precio:'100' , name:'random4', description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", img:'https://outtec.com.ar/wp-content/uploads/2022/02/Apple-Watch-Series-7-41mm-Starlight-001.jpg', stock:3},
    {id:'05', category:'Apple', precio:'100' , name:'random5', description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", img:'https://outtec.com.ar/wp-content/uploads/2022/02/Apple-Watch-Series-7-41mm-Starlight-001.jpg', stock:10},
    {id:'06', category:'Apple', precio:'100' , name:'random6', description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", img:'https://outtec.com.ar/wp-content/uploads/2022/02/Apple-Watch-Series-7-41mm-Starlight-001.jpg', stock:4},
    {id:'06', category:'Apple', precio:'100' , name:'random6', description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", img:'https://outtec.com.ar/wp-content/uploads/2022/02/Apple-Watch-Series-7-41mm-Starlight-001.jpg', stock:4},
    {id:'06', category:'Apple', precio:'100' , name:'random6', description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", img:'https://outtec.com.ar/wp-content/uploads/2022/02/Apple-Watch-Series-7-41mm-Starlight-001.jpg', stock:4}
  ]

  export const getData = new Promise ((resolve, reject) =>{
    //acciones
    let condition = true
    setTimeout(()=>{
      if(condition){
        resolve(products)
      }else{
        reject('salio mal :(')
      }
    },3000)
  })

//   export const getProd = (id) => {
//     return new Promise((resolve, reject) => {
//         const productoEncontrado = productos.find(
//             (prod) => prod.id === Number(id)
//         );
//         setTimeout(() => {
//             resolve(productoEncontrado);
//         }, 1000);
//     });
// };