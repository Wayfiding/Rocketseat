import { useState } from 'react'
import { CloseButton } from '../CloseButton'

import bugImageUrl from '../../assets/bug.svg'
import ideiaImageUrl from '../../assets/idea.svg'
import thoughtImageUrl from '../../assets/thought.svg'
import { FeedBackTypeStep } from './steps/FeedBackTypeStep'
import { FeedBackContentStep } from './steps/FeedBackContentStep'
import { FeedBackSuccessStep } from './steps/FeedBackSuccessStep'


export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um inseto'
        }
    },
    IDEIA: {
        title: 'Ideia',
        image: {
            source: ideiaImageUrl,
            alt: 'Imagem de uma lâmpada'
        }
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: thoughtImageUrl,
            alt: 'Imagem de uma nuvem de pensamento'
        }
    },
}


export type FeedBackType = keyof typeof feedbackTypes;

export function WidgetForm() {

    const [feedBackType, setFeedBackType] = useState<FeedBackType | null>(null)
    const [feedBackSent, setfeedBackSent] = useState(false)
    function handleRestartFeedback() {
        setfeedBackSent(false);
        setFeedBackType(null);

    }


    return (

        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto" >

            {feedBackSent ? (
                <FeedBackSuccessStep onFeedbackRestartRequested={handleRestartFeedback}/>
            ) : (
                <>
                    {!feedBackType ? (<FeedBackTypeStep onFeedBackTypeChanged={setFeedBackType} />) : (

                        <FeedBackContentStep
                            FeedBackType={feedBackType}
                            onFeedbackRestartRequested={handleRestartFeedback}
                            onFeedBackSent={() => setfeedBackSent(true)}
                        />
                    )}
                </>
            )}

            <footer className="text-xs text-neutral-400">
                Feito com ♥ pela <a className="underline underline-offset-2" href="https://rocketseat.com.br">Rocketseat </a>
            </footer>
        </div>
    )
}