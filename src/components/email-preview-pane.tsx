
import { Email } from '@/app/data';
import { MdAttachment } from "react-icons/md";
import { IoSend } from "react-icons/io5";

interface EmailPreviewPaneProps {
    email: Email
}
export default function EmailPreviewPane({ email }: EmailPreviewPaneProps) {
    return (
        <div className="bg-slate-100 col-span-2 p-3 rounded relative">
            <div className="flex justify-start items-center gap-6">
                <h3>{email.from.name}</h3>
                <h2 className="text-gray-400 text-sm">
                    {email.from.email}
                </h2>
            </div>
            <div>
                <p>{email.subject}</p>
            </div>
            <hr className="my-3" />
            <div className="h-64">
                <div dangerouslySetInnerHTML={{ __html: email.content.html }} >
                </div>
                <div>
                    {
                        email.content.text
                    }
                </div>
            </div>
            <div>
                {
                    email.attachments.map((item) => {
                        return (
                            <div key={item.id} className='flex justify-start items-center gap-2 '>
                                <MdAttachment />
                                <span >
                                    {item.name}
                                </span>
                            </div>

                        )
                    })
                }
            </div>
            <textarea className='absolute bottom-5 left-2 right-2 border border-gray-500 p-2' />
            <div className='absolute bottom-8 right-4 z-20'>
                <IoSend size={30} />
            </div>
        </div>
    )
}