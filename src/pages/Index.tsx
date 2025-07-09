import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { name: "Недвижимость", icon: "Home", count: 1250, color: "bg-blue-500" },
    { name: "Транспорт", icon: "Car", count: 850, color: "bg-green-500" },
    {
      name: "Электроника",
      icon: "Smartphone",
      count: 2100,
      color: "bg-purple-500",
    },
    { name: "Одежда", icon: "Shirt", count: 680, color: "bg-pink-500" },
    { name: "Мебель", icon: "Armchair", count: 420, color: "bg-yellow-500" },
    { name: "Работа", icon: "Briefcase", count: 1850, color: "bg-orange-500" },
    { name: "Животные", icon: "Heart", count: 320, color: "bg-red-500" },
    { name: "Услуги", icon: "Settings", count: 950, color: "bg-indigo-500" },
  ];

  const featuredListings = [
    {
      id: 1,
      title: "iPhone 15 Pro Max",
      price: "89 900 ₽",
      image: "/img/c9ec103a-9f4d-455e-a783-d70cfed8a2e3.jpg",
      location: "Москва",
      rating: 4.8,
      reviews: 124,
      isVerified: true,
    },
    {
      id: 2,
      title: "Toyota Camry 2020",
      price: "2 450 000 ₽",
      image: "/img/c9ec103a-9f4d-455e-a783-d70cfed8a2e3.jpg",
      location: "Санкт-Петербург",
      rating: 4.9,
      reviews: 89,
      isVerified: true,
    },
    {
      id: 3,
      title: "2-комнатная квартира",
      price: "8 500 000 ₽",
      image: "/img/c9ec103a-9f4d-455e-a783-d70cfed8a2e3.jpg",
      location: "Москва",
      rating: 4.7,
      reviews: 56,
      isVerified: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <img
                src="/img/c9ec103a-9f4d-455e-a783-d70cfed8a2e3.jpg"
                alt="Logo"
                className="h-8 w-8 rounded"
              />
              <Link to="/" className="text-2xl font-bold text-blue-600">
                АвитоПлюс
              </Link>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link
                to="/listings"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Объявления
              </Link>
              <Link
                to="/categories"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Категории
              </Link>
              <Link
                to="/services"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Услуги
              </Link>
              <Link
                to="/news"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Новости
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Link to="/favorites">
                <Button variant="ghost" size="sm">
                  <Icon name="Heart" size={20} />
                </Button>
              </Link>
              <Link to="/chat">
                <Button variant="ghost" size="sm">
                  <Icon name="MessageCircle" size={20} />
                </Button>
              </Link>
              <Link to="/profile">
                <Button variant="ghost" size="sm">
                  <Icon name="User" size={20} />
                </Button>
              </Link>
              <Link to="/create-listing">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Icon name="Plus" size={16} className="mr-2" />
                  Разместить
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Найдите всё что нужно
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Безопасные покупки и продажи с проверенными продавцами
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="flex space-x-4">
              <div className="flex-1 relative">
                <Icon
                  name="Search"
                  size={20}
                  className="absolute left-3 top-3 text-gray-400"
                />
                <Input
                  placeholder="Что вы ищете?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 py-6 text-lg bg-white text-gray-900"
                />
              </div>
              <Button
                size="lg"
                className="px-8 py-6 bg-orange-500 hover:bg-orange-600"
              >
                <Icon name="Search" size={20} className="mr-2" />
                Найти
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Популярные категории
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={`/categories?category=${category.name.toLowerCase()}`}
                className="group"
              >
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div
                      className={`${category.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}
                    >
                      <Icon
                        name={category.icon}
                        size={24}
                        className="text-white"
                      />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">
                      {category.name}
                    </h3>
                    <p className="text-gray-500">{category.count} объявлений</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Рекомендуемые объявления
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredListings.map((listing) => (
              <Link key={listing.id} to={`/listings/${listing.id}`}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="relative">
                    <img
                      src={listing.image}
                      alt={listing.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    {listing.isVerified && (
                      <Badge className="absolute top-2 right-2 bg-green-500">
                        <Icon name="CheckCircle" size={14} className="mr-1" />
                        Проверено
                      </Badge>
                    )}
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{listing.title}</CardTitle>
                    <CardDescription className="text-xl font-bold text-blue-600">
                      {listing.price}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Icon
                          name="MapPin"
                          size={16}
                          className="text-gray-400"
                        />
                        <span className="text-sm text-gray-600">
                          {listing.location}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon
                          name="Star"
                          size={16}
                          className="text-yellow-500 fill-current"
                        />
                        <span className="text-sm font-medium">
                          {listing.rating}
                        </span>
                        <span className="text-sm text-gray-500">
                          ({listing.reviews})
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">АвитоПлюс</h3>
              <p className="text-gray-400">
                Безопасная площадка для покупок и продаж
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Покупателям</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link to="/listings" className="hover:text-white">
                    Объявления
                  </Link>
                </li>
                <li>
                  <Link to="/categories" className="hover:text-white">
                    Категории
                  </Link>
                </li>
                <li>
                  <Link to="/favorites" className="hover:text-white">
                    Избранное
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Продавцам</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link to="/create-listing" className="hover:text-white">
                    Разместить объявление
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-white">
                    Услуги
                  </Link>
                </li>
                <li>
                  <Link to="/reviews" className="hover:text-white">
                    Отзывы
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link to="/chat" className="hover:text-white">
                    Связаться с нами
                  </Link>
                </li>
                <li>
                  <Link to="/news" className="hover:text-white">
                    Новости
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 АвитоПлюс. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
