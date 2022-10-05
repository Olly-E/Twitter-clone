import { EmojiHappyIcon, PhotographIcon, XIcon } from "@heroicons/react/outline";
import {useSession, signOut} from 'next-auth/react';
import { useRef, useState } from "react";
import {db, storage} from '../firebase';
import {getDownloadURL, ref, uploadString} from 'firebase/storage';
import {addDoc, collection, doc, serverTimestamp, updateDoc} from 'firebase/firestore';


export default function Input() {
    const {data: session} = useSession() ;
    const [input, setInput] = useState('');
    const [selectedFile, setSelectedFile] = useState(null)
    const filePickerRef = useRef(null);
    const [loading, setLoading] = useState(false)
    
    const sendPost = async () => {
        if (loading) return;
        setLoading(true);
        const docRef =  await addDoc(collection(db, "posts"), {
            id: session.user.uid,
            text: input,
            userImg: session.user.image,
            timestamp: serverTimestamp(),
            name: session.user.name,
            username: session.user.username,
        }) //posts is the name of the collection

        const imageRef = ref(storage, `posts/${docRef.id}/image`)
        if(selectedFile) {
            await uploadString(imageRef, selectedFile, 'data_url').then(async () => {
                const downloadURL = await getDownloadURL(imageRef);
                await updateDoc(doc(db, 'posts', docRef.id),  {
                    image: downloadURL
                })
            })
        }

        setInput('');
        setSelectedFile(null);
        setLoading(false);
    }

    const addImageToPost = (e) => {
        const reader = new FileReader();
        if(e.target.files[0]){
            reader.readAsDataURL(e.target.files[0])
        }
        reader.onload = (readerEvent) => {
            setSelectedFile(readerEvent.target.result)
        }
    }

  return (
    <>
        g
    </>
  )
}
