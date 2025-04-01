import React from 'react';

// 1. Header 컴포넌트
const Header = ({ title, subtitle }) => {
  return (
    <header className="bg-blue-600 text-white py-6 text-center mb-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-2">{title}</h1>
        <p className="text-lg">{subtitle}</p>
      </div>
    </header>
  );
};

// 2. Navigation 컴포넌트
const Navigation = ({ links }) => {
  return (
    <nav className="bg-blue-800 py-3 mb-6">
      <div className="container mx-auto px-4">
        <ul className="flex justify-center space-x-6">
          {links.map((link, index) => (
            <li key={index}>
              <a 
                href={link.url} 
                className="text-white font-bold hover:underline"
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

// 3. Hero 컴포넌트
const Hero = ({ heading, content }) => {
  return (
    <div className="container mx-auto px-4 mb-8">
      <section className="bg-blue-100 p-10 rounded-lg text-center">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">{heading}</h2>
        <p className="text-gray-700">{content}</p>
      </section>
    </div>
  );
};

// 4. DestinationCard 컴포넌트 (5개의 props를 받음)
const DestinationCard = ({ image, name, description, rating, location }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:transform hover:-translate-y-1">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <h3 className="text-xl font-bold text-blue-800 mb-2">{name}</h3>
        <p className="text-gray-700 mb-3">{description}</p>
        <p className="mb-2"><strong>위치:</strong> {location}</p>
        <p className="text-orange-500 font-bold mb-4">평점: {rating}/5</p>
        <a 
          href="#" 
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded font-bold hover:bg-blue-800"
        >
          자세히 보기
        </a>
      </div>
    </div>
  );
};

// 5. Destinations 컴포넌트
const Destinations = ({ destinations }) => {
  return (
    <div className="container mx-auto px-4 mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">인기 여행지</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {destinations.map((destination, index) => (
          <DestinationCard
            key={index}
            image={destination.image}
            name={destination.name}
            description={destination.description}
            rating={destination.rating}
            location={destination.location}
          />
        ))}
      </div>
    </div>
  );
};

// 6. Footer 컴포넌트
const Footer = ({ copyright }) => {
  return (
    <footer className="bg-blue-600 text-white text-center py-6 mt-8">
      <div className="container mx-auto px-4">
        <p>{copyright}</p>
      </div>
    </footer>
  );
};

// 메인 App 컴포넌트
const App = () => {
  // 샘플 데이터
  const navLinks = [
    { text: "홈", url: "#" },
    { text: "여행지", url: "#" },
    { text: "패키지", url: "#" },
    { text: "갤러리", url: "#" },
    { text: "문의", url: "#" },
  ];

  const destinationsData = [
    {
      image: "/api/placeholder/400/300",
      name: "서울",
      description: "역사와 현대가 공존하는 대한민국의 수도",
      rating: 4.8,
      location: "경기도 북부"
    },
    {
      image: "/api/placeholder/400/300",
      name: "제주도",
      description: "아름다운 자연 경관과 독특한 문화가 있는 섬",
      rating: 4.9,
      location: "제주특별자치도"
    },
    {
      image: "/api/placeholder/400/300",
      name: "부산",
      description: "해변과 항구로 유명한 대한민국 제2의 도시",
      rating: 4.6,
      location: "경상남도 동남부"
    },
    {
      image: "/api/placeholder/400/300",
      name: "경주",
      description: "신라 왕국의 고대 수도로 역사적인 유적지가 많은 도시",
      rating: 4.7,
      location: "경상북도 남동부"
    },
    {
      image: "/api/placeholder/400/300",
      name: "전주",
      description: "한옥마을과 맛있는 음식으로 유명한 전통 도시",
      rating: 4.5,
      location: "전라북도"
    },
    {
      image: "/api/placeholder/400/300",
      name: "강릉",
      description: "아름다운 해변과 커피 거리로 유명한 동해안 도시",
      rating: 4.4,
      location: "강원도 동부"
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header 
        title="한국 여행 가이드" 
        subtitle="대한민국의 아름다운 명소를 발견하세요" 
      />
      <Navigation links={navLinks} />
      <Hero 
        heading="한국의 아름다움을 경험하세요" 
        content="전통과 현대가 조화롭게 어우러진 대한민국의 다양한 매력을 탐험해보세요. 역사적인 궁궐부터 현대적인 도시 풍경, 그리고 평화로운 시골 마을까지, 잊지 못할 추억을 만들어 드립니다." 
      />
      <Destinations destinations={destinationsData} />
      <Footer copyright="© 2025 한국 여행 가이드. All rights reserved." />
    </div>
  );
};

export default App;
