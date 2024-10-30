import { Email } from "@/app/data";
import { MdAttachment } from "react-icons/md";
import { MdLabelOutline } from "react-icons/md";
import { MdFolder } from "react-icons/md";

interface EmailListProps {
    emails: Email[]
    handleEmailSelect: (index: number) => void
}
export default function EmailList({ emails, handleEmailSelect }: EmailListProps) {
    return <div className="bg-slate-100 col-span-1 p-2 rounded h-[95vh] overflow-y-scroll">
        <div className="flex justify-start items-center gap-3">
            <h3 className="text-xl">Mail Inbox</h3>
            <h2 className="text-gray-400 text-lg pt-1">{emails.length} messages</h2>
        </div>
        {
            emails.map((item: Email, index: number) => {
                return (
                    <div className={`border border-gray-500 rounded my-2 cursor-pointer ${item.isRead ? "bg-white" : "bg-blue-50"}`}
                        key={item.id}
                        onClick={() => handleEmailSelect(index)}
                    >
                        <div className="px-3 py-1">
                            <h3>{item.from.name}</h3>
                            <p className="text-sm text-gray-400">
                                {item.subject}
                            </p>
                        </div>
                        <div className="px-5 flex justify-between">
                            <span className="text-gray-400 flex justify-start gap-1 items-center">
                                <MdAttachment />
                                {item?.attachments?.length}
                            </span>
                            {
                                item.labels.map((label) => {
                                    return <span key={label} className="text-gray-400 capitalize flex justify-start gap-1 items-center">
                                        <MdLabelOutline />
                                        {label}
                                    </span>
                                })
                            }
                            <span className="text-gray-400 capitalize flex justify-start gap-1 items-center">
                                <MdFolder />
                                {item.folder}
                            </span>
                        </div>
                    </div>

                )
            })
        }
    </div>
}