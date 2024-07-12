import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Draggable from "react-draggable";
import { toPng } from "html-to-image";
import HeadingGame from "./HeadingGame";

const MemeGenerator = () => {
  const [texts, setTexts] = useState([]); // Initialize as an empty array
  const [image, setImage] = useState(null);
  const [templates, setTemplates] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [selectedTextIndex, setSelectedTextIndex] = useState(null); // State to track selected textarea
  const memeRef = useRef(null);

  useEffect(() => {
    axios
      .get("https://api.imgflip.com/get_memes")
      .then((response) => {
        if (response.data.success) {
          setTemplates(response.data.data.memes);
        }
      })
      .catch((error) => console.error("Error fetching meme templates:", error));
  }, []);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
      setSelectedTemplate(null);
      setTexts([]); // Clear texts when a new image is uploaded
    };
    reader.readAsDataURL(file);
  };

  const handleDownload = () => {
    if (memeRef.current === null) {
      return;
    }
    document
      .querySelectorAll(".delete-btn")
      .forEach((btn) => btn.classList.add("hidden"));
    toPng(memeRef.current)
      .then((dataUrl) => {
        document
          .querySelectorAll(".delete-btn")
          .forEach((btn) => btn.classList.remove("hidden"));

        const link = document.createElement("a");
        link.download = "meme.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.error("Failed to create image", err);
        document
          .querySelectorAll(".delete-btn")
          .forEach((btn) => btn.classList.remove("hidden"));
      });
  };

  const handleAddText = () => {
    setTexts([
      ...texts,
      { text: "", x: 50, y: 50, font: "Arial", color: "#ffffff", size: "16px" },
    ]);
  };

  const handleTextChange = (index, newText) => {
    const newTexts = texts.map((t, i) =>
      i === index ? { ...t, text: newText } : t
    );
    setTexts(newTexts);
  };

  const handleDragStop = (index, e, data) => {
    const newTexts = texts.map((t, i) =>
      i === index ? { ...t, x: data.x, y: data.y } : t
    );
    setTexts(newTexts);
  };

  const handleDeleteText = (index) => {
    const newTexts = texts.filter((_, i) => i !== index);
    setTexts(newTexts);
  };

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
    setImage(null);
    setTexts([]); // Clear texts when a new template is selected
  };

  const handleFontChange = (index, newFont) => {
    const newTexts = texts.map((t, i) =>
      i === index ? { ...t, font: newFont } : t
    );
    setTexts(newTexts);
  };

  const handleColorChange = (index, newColor) => {
    const newTexts = texts.map((t, i) =>
      i === index ? { ...t, color: newColor } : t
    );
    setTexts(newTexts);
  };

  const handleSizeChange = (index, newSize) => {
    const newTexts = texts.map((t, i) =>
      i === index ? { ...t, size: newSize } : t
    );
    setTexts(newTexts);
  };

  return (
    <>
      <div
        className="fixed top-0 left-0 w-full h-screen bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://wallpapers.com/images/hd/meme-faces-black-and-white-25itfr6sfshhawly.jpg')",
          opacity: 0.75,
          zIndex: -1,
        }}
      ></div>
      <div
        className="flex flex-col items-center"
        style={{ textAlign: "center", padding: "20px" }}
      >
        <HeadingGame />
        <div className="flex justify-between items-center w-3/5 m-8">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="btn rounded-bl-xl rounded-tr-xl bg-black text-white font-irish h-1/5"
          />
          <div>
            <button
              onClick={handleDownload}
              className="btn rounded-bl-xl rounded-tr-xl bg-black text-white font-irish w-48 py-0.5 "
            >
              Download Meme
            </button>
          </div>
          <div>
            <button
              onClick={handleAddText}
              className="btn rounded-bl-xl rounded-tr-xl bg-black text-white font-irish w-36 py-0.5"
            >
              Add Text
            </button>
          </div>
        </div>
        <div
          ref={memeRef}
          style={{
            position: "relative",
            display: "inline-block",
            textAlign: "center",
          }}
        >
          {(image || selectedTemplate) && (
            <img
              src={image || selectedTemplate.url}
              alt="Meme"
              style={{ width: "500px", height: "auto" }}
            />
          )}
          {texts.map((textObj, index) => (
            <Draggable
              key={index}
              defaultPosition={{ x: textObj.x, y: textObj.y }}
              onStop={(e, data) => handleDragStop(index, e, data)}
            >
              <div
                style={{
                  position: "absolute",
                  top: textObj.y,
                  left: textObj.x,
                  transform: "translate(-50%, -50%)",
                  cursor: "move",
                }}
                onClick={() => setSelectedTextIndex(index)} // Set selected textarea on click
              >
                <textarea
                  type="text"
                  placeholder="Text"
                  value={textObj.text}
                  onChange={(e) => handleTextChange(index, e.target.value)}
                  style={{
                    width: "250px",
                    height: "180px",
                    resize: "both", // Ensure the textarea is resizable
                    overflow: "auto", // Ensure scrollbars appear if needed
                    background: "transparent",
                    border: "none",
                    color: textObj.color,
                    fontFamily: textObj.font,
                    fontSize: textObj.size,
                    textAlign: "center",
                    fontWeight: "bold",
                    textShadow: "2px 2px 4px #000",
                  }}
                />
                {selectedTextIndex === index && ( // Show options only for selected textarea
                  <div
                    style={{ display: "flex", alignItems: "center" }}
                    className="p-2"
                  >
                    <select
                      className="delete-btn"
                      value={textObj.font}
                      onChange={(e) => handleFontChange(index, e.target.value)}
                    >
                      <option value="Arial">Arial</option>
                      <option value="Courier New">Courier New</option>
                      <option value="Georgia">Georgia</option>
                      <option value="Times New Roman">Times New Roman</option>
                      <option value="Verdana">Verdana</option>
                    </select>
                    <input
                      className="mx-2 delete-btn"
                      type="color"
                      value={textObj.color}
                      onChange={(e) => handleColorChange(index, e.target.value)}
                    />
                    <input
                      className="delete-btn"
                      type="number"
                      value={parseInt(textObj.size)}
                      onChange={(e) =>
                        handleSizeChange(index, `${e.target.value}px`)
                      }
                      style={{ width: "50px" }}
                    />
                  </div>
                )}
                <button
                  onClick={() => handleDeleteText(index)}
                  className="delete-btn"
                  style={{
                    marginLeft: "10px",
                    cursor: "pointer",
                    background: "red",
                    border: "none",
                    color: "white",
                    fontSize: "1em",
                    fontWeight: "bold",
                    padding: "5px",
                  }}
                >
                  X
                </button>
              </div>
            </Draggable>
          ))}
        </div>
        <div
          className="flex flex-col content-around "
          style={{ margin: "20px" }}
        >
          <div className="flex justify-center">
            <div className="w-fit h-fit text-center bg-gray m-6">
              <h2 className="font-irish text-3xl antialiased font-bold  underline decoration-double">
                Select a Template
              </h2>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {templates.map((template) => (
              <img
                className="border-2 border-black my-2 h-48 w-36 hover:animate-bounce active:opacity-0"
                key={template.id}
                src={template.url}
                alt={template.name}
                style={{
                  width: "150px",
                  marginRight: "20px",
                  cursor: "pointer",
                  marginLeft: "20px",
                }}
                onClick={() => handleTemplateSelect(template)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const Game = () => {
  return (
    <div>
      <MemeGenerator />
    </div>
  );
};

export default Game;
