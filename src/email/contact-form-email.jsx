import React from "react";

export default function ContactFormEmail({ message, senderEmail }) {
  return (
    <body className="bg-gray-100">
      <div className="font-sans p-8 max-w-screen-md mx-auto bg-white rounded-md shadow-md mt-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-500">¡Alejo, tienes una nueva consulta!</h2>
        <p className="text-lg mb-6">"{message}"</p>
        <p className="text-base mb-2">Has recibido un nuevo mensaje de: {senderEmail}</p>
        <p className="text-base">Gracias por estar atento</p>
        <p className="text-lg font-semibold">😁</p>
      </div>
    </body>
  );
}
