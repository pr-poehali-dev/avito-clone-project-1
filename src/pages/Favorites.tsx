import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Favorites = () => {
  const [favorites, setFavorites] = useState([
    {
      id: 1,
      title: "iPhone 15 Pro Max 256GB",
      price: "89 900 ₽",
      image: "/img/c9ec103a-9f4d-455e-a783-d70cfed8a2e3.jpg",
      location: "Москва, Центр",
      rating: 4.8,
      reviews: 124,
      isVerified: true,
      category: "Электроника",
      addedDate: "2024-07-08",
      seller: "Иван Петров",
      isAvailable: true,
    },
    {
      id: 2,
      title: "Toyota Camry 2020, 2.5L",
      price: "2 450 000 ₽",
      image: "/img/c9ec103a-9f4d-455e-a783-d70cfed8a2e3.jpg",
      location: "Санкт-Петербург",
      rating: 4.9,
      reviews: 89,
      isVerified: true,
      category: "Транспорт",
      addedDate: "2024-07-07",
      seller: "Мария Сидорова",
      isAvailable: true,
    },
    {
      id: 3,
      title: "2-комнатная квартира, 65 м²",
      price: "8 500 000 ₽",
      image: "/img/c9ec103a-9f4d-455e-a783-d70cfed8a2e3.jpg",
      location: "Москва, Арбат",
      rating: 4.7,
      reviews: 56,
      isVerified: false,
      category: "Недвижимость",
      addedDate: "2024-07-06",
      seller: "Алексей Козлов",
      isAvailable: false,
    },
    {
      id: 4,
      title: 'MacBook Pro 14" M3',
      price: "179 900 ₽",
      image: "/img/c9ec103a-9f4d-455e-a783-d70cfed8a2e3.jpg",
      location: "Новосибирск",
      rating: 4.6,
      reviews: 32,
      isVerified: true,
      category: "Электроника",
      addedDate: "2024-07-05",
      seller: "Екатерина Волкова",
      isAvailable: true,
    },
  ]);

  const [savedSearches] = useState([
    {
      id: 1,
      query: "iPhone 15",
      category: "Электроника",
      priceRange: "50000-100000",
      location: "Москва",
      notifications: true,
      newListings: 3,
    },
    {
      id: 2,
      query: "Toyota Camry",
      category: "Транспорт",
      priceRange: "2000000-3000000",
      location: "Санкт-Петербург",
      notifications: false,
      newListings: 1,
    },
  ]);

  const removeFromFavorites = (id: number) => {
    setFavorites(favorites.filter((item) => item.id !== id));
  };

  const availableFavorites = favorites.filter((item) => item.isAvailable);
  const unavailableFavorites = favorites.filter((item) => !item.isAvailable);

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
                  <Icon name="Heart" size={20} className="text-blue-600" />
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Избранное</h1>
          <p className="text-gray-600">Ваши сохраненные объявления и поиски</p>
        </div>

        <Tabs defaultValue="listings" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="listings">
              Объявления ({favorites.length})
            </TabsTrigger>
            <TabsTrigger value="searches">
              Сохраненные поиски ({savedSearches.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="listings" className="space-y-6">
            {/* Available Listings */}
            {availableFavorites.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold mb-4">
                  Доступные объявления
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {availableFavorites.map((listing) => (
                    <Card
                      key={listing.id}
                      className="hover:shadow-lg transition-shadow"
                    >
                      <div className="relative">
                        <img
                          src={listing.image}
                          alt={listing.title}
                          className="w-full h-48 object-cover rounded-t-lg"
                        />
                        {listing.isVerified && (
                          <Badge className="absolute top-2 right-2 bg-green-500">
                            <Icon
                              name="CheckCircle"
                              size={14}
                              className="mr-1"
                            />
                            Проверено
                          </Badge>
                        )}
                        <Badge className="absolute top-2 left-2 bg-blue-500">
                          {listing.category}
                        </Badge>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="absolute top-2 right-12 bg-white/80 hover:bg-white"
                          onClick={() => removeFromFavorites(listing.id)}
                        >
                          <Icon
                            name="Heart"
                            size={16}
                            className="fill-red-500 text-red-500"
                          />
                        </Button>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-lg line-clamp-2">
                          <Link
                            to={`/listings/${listing.id}`}
                            className="hover:text-blue-600"
                          >
                            {listing.title}
                          </Link>
                        </CardTitle>
                        <CardDescription className="text-xl font-bold text-blue-600">
                          {listing.price}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
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
                          <div className="flex items-center justify-between text-sm text-gray-500">
                            <div className="flex items-center space-x-1">
                              <Icon name="User" size={14} />
                              <span>{listing.seller}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Icon name="Heart" size={14} />
                              <span>{listing.addedDate}</span>
                            </div>
                          </div>
                          <div className="flex space-x-2 mt-4">
                            <Button
                              size="sm"
                              className="flex-1 bg-blue-600 hover:bg-blue-700"
                            >
                              <Icon
                                name="MessageCircle"
                                size={14}
                                className="mr-2"
                              />
                              Написать
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="flex-1"
                            >
                              <Icon name="Phone" size={14} className="mr-2" />
                              Позвонить
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Unavailable Listings */}
            {unavailableFavorites.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold mb-4 text-gray-500">
                  Недоступные объявления
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {unavailableFavorites.map((listing) => (
                    <Card key={listing.id} className="opacity-60">
                      <div className="relative">
                        <img
                          src={listing.image}
                          alt={listing.title}
                          className="w-full h-48 object-cover rounded-t-lg grayscale"
                        />
                        <Badge className="absolute top-2 right-2 bg-red-500">
                          Снято с продажи
                        </Badge>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="absolute top-2 right-12 bg-white/80 hover:bg-white"
                          onClick={() => removeFromFavorites(listing.id)}
                        >
                          <Icon name="X" size={16} className="text-gray-500" />
                        </Button>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-lg line-clamp-2 text-gray-500">
                          {listing.title}
                        </CardTitle>
                        <CardDescription className="text-xl font-bold text-gray-400">
                          {listing.price}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <Icon
                                name="MapPin"
                                size={16}
                                className="text-gray-400"
                              />
                              <span className="text-sm text-gray-500">
                                {listing.location}
                              </span>
                            </div>
                          </div>
                          <p className="text-sm text-gray-500">
                            Объявление больше не доступно
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {favorites.length === 0 && (
              <div className="text-center py-12">
                <Icon
                  name="Heart"
                  size={64}
                  className="mx-auto text-gray-400 mb-4"
                />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Нет избранных объявлений
                </h3>
                <p className="text-gray-500 mb-6">
                  Добавляйте объявления в избранное, чтобы не потерять их
                </p>
                <Link to="/listings">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Icon name="Search" size={16} className="mr-2" />
                    Искать объявления
                  </Button>
                </Link>
              </div>
            )}
          </TabsContent>

          <TabsContent value="searches" className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Сохраненные поиски</h2>
              <div className="space-y-4">
                {savedSearches.map((search) => (
                  <Card key={search.id}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-semibold">{search.query}</h3>
                            <Badge variant="outline">{search.category}</Badge>
                            {search.notifications && (
                              <Badge className="bg-green-500">
                                <Icon name="Bell" size={12} className="mr-1" />
                                Уведомления
                              </Badge>
                            )}
                          </div>
                          <div className="text-sm text-gray-500 space-y-1">
                            <p>Цена: {search.priceRange} ₽</p>
                            <p>Местоположение: {search.location}</p>
                            {search.newListings > 0 && (
                              <p className="text-blue-600 font-medium">
                                {search.newListings} новых объявлений
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button variant="outline" size="sm">
                            <Icon name="Search" size={14} className="mr-2" />
                            Найти
                          </Button>
                          <Button variant="outline" size="sm">
                            <Icon name="Settings" size={14} />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Icon name="Trash2" size={14} />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {savedSearches.length === 0 && (
              <div className="text-center py-12">
                <Icon
                  name="Search"
                  size={64}
                  className="mx-auto text-gray-400 mb-4"
                />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Нет сохраненных поисков
                </h3>
                <p className="text-gray-500 mb-6">
                  Сохраняйте поиски, чтобы получать уведомления о новых
                  объявлениях
                </p>
                <Link to="/listings">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Icon name="Search" size={16} className="mr-2" />
                    Начать поиск
                  </Button>
                </Link>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Favorites;
