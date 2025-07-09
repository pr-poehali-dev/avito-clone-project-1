import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const ListingDetail = () => {
  const { id } = useParams();
  const [isInFavorites, setIsInFavorites] = useState(false);

  const listing = {
    id: 1,
    title: "iPhone 15 Pro Max 256GB Titanium Blue",
    price: "89 900 ₽",
    images: [
      "/img/c9ec103a-9f4d-455e-a783-d70cfed8a2e3.jpg",
      "/img/c9ec103a-9f4d-455e-a783-d70cfed8a2e3.jpg",
      "/img/c9ec103a-9f4d-455e-a783-d70cfed8a2e3.jpg",
    ],
    location: "Москва, Центр",
    rating: 4.8,
    reviews: 124,
    isVerified: true,
    category: "Электроника",
    date: "2024-07-08",
    views: 456,
    description:
      "Продаю iPhone 15 Pro Max в отличном состоянии. Телефон использовался аккуратно, всегда был в чехле и с защитным стеклом. Комплект полный: коробка, кабель, документы. Без повреждений и царапин.",
    specifications: {
      Модель: "iPhone 15 Pro Max",
      Память: "256 GB",
      Цвет: "Titanium Blue",
      Состояние: "Отличное",
      Гарантия: "Да, до марта 2025",
    },
    seller: {
      name: "Иван Петров",
      avatar: "/img/c9ec103a-9f4d-455e-a783-d70cfed8a2e3.jpg",
      rating: 4.9,
      reviews: 45,
      memberSince: "2022",
      isVerified: true,
      responseTime: "15 минут",
    },
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-blue-600">
            Главная
          </Link>
          <Icon name="ChevronRight" size={16} />
          <Link to="/listings" className="hover:text-blue-600">
            Объявления
          </Link>
          <Icon name="ChevronRight" size={16} />
          <span className="text-gray-900">{listing.title}</span>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <Card className="mb-6">
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={listing.images[currentImageIndex]}
                    alt={listing.title}
                    className="w-full h-96 object-cover rounded-t-lg"
                  />
                  <div className="absolute bottom-4 left-4 right-4 flex justify-center space-x-2">
                    {listing.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full ${
                          index === currentImageIndex
                            ? "bg-white"
                            : "bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                  {listing.isVerified && (
                    <Badge className="absolute top-4 right-4 bg-green-500">
                      <Icon name="CheckCircle" size={14} className="mr-1" />
                      Проверено
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Listing Info */}
            <Card className="mb-6">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl mb-2">
                      {listing.title}
                    </CardTitle>
                    <CardDescription className="text-3xl font-bold text-blue-600">
                      {listing.price}
                    </CardDescription>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsInFavorites(!isInFavorites)}
                  >
                    <Icon
                      name="Heart"
                      size={16}
                      className={
                        isInFavorites ? "fill-red-500 text-red-500" : ""
                      }
                    />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-6 text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Icon name="MapPin" size={16} />
                    <span>{listing.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Calendar" size={16} />
                    <span>{listing.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Eye" size={16} />
                    <span>{listing.views} просмотров</span>
                  </div>
                </div>

                <Separator className="mb-4" />

                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Описание</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {listing.description}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Характеристики</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(listing.specifications).map(
                      ([key, value]) => (
                        <div
                          key={key}
                          className="flex justify-between py-2 border-b border-gray-100"
                        >
                          <span className="text-gray-600">{key}:</span>
                          <span className="font-medium">{value}</span>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Seller Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Продавец</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4 mb-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={listing.seller.avatar} />
                    <AvatarFallback>{listing.seller.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h4 className="font-semibold">{listing.seller.name}</h4>
                      {listing.seller.isVerified && (
                        <Badge variant="secondary" className="text-xs">
                          <Icon name="CheckCircle" size={12} className="mr-1" />
                          Проверен
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <Icon
                        name="Star"
                        size={14}
                        className="text-yellow-500 fill-current"
                      />
                      <span>{listing.seller.rating}</span>
                      <span>({listing.seller.reviews} отзывов)</span>
                    </div>
                    <p className="text-sm text-gray-500">
                      На сайте с {listing.seller.memberSince}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Время ответа:</span>
                    <span className="font-medium">
                      {listing.seller.responseTime}
                    </span>
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <Icon name="MessageCircle" size={16} className="mr-2" />
                    Написать продавцу
                  </Button>

                  <Button variant="outline" className="w-full">
                    <Icon name="Phone" size={16} className="mr-2" />
                    Показать телефон
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Safety Tips */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Icon
                    name="Shield"
                    size={20}
                    className="mr-2 text-green-600"
                  />
                  Безопасность
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-2">
                    <Icon
                      name="CheckCircle"
                      size={16}
                      className="text-green-600 mt-0.5"
                    />
                    <span>Встречайтесь в общественных местах</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Icon
                      name="CheckCircle"
                      size={16}
                      className="text-green-600 mt-0.5"
                    />
                    <span>Проверяйте товар перед покупкой</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Icon
                      name="CheckCircle"
                      size={16}
                      className="text-green-600 mt-0.5"
                    />
                    <span>Используйте безопасную сделку</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingDetail;
