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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Profile = () => {
  const user = {
    name: "Иван Петров",
    email: "ivan.petrov@example.com",
    avatar: "/img/c9ec103a-9f4d-455e-a783-d70cfed8a2e3.jpg",
    rating: 4.8,
    reviews: 45,
    memberSince: "2022",
    isVerified: true,
    responseTime: "15 минут",
    location: "Москва",
    phone: "+7 (999) 123-45-67",
  };

  const myListings = [
    {
      id: 1,
      title: "iPhone 15 Pro Max",
      price: "89 900 ₽",
      image: "/img/c9ec103a-9f4d-455e-a783-d70cfed8a2e3.jpg",
      status: "active",
      views: 456,
      date: "2024-07-08",
    },
    {
      id: 2,
      title: 'MacBook Pro 14"',
      price: "179 900 ₽",
      image: "/img/c9ec103a-9f4d-455e-a783-d70cfed8a2e3.jpg",
      status: "sold",
      views: 234,
      date: "2024-07-05",
    },
  ];

  const favoriteListings = [
    {
      id: 3,
      title: "Toyota Camry 2020",
      price: "2 450 000 ₽",
      image: "/img/c9ec103a-9f4d-455e-a783-d70cfed8a2e3.jpg",
      location: "Санкт-Петербург",
      seller: "Мария Сидорова",
    },
    {
      id: 4,
      title: "2-комнатная квартира",
      price: "8 500 000 ₽",
      image: "/img/c9ec103a-9f4d-455e-a783-d70cfed8a2e3.jpg",
      location: "Москва",
      seller: "Алексей Козлов",
    },
  ];

  const reviews = [
    {
      id: 1,
      author: "Мария Сидорова",
      rating: 5,
      text: "Отличный продавец! Товар точно как в описании, быстрая доставка.",
      date: "2024-07-01",
    },
    {
      id: 2,
      author: "Алексей Козлов",
      rating: 4,
      text: "Все прошло хорошо, рекомендую!",
      date: "2024-06-28",
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
                  <Icon name="User" size={20} className="text-blue-600" />
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
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Info */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar className="w-20 h-20">
                    <AvatarImage src={user.avatar} />
                    <AvatarFallback>{user.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h2 className="text-xl font-semibold">{user.name}</h2>
                      {user.isVerified && (
                        <Badge variant="secondary">
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
                      <span>{user.rating}</span>
                      <span>({user.reviews} отзывов)</span>
                    </div>
                    <p className="text-sm text-gray-500">
                      На сайте с {user.memberSince}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium mb-2">Контактная информация</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <Icon name="Mail" size={16} className="text-gray-400" />
                        <span>{user.email}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon
                          name="Phone"
                          size={16}
                          className="text-gray-400"
                        />
                        <span>{user.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon
                          name="MapPin"
                          size={16}
                          className="text-gray-400"
                        />
                        <span>{user.location}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Статистика</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Время ответа:</span>
                        <span className="font-medium">{user.responseTime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">
                          Активных объявлений:
                        </span>
                        <span className="font-medium">
                          {
                            myListings.filter((l) => l.status === "active")
                              .length
                          }
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Продано:</span>
                        <span className="font-medium">
                          {myListings.filter((l) => l.status === "sold").length}
                        </span>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full" variant="outline">
                    <Icon name="Settings" size={16} className="mr-2" />
                    Редактировать профиль
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="listings" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="listings">Мои объявления</TabsTrigger>
                <TabsTrigger value="favorites">Избранное</TabsTrigger>
                <TabsTrigger value="reviews">Отзывы</TabsTrigger>
              </TabsList>

              <TabsContent value="listings" className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Мои объявления</h3>
                  <Link to="/create-listing">
                    <Button size="sm">
                      <Icon name="Plus" size={16} className="mr-2" />
                      Добавить объявление
                    </Button>
                  </Link>
                </div>

                <div className="space-y-4">
                  {myListings.map((listing) => (
                    <Card key={listing.id}>
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-4">
                          <img
                            src={listing.image}
                            alt={listing.title}
                            className="w-20 h-20 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h4 className="font-medium">{listing.title}</h4>
                              <Badge
                                variant={
                                  listing.status === "active"
                                    ? "default"
                                    : "secondary"
                                }
                              >
                                {listing.status === "active"
                                  ? "Активно"
                                  : "Продано"}
                              </Badge>
                            </div>
                            <p className="text-lg font-semibold text-blue-600 mt-1">
                              {listing.price}
                            </p>
                            <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                              <div className="flex items-center space-x-1">
                                <Icon name="Eye" size={14} />
                                <span>{listing.views} просмотров</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Icon name="Calendar" size={14} />
                                <span>{listing.date}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              <Icon name="Edit" size={16} />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Icon name="Trash2" size={16} />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="favorites" className="space-y-4">
                <h3 className="text-lg font-semibold">Избранное</h3>
                <div className="space-y-4">
                  {favoriteListings.map((listing) => (
                    <Card key={listing.id}>
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-4">
                          <img
                            src={listing.image}
                            alt={listing.title}
                            className="w-20 h-20 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <Link to={`/listings/${listing.id}`}>
                              <h4 className="font-medium hover:text-blue-600">
                                {listing.title}
                              </h4>
                            </Link>
                            <p className="text-lg font-semibold text-blue-600 mt-1">
                              {listing.price}
                            </p>
                            <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                              <div className="flex items-center space-x-1">
                                <Icon name="MapPin" size={14} />
                                <span>{listing.location}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Icon name="User" size={14} />
                                <span>{listing.seller}</span>
                              </div>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            <Icon
                              name="Heart"
                              size={16}
                              className="fill-red-500 text-red-500"
                            />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="space-y-4">
                <h3 className="text-lg font-semibold">Отзывы обо мне</h3>
                <div className="space-y-4">
                  {reviews.map((review) => (
                    <Card key={review.id}>
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-3">
                          <Avatar className="w-10 h-10">
                            <AvatarFallback>{review.author[0]}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h4 className="font-medium">{review.author}</h4>
                              <div className="flex items-center space-x-1">
                                {[...Array(5)].map((_, i) => (
                                  <Icon
                                    key={i}
                                    name="Star"
                                    size={14}
                                    className={
                                      i < review.rating
                                        ? "text-yellow-500 fill-current"
                                        : "text-gray-300"
                                    }
                                  />
                                ))}
                              </div>
                            </div>
                            <p className="text-gray-700 mt-2">{review.text}</p>
                            <p className="text-sm text-gray-500 mt-2">
                              {review.date}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
