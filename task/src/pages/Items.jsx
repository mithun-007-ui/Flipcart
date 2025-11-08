import React from 'react';

function Items({ addToCart }) {
  const products=[
{
  name: 'Dell Monitor',
  price: 8999,
  img: 'https://rukminim2.flixcart.com/image/240/240/xif0q/monitor/w/i/f/-original-imahagy2cefszqgy.jpeg?q=60',
  
},
{
  name: 'Mens Shirt',
  price: 499,
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_6YnfucmopVUMlbN94esbsHZmBgN-wpCrMw&s',
},
{
  name: 'Toys',
  price: 299,
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGHAakaOLS5hr6gA63EjTwABMIuxKu_fR-Cw&s',
},
{
  name: 'Nothing Phone',
  price: 28999,
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx2k9GZttIDrj9sUEm44FasN7FnVU0Yd73ow&s',
},
{
  name: 'Smart Watch',
  price: 1499,
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhuvm0gQ8ulHo2YGZHkdK-_Mno0czWevaJFw&s',
},
{
  name: 'Bluetooth Speaker',
  price: 999,
  img: 'https://rukminim2.flixcart.com/image/240/240/kcf4lu80/speaker/mobile-tablet-speaker/h/u/f/srs-xb23-sony-original-imaftk66vjxp86h5.jpeg?q=60',
},
{
  name: 'Office Chair',
  price: 3999,
  img: 'https://rukminim2.flixcart.com/image/240/240/xif0q/office-study-chair/z/t/2/1-teak-sagun-58-42-js-29-beaatho-121-92-original-imagrwgshgp2bhwv.jpeg?q=60',
},
{
  name: 'Sports Shoe',
  price: 799,
  img: 'https://rukminim2.flixcart.com/image/420/420/xif0q/shoe/1/x/x/10-sh2wrb2-10-foot-trends-black-original-imahhjphaz46rzzu.jpeg?q=60',
},
{
  name: 'Wireless Headphone',
  price: 1299,
  img: 'https://rukminim2.flixcart.com/image/420/420/xif0q/shopsy-headphone/x/9/k/bluetooth-yes-tws-nexx-arham-original-imagyvcgugzpkz98.jpeg?q=60',
},
  ];

  return (
    <div>
      <br/><br/><br/><br/><br/>
      <div
        style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '30px',
        marginTop: '30px',
        textAlign: 'center',
        }}
      >
        {products.map((item, index) => (
          <div key={index}>
            <img src={item.img} width="220" height="220" alt={item.name} />
            <p>{item.name}</p>
            <p>₹{item.price}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Items;
