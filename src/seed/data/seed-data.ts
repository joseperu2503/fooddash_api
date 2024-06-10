import { CreateCategoryDto } from 'src/categories/dto/create-category.dto';
import { CreateDishCategoryDto } from 'src/dish-categories/dto/create-dish-category.dto';
import { CreateDishDto } from 'src/dishes/dto/create-dish.dto';
import { CreateRestaurantDto } from 'src/restaurants/dto/create-restaurant.dto';

interface SeedData {
  restaurants: CreateRestaurantDto[];
  categories: CreateCategoryDto[];
  dishCategories: CreateDishCategoryDto[];
  dishes: CreateDishDto[];
}

export const initialData: SeedData = {
  restaurants: [
    {
      name: 'El Olivar Grill Puente Piedra - Urb Cercado de Puente Piedra',
      address: 'Avenida Buenos Aires 382, Puente Piedra, Perú',
      logo: 'https://images.rappi.pe/restaurants_logo/logo-1690840417777.png',
      backdrop:
        'https://images.rappi.pe/restaurants_background/parrilla18-1690902771434.jpg',
      latitude: -11.86509975256008,
      longitude: -77.07831458896082,
      openTime: '09:00',
      closeTime: '18:30',
      categoryId: 1,
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
      categoryId: 1,
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
      categoryId: 1,
    },
    {
      name: 'Osso Burger',
      address: 'Av. Gral. Salaverry 2370, Jesús María 15076, Perú',
      logo: 'https://images.rappi.pe/restaurants_logo/987654567-1613087036308.png',
      backdrop:
        'https://images.rappi.pe/restaurants_background/arappi-1712184695093.jpg',
      latitude: -12.090142023843747,
      longitude: -77.05241361704311,
      openTime: '09:00',
      closeTime: '18:30',
      categoryId: 1,
    },
    {
      name: 'La Bodega de La Trattoria',
      address: 'Av. Dos de Mayo 715, San Isidro',
      logo: 'https://images.rappi.pe/restaurants_logo/bodega-logo-1618924783748.png',
      backdrop:
        'https://images.rappi.pe/restaurants_background/pizza39-1704407443593.jpg',
      latitude: -12.091483208479932,
      longitude: -77.03899318147967,
      openTime: '09:00',
      closeTime: '18:30',
      categoryId: 1,
    },
  ],
  categories: [
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
  ],
  dishes: [
    {
      name: 'Wantanes de Langostinos',
      description: 'Relleno de langostinos con su cremita de chifa',
      dishCategoryId: 1,
      image: 'https://images.rappi.pe/products/481897-1595347497891.jpg',
      price: 31.0,
      stock: 15,
    },
    {
      name: 'Papa Rellena',
      description:
        'Rellena con guisito de carne, acompañadas de cremas peruanas.',
      dishCategoryId: 1,
      image: 'https://images.rappi.pe/products/481902-1595346784758.jpg',
      price: 24.0,
      stock: 15,
    },
    {
      name: 'Anticuchos de Corazón',
      description:
        'Dos palitos con papas doradas, choclo y salsas de rocoto y ají amarillo.',
      dishCategoryId: 1,
      image: 'https://images.rappi.pe/products/523951-1607034413028.png',
      price: 41.0,
      stock: 15,
    },
    {
      name: 'Cebiche Clásico',
      description: 'De la Pesca del día',
      dishCategoryId: 1,
      image: 'https://images.rappi.pe/products/481911-1595345582437.jpg',
      price: 47.0,
      stock: 15,
    },
    {
      name: 'Piqueo Criollo Tanta',
      description: 'De la Pesca del día',
      dishCategoryId: 1,
      image: 'https://images.rappi.pe/products/2091611251-1635791205914.jpg',
      price: 81.0,
      stock: 15,
    },
    {
      name: 'Las Croquetas de Choclo y Queso',
      description:
        'Doraditas por fuera, cremosas por dentro, acompañadas de salsa de rocoto y queso',
      dishCategoryId: 1,
      image: 'https://images.rappi.pe/products/2091611252-1635790695838.jpg',
      price: 28.0,
      stock: 15,
    },
    {
      name: 'Empanada Al Horno',
      description:
        'Empanada al horno con los rellenos más generosos de la ciudad de pollo, de ají de gallina, de cuadril, de lomo saltado (unidad). *recomendación: pedir fría para calentar en casa.',
      dishCategoryId: 1,
      image: 'https://images.rappi.pe/products/530361-1598200518912.png',
      price: 13.0,
      stock: 15,
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
    },
    {
      name: 'Tamalito Verde',
      description:
        'Tamal de de choclo con culantro, con jugo de seco y salsa criolla',
      dishCategoryId: 1,
      image: 'https://images.rappi.pe/products/481893-1595347292023.jpg',
      price: 17.0,
      stock: 15,
    },
    {
      name: 'Causa Limeña',
      description: 'Nuestra Causa Limeña, Elige tu sabor de causa',
      dishCategoryId: 1,
      image: 'https://images.rappi.pe/products/481899-1595345542588.jpg',
      price: 31.0,
      stock: 15,
    },
    {
      name: 'Sopa Criolla de Toda la Vida',
      description:
        'Sopa con carne, fideos cabello de ángel, ají, huevo De carne, fideos cabello de ángel, ají y huevo',
      dishCategoryId: 2,
      image: 'https://images.rappi.pe/products/481917-1595347165756.jpg',
      price: 32.0,
      stock: 15,
    },
    {
      name: 'Sopa Angelita',
      description:
        'Sopa de cabello de ángel, pollo, papa amarilla, limón, rocoto, cancha y cebolla china',
      dishCategoryId: 2,
      image: 'https://images.rappi.pe/products/481920-1595345129730.jpg',
      price: 34.0,
      stock: 15,
    },
    {
      name: 'Súper Aguadito',
      description:
        'Aguadito de pollo al estilo clásico casero con choclo, zanahoria, pimiento, arroz reventado, culantro',
      dishCategoryId: 2,
      image: 'https://images.rappi.pe/products/481921-1595344967507.jpg',
      price: 34.0,
      stock: 15,
    },
    {
      name: 'Crema de Zapallo',
      description: 'Sopa cremosa con su pan al ajo para moja',
      dishCategoryId: 2,
      image: 'https://images.rappi.pe/products/481919-1595345951195.jpg',
      price: 32.0,
      stock: 15,
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
    },
    {
      name: 'Sánguche Butifarra',
      description:
        'Sánguche con jamon del país, lechuga y salsa criolla, en pan francés',
      dishCategoryId: 3,
      image: 'https://images.rappi.pe/products/481932-1595345367111.jpg',
      price: 22.0,
      stock: 15,
    },
    {
      name: 'Sánguche Pollo Playero',
      description:
        'Pechuga deshilachada con mayonesa, papas al hilo, lechuga, tomate en pan burger',
      dishCategoryId: 3,
      image: 'https://images.rappi.pe/products/2091961903-1675979943571.jpg',
      price: 25.0,
      stock: 15,
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
    },
    {
      name: 'Café AmericanoEl Asadazo',
      description: 'Café americano, 12 Oz',
      dishCategoryId: 4,
      image: 'https://images.rappi.pe/products/482029-1595345381975.jpg',
      price: 9.0,
      stock: 15,
    },
    {
      name: 'Infusiones',
      description: '100% naturales',
      dishCategoryId: 4,
      image: 'https://images.rappi.pe/products/629715-1616025822215_hq.jpeg',
      price: 6.0,
      stock: 15,
    },
    {
      name: 'Gaseosas 500 ml',
      description: 'Nuestras gaseosas',
      dishCategoryId: 4,
      image:
        'https://images.rappi.pe/products/bfd439c8-3b73-4cae-a62c-8bfc8179b88e-1691523363483.png',
      price: 9.0,
      stock: 15,
    },
    {
      name: 'Limonada de 1 Litro',
      description: 'Nuestas limonadas.',
      dishCategoryId: 4,
      image: 'https://images.rappi.pe/products/518853-1597689382518.png',
      price: 16.0,
      stock: 15,
    },
    {
      name: 'Café con Leche',
      description: 'Café con leche, 12 Oz',
      dishCategoryId: 4,
      image: 'https://images.rappi.pe/products/482032-1595348408669.jpg',
      price: 12.0,
      stock: 15,
    },
    {
      name: 'Chicha Morada',
      description: 'Hecha en casa',
      dishCategoryId: 4,
      image: 'https://images.rappi.pe/products/524037-1607034520086.png',
      price: 16.0,
      stock: 15,
    },
    {
      name: 'Limonada',
      description: 'Nuestras limonadas',
      dishCategoryId: 4,
      image: 'https://images.rappi.pe/products/481992-1595348406475.jpg',
      price: 16.0,
      stock: 15,
    },
  ],
};
