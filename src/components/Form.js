import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Form() {
  // destructure and consume only the data, state or functions that I need from the component
  const { language, setLanguage, english, french } = useLanguage();

  const [nameOne, setNameOne] = useState("");
  const [nameTwo, setNameTwo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const { greeting, instruction, select, firstName, lastName, button } =
    language === "english" ? english : french;

  return (
    <>
      <h1>{greeting} 😃!</h1>
      <h2>
        {select} <span onClick={() => setLanguage("french")}>FR</span> |
        <span onClick={() => setLanguage("english")}>EN</span>
      </h2>
      <p>{instruction}</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={firstName}
          value={nameOne}
          onChange={(e) => setNameOne(e.target.value)}
        />
        <input
          type="text"
          placeholder={lastName}
          value={nameTwo}
          onChange={(e) => setNameTwo(e.target.value)}
        />
        <button type="submit">{button}</button>
      </form>
    </>
  );
}
