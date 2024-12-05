import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import PostPreview from "../../components/PostPreview/PostPreview";
import CloseButton from "../../components/CloseButton/CloseButton";

const Agenda = () => {
  const events = [
    {
      id: 1,
      title: "Workshop de Identidade",
      createdAt: "2024-12-10",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Palestra: Autenticidade e Fluidez",
      createdAt: "2024-12-15",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Palestra: Autenticidade e Fluidez",
      createdAt: "2024-12-15",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Palestra: Autenticidade e Fluidez",
      createdAt: "2024-12-15",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Palestra: Autenticidade e Fluidez",
      createdAt: "2024-12-15",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Palestra: Autenticidade e Fluidez",
      createdAt: "2024-12-15",
      imageUrl: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <div className="bg-logo-color p-20">
          <h1 className="text-4xl font-bold text-center mb-3 text-white">
            EVENTOS
          </h1>
          <p className="text-xl text-center text-white">
            Agenda de eventos do projeto Bons Fluidos
          </p>
        </div>
        <div className="flex flex-row flex-wrap justify-center gap-10 p-20">
          {events.map((event) => (
            <PostPreview key={event.id} post={event} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Agenda;
