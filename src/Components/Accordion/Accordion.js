// import { MdHeight } from "react-icons/md";

import { useState } from "react";

export default function Accordion() {
  const [faqs, setFaqs] = useState([
    {
      title: "Reward Stephen",
      text: "Hi, My name is Reward Stephen, I'm a Software developer",
    },
  ]);
  const [userName, setUserName] = useState("");
  const [description, setDescription] = useState("");

  const addAccordion = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const newFaqs = {
      title: userName,
      text: description,
    };

    if (description !== "" && userName !== "") {
      setFaqs((faqs) => [...faqs, newFaqs]);
      setUserName("");
      setDescription("");
      console.log(faqs);
    }
  };
  return (
    <>
      <section
        style={{
          gridColumn: "2 / -1",
          paddingBottom: "16px",
          lineHeight: "1.6",
        }}
      >
        <form
          style={{
            color: "#868e96",
            background: "gray",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            padding: "10px",
            alignItems: "center",
          }}
        >
          <input
            type="text"
            placeholder="Input Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            style={{
              borderRadius: "0",
              background: "white",
              width: "50%",
              height: "30px",
            }}
          />
          <input
            type="text-area"
            placeholder="input text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{
              borderRadius: "0",
              background: "white",
              width: "50%",
              height: "80px",
            }}
          />
          <div className="buttons">
            <button onClick={addAccordion}>Add New Accordion</button>
          </div>
        </form>
        <div
          style={{
            color: "#343a40",
            lineHeight: 1,
          }}
        >
          <AccordionData data={faqs} />
        </div>
      </section>
    </>
  );
}

function AccordionData({ data }) {
  const [currOpen, setcurrOpen] = useState(null);
  return (
    <div
      style={{
        width: "700px",
        margin: "100px auto",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
      }}
    >
      {data.map((el, i) => {
        return (
          <AccordionItem
            key={i}
            currOpen={currOpen}
            setIsOpen={setcurrOpen}
            index={i}
            title={el.title}
          >
            <div>...{el.text}...</div>
          </AccordionItem>
        );
      })}
    </div>
  );
}

function AccordionItem({ index, children, title, currOpen, setIsOpen }) {
  const isOpen = index === currOpen;
  return (
    <div
      onClick={() => setIsOpen(index)}
      style={{
        boxShadow: " 0 0 30px rgba(0, 0, 0, 0.1)",
        padding: "20px 24px",
        paddinRight: " 48px",
        cursor: "pointer",
        borderTop: `${isOpen ? "4px solid #087f5b" : "4px solid #fff"} `,
        borderBottom: `${isOpen ? "4px solid #087f5b" : "4px solid #fff"} `,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        columnGap: "24px",
        rowGap: "32px",
        alignItems: "center",
      }}
    >
      <section
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          alignItems: "center",
        }}
      >
        <p
          style={{
            fontSize: "24px",
            fontWeight: 500,
            color: `${isOpen ? "#087f5b" : " #ced4da"}`,
          }}
        >
          {index < 9 ? "0" + (index + 1) : index + 1}
        </p>
        <p style={isOpen ? { color: "#087f5b" } : {}}>{title}</p>
        <p style={isOpen ? { color: "#087f5b" } : {}}>{isOpen ? "-" : "+"}</p>
      </section>
      {isOpen && (
        <section
          style={{ width: "100%", textAlign: "center", fontSize: "16px" }}
        >
          <p>{children}</p>
        </section>
      )}
    </div>
  );
}
