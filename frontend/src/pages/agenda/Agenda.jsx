import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import PostPreview from "../../components/PostPreview/PostPreview";

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
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow bg-gray-50 p-6">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Eventos
        </h1>

        <p className="text-lg text-center text-gray-600">
          Agenda de eventos do projeto Bons Fluidos
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
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
