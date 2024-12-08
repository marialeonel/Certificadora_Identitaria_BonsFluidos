import React from "react";

function Statistics() {
  const stats = [
    { value: "+1.8bi", description: "De pessoas menstruam em todo planeta" },
    {
      value: "+4mi",
      description: "De pessoas não têm acesso a itens de cuidado menstruais",
    },
    {
      value: "713mil",
      description:
        "De pessoas que menstruam vivem sem acesso a banheiro em casa",
    },
  ];

  return (
    <div className="bg-rose-700 p-8 flex flex-col sm:flex-row justify-around items-center text-center py-32 space-y-6 sm:space-y-0">
      {stats.map((stat, index) => (
        <div key={index} className="text-white">
          <p className="text-3xl font-bold">{stat.value}</p>
          <p className="text-sm mt-2">{stat.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Statistics;
