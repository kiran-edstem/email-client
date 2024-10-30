import RichTextEditor from "@/components/text-editor";

export default function ComposeEmail() {
    return <div className='p-4'>
        <h2 className="text-xl my-2">Compose your email here</h2>
        <RichTextEditor />
    </div>
}