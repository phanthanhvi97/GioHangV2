var initialState = [
    {
        id:1,
        name:'Iphone 7 plus',
        image:'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/6/0/600_iphone_7_plus_silver_800x800_1_1.jpg',
        description:'Sản phẩm của Apple',
        price: 500,
        inventory:10,
        rating:4
    },
    {
        id:2,
        name:'Galaxy note 10',
        image:'https://www.91-img.com/pictures/134587-v5-samsung-galaxy-note-10-pro-mobile-phone-large-1.jpg',
        description:'Sản phẩm của Samsung',
        price: 600,
        inventory:15,
        rating: 5
    },
    {
        id:3,
        name:'Xiaomi Mi9',
        image:'https://sudospaces.com/mobilecity-vn/images/2019/04/xiaomi-mi-9-blackk.jpg',
        description:'Sản phẩm của Xiaomi',
        price: 300,
        inventory:13,
        rating: 3
    }
]
const products = (state=initialState,action)=>{
    switch(action.type){
        default:return[...state]
    }
}
export default products