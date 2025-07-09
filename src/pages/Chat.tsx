import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Chat = () => {
  const [selectedChat, setSelectedChat] = useState(1);
  const [message, setMessage] = useState("");

  const chats = [
    {
      id: 1,
      participant: "Мария Сидорова",
      avatar: "/img/c9ec103a-9f4d-455e-a783-d70cfed8a2e3.jpg",
      lastMessage: "Когда можно забрать?",
      timestamp: "14:30",
      isOnline: true,
      unread: 2,
      listing: {
        title: "Toyota Camry 2020",
        price: "2 450 000 ₽",
        image: "/img/c9ec103a-9f4d-455e-a783-d70cfed8a2e3.jpg",
      },
    },
    {
      id: 2,
      participant: "Алексей Козлов",
      avatar: "/img/c9ec103a-9f4d-455e-a783-d70cfed8a2e3.jpg",
      lastMessage: "Спасибо за покупку!",
      timestamp: "12:15",
      isOnline: false,
      unread: 0,
      listing: {
        title: "2-комнатная квартира",
        price: "8 500 000 ₽",
        image: "/img/c9ec103a-9f4d-455e-a783-d70cfed8a2e3.jpg",
      },
    },
    {
      id: 3,
      participant: "Екатерина Волкова",
      avatar: "/img/c9ec103a-9f4d-455e-a783-d70cfed8a2e3.jpg",
      lastMessage: "Торг возможен?",
      timestamp: "10:45",
      isOnline: true,
      unread: 1,
      listing: {
        title: 'MacBook Pro 14"',
        price: "179 900 ₽",
        image: "/img/c9ec103a-9f4d-455e-a783-d70cfed8a2e3.jpg",
      },
    },
  ];

  const messages = [
    {
      id: 1,
      senderId: 2,
      text: "Здравствуйте! Интересует ваш товар.",
      timestamp: "14:25",
      isRead: true,
    },
    {
      id: 2,
      senderId: 1,
      text: "Здравствуйте! Да, товар доступен. Что вас интересует?",
      timestamp: "14:26",
      isRead: true,
    },
    {
      id: 3,
      senderId: 2,
      text: "Можно встретиться сегодня вечером?",
      timestamp: "14:28",
      isRead: true,
    },
    {
      id: 4,
      senderId: 1,
      text: "Да, конечно! Предлагаю встретиться в 18:00 возле метро.",
      timestamp: "14:29",
      isRead: true,
    },
    {
      id: 5,
      senderId: 2,
      text: "Когда можно забрать?",
      timestamp: "14:30",
      isRead: false,
    },
  ];

  const currentChat = chats.find((chat) => chat.id === selectedChat);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      console.log("Send message:", message);
      setMessage("");
    }
  };

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
                  <Icon
                    name="MessageCircle"
                    size={20}
                    className="text-blue-600"
                  />
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
          <h1 className="text-3xl font-bold mb-2">Сообщения</h1>
          <p className="text-gray-600">Общайтесь с покупателями и продавцами</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 h-[600px]">
          {/* Chat List */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Чаты</span>
                <Badge variant="secondary">{chats.length}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <ScrollArea className="h-[500px]">
                <div className="space-y-1">
                  {chats.map((chat) => (
                    <div
                      key={chat.id}
                      onClick={() => setSelectedChat(chat.id)}
                      className={`p-4 hover:bg-gray-50 cursor-pointer transition-colors ${
                        selectedChat === chat.id
                          ? "bg-blue-50 border-r-2 border-blue-500"
                          : ""
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <Avatar className="w-10 h-10">
                            <AvatarImage src={chat.avatar} />
                            <AvatarFallback>
                              {chat.participant[0]}
                            </AvatarFallback>
                          </Avatar>
                          {chat.isOnline && (
                            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-medium truncate">
                              {chat.participant}
                            </p>
                            <span className="text-xs text-gray-500">
                              {chat.timestamp}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 truncate">
                            {chat.lastMessage}
                          </p>
                          <p className="text-xs text-gray-500 truncate">
                            {chat.listing.title}
                          </p>
                        </div>
                        {chat.unread > 0 && (
                          <Badge className="bg-blue-600 text-white text-xs">
                            {chat.unread}
                          </Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Chat Window */}
          <Card className="lg:col-span-2">
            {currentChat ? (
              <>
                {/* Chat Header */}
                <CardHeader className="border-b">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={currentChat.avatar} />
                          <AvatarFallback>
                            {currentChat.participant[0]}
                          </AvatarFallback>
                        </Avatar>
                        {currentChat.isOnline && (
                          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold">
                          {currentChat.participant}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {currentChat.isOnline
                            ? "В сети"
                            : "Был в сети недавно"}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">
                        <Icon name="Phone" size={16} />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Icon name="MoreVertical" size={16} />
                      </Button>
                    </div>
                  </div>
                </CardHeader>

                {/* Listing Info */}
                <div className="p-4 border-b bg-gray-50">
                  <div className="flex items-center space-x-3">
                    <img
                      src={currentChat.listing.image}
                      alt={currentChat.listing.title}
                      className="w-12 h-12 object-cover rounded-lg"
                    />
                    <div>
                      <h4 className="font-medium text-sm">
                        {currentChat.listing.title}
                      </h4>
                      <p className="text-blue-600 font-semibold">
                        {currentChat.listing.price}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Messages */}
                <CardContent className="p-0">
                  <ScrollArea className="h-[350px] p-4">
                    <div className="space-y-4">
                      {messages.map((message) => (
                        <div
                          key={message.id}
                          className={`flex ${message.senderId === 1 ? "justify-end" : "justify-start"}`}
                        >
                          <div
                            className={`max-w-xs px-4 py-2 rounded-lg ${
                              message.senderId === 1
                                ? "bg-blue-600 text-white"
                                : "bg-gray-200 text-gray-900"
                            }`}
                          >
                            <p className="text-sm">{message.text}</p>
                            <div className="flex items-center justify-between mt-1">
                              <span className="text-xs opacity-75">
                                {message.timestamp}
                              </span>
                              {message.senderId === 1 && (
                                <Icon
                                  name={message.isRead ? "CheckCheck" : "Check"}
                                  size={12}
                                  className="ml-2 opacity-75"
                                />
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>

                {/* Message Input */}
                <div className="p-4 border-t">
                  <form onSubmit={handleSendMessage} className="flex space-x-2">
                    <Input
                      placeholder="Напишите сообщение..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="flex-1"
                    />
                    <Button
                      type="submit"
                      size="sm"
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      <Icon name="Send" size={16} />
                    </Button>
                  </form>
                </div>
              </>
            ) : (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <Icon
                    name="MessageCircle"
                    size={64}
                    className="mx-auto text-gray-400 mb-4"
                  />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Выберите чат
                  </h3>
                  <p className="text-gray-500">
                    Выберите чат из списка слева для начала общения
                  </p>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Chat;
