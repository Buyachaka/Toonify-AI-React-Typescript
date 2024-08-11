const FeedbackText = () => {
  return (
    <div className="md:h-96 md:w-96 h-80 w-80 flex flex-col justify-center items-center">
      <div>
        <div className="space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="fill-[#7D7D7E] inline-block animate-spin"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q17 0 28.5 11.5T520-840q0 17-11.5 28.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-17 11.5-28.5T840-520q17 0 28.5 11.5T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="fill-[#7D7D7E] inline-block"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
          </svg>
          <span>Generating image</span>
        </div>
      </div>
    </div>
  )
}

export default FeedbackText
