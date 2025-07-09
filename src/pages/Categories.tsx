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
import Icon from "@/components/ui/icon";

const Categories = () => {
  const categories = [
    {
      name: "Недвижимость",
      icon: "Home",
      count: 1250,
      color: "bg-blue-500",
      subcategories: ["Квартиры", "Дома", "Комнаты", "Коммерческая"],
    },
    {
      name: "Транспорт",
      icon: "Car",
      count: 850,
      color: "bg-green-500",
      subcategories: ["Автомобили", "Мотоциклы", "Грузовики", "Запчасти"],
    },
    {
      name: "Электроника",
      icon: "Smartphone",
      count: 2100,
      color: "bg-purple-500",
      subcategories: ["Телефоны", "Компьютеры", "ТВ и аудио", "Игры"],
    },
    {
      name: "Одежда",
      icon: "Shirt",
      count: 680,
      color: "bg-pink-500",
      subcategories: ["Женская", "Мужская", "Детская", "Обувь"],
    },
    {
      name: "Мебель",
      icon: "Armchair",
      count: 420,
      color: "bg-yellow-500",
      subcategories: ["Диваны", "Столы", "Шкафы", "Декор"],
    },
    {
      name: "Работа",
      icon: "Briefcase",
      count: 1850,
      color: "bg-orange-500",
      subcategories: ["IT", "Продажи", "Маркетинг", "Образование"],
    },
    {
      name: "Животные",
      icon: "Heart",
      count: 320,
      color: "bg-red-500",
      subcategories: ["Собаки", "Кошки", "Товары для животных", "Услуги"],
    },
    {
      name: "Услуги",
      icon: "Settings",
      count: 950,
      color: "bg-indigo-500",
      subcategories: ["Ремонт", "Красота", "Репетиторы", "Доставка"],
    },
    {
      name: "Хобби и отдых",
      icon: "Gamepad2",
      count: 540,
      color: "bg-teal-500",
      subcategories: ["Спорт", "Музыка", "Книги", "Коллекционирование"],
    },
    {
      name: "Для дома",
      icon: "Wrench",
      count: 380,
      color: "bg-amber-500",
      subcategories: ["Инструменты", "Сад", "Кухня", "Бытовая техника"],
    },
    {
      name: "Детские товары",
      icon: "Baby",
      count: 290,
      color: "bg-cyan-500",
      subcategories: ["Одежда", "Игрушки", "Коляски", "Мебель"],
    },
    {
      name: "Красота и здоровье",
      icon: "Heart",
      count: 210,
      color: "bg-rose-500",
      subcategories: ["Косметика", "Парфюмерия", "Медицина", "Фитнес"],
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
              <Link to="/categories" className="text-blue-600 font-medium">
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
          <h1 className="text-3xl font-bold mb-2">Категории</h1>
          <p className="text-gray-600">
            Выберите категорию для поиска объявлений
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={`/listings?category=${category.name.toLowerCase()}`}
              className="group"
            >
              <Card className="hover:shadow-lg transition-all duration-200 cursor-pointer border-2 border-transparent hover:border-blue-200">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
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
                        <CardTitle className="text-lg">
                          {category.name}
                        </CardTitle>
                        <CardDescription className="text-sm text-gray-500">
                          {category.count} объявлений
                        </CardDescription>
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {category.count}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-gray-700 mb-3">
                      Подкатегории:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {category.subcategories.map((subcategory) => (
                        <Badge
                          key={subcategory}
                          variant="outline"
                          className="text-xs hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300"
                        >
                          {subcategory}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Popular Categories Banner */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8">
            Популярные категории
          </h2>
          <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-lg p-8 text-white">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="TrendingUp" size={32} />
                </div>
                <h3 className="font-semibold mb-2">Электроника</h3>
                <p className="text-blue-100 text-sm">
                  Самая популярная категория с 2100+ объявлениями
                </p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={32} />
                </div>
                <h3 className="font-semibold mb-2">Работа</h3>
                <p className="text-blue-100 text-sm">
                  1850+ вакансий и резюме от проверенных работодателей
                </p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Home" size={32} />
                </div>
                <h3 className="font-semibold mb-2">Недвижимость</h3>
                <p className="text-blue-100 text-sm">
                  1250+ предложений недвижимости в вашем городе
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
