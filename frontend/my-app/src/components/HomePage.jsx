import React, { useState } from 'react';
import '../index.css'; // Import the external CSS file
import EventCategory from '../components/eventcategories'; // Import the EventCategory component
import Prices from '../components/Prices'; // Import the Prices component
import LoginPage from "../components/loginpage";
import Features from "../components/Features"; // Import the Features component
import Blog from "../components/blog"; // Import the Blog component
import AboutUs from "../components/aboutus"; // Import the AboutUs component

const HomePage = () => {
  const [showEventCategory, setShowEventCategory] = useState(false); // State to control visibility of EventCategory component
  const [showPrices, setShowPrices] = useState(false); // State to control visibility of Prices component
  const [currentPage, setCurrentPage] = useState('home'); // State to track the current page
  const [selectedLanguage, setSelectedLanguage] = useState('en'); // State to store the selected language
  const [showBlog, setShowBlog] = useState(false); // State to control visibility of Blog component
  const [showAboutUs, setShowAboutUs] = useState(false); // State to control visibility of AboutUs component

  const handleNavigation = (page) => {
    setCurrentPage(page); // Update the current page based on the button clicked
    setShowEventCategory(page === 'eventCategories'); // Show EventCategory component if page is 'eventCategories'
    setShowPrices(false); // Hide Prices component
    setShowBlog(page === 'blog'); // Show Blog component if page is 'blog'
    setShowAboutUs(page === 'about'); // Show AboutUs component if page is 'about'
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language); // Update the selected language
  };

  return (
    <div className="home-page">
      {/* Navigation bar */}
      <nav className="navbar">
        <div className="container">
          <h1 className="logo"></h1>
          <ul className="nav-links">
            <li><button onClick={() => handleNavigation('home')}>Home</button></li>
            <li><button onClick={() => handleNavigation('eventCategories')}>Event Categories</button></li>
            <li><button onClick={() => handleNavigation('prices')}>Prices</button></li>
            <li><button onClick={() => handleNavigation('about')}>About Us</button></li>
            <li><button onClick={() => handleNavigation('success')}>Success Stories</button></li>
            <li><button onClick={() => handleNavigation('addEvent')}>Add Your Event</button></li>
            <li><button onClick={() => handleNavigation('features')}>Features</button></li>
            <li><button onClick={() => handleNavigation('blog')}>Blog</button></li>
            {/* Add more navigation links as needed */}
            <li><button onClick={() => handleNavigation('login')}>Login</button></li> {/* New login button */}
          </ul>
          {/* Language selector */}
          <div className="language-selector">
            <select value={selectedLanguage} onChange={(e) => handleLanguageChange(e.target.value)}>
              <option value="en">English</option>
              <option value="fr">French</option>
              <option value="ar">Arabic</option>
            </select>
          </div>
        </div>
      </nav>
      {/* Main content */}
      <div className="main-content">
        {/* Conditional rendering of components */}
        {currentPage === 'home' && (
          <div>
            {/* Render the main content of the homepage */}
            {/* Header section */}
            <header className="header">
              <div className="header-content">
                <h1>{selectedLanguage === 'en' ? 'Welcome to Our Event Management Company' : 
                     selectedLanguage === 'fr' ? 'Bienvenue dans notre société de gestion d\'événements' : 
                     'مرحبًا بك في شركة إدارة الأحداث الخاصة بنا'}</h1>
                <p>{selectedLanguage === 'en' ? 'Discover unforgettable events tailored just for you.' : 
                   selectedLanguage === 'fr' ? 'Découvrez des événements inoubliables adaptés à vos besoins.' : 
                   'اكتشف الأحداث التي لا تُنسى مُصممة خصيصًا لك.'}</p>
              </div>
            </header>
            {/* Description section */}
            <section className="description-section">
              <div className="container">
                <h2>{selectedLanguage === 'en' ? 'Plan Your Next Event With Us' : 
                     selectedLanguage === 'fr' ? 'Planifiez votre prochain événement avec nous' : 
                     'خطط لحدثك القادم معنا'}</h2>
                <p>{selectedLanguage === 'en' ? 'At Event Management, we specialize in creating memorable experiences for all occasions. Whether you\'re hosting a corporate conference, a wedding, or a private party, we have the expertise and resources to bring your vision to life. Our dedicated team will handle every aspect of your event, from planning and coordination to execution, ensuring that every detail is perfect. Let us help you make your next event truly unforgettable.' : 
                   selectedLanguage === 'fr' ? 'Chez Event Management, nous sommes spécialisés dans la création d\'expériences mémorables pour toutes les occasions. Que vous organisiez une conférence d\'entreprise, un mariage ou une fête privée, nous avons l\'expertise et les ressources nécessaires pour donner vie à votre vision. Notre équipe dévouée prendra en charge tous les aspects de votre événement, de la planification et de la coordination à l\'exécution, en veillant à ce que chaque détail soit parfait. Laissez-nous vous aider à rendre votre prochain événement vraiment inoubliable.' : 
                   'في إدارة الأحداث ، نختص في خلق تجارب لا تُنسى لجميع المناسبات. سواء كنت تنظم مؤتمرًا تجاريًا أو حفل زفاف أو حفلة خاصة ، لدينا الخبرة والموارد اللازمة لتحقيق رؤيتك. ستتولى فريقنا المخصص كل جانب من جوانب حدثك ، من التخطيط والتنسيق إلى التنفيذ ، مما يضمن أن كل التفاصيل مثالية. دعنا نساعدك في جعل حدثك القادم لا يُنسى حقًا.'}</p>
              </div>
            </section>
            {/* Event boxes section */}
            <section className="event-boxes-container">
              {/* Event Box 1 */}
              <div className="event-box">
                <div className="event-image event1"></div>
                <div className="event-info">
                  <h3>{selectedLanguage === 'en' ? 'Tomorrowland Belgium' : 
                       selectedLanguage === 'fr' ? 'Tomorrowland Belgique' : 
                       'تومورولاند بلجيكا'}</h3>
                  <p>{selectedLanguage === 'en' ? 'Tomorrowland is a large-scale annual electronic dance music festival held in Boom, Belgium.' : 
                     selectedLanguage === 'fr' ? 'Tomorrowland est un festival de musique électronique annuel de grande envergure qui se tient à Boom, en Belgique.' : 
                     'تومورولاند هو مهرجان موسيقى الرقص الإلكترونية السنوي الكبير الذي يُقام في بوم ، بلجيكا.'}</p>
                </div>
              </div>
              {/* Event Box 2 */}
              <div className="event-box">
                <div className="event-image event2"></div>
                <div className="event-info">
                  <h3>{selectedLanguage === 'en' ? 'Cannes Film Festival' : 
                       selectedLanguage === 'fr' ? 'Festival de Cannes' : 
                       'مهرجان كان السينمائي'}</h3>
                  <p>{selectedLanguage === 'en' ? 'The Cannes Film Festival, until 2002 called the International Film Festival and known in English as the Cannes Film Festival, is an annual film festival held in Cannes, France.' : 
                     selectedLanguage === 'fr' ? 'Le Festival de Cannes, jusqu\'en 2002 appelé Festival international du film et connu en anglais sous le nom de Festival de Cannes, est un festival de cinéma annuel qui se tient à Cannes, en France.' : 
                     'مهرجان كان للأفلام ، حتى عام 2002 يُطلق عليه اسم مهرجان الفيلم الدولي ويعرف باللغة الإنجليزية باسم مهرجان كان السينمائي ، هو مهرجان سينمائي سنوي يُعقد في مدينة كان بفرنسا.'}</p>
                </div>
              </div>
              {/* Event Box 3 */}
              <div className="event-box">
                <div className="event-image event3"></div>
                <div className="event-info">
                  <h3>{selectedLanguage === 'en' ? 'Sundance Film Festival' : 
                       selectedLanguage === 'fr' ? 'Festival du film de Sundance' : 
                       'مهرجان ساندانس السينمائي'}</h3>
                  <p>{selectedLanguage === 'en' ? 'The Sundance Film Festival is an annual film festival organized by the Sundance Institute. It takes place each January in Park City, Utah, Salt Lake City, and at the Sundance Resort, and is the largest independent film festival in the United States.' : 
                     selectedLanguage === 'fr' ? 'Le Festival du film de Sundance est un festival de cinéma annuel organisé par l\'Institut Sundance. Il se déroule chaque janvier à Park City, Utah, Salt Lake City et au Sundance Resort, et est le plus grand festival de cinéma indépendant aux États-Unis.' : 
                     'مهرجان ساندانس السينمائي هو مهرجان سينمائي سنوي يُنظمه معهد ساندانس. يقام كل شهر يناير في مدينة بارك سيتي بولاية يوتاه ، وسولت ليك سيتي ، وفي منتجع ساندانس ، وهو أكبر مهرجان سينمائي مستقل في الولايات المتحدة.'}</p>
                </div>
              </div>
              {/* Add more event boxes as needed */}
            </section>
          </div>
        )}
        {/* Render the Prices component if current page is 'prices' */}
        {currentPage === 'prices' && <Prices />}
        {/* Render the LoginPage component if current page is 'login' */}
        {currentPage === 'login' && <LoginPage />}
        {/* Render the Features component if current page is 'features' */}
        {currentPage === 'features' && <Features />}
        {/* Render the EventCategory component if current page is 'eventCategories' */}
        {showEventCategory && <EventCategory />}
        {/* Render the Blog component if current page is 'blog' */}
        {showBlog && <Blog />}
        {/* Render the AboutUs component if current page is 'about' */}
        {showAboutUs && <AboutUs />}
      </div>
    </div>
  );
};

export default HomePage;
