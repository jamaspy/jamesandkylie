import {
  CheckBadgeIcon,
  EnvelopeOpenIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/solid";
import React, { useEffect } from "react";
import Button from "../Button";

const WorkSection = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [name, setName] = React.useState("");
  const [isSending, setIsSending] = React.useState(false);
  const [emailSent, setEmailSent] = React.useState(false);
  useEffect(() => {
    if (email.length > 0) {
      setIsOpen(true);
    }
    if (email.length === 0) {
      setIsOpen(false);
    }
  }, [email]);

  const isDisabled = email.length === 0 || message.length === 0;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    const res = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        name,
        message,
      }),
    });
    const data = await res.json();
    console.log("THIS IS ", data);
    if (data.status === "Email Sent") {
      setEmailSent(true);
      setIsSending(false);
      setEmail("");
      setMessage("");
      setName("");
    }
  };

  return (
    <div className="border rounded-lg overflow-hidden flex flex-col p-4 w-full mb-4 bg-white">
      <div className="flex flex-row mb-8 items-center">
        <EnvelopeOpenIcon className="h-6 w-6 text-slate-400 mr-4" />
        <h3 className="text-xl">Contact Us</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          placeholder="Your Email"
          className="focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2 focus:ring-offset-sky-300 border rounded-lg p-2 mb-4 w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {isOpen && (
          <>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2 focus:ring-offset-sky-300 border rounded-lg p-2 mb-4 w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              className="focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2 focus:ring-offset-sky-300 border rounded-lg p-2 mb-4 w-full"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </>
        )}
        <Button
          type="submit"
          className={`transition-all ease-in-out duration-200 ${
            isDisabled
              ? "cursor-not-allowed"
              : "cursor-pointer hover:bg-sky-600"
          } ${isSending ? "cursor-not-allowed bg-yellow-600" : ""} ${
            emailSent ? "bg-green-600" : ""
          }`}
          disabled={isDisabled || isSending}
        >
          {emailSent ? (
            <CheckBadgeIcon className="h-6 w-6 text-white mr-2 " />
          ) : (
            <PaperAirplaneIcon className="h-6 w-6 text-white mr-2 " />
          )}
          {isSending ? "Sending..." : emailSent ? "Sent!" : "Send"}
        </Button>
      </form>
    </div>
  );
};

export default WorkSection;
