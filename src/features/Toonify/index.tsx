import FileInput from '../../components/fileInput'
import ResultOutput from '../../components/ResultOutput'
import {getBase64} from "../../helpers/imageManipulation.ts";
import {generateImage, generatePrompt} from "../../service/openAiApi.ts";
import {setGeneratedImageURL, setImageUploaded} from "../../slices";
import {useAppDispatch} from "../../hooks/useStore";
import {RootState} from "../../store";
import {useSelector} from "react-redux";
import {ApiKeyInput} from "../../components/ApiKeyInput";
import {useRef} from "react";


export default function Toonify() {
    const dispatch = useAppDispatch()
    const { imageUploaded} = useSelector((state: RootState) => state.app)
    const apiKeyRef: React.Ref<any> = useRef()

    const toonify = async (fileToUse: Blob) => {
        const apiKey = apiKeyRef?.current?.value
        if (!apiKey) {
            alert('Please enter an API key')
            return
        }
        try {
            dispatch(setImageUploaded(URL.createObjectURL(fileToUse)))
            const base64Image = await getBase64(fileToUse)
            const prompt = await generatePrompt(base64Image, apiKey)
            const generatedImageURL = await generateImage(prompt, apiKey)
            dispatch(setGeneratedImageURL(generatedImageURL))
        } catch (e) {
            console.error(e)
            alert('Error uploading file' + e)
        }
    }


    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        if (!event?.target?.files) return;
        const fileToUse = event.target.files[0]
        if (!fileToUse) {
            return
        }
        await toonify(fileToUse)

    }

    const handleDrop = async (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault()
        if (!event?.dataTransfer?.files) return;
        const fileToUse = event.dataTransfer.files[0]
        if (!fileToUse) {
            return
        }
        await toonify(fileToUse)
    }


    return (
        <>
            <div className="flex flex-row">
                <FileInput onInputChange={handleFileChange} onDrop={handleDrop} imageUploaded={imageUploaded}/>
                <ResultOutput/>
            </div>
            <ApiKeyInput ref={apiKeyRef}/>
        </>
    )
}
