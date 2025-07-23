import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    {
      icon: 'Code',
      title: 'Разработка ПО',
      description: 'Создание современных программных решений и веб-приложений для вашего бизнеса',
      color: 'bg-blue-50 text-blue-600'
    },
    {
      icon: 'Package',
      title: 'Производство товаров',
      description: 'Разработка и производство инновационных продуктов высокого качества',
      color: 'bg-slate-50 text-slate-600'
    },
    {
      icon: 'TreePine',
      title: 'Рекреационная деятельность',
      description: 'Организация отдыха и развлекательных мероприятий для корпоративных клиентов',
      color: 'bg-green-50 text-green-600'
    },
    {
      icon: 'Fuel',
      title: 'ГСМ торговля',
      description: 'Оптово-розничная торговля горюче-смазочными материалами премиум качества',
      color: 'bg-orange-50 text-orange-600'
    },
    {
      icon: 'Scale',
      title: 'Юридические услуги',
      description: 'Комплексное правовое сопровождение бизнеса, консультации и представительство',
      color: 'bg-purple-50 text-purple-600'
    },
    {
      icon: 'Search',
      title: 'Судебно-экспертная деятельность',
      description: 'Проведение независимых экспертиз и исследований для судебных органов',
      color: 'bg-indigo-50 text-indigo-600'
    }
  ];

  const products = [
    {
      id: 1,
      name: 'ERP Система',
      category: 'software',
      price: 'от 150 000 ₽',
      description: 'Комплексная система управления предприятием',
      image: '/img/35c57885-367e-4858-8b64-33d5c1d35b92.jpg'
    },
    {
      id: 2,
      name: 'Моторное масло Premium',
      category: 'fuel',
      price: '2 500 ₽/л',
      description: 'Синтетическое моторное масло высшего качества',
      image: '/img/6d0568e4-b9ba-4165-a8c0-b9d0e485c272.jpg'
    },
    {
      id: 3,
      name: 'Корпоративный портал',
      category: 'software',
      price: 'от 80 000 ₽',
      description: 'Внутренний портал для сотрудников компании',
      image: '/img/35c57885-367e-4858-8b64-33d5c1d35b92.jpg'
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">К</span>
              </div>
              <span className="text-xl font-semibold text-slate-900">КАЙЛАБ</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-slate-600 hover:text-blue-600 transition-colors">Главная</a>
              <a href="#about" className="text-slate-600 hover:text-blue-600 transition-colors">О компании</a>
              <a href="#services" className="text-slate-600 hover:text-blue-600 transition-colors">Услуги</a>
              <a href="#products" className="text-slate-600 hover:text-blue-600 transition-colors">Продукция</a>
              <a href="#news" className="text-slate-600 hover:text-blue-600 transition-colors">Новости</a>
              <a href="#contacts" className="text-slate-600 hover:text-blue-600 transition-colors">Контакты</a>
            </div>
            <Button variant="outline" className="md:hidden">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                Инновационные решения от 
                <span className="text-blue-600 block">ООО "КАЙЛАБ"</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">"Omnes in una est unum in omnibus"</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Наши услуги
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button variant="outline" size="lg">
                  Связаться с нами
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="/img/6d0568e4-b9ba-4165-a8c0-b9d0e485c272.jpg" 
                alt="Офис Кайлаб" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Наши направления
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Комплексные решения для развития вашего бизнеса в шести ключевых областях
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-0 bg-white shadow-md">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto rounded-2xl ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon name={service.icon as any} size={32} />
                  </div>
                  <CardTitle className="text-lg font-semibold text-slate-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 text-center leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Каталог продукции
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Высококачественные продукты и решения для различных отраслей
            </p>
            
            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center max-w-md mx-auto">
              <Input placeholder="Поиск продукции..." className="flex-1" />
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Категория" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все категории</SelectItem>
                  <SelectItem value="software">Программное обеспечение</SelectItem>
                  <SelectItem value="fuel">ГСМ</SelectItem>
                  <SelectItem value="equipment">Оборудование</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-w-16 aspect-h-10 bg-slate-200">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg font-semibold text-slate-900">
                      {product.name}
                    </CardTitle>
                    <Badge variant="secondary" className="text-xs">
                      {product.category === 'software' ? 'ПО' : 'ГСМ'}
                    </Badge>
                  </div>
                  <CardDescription className="text-slate-600">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-blue-600">
                      {product.price}
                    </span>
                    <Button variant="outline" size="sm">
                      <Icon name="ShoppingCart" size={16} className="mr-2" />
                      В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                О компании Кайлаб
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                ООО "Кайлаб" — динамично развивающаяся компания с многолетним опытом работы 
                в сфере высоких технологий и промышленности. Мы объединяем инновационные решения 
                в области IT с традиционными направлениями бизнеса.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-slate-700">Более 10 лет на рынке</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-slate-700">200+ успешных проектов</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-slate-700">Собственное производство</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-slate-50 p-8 rounded-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                  <div className="text-slate-600">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-slate-600">Клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-slate-600">Сотрудников</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">4</div>
                  <div className="text-slate-600">Направления</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Последние новости
            </h2>
            <p className="text-xl text-slate-600">
              Следите за нашими достижениями и обновлениями
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-blue-100 text-blue-800">Новости</Badge>
                  <CardTitle className="text-lg">
                    Новое направление деятельности компании
                  </CardTitle>
                  <CardDescription className="text-slate-500">
                    15 января 2024
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Компания Кайлаб объявляет о запуске нового направления 
                    в области экологически чистых технологий...
                  </p>
                  <Button variant="ghost" className="p-0 h-auto text-blue-600 hover:text-blue-700">
                    Читать далее
                    <Icon name="ArrowRight" size={16} className="ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Свяжитесь с нами
            </h2>
            <p className="text-xl text-slate-600">
              Готовы обсудить ваш следующий проект
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" size={32} className="text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Телефон</h3>
              <p className="text-slate-600">+7 (495) 123-45-67</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" size={32} className="text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Email</h3>
              <p className="text-slate-600">info@kailab.ru</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" size={32} className="text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Адрес</h3>
              <p className="text-slate-600">г. Москва, ул. Примерная, д. 123</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">К</span>
              </div>
              <span className="text-xl font-semibold">Кайлаб</span>
            </div>
            <p className="text-slate-400 mb-6">
              ООО "Кайлаб" — ваш надежный партнер в мире инноваций
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Icon name="Linkedin" size={20} />
              </a>
            </div>
            <div className="border-t border-slate-800 mt-8 pt-8">
              <p className="text-slate-500 text-sm">
                © 2024 ООО "Кайлаб". Все права защищены.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;