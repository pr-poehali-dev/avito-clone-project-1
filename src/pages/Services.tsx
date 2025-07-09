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
import Icon from "@/components/ui/icon";

const Services = () => {
  const serviceCategories = [
    {
      name: "Ремонт и строительство",
      icon: "Wrench",
      count: 245,
      color: "bg-orange-500",
      services: ["Электрика", "Сантехника", "Ремонт квартир", "Строительство"],
    },
    {
      name: "Красота и здоровье",
      icon: "Sparkles",
      count: 189,
      color: "bg-pink-500",
      services: ["Парикмахерские", "Массаж", "Косметология", "Фитнес"],
    },
    {
      name: "Образование",
      icon: "BookOpen",
      count: 156,
      color: "bg-blue-500",
      services: ["Репетиторы", "Курсы", "Языки", "Музыка"],
    },
    {
      name: "Транспорт",
      icon: "Car",
      count: 98,
      color: "bg-green-500",
      services: ["Такси", "Грузоперевозки", "Эвакуатор", "Курьеры"],
    },
    {
      name: "IT услуги",
      icon: "Code",
      count: 87,
      color: "bg-purple-500",
      services: ["Веб-разработка", "Ремонт техники", "Настройка ПК", "Дизайн"],
    },
    {
      name: "Домашние услуги",
      icon: "Home",
      count: 76,
      color: "bg-teal-500",
      services: ["Уборка", "Няни", "Садовники", "Повара"],
    },
  ];

  const featuredServices = [
    {
      id: 1,
      title: "Ремонт квартир под ключ",
      description: "Полный ремонт квартир с гарантией качества",
      price: "от 3 000 ₽/м²",
      image: "/img/c9ec103a-9f4d-455e-a783-d70cfed8a2e3.jpg",
      provider: {
        name: "Строй-Сервис",
        rating: 4.9,
        reviews: 124,
        isVerified: true,
      },
      badges: ["Гарантия", "Лицензия"],
    },
    {
      id: 2,
      title: "Репетитор по математике",
      description: "Подготовка к ЕГЭ и ОГЭ, индивидуальные занятия",
      price: "от 1 500 ₽/час",
      image: "/img/c9ec103a-9f4d-455e-a783-d70cfed8a2e3.jpg",
      provider: {
        name: "Анна Петрова",
        rating: 4.8,
        reviews: 89,
        isVerified: true,
      },
      badges: ["Опыт 10 лет", "Высшее образование"],
    },
    {
      id: 3,
      title: "Создание сайтов",
      description: "Разработка современных веб-сайтов",
      price: "от 25 000 ₽",
      image: "/img/c9ec103a-9f4d-455e-a783-d70cfed8a2e3.jpg",
      provider: {
        name: "WebDev Studio",
        rating: 4.7,
        reviews: 56,
        isVerified: true,
      },
      badges: ["Портфолио", "Техподдержка"],
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
              <Link to="/services" className="text-blue-600 font-medium">
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
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Услуги</h1>
          <p className="text-xl text-gray-600 mb-8">
            Найдите проверенных специалистов для любых задач
          </p>

          <div className="max-w-2xl mx-auto">
            <div className="flex space-x-4">
              <div className="flex-1 relative">
                <Icon
                  name="Search"
                  size={20}
                  className="absolute left-3 top-3 text-gray-400"
                />
                <input
                  type="text"
                  placeholder="Что вам нужно?"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Icon name="Search" size={20} className="mr-2" />
                Найти
              </Button>
            </div>
          </div>
        </div>

        {/* Service Categories */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Категории услуг</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCategories.map((category) => (
              <Card
                key={category.name}
                className="hover:shadow-lg transition-shadow cursor-pointer"
              >
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div
                      className={`${category.color} w-12 h-12 rounded-lg flex items-center justify-center`}
                    >
                      <Icon
                        name={category.icon}
                        size={24}
                        className="text-white"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{category.name}</CardTitle>
                      <CardDescription>
                        {category.count} специалистов
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.services.map((service) => (
                      <Badge
                        key={service}
                        variant="outline"
                        className="text-xs"
                      >
                        {service}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Featured Services */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Рекомендуемые услуги</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <Card
                key={service.id}
                className="hover:shadow-lg transition-shadow"
              >
                <div className="relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-2 right-2 space-y-1">
                    {service.badges.map((badge) => (
                      <Badge key={badge} className="bg-blue-500 text-xs">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                  <div className="text-xl font-bold text-blue-600">
                    {service.price}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback>
                          {service.provider.name[0]}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center space-x-1">
                          <span className="text-sm font-medium">
                            {service.provider.name}
                          </span>
                          {service.provider.isVerified && (
                            <Icon
                              name="CheckCircle"
                              size={14}
                              className="text-green-500"
                            />
                          )}
                        </div>
                        <div className="flex items-center space-x-1 text-xs text-gray-500">
                          <Icon
                            name="Star"
                            size={12}
                            className="text-yellow-500 fill-current"
                          />
                          <span>{service.provider.rating}</span>
                          <span>({service.provider.reviews} отзывов)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      className="flex-1 bg-blue-600 hover:bg-blue-700"
                    >
                      <Icon name="MessageCircle" size={14} className="mr-2" />
                      Написать
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Icon name="Phone" size={14} className="mr-2" />
                      Позвонить
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-white rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">
            Как это работает
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Search" size={24} className="text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">1. Найдите специалиста</h3>
              <p className="text-gray-600">
                Выберите нужную категорию и просмотрите анкеты специалистов
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon
                  name="MessageCircle"
                  size={24}
                  className="text-blue-600"
                />
              </div>
              <h3 className="font-semibold mb-2">2. Обсудите детали</h3>
              <p className="text-gray-600">
                Свяжитесь с исполнителем и договоритесь о цене и сроках
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="CheckCircle" size={24} className="text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">3. Получите результат</h3>
              <p className="text-gray-600">
                Специалист выполнит работу, а вы оставите отзыв
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-lg p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Станьте исполнителем</h2>
          <p className="text-xl mb-6">Зарабатывайте, предлагая свои услуги</p>
          <div className="flex justify-center space-x-4">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              <Icon name="Plus" size={20} className="mr-2" />
              Разместить услугу
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600"
            >
              <Icon name="Info" size={20} className="mr-2" />
              Узнать больше
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
