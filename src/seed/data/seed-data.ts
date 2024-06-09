import { CreateCategoryDto } from 'src/categories/dto/create-category.dto';
import { CreateDishCategoryDto } from 'src/dish-categories/dto/create-dish-category.dto';
import { CreateRestaurantDto } from 'src/restaurants/dto/create-restaurant.dto';

interface SeedData {
  restaurants: CreateRestaurantDto[];
  categories: CreateCategoryDto[];
  dishCategories: CreateDishCategoryDto[];
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
};
