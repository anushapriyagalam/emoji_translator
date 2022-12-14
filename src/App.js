import "./styles.css";
import { useState } from "react";

export default function App() {
  const emojiDictionary = {
    "๐": "Grinning Face",
    "๐": "Beaming Face",
    "๐": "Squinting Face",
    "๐": "Face with Tears of Joy",
    "๐คฃ": "Rolling on the Floor Laughing",
    "๐ฅฒ": "Smiling Face with Tear",
    "๐": "Smiling Face",
    "๐": "Smiling Face with Halo",
    "๐": "Winking Face",
    "๐": "Smiling Face with HeartEyes",
    "๐": "Kissing Face",
    "๐": "Face Savoring Food",
    "๐": "Face with Tongue",
    "๐คช": "Zany Face",
    "๐คจ": "Face with Raised Eyebrow",
    "๐ง": "Face with Monocle",
    "๐ค": "Nerd Face",
    "๐ฅธ": "Disguised Face",
    "๐คฉ": "Star Struck",
    "๐ฅณ": "Partying Face",
    "๐": "Smirking Face",
    "๐": "Unamused Face",
    "๐": "Disappointed Face",
    "๐": "Pensive Face",
    "๐": "Worried Face",
    "๐": "Confused Face",
    "๐": "Frowning Face",
    "๐ฃ": "Persevering Face",
    "๐": "Confounded Face",
    "๐ซ": "Tired Face",
    "๐ฉ": "Weary Face",
    "๐ฅบ": "Pleading Face",
    "๐ญ": "Crying Face",
    "๐ค": "Face with Steam From Nose",
    "๐ ": "Angry Face",
    "๐ก": "Enraged Face",
    "๐คฏ": "Exploding Head",
    "๐ณ": "Flushed Face",
    "๐ฅถ": "Cold Face",
    "๐ฑ": "Face Screaming in Fear",
    "๐จ": "Fearful Face",
    "๐ฐ": "Anxious Face with Sweat",
    "๐ฅ": "Sad Face",
    "๐": "Downcast Face",
    "๐ค": "Thinking Face",
    "๐คซ": "Shushing Face",
    "๐": "Neutral Face",
    "๐ฌ": "Grimacing Face",
    "๐": "Expressionless Face",
    "๐ฏ": "Hushed Face",
    "๐ฅฑ": "Yawning Face",
    "๐ด": "Sleeping Face",
    "๐ต": "Face with Crossed Out Eyes",
    "๐คค": "Drooling Face",
    "๐ฅด": "Woozy Face",
    "๐คฎ": "Vomiting Face",
    "๐คง": "Sneezing Face",
    "๐ค": "Face with Thermometer",
    "๐ค": "Face with Head Bandage",
    "๐": "Smiling Face with Horns",
    "๐ฟ": "Angry Face with Horns"
  };
  var emojiweknown = Object.keys(emojiDictionary);
  const [userInput, setuserInput] = useState("");
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    //setuserInput(userInput);
    var meaning = emojiDictionary[userInput];
    console.log(meaning);
    if (meaning == undefined) {
      meaning = "Meaning Not Found";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1 style={{ color: "purple" }}>Emoji Translator</h1>
      <input onChange={emojiInputHandler} />
      <h4>
        {userInput} {meaning}
      </h4>
      <h3>Emoji we known</h3>
      {emojiweknown.map((emoji) => {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
