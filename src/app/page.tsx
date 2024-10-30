'use client'
import { useState } from "react";
import { EmailData, emailData } from "./data";

import FolderNavigation from "@/components/folder-navigation";
import EmailList from "@/components/email-list";
import EmailPreviewPane from "@/components/email-preview-pane";

export default function Home() {
  const [emailList, setEmailList] = useState<EmailData>(emailData)
  const [chosenEmail, setChosenEmail] = useState(0);
  const handleSelect = (index: number) => {
    setChosenEmail(index);
  }
  return (
    <div className="grid grid-cols-4 gap-1  h-[95vh] p-2">
      <FolderNavigation
        folders={emailList.folders}
        labels={emailList.labels}
      />
      <EmailList emails={emailList.emails} handleEmailSelect={handleSelect} />
      <EmailPreviewPane email={emailList.emails[chosenEmail]} />
    </div >
  );
}
