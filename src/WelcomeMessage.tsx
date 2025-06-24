import React from 'react';

// Definicja interfejsu dla propsów komponentu WelcomeMessage.
// Określa, jakie właściwości (propsy) komponent może przyjmować i jakiego są typu.
interface WelcomeMessageProps {
  name: string; // Właściwość 'name' musi być typu string.
}

// Definicja komponentu funkcyjnego WelcomeMessage.
// Ten komponent jest zdefiniowany w tym samym pliku, co główny komponent App.
// Używamy React.FC (Functional Component) i przekazujemy mu nasz interfejs propsów.
const WelcomeMessage: React.FC<WelcomeMessageProps> = ({ name }) => {
  return (
    <div className="p-6 bg-blue-100 rounded-lg shadow-md max-w-sm mx-auto my-8">
      {/* Użycie klas Tailwind CSS do stylizacji */}
      <h2 className="text-2xl font-semibold text-blue-800 mb-2">Witaj, {name}!</h2>
      <p className="text-blue-700">To jest Twój pierwszy komponent React w TypeScript.</p>
      <p className="text-sm text-gray-600 mt-4">Możesz go edytować i zobaczyć zmiany na żywo.</p>
    </div>
  );
};
export default WelcomeMessage;