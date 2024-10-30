import { emailData } from "@/app/data";
import EmailPreviewPane from "@/components/email-preview-pane";

interface ViewEmialByIdParams {
    params: Promise<{ emailid: string }>
}


export default async function ViewEmailById({ params }: ViewEmialByIdParams) {
    const { emailid } = await params;
    const selectedEmail = emailData?.emails?.filter((item) => item.id === emailid);
    return (
        <EmailPreviewPane email={selectedEmail[0]} expanded />
    )
}