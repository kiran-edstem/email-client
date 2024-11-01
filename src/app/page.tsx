'use client'
import { useState } from "react";
import { Email, EmailData, emailData } from "./data";

import FolderNavigation from "@/components/folder-navigation";
import EmailList from "@/components/email-list";
import EmailPreviewPane from "@/components/email-preview-pane";
import Header from "@/components/header";

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

export default function Home() {
  const [emailList, setEmailList] = useState<EmailData>(emailData)
  const [chosenEmail, setChosenEmail] = useState(0);
  const handleSelect = (index: number) => {
    setChosenEmail(index);
  }

  const handleEmailDrop = (droppedEmail: Email) => {
    const emailIndex = emailList.emails.findIndex(email => email.id === droppedEmail.id);
    if (emailIndex !== -1) {
      setChosenEmail(emailIndex);
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <section>
        <Header />
        <div className="grid grid-cols-4 gap-1  h-[95vh] p-2">
          <FolderNavigation
            folders={emailList.folders}
            labels={emailList.labels}
          />
          <EmailList
            emails={emailList.emails}
            handleEmailSelect={handleSelect}
          />
          <EmailPreviewPane
            email={emailList.emails[chosenEmail]}
            onEmailDrop={handleEmailDrop}
          />
        </div >
      </section>
    </DndProvider>
  );
}
