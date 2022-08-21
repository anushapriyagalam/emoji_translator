import "./styles.css";
import { useState } from "react";

export default function App() {
  const emojiDictionary = {
    "😀": "Grinning Face",
    "😁": "Beaming Face",
    "😆": "Squinting Face",
    "😂": "Face with Tears of Joy",
    "🤣": "Rolling on the Floor Laughing",
    "🥲": "Smiling Face with Tear",
    "😊": "Smiling Face",
    "😇": "Smiling Face with Halo",
    "😉": "Winking Face",
    "😍": "Smiling Face with HeartEyes",
    "😗": "Kissing Face",
    "😋": "Face Savoring Food",
    "😛": "Face with Tongue",
    "🤪": "Zany Face",
    "🤨": "Face with Raised Eyebrow",
    "🧐": "Face with Monocle",
    "🤓": "Nerd Face",
    "🥸": "Disguised Face",
    "🤩": "Star Struck",
    "🥳": "Partying Face",
    "😏": "Smirking Face",
    "😒": "Unamused Face",
    "😞": "Disappointed Face",
    "😔": "Pensive Face",
    "😟": "Worried Face",
    "😕": "Confused Face",
    "🙁": "Frowning Face",
    "😣": "Persevering Face",
    "😖": "Confounded Face",
    "😫": "Tired Face",
    "😩": "Weary Face",
    "🥺": "Pleading Face",
    "😭": "Crying Face",
    "😤": "Face with Steam From Nose",
    "😠": "Angry Face",
    "😡": "Enraged Face",
    "🤯": "Exploding Head",
    "😳": "Flushed Face",
    "🥶": "Cold Face",
    "😱": "Face Screaming in Fear",
    "😨": "Fearful Face",
    "😰": "Anxious Face with Sweat",
    "😥": "Sad Face",
    "😓": "Downcast Face",
    "🤔": "Thinking Face",
    "🤫": "Shushing Face",
    "😐": "Neutral Face",
    "😬": "Grimacing Face",
    "😑": "Expressionless Face",
    "😯": "Hushed Face",
    "🥱": "Yawning Face",
    "😴": "Sleeping Face",
    "😵": "Face with Crossed Out Eyes",
    "🤤": "Drooling Face",
    "🥴": "Woozy Face",
    "🤮": "Vomiting Face",
    "🤧": "Sneezing Face",
    "🤒": "Face with Thermometer",
    "🤕": "Face with Head Bandage",
    "😈": "Smiling Face with Horns",
    "👿": "Angry Face with Horns"
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
      <h1 style={{ color: "" }}>Emoji Translator</h1>
      <input onChange={emojiInputHandler} />
      <h4>
        {userInput} {meaning}
      </h4>
      <h3></h3>
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
