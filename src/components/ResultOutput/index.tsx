import { useAppSelector } from '../../hooks/useStore'

export default function ResultOutput() {
  const generatedImageURL = useAppSelector(
    (state) => state.app.generatedImageURL,
  )

  return (
    <>
      <div className="ml-10 bg-[#363636] md:h-96 md:w-96 h-80 w-80 rounded-xl text-[#F0F0F0]">
        {!generatedImageURL ? (
          <div className="flex justify-center items-center h-full">
            Result will be displayed here
          </div>
        ) : (
          <>
            <img
              src={generatedImageURL}
              className="md:max-w-96 md:max-h-96 max-w-80 max-h-80 rounded-xl"
            />
          </>
        )}
      </div>
    </>
  )
}
