import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import PostPreview from "../../components/PostPreview/PostPreview";
import { useState, useEffect } from 'react'
import axiosService from '../../services/AxiosService'

const Agenda = () => {
  const [events, setEvents] = useState([])

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axiosService.get('/posts/all-events')
        setEvents(response.data.posts)
      } catch (error) {
        console.error('Erro ao buscar os eventos:', error)
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="flex flex-col min-h-screen mb-[260px]">
      <Header />
      <main className="flex-grow">
        <div className="bg-logo-color p-32">
          <h1 className="text-4xl font-bold text-center mb-3 text-white">
            EVENTOS
          </h1>
          <p className="text-xl text-center text-white">
            Agenda de eventos do projeto Bons Fluidos
          </p>
        </div>
        <div className="flex flex-row flex-wrap justify-center gap-10 p-20">
          {events.slice().reverse().map((event) => (
            <PostPreview key={event.id} post={event} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Agenda;
