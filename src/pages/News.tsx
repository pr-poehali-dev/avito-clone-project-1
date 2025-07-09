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
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";

const News = () => {
  const newsArticles = [
    {
      id: 1,
      title: "Новые правила безопасности для покупателей",
      summary: "Мы внедрили дополнительные меры защиты для безопасных сделок",
      content: "Полный текст новости о новых правилах безопасности...",
      image: "/img/c9ec103a-9f4d-455e-a783-d70cfed8a2e3.jpg",
      category: "Безопасность",
      date: "2024-07-08",
      author: "АвитоПлюс",
      readTime: "3 мин",
      isImportant: true,
    },
    {
      id: 2,
      title: "Обновление мобильного приложения",
      summary: "Новые функции и улучшения в последней версии приложения",
      content: "Полный текст новости об обновлении...",
      image: "/img/c9ec103a-9f4d-455e-a783-d70cfed8a2e3.jpg",
      category: "Обновления",
      date: "2024-07-07",
      author: "Команда разработки",
      readTime: "2 мин",
      isImportant: false,
    },
    {
      id: 3,
      title: "Топ-5 категорий товаров в июне",
      summary: "Аналитика самых популярных категорий среди пользователей",
      content: "Полный текст аналитики...",
      image: "/img/c9ec103a-9f4d-455e-a783-d70cfed8a2e3.jpg",
      category: "Аналитика",
      date: "2024-07-06",
      author: "Отдел аналитики",
      readTime: "4 мин",
      isImportant: false,
    },
    {
      id: 4,
      title: "Как защитить себя от мошенников",
      summary: "Практические советы для безопасных покупок и продаж",
      content: "Полный текст советов...",
      image: "/img/c9ec103a-9f4d-455e-a783-d70cfed8a2e3.jpg",
      category: "Советы",
      date: "2024-07-05",
      author: "Служба безопасности",
      readTime: "5 мин",
      isImportant: true,
    },
    {
      id: 5,
      title: "Интеграция с картами для встреч",
      summary: "Теперь вы можете легко найти безопасное место для встречи",
      content: "Полный текст о новой функции...",
      image: "/img/c9ec103a-9f4d-455e-a783-d70cfed8a2e3.jpg",
      category: "Функции",
      date: "2024-07-04",
      author: "Продуктовая команда",
      readTime: "3 мин",
      isImportant: false,
    },
  ];

  const categories = [
    { name: "Все новости", count: newsArticles.length },
    { name: "Безопасность", count: 2 },
    { name: "Обновления", count: 1 },
    { name: "Аналитика", count: 1 },
    { name: "Советы", count: 1 },
    { name: "Функции", count: 1 },
  ];

  const featuredArticle = newsArticles[0];
  const otherArticles = newsArticles.slice(1);

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
              <Link to="/news" className="text-blue-600 font-medium">
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
          <h1 className="text-3xl font-bold mb-2">Новости</h1>
          <p className="text-gray-600">
            Последние обновления и полезная информация
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Категории</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.name}
                      className="w-full flex items-center justify-between p-2 text-left hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <span className="text-sm">{category.name}</span>
                      <Badge variant="secondary" className="text-xs">
                        {category.count}
                      </Badge>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Newsletter Signup */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Подписка на новости</CardTitle>
                <CardDescription>
                  Получайте уведомления о важных обновлениях
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Ваш email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <Icon name="Mail" size={16} className="mr-2" />
                    Подписаться
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Article */}
            <Card className="mb-8">
              <div className="relative">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                {featuredArticle.isImportant && (
                  <Badge className="absolute top-4 left-4 bg-red-500">
                    <Icon name="AlertCircle" size={14} className="mr-1" />
                    Важно
                  </Badge>
                )}
                <Badge className="absolute top-4 right-4 bg-blue-500">
                  {featuredArticle.category}
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">
                  {featuredArticle.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {featuredArticle.summary}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback>
                        {featuredArticle.author[0]}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">
                        {featuredArticle.author}
                      </p>
                      <div className="flex items-center space-x-2 text-xs text-gray-500">
                        <Icon name="Calendar" size={12} />
                        <span>{featuredArticle.date}</span>
                        <Icon name="Clock" size={12} />
                        <span>{featuredArticle.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Icon name="BookOpen" size={16} className="mr-2" />
                  Читать полностью
                </Button>
              </CardContent>
            </Card>

            {/* Other Articles */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">Другие новости</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {otherArticles.map((article) => (
                  <Card
                    key={article.id}
                    className="hover:shadow-lg transition-shadow"
                  >
                    <div className="relative">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-32 object-cover rounded-t-lg"
                      />
                      {article.isImportant && (
                        <Badge className="absolute top-2 left-2 bg-red-500 text-xs">
                          <Icon name="AlertCircle" size={12} className="mr-1" />
                          Важно
                        </Badge>
                      )}
                      <Badge className="absolute top-2 right-2 bg-blue-500 text-xs">
                        {article.category}
                      </Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg line-clamp-2">
                        {article.title}
                      </CardTitle>
                      <CardDescription className="text-sm line-clamp-3">
                        {article.summary}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-2">
                          <Avatar className="w-6 h-6">
                            <AvatarFallback className="text-xs">
                              {article.author[0]}
                            </AvatarFallback>
                          </Avatar>
                          <span className="text-xs text-gray-600">
                            {article.author}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 text-xs text-gray-500">
                          <Icon name="Calendar" size={12} />
                          <span>{article.date}</span>
                          <Icon name="Clock" size={12} />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="w-full">
                        <Icon name="BookOpen" size={14} className="mr-2" />
                        Читать
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
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

        {/* Important Notices */}
        <div className="mt-16 bg-blue-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Icon name="Bell" size={20} className="mr-2 text-blue-600" />
            Важные уведомления
          </h2>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <Icon name="Info" size={16} className="text-blue-600 mt-1" />
              <div>
                <p className="font-medium">Обновление правил безопасности</p>
                <p className="text-sm text-gray-600">
                  Ознакомьтесь с новыми правилами безопасных сделок
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Icon name="Shield" size={16} className="text-green-600 mt-1" />
              <div>
                <p className="font-medium">Защита от мошенников</p>
                <p className="text-sm text-gray-600">
                  Советы по безопасным покупкам и продажам
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Icon name="Star" size={16} className="text-yellow-600 mt-1" />
              <div>
                <p className="font-medium">Система рейтингов</p>
                <p className="text-sm text-gray-600">
                  Как работает система оценок продавцов
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
