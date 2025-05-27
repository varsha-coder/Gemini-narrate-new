"use client";
import React from "react";
import { Sparkles } from "lucide-react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Textarea } from "./ui/textarea";
import Outputsection from "./outputsection";

export default function Playgroundsection() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");

  async function getResponse() {
    const response = await axios({
      url: process.env.NEXT_PUBLIC_BACKEND_URL,
      method: "post",
      data: {
        contents: [{ parts: [{ text: inputText }] }],
      },
    });

    let ans = setOutputText(
      response["data"]["candidates"][0]["content"]["parts"][0]["text"]
    );
  }

  return (
    <div className="  text-center ">
      <AnimatePresence>
        <motion.div
          key="heading"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ delay: 0.1 }}
          className="text-white pt-20  text-6xl font-bold "
        >
          AI Assistance for your writing
        </motion.div>

        <motion.div
          key="subheading"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ delay: 0.2 }}
          className="text-white p-3 text-2xl pb-20 "
        >
          Refining your messages with ease.
        </motion.div>
      </AnimatePresence>
      <div className="flex justify-center m-3 pt-25 ">
        <Textarea
          placeholder="Ask anything.What are you stuck on?"
          value={inputText}
          onChange={(event) => {
            setInputText(event.target.value);
          }}
        ></Textarea>
      </div>
      <div>
        <button
          type="button"
          disabled={!inputText}
          className={`inline-block px-4 py-2  font-bold text-center rounded-md ${
            !inputText
              ? `bg-gray-400 cursor-not-allowed `
              : `bg-grey text-white  
            hover:bg-blue-700 transition duration-300`
          }`}
          onClick={getResponse}
        >
          <div className=" flex justify-center items-center">
            <div>Generate</div>
            <div>
              <Sparkles className="ml-1 h-5 w-5" />
            </div>
          </div>
        </button>
      </div>
      <div className="bg-black flex justify-center">
        {outputText ? (
          <Outputsection text={outputText}></Outputsection>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
