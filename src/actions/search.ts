import { redirect } from "next/navigation";

export default function search(formData: FormData) {
    const searchValue = formData.get('search')
    console.log(searchValue);
    redirect(`/?search=${searchValue}`)
}