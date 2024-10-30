import { Folders, Labels } from "@/app/data"
import { ReactElement } from "react";
import { MdWork } from "react-icons/md";
import { HiMiniInboxArrowDown } from "react-icons/hi2";
import { MdOutlineOutbox } from "react-icons/md";
import { MdOutlineDrafts } from "react-icons/md";
interface FolderNavigationProps {
    folders: Folders[],
    labels: Labels[]
}

function getIcon(label: string): ReactElement {
    switch (label.toLowerCase()) {
        case 'work':
            return <MdWork />
        case 'work':
            return <HiMiniInboxArrowDown />
        case 'sent':
            return <MdOutlineOutbox />
        case 'drafts':
            return <MdOutlineDrafts />
        default:
            return <HiMiniInboxArrowDown />
    }

}
export default function FolderNavigation({ folders, labels }: FolderNavigationProps) {

    return <div className="bg-slate-100 col-span-1 p-2 rounded">
        <h3>
            Folders
        </h3>
        <div>
            {
                folders.map((item: Folders) => {
                    return (
                        <div key={item.id}
                            className="py-2 px-3 flex justify-between "
                        >
                            <span className="flex justify-between items-center gap-2">
                                {
                                    getIcon(item.name)
                                }
                                {
                                    item.name
                                }
                            </span>
                            <span>{item.total}</span>
                        </div>
                    )
                })
            }
        </div>
        <h3 className="mt-4">
            Labels
        </h3>
        <div>
            {
                labels.map((item: Labels) => {
                    return (
                        <div key={item.id}
                            className="py-2 px-3 flex justify-start items-center gap-2"
                        >
                            {
                                getIcon(item.name)
                            }
                            {
                                item.name
                            }
                        </div>
                    )
                })
            }
        </div>
    </div>
}