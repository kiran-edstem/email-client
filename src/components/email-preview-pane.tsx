
import { Email } from '@/app/data';
import { MdAttachment } from "react-icons/md";
import { IoSend } from "react-icons/io5";
import Link from 'next/link';
import { FaReply } from "react-icons/fa6";
import { RiShareForward2Fill } from "react-icons/ri";
import { FaArchive } from "react-icons/fa";
interface EmailPreviewPaneProps {
    email: Email,
    expanded?: boolean
}

export default function EmailPreviewPane({ email, expanded = false }: EmailPreviewPaneProps) {
    return (
        <div className="bg-slate-100 col-span-2 p-3 rounded relative h-[95vh]">
            {
                !expanded ? <button className='border border-blue-500 bg-blue-200 px-4 py-1 rounded absolute top-5 right-4'>
                    <Link href={`/email/${email.id}`}>
                        View
                    </Link>
                </button> : <div className=' absolute top-5 right-8 flex justify-start gap-8'>
                    <button>
                        <FaReply size={25} />
                    </button>
                    <button>
                        <RiShareForward2Fill size={25} />
                    </button>
                    <button>
                        <FaArchive size={25} />
                    </button>
                </div>
            }
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
            <div className='flex flex-wrap justify-start'>
                {
                    email.attachments.map((item) => {
                        return (
                            <div key={item.id} className='flex justify-start items-center gap-2 border border-blue-400 rounded px-3 py-2'>
                                <MdAttachment />
                                <span >
                                    {item.name}
                                </span>
                            </div>

                        )
                    })
                }
            </div>
            <div className='absolute bottom-3 left-2 right-2'>
                <div className='flex justify-start gap-3 items-center'>
                    <h2>Reply to : </h2>
                    <span className='text-sm text-gray-500'>{email.from.email}</span>
                </div>
                <textarea className='w-full border border-gray-500 p-2' placeholder='Send your reply ....' />
            </div>
            <div className='absolute bottom-10 right-4 z-20'>
                <IoSend size={20} />
            </div>
        </div>
    )
}