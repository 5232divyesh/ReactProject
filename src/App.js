// import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import Content from './Component/Content';
import Footer from './Component/Footer';
import First from "./image/1.jpg"

function App() {
  return (
    <div className="App">
      <Header />
      <Content 
        src={First}
        Name = " iPhone 13 Pro"
        Description = "The iPhone 13 Pro features a 6.1-inch Super Retina XDR display, an A15 Bionic chip, and a triple-camera system with 12MP Ultra Wide, Wide, and Telephoto cameras. It offers up to 1TB of storage and supports 5G connectivity."
        Price = "$999"
      />
      <Content 
        src={First}
        Name = " iPhone 13 Pro"
        Description = "The iPhone 13 Pro features a 6.1-inch Super Retina XDR display, an A15 Bionic chip, and a triple-camera system with 12MP Ultra Wide, Wide, and Telephoto cameras. It offers up to 1TB of storage and supports 5G connectivity."
        Price = "$999"
      />
      <Content 
        src={First}
        Name = " iPhone 13 Pro"
        Description = "The iPhone 13 Pro features a 6.1-inch Super Retina XDR display, an A15 Bionic chip, and a triple-camera system with 12MP Ultra Wide, Wide, and Telephoto cameras. It offers up to 1TB of storage and supports 5G connectivity."
        Price = "$999"
      />
      <Content 
        src={First}
        Name = " iPhone 13 Pro"
        Description = "The iPhone 13 Pro features a 6.1-inch Super Retina XDR display, an A15 Bionic chip, and a triple-camera system with 12MP Ultra Wide, Wide, and Telephoto cameras. It offers up to 1TB of storage and supports 5G connectivity."
        Price = "$999"
      />
      <Content 
        src={First}
        Name = " iPhone 13 Pro"
        Description = "The iPhone 13 Pro features a 6.1-inch Super Retina XDR display, an A15 Bionic chip, and a triple-camera system with 12MP Ultra Wide, Wide, and Telephoto cameras. It offers up to 1TB of storage and supports 5G connectivity."
        Price = "$999"
      />
      <Footer />
    </div>
  );
}

export default App;
