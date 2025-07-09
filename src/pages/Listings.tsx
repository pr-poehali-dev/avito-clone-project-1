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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";

const Listings = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [priceRange, setPriceRange] = useState("all");

  const listings = [
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
      date: "2024-07-08",
      seller: "Иван Петров",
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
      date: "2024-07-07",
      seller: "Мария Сидорова",
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
      date: "2024-07-06",
      seller: "Алексей Козлов",
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
      date: "2024-07-05",
      seller: "Екатерина Волкова",
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
              <Link to="/listings" className="text-blue-600 font-medium">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-6">Объявления</h1>

          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Icon
                name="Search"
                size={20}
                className="absolute left-3 top-3 text-gray-400"
              />
              <Input
                placeholder="Поиск объявлений..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-4">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Сортировать по" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Сначала новые</SelectItem>
                  <SelectItem value="price-low">
                    Цена: по возрастанию
                  </SelectItem>
                  <SelectItem value="price-high">Цена: по убыванию</SelectItem>
                  <SelectItem value="rating">По рейтингу</SelectItem>
                </SelectContent>
              </Select>

              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Цена" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Любая цена</SelectItem>
                  <SelectItem value="0-10000">До 10 000 ₽</SelectItem>
                  <SelectItem value="10000-100000">
                    10 000 - 100 000 ₽
                  </SelectItem>
                  <SelectItem value="100000-1000000">
                    100 000 - 1 000 000 ₽
                  </SelectItem>
                  <SelectItem value="1000000+">Свыше 1 000 000 ₽</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Listings Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((listing) => (
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
                  <Badge className="absolute top-2 left-2 bg-blue-500">
                    {listing.category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg line-clamp-2">
                    {listing.title}
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
                        <Icon name="Calendar" size={14} />
                        <span>{listing.date}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            <Icon name="ChevronDown" size={20} className="mr-2" />
            Показать еще
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Listings;
