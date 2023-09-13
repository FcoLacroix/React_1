import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyCard from './components/MyCard';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const tagColors = ['success', 'info', 'danger', 'warning'];

  return (
    <>
      <Header title="Adopta un perrito" />
      <div className="card-container"> 
      <MyCard
        image="https://images.pexels.com/photos/12050840/pexels-photo-12050840.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="Timoti"
        subtitle="Lleno de energía y listo para jugar. ¡Entrégale el amor y el calor de hogar que merece!"
        tagText="Beagle"
        tagColor={tagColors[0]}
      />
      <MyCard
        image="https://images.pexels.com/photos/16652420/pexels-photo-16652420/free-photo-of-animal-perro-mascota-mono.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="Iggy"
        subtitle="La felicidad que necesita tu hogar, juguetón y siempre cariñoso."
        tagText="Pug"
        tagColor={tagColors[1]}
      />
      <MyCard
        image="https://images.pexels.com/photos/4490129/pexels-photo-4490129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="Maxi"
        subtitle="Juguetón, amigable y feliz de compartir con niños. "
        tagText="Salchicha"
        tagColor={tagColors[2]}
      />
      <MyCard
        image="https://images.pexels.com/photos/14760165/pexels-photo-14760165.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="Buda"
        subtitle="Un compañero leal, aventurero, siempre con ánimos de salir y jugar."
        tagText="Huskly"
        tagColor={tagColors[3]}
      />
       </div>
       <Footer />
      {}
    </>
  );
}

export default App;