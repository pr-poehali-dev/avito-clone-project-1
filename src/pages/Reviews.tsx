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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Reviews = () => {
  const [selectedRating, setSelectedRating] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const reviews = [
    {
      id: 1,
      reviewer: {
        name: "Анна Сидорова",
        avatar: "/img/c9ec103a-9f4d-455e-a783-d70cfed8a2e3.jpg",
        isVerified: true,
      },
      seller: {
        name: "Иван Петров",
        avatar: "/img/c9ec103a-9f4d-455e-a783-d70cfed8a2e3.jpg",
      },
      rating: 5,
      text: "Отличный продавец! Товар точно как в описании, быстрая доставка. Рекомендую всем!",
      date: "2024-07-08",
      listing: {
        title: "iPhone 15 Pro Max",
        price: "89 900 ₽",
        image: "/img/c9ec103a-9f4d-455e-a783-d70cfed8a2e3.jpg",
      },
      helpful: 12,
      reported: false,
    },
    {
      id: 2,
      reviewer: {
        name: "Михаил Козлов",
        avatar: "/img/c9ec103a-9f4d-455e-a783-d70cfed8a2e3.jpg",
        isVerified: false,
      },
      seller: {
        name: "Мария Волкова",
        avatar: "/img/c9ec103a-9f4d-455e-a783-d70cfed8a2e3.jpg",
      },
      rating: 4,
      text: "Хорошая сделка, но пришлось немного подождать. В целом доволен покупкой.",
      date: "2024-07-07",
      listing: {
        title: "Toyota Camry 2020",
        price: "2 450 000 ₽",
        image: "/img/c9ec103a-9f4d-455e-a783-d70cfed8a2e3.jpg",
      },
      helpful: 8,
      reported: false,
    },
    {
      id: 3,
      reviewer: {
        name: "Екатерина Петрова",
        avatar: "/img/c9ec103a-9f4d-455e-a783-d70cfed8a2e3.jpg",
        isVerified: true,
      },
      seller: {
        name: "Алексей Сидоров",
        avatar: "/img/c9ec103a-9f4d-455e-a783-d70cfed8a2e3.jpg",
      },
      rating: 5,
      text: "Профессиональный подход, все четко и быстро. Спасибо за качественную работу!",
      date: "2024-07-06",
      listing: {
        title: "Ремонт квартиры",
        price: "150 000 ₽",
        image: "/img/c9ec103a-9f4d-455e-a783-d70cfed8a2e3.jpg",
      },
      helpful: 15,
      reported: false,
    },
    {
      id: 4,
      reviewer: {
        name: "Дмитрий Иванов",
        avatar: "/img/c9ec103a-9f4d-455e-a783-d70cfed8a2e3.jpg",
        isVerified: false,
      },
      seller: {
        name: "Ольга Смирнова",
        avatar: "/img/c9ec103a-9f4d-455e-a783-d70cfed8a2e3.jpg",
      },
      rating: 3,
      text: "Нормально, но были некоторые проблемы с доставкой. Товар соответствует описанию.",
      date: "2024-07-05",
      listing: {
        title: 'MacBook Pro 14"',
        price: "179 900 ₽",
        image: "/img/c9ec103a-9f4d-455e-a783-d70cfed8a2e3.jpg",
      },
      helpful: 5,
      reported: false,
    },
  ];

  const topSellers = [
    {
      id: 1,
      name: "Иван Петров",
      avatar: "/img/c9ec103a-9f4d-455e-a783-d70cfed8a2e3.jpg",
      rating: 4.9,
      reviewCount: 124,
      salesCount: 89,
      category: "Электроника",
      isVerified: true,
    },
    {
      id: 2,
      name: "Мария Волкова",
      avatar: "/img/c9ec103a-9f4d-455e-a783-d70cfed8a2e3.jpg",
      rating: 4.8,
      reviewCount: 98,
      salesCount: 67,
      category: "Транспорт",
      isVerified: true,
    },
    {
      id: 3,
      name: "Алексей Сидоров",
      avatar: "/img/c9ec103a-9f4d-455e-a783-d70cfed8a2e3.jpg",
      rating: 4.7,
      reviewCount: 156,
      salesCount: 234,
      category: "Услуги",
      isVerified: true,
    },
  ];

  const ratingDistribution = {
    5: 65,
    4: 20,
    3: 8,
    2: 4,
    1: 3,
  };

  const averageRating = 4.6;
  const totalReviews = reviews.length;

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Отзывы</h1>
          <p className="text-gray-600">
            Отзывы покупателей о продавцах и услугах
          </p>
        </div>

        <Tabs defaultValue="reviews" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="reviews">Все отзывы</TabsTrigger>
            <TabsTrigger value="top-sellers">Лучшие продавцы</TabsTrigger>
          </TabsList>

          <TabsContent value="reviews" className="space-y-6">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Filters */}
              <div className="lg:col-span-1">
                <Card>
                  <CardHeader>
                    <CardTitle>Фильтры</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Поиск по тексту
                      </label>
                      <Input
                        placeholder="Поиск отзывов..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Рейтинг
                      </label>
                      <Select
                        value={selectedRating}
                        onValueChange={setSelectedRating}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите рейтинг" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Все рейтинги</SelectItem>
                          <SelectItem value="5">5 звезд</SelectItem>
                          <SelectItem value="4">4 звезды</SelectItem>
                          <SelectItem value="3">3 звезды</SelectItem>
                          <SelectItem value="2">2 звезды</SelectItem>
                          <SelectItem value="1">1 звезда</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>

                {/* Rating Statistics */}
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>Статистика рейтингов</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center mb-4">
                      <div className="text-3xl font-bold text-blue-600">
                        {averageRating}
                      </div>
                      <div className="flex justify-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Icon
                            key={i}
                            name="Star"
                            size={16}
                            className={
                              i < Math.floor(averageRating)
                                ? "text-yellow-500 fill-current"
                                : "text-gray-300"
                            }
                          />
                        ))}
                      </div>
                      <div className="text-sm text-gray-500">
                        {totalReviews} отзывов
                      </div>
                    </div>

                    <div className="space-y-2">
                      {Object.entries(ratingDistribution)
                        .reverse()
                        .map(([rating, percentage]) => (
                          <div
                            key={rating}
                            className="flex items-center space-x-2"
                          >
                            <span className="text-sm w-4">{rating}</span>
                            <Icon
                              name="Star"
                              size={14}
                              className="text-yellow-500 fill-current"
                            />
                            <div className="flex-1 bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-blue-600 h-2 rounded-full"
                                style={{ width: `${percentage}%` }}
                              />
                            </div>
                            <span className="text-sm text-gray-500">
                              {percentage}%
                            </span>
                          </div>
                        ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Reviews List */}
              <div className="lg:col-span-3">
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <Card key={review.id}>
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-center space-x-3">
                            <Avatar className="w-10 h-10">
                              <AvatarImage src={review.reviewer.avatar} />
                              <AvatarFallback>
                                {review.reviewer.name[0]}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="flex items-center space-x-2">
                                <span className="font-medium">
                                  {review.reviewer.name}
                                </span>
                                {review.reviewer.isVerified && (
                                  <Badge
                                    variant="secondary"
                                    className="text-xs"
                                  >
                                    <Icon
                                      name="CheckCircle"
                                      size={12}
                                      className="mr-1"
                                    />
                                    Проверен
                                  </Badge>
                                )}
                              </div>
                              <div className="flex items-center space-x-2 text-sm text-gray-500">
                                <span>Отзыв о</span>
                                <Avatar className="w-4 h-4">
                                  <AvatarImage src={review.seller.avatar} />
                                  <AvatarFallback className="text-xs">
                                    {review.seller.name[0]}
                                  </AvatarFallback>
                                </Avatar>
                                <span>{review.seller.name}</span>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center space-x-1 mb-1">
                              {[...Array(5)].map((_, i) => (
                                <Icon
                                  key={i}
                                  name="Star"
                                  size={16}
                                  className={
                                    i < review.rating
                                      ? "text-yellow-500 fill-current"
                                      : "text-gray-300"
                                  }
                                />
                              ))}
                            </div>
                            <div className="text-sm text-gray-500">
                              {review.date}
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 mb-4">{review.text}</p>

                        {/* Listing Info */}
                        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg mb-4">
                          <img
                            src={review.listing.image}
                            alt={review.listing.title}
                            className="w-12 h-12 object-cover rounded"
                          />
                          <div>
                            <h4 className="font-medium text-sm">
                              {review.listing.title}
                            </h4>
                            <p className="text-blue-600 font-semibold text-sm">
                              {review.listing.price}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <button className="flex items-center space-x-1 text-sm text-gray-500 hover:text-blue-600">
                              <Icon name="ThumbsUp" size={16} />
                              <span>Полезно ({review.helpful})</span>
                            </button>
                            <button className="flex items-center space-x-1 text-sm text-gray-500 hover:text-red-600">
                              <Icon name="Flag" size={16} />
                              <span>Пожаловаться</span>
                            </button>
                          </div>
                          <Button variant="outline" size="sm">
                            <Icon
                              name="MessageCircle"
                              size={14}
                              className="mr-2"
                            />
                            Ответить
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Load More */}
                <div className="text-center mt-8">
                  <Button variant="outline" size="lg">
                    <Icon name="ChevronDown" size={20} className="mr-2" />
                    Показать еще
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="top-sellers" className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Лучшие продавцы</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {topSellers.map((seller) => (
                  <Card
                    key={seller.id}
                    className="hover:shadow-lg transition-shadow"
                  >
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <Avatar className="w-16 h-16">
                          <AvatarImage src={seller.avatar} />
                          <AvatarFallback>{seller.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center space-x-2">
                            <h3 className="font-semibold">{seller.name}</h3>
                            {seller.isVerified && (
                              <Badge variant="secondary" className="text-xs">
                                <Icon
                                  name="CheckCircle"
                                  size={12}
                                  className="mr-1"
                                />
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
                            <span>{seller.rating}</span>
                            <span>({seller.reviewCount} отзывов)</span>
                          </div>
                          <Badge variant="outline" className="text-xs mt-1">
                            {seller.category}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Продаж:</span>
                          <span className="font-medium">
                            {seller.salesCount}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Отзывов:</span>
                          <span className="font-medium">
                            {seller.reviewCount}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Рейтинг:</span>
                          <span className="font-medium">{seller.rating}/5</span>
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
                        <Button variant="outline" size="sm" className="flex-1">
                          <Icon name="User" size={14} className="mr-2" />
                          Профиль
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Reviews;
