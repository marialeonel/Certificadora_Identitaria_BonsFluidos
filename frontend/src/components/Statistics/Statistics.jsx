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
    <div className="bg-rose-700 p-8 flex flex-col sm:flex-row gap-12 justify-center items-center text-center py-20">
      {stats.map((stat, index) => (
        <div key={index} className="text-white w-auto max-w-[350px]">
          <p className="text-5xl font-bold">{stat.value}</p>
          <p className="mt-2">{stat.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Statistics;
