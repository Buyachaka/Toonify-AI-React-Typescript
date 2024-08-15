import FileInput from '../../components/fileInput'
import ResultOutput from '../../components/ResultOutput'
import {getBase64} from "../../helpers/imageManipulation.ts";
import {generateImage, generatePrompt} from "../../service/openAiApi.ts";
import {setGeneratedImageURL, setImageUploaded, setIsGenerating} from "../../slices";
import {useAppDispatch} from "../../hooks/useStore";
import {RootState} from "../../store";
import {useSelector} from "react-redux";
import {ApiKeyInput} from "../../components/ApiKeyInput";
import {useRef, useState} from "react";
import {ActionButton} from "../../components/ActionButton";


export default function Toonify() {
    const dispatch = useAppDispatch()
    const {imageUploaded, generatedImageURL} = useSelector((state: RootState) => state.app)
    const [imageToTransform, setImageToTransform] = useState<Blob | null>(null)
    const apiKeyRef: React.Ref<any> = useRef()

    const toonify = async () => {
        dispatch(setGeneratedImageURL(''))
        const apiKey = apiKeyRef?.current?.value
        if (!apiKey) {
            alert('Please enter an API key')
            return
        }
        dispatch(setIsGenerating(true))
        try {
            const base64Image = await getBase64(imageToTransform as Blob)
            const prompt = await generatePrompt(base64Image, apiKey)
            const generatedImageURL = await generateImage(prompt, apiKey)
            dispatch(setGeneratedImageURL(generatedImageURL))
        } catch (e) {
            console.error(e)
            alert('Error uploading file' + e)
        }
        finally {
            setIsGenerating(false)
        }
    }


    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        if (!event?.target?.files) return;
        const fileToUse = event.target.files[0]
        if (!fileToUse) {
            return
        }
        setImageToTransform(fileToUse)
        dispatch(setImageUploaded(URL.createObjectURL(fileToUse)))

    }

    const handleDrop = async (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault()
        if (!event?.dataTransfer?.files) return;
        const fileToUse = event.dataTransfer.files[0]
        if (!fileToUse) {
            return
        }
        setImageToTransform(fileToUse)
        dispatch(setImageUploaded(URL.createObjectURL(fileToUse)))
    }


    return (
        <>
            <div className="flex flex-col md:flex-row">
                {
                    !generatedImageURL ?
                        <FileInput onInputChange={handleFileChange} onDrop={handleDrop}
                                   imageUploaded={imageUploaded}/> :
                        <ResultOutput/>

                }
            </div>

            <ActionButton onClick={() => toonify()} disabled={false} loading={false}>Toonify Me!</ActionButton>
            <ApiKeyInput ref={apiKeyRef}/>
        </>
    )
}
