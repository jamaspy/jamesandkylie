import React from 'react'
import { useConfetti } from './ConfettiContext'
import Confetti from 'react-confetti'

export const ConfettiContainer = () => {
    const { confettiIsVisible, hideConfetti } = useConfetti()
    return confettiIsVisible ? (
        <div>
            <Confetti
                run={confettiIsVisible}
                width={typeof window !== 'undefined' ? window.innerWidth : undefined}
                height={typeof window !== 'undefined' ? window?.innerHeight : undefined}
                // colors={['#facf5f', '#42deb4', '#8c10fc']}
                recycle={false}
                onConfettiComplete={hideConfetti}
            />
        </div>
    ) : null
}
