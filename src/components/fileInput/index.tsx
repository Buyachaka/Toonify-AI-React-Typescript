import React, {RefObject, useRef} from 'react'
import { type ChangeEvent } from 'react';
interface FileInputProps {
    onInputChange: (event: ChangeEvent<HTMLInputElement>) => void
    imageUploaded: string,
    onDrop: React.DragEventHandler<HTMLDivElement>
}

export default function FileInput({ onInputChange, imageUploaded, onDrop }: FileInputProps) {
  const uploadFile: RefObject<HTMLInputElement> = useRef(null)

  const handleUploadClick = () => {
    uploadFile?.current?.click()
  }


  return (
    <div
      className="flex bg-gray-500 justify-center items-center flex-col gap-4 border-[#454545] border-4 border-dashed ml-10  md:h-96 md:w-96 h-80 w-80 rounded-xl"
      onDrop={onDrop}
      onDragOver={(event) => event.preventDefault()}
    >
      {!imageUploaded ? (
        <>
          <svg
            height="24"
            viewBox="0 -960 960 960"
            width="24"
            className="fill-white w-10 h-10"
          >
            <path d="M440-200h80v-167l64 64 56-57-160-160-160 160 57 56 63-63v167ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z" />
          </svg>
          <div>
            <span className="text-[#F0F0F0]">Drop your file here or </span>
            <button onClick={handleUploadClick}>browse</button>
          </div>
        </>
      ) : (
        <img className="h-full w-full" src={imageUploaded}></img>
      )}
      <input
        ref={uploadFile}
        type="file"
        className="hidden"
        onChange={onInputChange}
      />
    </div>
  )
}
