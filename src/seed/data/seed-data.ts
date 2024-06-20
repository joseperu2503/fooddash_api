import { CreateRestaurantCategoryDto } from 'src/restaurant-categories/dto/create-restaurant-category.dto';
import { CreateDishCategoryDto } from 'src/dish-categories/dto/create-dish-category.dto';
import { CreateDishDto } from 'src/dishes/dto/create-dish.dto';
import { CreateRestaurantDto } from 'src/restaurants/dto/create-restaurant.dto';
import { CreateToppingCategoryDto } from 'src/topping-categories/dto/create-topping-category.dto';
import { CreateToppingDto } from 'src/toppings/dto/create-topping.dto';

interface SeedData {
  restaurants: CreateRestaurantDto[];
  restaurantCategories: CreateRestaurantCategoryDto[];
  dishCategories: CreateDishCategoryDto[];
  dishes: CreateDishDto[];
  toppingCategories: CreateToppingCategoryDto[];
  toppings: CreateToppingDto[];
}

export const initialData: SeedData = {
  restaurantCategories: [
    {
      name: 'Pizza',
      image:
        'https://files.joseperezgil.com/images/delivery/categories/pizza_3d.png',
    },
    {
      name: 'Burger',
      image:
        'https://files.joseperezgil.com/images/delivery/categories/burger_3d.png',
    },
    {
      name: 'Taco',
      image:
        'https://files.joseperezgil.com/images/delivery/categories/taco_3d.png',
    },
    {
      name: 'Sushi',
      image:
        'https://files.joseperezgil.com/images/delivery/categories/sushi_3d.png',
    },
    {
      name: 'Coffee',
      image:
        'https://files.joseperezgil.com/images/delivery/categories/coffee_3d.png',
    },
    {
      name: 'Fried Chicken',
      image:
        'https://files.joseperezgil.com/images/delivery/categories/fried_chicken_3d.png',
    },
    {
      name: 'Dessert',
      image:
        'https://files.joseperezgil.com/images/delivery/categories/cake_3d.png',
    },
  ],
  restaurants: [
    {
      name: "Dunkin'",
      address: '1104 Lexington Ave, New York, NY 10075, EE. UU.',
      logo: 'https://img.cdn4dd.com/p/media/restaurant/cover_square/98851814-9e10-467f-8867-ec8586529624.png',
      backdrop:
        'https://doordash-static.s3.amazonaws.com/media/store/header/eb3a3f37-7a8b-49b6-ab0a-5c6f349024f1.jpg',
      latitude: 40.77391679836528,
      longitude: -73.95988361975252,
      openTime: '00:00',
      closeTime: '00:00',
      restaurantCategoryId: 5,
    },
    {
      name: 'Tanta',
      address: 'Jr. Carpaccio 290 San Borja',
      logo: 'https://images.rappi.pe/restaurants_logo/logo-1684437847530.png',
      backdrop:
        'https://images.rappi.pe/restaurants_background/petanta-1677101054738-1683221690453.jpg',
      latitude: -12.090512139562742,
      longitude: -77.00409797064822,
      openTime: '09:00',
      closeTime: '18:30',
      restaurantCategoryId: 1,
    },
    {
      name: 'Maketto',
      address: 'AV. MARISCAL LA MAR 830 MIRAFLORES',
      logo: 'https://images.rappi.pe/restaurants_logo/1f46280b-b244-4079-b394-06ed70de7e20-1694806836364.png',
      backdrop:
        'https://images.rappi.pe/restaurants_background/2441bd28-147b-4dc2-80fa-2486c9e40787-1694806821726.png',
      latitude: -12.112967536869505,
      longitude: -77.04578402675554,
      openTime: '09:00',
      closeTime: '18:30',
      restaurantCategoryId: 1,
    },
    {
      name: 'Pinkberry',
      address: '7 W 32nd St, New York, NY 10001, Estados Unidos',
      logo: 'https://img.cdn4dd.com/p/fit=contain,width=100,height=100,format=auto,quality=95/media/restaurant/cover_square/cc2d7091-9bc7-4126-9c16-6390684d1ca0.png',
      backdrop:
        'https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=500,height=500,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/1859.jpg',
      latitude: 40.747732077419705,
      longitude: -73.98602679128479,
      openTime: '09:00',
      closeTime: '18:30',
      restaurantCategoryId: 5,
    },
    {
      name: 'Burger King',
      address: '327 W 42nd St, New York, NY 10036, EE. UU.',
      logo: 'https://img.cdn4dd.com/p/fit=contain,width=100,height=100,format=auto,quality=95/media/restaurant/cover_square/d43b7d43-f85b-4645-a31b-89abf0d9a407.png',
      backdrop:
        'https://doordash-static.s3.amazonaws.com/media/store/header/2288ab90-8ff9-4095-a468-347a956702f9.jpg',
      latitude: 40.75820687028439,
      longitude: -73.99099756235016,
      openTime: '09:00',
      closeTime: '18:30',
      restaurantCategoryId: 1,
    },
    {
      name: "Joli's Korean Fried Chicken",
      address: '625 9th Ave, New York, NY 10036, EE. UU.',
      logo: 'https://img.cdn4dd.com/p/fit=contain,width=100,height=100,format=auto,quality=95/media/restaurant/cover_square/4b68244f-25ae-4425-88a6-f6351e62c6a5.jpg',
      backdrop:
        'https://doordash-static.s3.amazonaws.com/media/store/header/27abe6d0-726e-4d69-833c-bbfd2a0b2d03.jpg',
      latitude: 40.76013870481429,
      longitude: -73.99175832013128,
      openTime: '09:00',
      closeTime: '18:30',
      restaurantCategoryId: 1,
    },
    {
      name: "Tex's Chicken and Burgers",
      address: '2144 Frederick Douglass Blvd, New York, NY 10026, EE. UU.',
      logo: 'https://img.cdn4dd.com/p/fit=contain,width=100,height=100,format=auto,quality=95/media/restaurant/cover_square/58127dc8-8924-448c-9451-83f831b70362.png',
      backdrop:
        'https://doordash-static.s3.amazonaws.com/media/store/header/5f480ef4-211a-42a1-9b8c-e6c1e89feb3d.45',
      latitude: 40.80432521741583,
      longitude: -73.95530026442604,
      openTime: '09:00',
      closeTime: '18:30',
      restaurantCategoryId: 1,
    },
    {
      name: "Muf's Muffin Shop",
      address: '937 1st Ave., New York, NY 10022, EE. UU.',
      logo: 'https://img.cdn4dd.com/p/fit=contain,width=100,height=100,format=auto,quality=95/media/restaurant/cover_square/288d73de-5c42-475e-ae9b-a22b852dfd13.png',
      backdrop:
        'https://doordash-static.s3.amazonaws.com/media/store/header/42b2c3d0-0c4a-4278-82f1-7df8d041ed60.jpg',
      latitude: 40.7550618989992,
      longitude: -73.96567177787905,
      openTime: '00:00',
      closeTime: '00:00',
      restaurantCategoryId: 1,
    },
    {
      name: 'Ritz Diner',
      address: '1133 1st Ave., New York, NY 10065, EE. UU.',
      logo: 'https://img.cdn4dd.com/p/fit=contain,width=100,height=100,format=auto,quality=95/media/restaurant/cover_square/4cc822e9-98ef-470a-9f09-53dc3e641587.png',
      backdrop:
        'https://doordash-static.s3.amazonaws.com/media/store/header/7dd7203b-4375-47dc-af26-a8e23221cebf.579',
      latitude: 40.76185452170965,
      longitude: -73.96069449328802,
      openTime: '00:00',
      closeTime: '00:00',
      restaurantCategoryId: 1,
    },
    {
      name: 'Naka Sushi & Izakaya',
      address: '74 5th Ave, New York, NY 10003, EE. UU.',
      logo: 'https://img.cdn4dd.com/p/fit=contain,width=100,height=100,format=auto,quality=95/media/restaurant/cover_square/035e9197-8731-4156-972c-bca500e7da8e.png',
      backdrop:
        'https://doordash-static.s3.amazonaws.com/media/store/header/2404b561-77cb-472d-9a3e-1c6fce90906d.jpg',
      latitude: 40.73584694300126,
      longitude: -73.99403316244043,
      openTime: '10:00',
      closeTime: '02:00',
      restaurantCategoryId: 1,
    },
    {
      name: 'Milk Bar',
      address: '561 Columbus Ave, New York, NY 10024, EE. UU.',
      logo: 'https://img.cdn4dd.com/p/fit=contain,width=100,height=100,format=auto,quality=95/media/restaurant/cover_square/06652ca8-d411-452e-9e2f-fd74854226b9.png',
      backdrop:
        'https://doordash-static.s3.amazonaws.com/media/store/header/5adcbd1c-6842-4c34-b658-bc1e512924f2.jpg',
      latitude: 40.78729874865438,
      longitude: -73.97132013357616,
      openTime: '9:00',
      closeTime: '23:25',
      restaurantCategoryId: 1,
    },
    {
      name: 'Taco Bell',
      address: '1614 2nd Ave, New York, NY 10028, United States',
      logo: 'https://img.cdn4dd.com/p/fit=contain,width=100,height=100,format=auto,quality=95/media/restaurant/cover_square/d439d236-e807-41d4-a7ea-0f83500de5c6.png',
      backdrop:
        'https://doordash-static.s3.amazonaws.com/media/store/header/889fac0f-5ca7-4b0f-b2b1-cb9b579986b0.55',
      latitude: 40.77633761143043,
      longitude: -73.95263068099224,
      openTime: '10:00',
      closeTime: '4:30',
      restaurantCategoryId: 1,
    },
    {
      name: 'Popeyes Louisiana Kitchen',
      address: '934 8th Ave, New York, NY 10019, EE. UU.',
      logo: 'https://img.cdn4dd.com/p/fit=contain,width=100,height=100,format=auto,quality=95/media/restaurant/cover_square/12ee8636-2193-4972-b110-9be6a9a74f59.png',
      backdrop:
        'https://doordash-static.s3.amazonaws.com/media/store/header/9e8e6638-0835-4e91-b3a7-7a48bcae89bb.png',
      latitude: 40.76563668839061,
      longitude: -73.98340552015794,
      openTime: '9:00',
      closeTime: '6:00',
      restaurantCategoryId: 1,
    },
    {
      name: 'Subway',
      address: '1256 Lexington Ave, New York, NY 10028, EE. UU.',
      logo: 'https://img.cdn4dd.com/p/fit=contain,width=100,height=100,format=auto,quality=95/media/restaurant/cover_square/Subway-app.jpg',
      backdrop:
        'https://doordash-static.s3.amazonaws.com/media/store/header/155fa18a-3953-413d-9064-73b372513b4c.png',
      latitude: 40.77882198852454,
      longitude: -73.95638903555977,
      openTime: '00:00',
      closeTime: '00:00',
      restaurantCategoryId: 1,
    },
    {
      name: 'Pizza Hut',
      address: '940 Columbus Ave, New York, NY 10025, EE. UU.',
      logo: 'https://img.cdn4dd.com/p/fit=contain,width=100,height=100,format=auto,quality=95/media/restaurant/cover_square/ade9928a-19bf-46f4-aff6-b746aff3824f.png',
      backdrop:
        'https://doordash-static.s3.amazonaws.com/media/store/header/cfe9e0cb-497e-48a2-aed7-07348d870bdd.png',
      latitude: 40.79963470425142,
      longitude: -73.96296780473563,
      openTime: '10:00',
      closeTime: '1:40',
      restaurantCategoryId: 1,
    },
  ],
  toppingCategories: [
    {
      description: 'Escoge Sabor de Empanada',
      minToppings: 1,
      maxToppings: 1,
      restaurantId: 2,
    },
    {
      description: 'Elige la Temperatura',
      minToppings: 1,
      maxToppings: 1,
      restaurantId: 2,
    },
    {
      description: '¿Desea Ají?',
      minToppings: 1,
      maxToppings: 1,
      restaurantId: 2,
    },
    {
      description: 'Añade Un Postre',
      minToppings: 0,
      maxToppings: 3,
      restaurantId: 2,
    },
    {
      description: '¿Deseas Agregar Bebida?',
      minToppings: 0,
      maxToppings: 5,
      restaurantId: 2,
    },
    {
      description: '¿Deseas Cubiertos?',
      minToppings: 0,
      maxToppings: 1,
      restaurantId: 2,
    },
  ],
  toppings: [
    {
      description: 'De Espinaca y Queso Azul',
      maxLimit: 1,
      toppingCategoryId: 1,
      price: 0,
    },
    {
      description: 'Pollo',
      maxLimit: 1,
      toppingCategoryId: 1,
      price: 0,
    },
    {
      description: 'Lomo Saltado',
      maxLimit: 1,
      toppingCategoryId: 1,
      price: 0,
    },
    {
      description: 'Ají de Gallina',
      maxLimit: 1,
      toppingCategoryId: 1,
      price: 0,
    },
    {
      description: 'Cuadril',
      maxLimit: 1,
      toppingCategoryId: 1,
      price: 0,
    },
    {
      description: 'Frío',
      maxLimit: 1,
      toppingCategoryId: 2,
      price: 0,
    },
    {
      description: 'Caliente',
      maxLimit: 1,
      toppingCategoryId: 2,
      price: 0,
    },
    {
      description: 'Si',
      maxLimit: 1,
      toppingCategoryId: 3,
      price: 0,
    },
    {
      description: 'No',
      maxLimit: 1,
      toppingCategoryId: 3,
      price: 0,
    },
    {
      description: 'Copita Tres Leches',
      maxLimit: 1,
      toppingCategoryId: 4,
      price: 18,
    },
    {
      description: 'Copita Suspiro a la Limeña',
      maxLimit: 1,
      toppingCategoryId: 4,
      price: 18,
    },
    {
      description: 'Copita Pie de Limon',
      maxLimit: 1,
      toppingCategoryId: 4,
      price: 18,
    },
    {
      description: 'Copita Maracuyá y Chocolate',
      maxLimit: 1,
      toppingCategoryId: 4,
      price: 18,
    },
    {
      description: 'Inca Kola 500ml',
      maxLimit: 4,
      toppingCategoryId: 5,
      price: 9,
    },
    {
      description: 'Inca Kola Sin Azucar 500ml',
      maxLimit: 4,
      toppingCategoryId: 5,
      price: 9,
    },
    {
      description: 'Coca Cola 500ml',
      maxLimit: 4,
      toppingCategoryId: 5,
      price: 9,
    },
    {
      description: 'Chicha Morada',
      maxLimit: 4,
      toppingCategoryId: 5,
      price: 16,
    },
    {
      description: 'Limonada Clásica',
      maxLimit: 4,
      toppingCategoryId: 5,
      price: 16,
    },
    {
      description: 'Coca Cola Sin Azucar 500ml',
      maxLimit: 4,
      toppingCategoryId: 5,
      price: 9,
    },
    {
      description: 'No',
      maxLimit: 1,
      toppingCategoryId: 6,
      price: 0,
    },
    {
      description: 'Si',
      maxLimit: 1,
      toppingCategoryId: 6,
      price: 1,
    },
  ],

  dishCategories: [
    {
      name: 'Entradas y Piqueos',
      restaurantId: 2,
    },
    {
      name: 'Sopas',
      restaurantId: 2,
    },
    {
      name: 'Sanguches',
      restaurantId: 2,
    },
    {
      name: 'Jugos y Bebidas',
      restaurantId: 2,
    },
    {
      name: 'Pakettes',
      restaurantId: 3,
    },
    {
      name: 'Snacks',
      restaurantId: 3,
    },
    {
      name: 'Maki',
      restaurantId: 3,
    },
    {
      name: 'Extras',
      restaurantId: 3,
    },
  ],
  dishes: [
    {
      name: 'Wantanes de Langostinos',
      description: 'Relleno de langostinos con su cremita de chifa',
      dishCategoryId: 1,
      image: 'https://images.rappi.pe/products/481897-1595347497891.jpg',
      price: 31.0,
      stock: 15,
      toppingsIds: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21,
      ],
    },
    {
      name: 'Papa Rellena',
      description:
        'Rellena con guisito de carne, acompañadas de cremas peruanas.',
      dishCategoryId: 1,
      image: 'https://images.rappi.pe/products/481902-1595346784758.jpg',
      price: 24.0,
      stock: 15,
      toppingsIds: [],
    },
    {
      name: 'Anticuchos de Corazón',
      description:
        'Dos palitos con papas doradas, choclo y salsas de rocoto y ají amarillo.',
      dishCategoryId: 1,
      image: 'https://images.rappi.pe/products/523951-1607034413028.png',
      price: 41.0,
      stock: 15,
      toppingsIds: [],
    },
    {
      name: 'Cebiche Clásico',
      description: 'De la Pesca del día',
      dishCategoryId: 1,
      image: 'https://images.rappi.pe/products/481911-1595345582437.jpg',
      price: 47.0,
      stock: 15,
      toppingsIds: [],
    },
    {
      name: 'Piqueo Criollo Tanta',
      description: 'De la Pesca del día',
      dishCategoryId: 1,
      image: 'https://images.rappi.pe/products/2091611251-1635791205914.jpg',
      price: 81.0,
      stock: 15,
      toppingsIds: [],
    },
    {
      name: 'Las Croquetas de Choclo y Queso',
      description:
        'Doraditas por fuera, cremosas por dentro, acompañadas de salsa de rocoto y queso',
      dishCategoryId: 1,
      image: 'https://images.rappi.pe/products/2091611252-1635790695838.jpg',
      price: 28.0,
      stock: 15,
      toppingsIds: [],
    },
    {
      name: 'Empanada Al Horno',
      description:
        'Empanada al horno con los rellenos más generosos de la ciudad de pollo, de ají de gallina, de cuadril, de lomo saltado (unidad). *recomendación: pedir fría para calentar en casa.',
      dishCategoryId: 1,
      image: 'https://images.rappi.pe/products/530361-1598200518912.png',
      price: 13.0,
      stock: 15,
      toppingsIds: [],
    },
    {
      name: 'Pasteles de Nuestro Horno',
      description:
        'Pasteles de nuestro horno - elige tu favorito. *recomendación: pedir frío para calentar en casa.',
      dishCategoryId: 1,
      image:
        'https://images.rappi.pe/products/d50e3755-eaec-4d34-ac3e-e56511971324-1687873399329.png',
      price: 14.0,
      stock: 15,
      toppingsIds: [],
    },
    {
      name: 'Tamalito Verde',
      description:
        'Tamal de de choclo con culantro, con jugo de seco y salsa criolla',
      dishCategoryId: 1,
      image: 'https://images.rappi.pe/products/481893-1595347292023.jpg',
      price: 17.0,
      stock: 15,
      toppingsIds: [],
    },
    {
      name: 'Causa Limeña',
      description: 'Nuestra Causa Limeña, Elige tu sabor de causa',
      dishCategoryId: 1,
      image: 'https://images.rappi.pe/products/481899-1595345542588.jpg',
      price: 31.0,
      stock: 15,
      toppingsIds: [],
    },
    {
      name: 'Sopa Criolla de Toda la Vida',
      description:
        'Sopa con carne, fideos cabello de ángel, ají, huevo De carne, fideos cabello de ángel, ají y huevo',
      dishCategoryId: 2,
      image: 'https://images.rappi.pe/products/481917-1595347165756.jpg',
      price: 32.0,
      stock: 15,
      toppingsIds: [],
    },
    {
      name: 'Sopa Angelita',
      description:
        'Sopa de cabello de ángel, pollo, papa amarilla, limón, rocoto, cancha y cebolla china',
      dishCategoryId: 2,
      image: 'https://images.rappi.pe/products/481920-1595345129730.jpg',
      price: 34.0,
      stock: 15,
      toppingsIds: [],
    },
    {
      name: 'Súper Aguadito',
      description:
        'Aguadito de pollo al estilo clásico casero con choclo, zanahoria, pimiento, arroz reventado, culantro',
      dishCategoryId: 2,
      image: 'https://images.rappi.pe/products/481921-1595344967507.jpg',
      price: 34.0,
      stock: 15,
      toppingsIds: [],
    },
    {
      name: 'Crema de Zapallo',
      description: 'Sopa cremosa con su pan al ajo para moja',
      dishCategoryId: 2,
      image: 'https://images.rappi.pe/products/481919-1595345951195.jpg',
      price: 32.0,
      stock: 15,
      toppingsIds: [],
    },
    {
      name: 'La Sopa Capón',
      description:
        'Con siu kaos de pollo, fideos de arroz, fréjolito chino, hierbabuena y sazón criolla oriental.',
      dishCategoryId: 2,
      image:
        'https://images.rappi.pe/products/f67f0cf7-7cdc-4154-b19b-d304181de0de-1716861196818.png',
      price: 31.0,
      stock: 15,
      toppingsIds: [],
    },
    {
      name: 'Sánguche Butifarra',
      description:
        'Sánguche con jamon del país, lechuga y salsa criolla, en pan francés',
      dishCategoryId: 3,
      image: 'https://images.rappi.pe/products/481932-1595345367111.jpg',
      price: 22.0,
      stock: 15,
      toppingsIds: [],
    },
    {
      name: 'Sánguche Pollo Playero',
      description:
        'Pechuga deshilachada con mayonesa, papas al hilo, lechuga, tomate en pan burger',
      dishCategoryId: 3,
      image: 'https://images.rappi.pe/products/2091961903-1675979943571.jpg',
      price: 25.0,
      stock: 15,
      toppingsIds: [],
    },
    {
      name: 'El Breakfast',
      description:
        'En pan de papa tostado, smash de carne con queso y cebolla, tocino, huevo, lechuga, papas chips, tomate y salsa club.',
      dishCategoryId: 3,
      image:
        'https://images.rappi.pe/products/f6805767-ad32-4b5f-9a1a-f67f7b0e8af8-1712803908820.png',
      price: 34.0,
      stock: 15,
      toppingsIds: [],
    },
    {
      name: 'El de Bondiola',
      description:
        'Bondiola asada, ensalada rusa, queso, ensalada de col en pan ciabatta.',
      dishCategoryId: 3,
      image:
        'https://images.rappi.pe/products/6c78dd29-bfac-459a-887b-8bde318306b7-1714579013313.png',
      price: 36.0,
      stock: 15,
      toppingsIds: [],
    },
    {
      name: 'El Asadazo',
      description:
        'Asado encebollado, queso, mayo de rocoto, chimichurri, papas al hilo en pan planchado.',
      dishCategoryId: 3,
      image:
        'https://images.rappi.pe/products/f5005a45-14c1-469c-b3ce-bdf3b03377c5-1714333440706.png',
      price: 38.0,
      stock: 15,
      toppingsIds: [],
    },
    {
      name: 'Café AmericanoEl Asadazo',
      description: 'Café americano, 12 Oz',
      dishCategoryId: 4,
      image: 'https://images.rappi.pe/products/482029-1595345381975.jpg',
      price: 9.0,
      stock: 15,
      toppingsIds: [],
    },
    {
      name: 'Infusiones',
      description: '100% naturales',
      dishCategoryId: 4,
      image: 'https://images.rappi.pe/products/629715-1616025822215_hq.jpeg',
      price: 6.0,
      stock: 15,
      toppingsIds: [],
    },
    {
      name: 'Gaseosas 500 ml',
      description: 'Nuestras gaseosas',
      dishCategoryId: 4,
      image:
        'https://images.rappi.pe/products/bfd439c8-3b73-4cae-a62c-8bfc8179b88e-1691523363483.png',
      price: 9.0,
      stock: 15,
      toppingsIds: [],
    },
    {
      name: 'Limonada de 1 Litro',
      description: 'Nuestas limonadas.',
      dishCategoryId: 4,
      image: 'https://images.rappi.pe/products/518853-1597689382518.png',
      price: 16.0,
      stock: 15,
      toppingsIds: [],
    },
    {
      name: 'Café con Leche',
      description: 'Café con leche, 12 Oz',
      dishCategoryId: 4,
      image: 'https://images.rappi.pe/products/482032-1595348408669.jpg',
      price: 12.0,
      stock: 15,
      toppingsIds: [],
    },
    {
      name: 'Chicha Morada',
      description: 'Hecha en casa',
      dishCategoryId: 4,
      image: 'https://images.rappi.pe/products/524037-1607034520086.png',
      price: 16.0,
      stock: 15,
      toppingsIds: [],
    },
    {
      name: 'Limonada',
      description: 'Nuestras limonadas',
      dishCategoryId: 4,
      image: 'https://images.rappi.pe/products/481992-1595348406475.jpg',
      price: 16.0,
      stock: 15,
      toppingsIds: [],
    },
    {
      name: 'Paketitto',
      description:
        '18 piezas de maki (06 piezas de Acebichado, 06 piezas de Avocado, 06 piezas de Luiggi)',
      dishCategoryId: 5,
      image:
        'https://images.rappi.pe/products/9bdaa954-5146-4237-850d-f712d8f6ac00-1692741564835.png',
      price: 44.22,
      stock: 15,
      toppingsIds: [],
    },
    {
      name: 'Makiman',
      description: '48 piezas de maki en 4 sabores a elección.',
      dishCategoryId: 5,
      image:
        'https://images.rappi.pe/products/0dfddaba-32b6-4f29-a41d-c46eaec8e9df-1692741843308.png',
      price: 126.16,
      stock: 15,
      toppingsIds: [],
    },
    {
      name: 'Medio Makiman',
      description: '24 piezas de maki en 4 sabores a elección',
      dishCategoryId: 5,
      image:
        'https://images.rappi.pe/products/a9439273-a5d2-4297-9178-d0298b93ac9e-1692741908823.png',
      price: 73.04,
      stock: 15,
      toppingsIds: [],
    },
    {
      name: 'Cebiche Marciano',
      description:
        'Pesca del día, leche de tigre marciana de culantro, chalaca con ají charapita, patacones.',
      dishCategoryId: 6,
      image:
        'https://images.rappi.pe/products/316aeca7-f23a-4201-9e95-0dd72a4fdeb9-1694288146963.png',
      price: 45.0,
      stock: 15,
      toppingsIds: [],
    },
    {
      name: 'Yakimeshi & Mfc (Maketto Fried Chicken)',
      description:
        'Arroz frito con hongos, vegetales y cashews. pollito frito karaage, omelette & salsa samurai, encurtidos.',
      dishCategoryId: 6,
      image:
        'https://images.rappi.pe/products/36cf5646-7d87-4f79-ae61-0e4b9b1863fa-1694288204858.png',
      price: 35.1,
      stock: 15,
      toppingsIds: [],
    },
    {
      name: 'Maketto Fried Chicken - MFC',
      description: 'Pollo marinado estilo karaage, tártara ponja.',
      dishCategoryId: 6,
      image:
        'https://images.rappi.pe/products/6209cb34-cad6-4248-8255-53488f26fa2a-1694288274776.png',
      price: 25.0,
      stock: 15,
      toppingsIds: [],
    },
    {
      name: 'Maketto Shrimp Tempura',
      description: 'Langostinos tempura con salsa ácido picante.',
      dishCategoryId: 6,
      image:
        'https://images.rappi.pe/products/2b169f91-2a2d-47a6-8ca2-08d99559b601-1694288232759.png',
      price: 35.0,
      stock: 15,
      toppingsIds: [],
    },
    {
      name: 'Sanguchito la Royal',
      description:
        'Bun dorado, hamburguesa de asado de tira y alga kombu,kimchi caramelizado, aro de cebolla tempura, mayo sriracha, cheddar, huevito frito y lechuga.',
      dishCategoryId: 6,
      image:
        'https://images.rappi.pe/products/50eff104-6e71-4ee1-8f6f-376caaeeb8db-1694288065361.png',
      price: 16.0,
      stock: 15,
      toppingsIds: [],
    },
    {
      name: 'Sanguchito Ebi Korokke',
      description:
        'Bun con croqueta achifada de langostinos y pota, salsa samurai, criolla encurtida y culantro.ponerle sus gotitas de limón.',
      dishCategoryId: 6,
      image:
        'https://images.rappi.pe/products/8fead5c7-9667-44c1-9013-9156a0b440c5-1694287966362.png',
      price: 16.0,
      stock: 15,
      toppingsIds: [],
    },
    {
      name: 'Maki Umai',
      description:
        'Kiuri, cangrejo y langostino furai. Por fuera tempura, tártara con kawa karaage.',
      dishCategoryId: 7,
      image:
        'https://images.rappi.pe/products/8aa997f3-fe5f-4b32-b215-1aba1318c1a3-1694288897822.png',
      price: 27.0,
      stock: 15,
      toppingsIds: [],
    },
    {
      name: 'Maki el Cangri',
      description:
        'Por dentro palta, kiuri y pescado furai. Por fuera pesca del dia, crema de cangrejo ligeramente picante y encima salsa parrillera flameada. Más chips de papa y tare',
      dishCategoryId: 7,
      image:
        'https://images.rappi.pe/products/76319ae2-af8b-4e6f-8947-b039c0303d99-1694288828693.png',
      price: 25.0,
      stock: 15,
      toppingsIds: [],
    },
    {
      name: 'Maki Mailey Spicy',
      description:
        'Langostino empanizado y palta por fuera. Crema de cangrejo y queso parmesano por fuera y chives.',
      dishCategoryId: 7,
      image:
        'https://images.rappi.pe/products/0eaf17db-7096-44ee-bdaa-677f5311d28a-1694288712914.png',
      price: 27.0,
      stock: 15,
      toppingsIds: [],
    },
    {
      name: 'Maki Chuka',
      description:
        'Langostino empanizado, cangrejo, palta por dentro. pesca del día por fuera flameada con salsa de ostión de la casa.',
      dishCategoryId: 7,
      image:
        'https://images.rappi.pe/products/8a383682-65eb-4bb1-93e6-f2a221f3f93c-1696282973941.png',
      price: 27.0,
      stock: 15,
      toppingsIds: [],
    },
    {
      name: 'Shari',
      description: 'Arroz de sushi',
      dishCategoryId: 8,
      image:
        'https://images.rappi.pe/products/5b6a3974-2d65-491d-9528-5300225d894e-1696448381381.png',
      price: 9.0,
      stock: 15,
      toppingsIds: [],
    },
    {
      name: 'Gohan',
      description: 'Arroz blanco.',
      dishCategoryId: 8,
      image:
        'https://images.rappi.pe/products/e838026f-fb11-4394-b49a-1059de8f58f9-1696448415242.png',
      price: 7.0,
      stock: 15,
      toppingsIds: [],
    },
    {
      name: 'Salsa Acebichada',
      description: 'Salsa Acebichada',
      dishCategoryId: 8,
      image:
        'https://images.rappi.pe/products/095c92c2-132a-4678-9b58-9d924336325a-1696448436598.png',
      price: 5.0,
      stock: 15,
      toppingsIds: [],
    },
  ],
};
